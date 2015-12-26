// ------------------------------------------------------
// 基本系
// ------------------------------------------------------
// 関数なら実行、普通の値ならそのまま返す
function ss_ratedo(r, fld, oi, ei) {
	if (r && r.caller !== undefined) {
		return r(fld, oi, ei);
	} else {
		return r;
	}
}

// ------------------------------------------------------
// 攻撃系
// ------------------------------------------------------
// 敵にSSダメージ
function ss_damage(fld, r, atr, atkn, own, tg) {
	var enemy = GetNowBattleEnemys(tg);
	var now = fld.Allys.Now[own];
	var rnd = damage_rand();
	attack_enemy(enemy, now, atr, ss_ratedo(r, fld, own, tg), atkn, [atr],
		fld.Status.chain, rnd, own, tg, true);
	// SSフラグを立てる
	enemy.flags.is_ss_attack = true;
}

// 敵全体に指定属性のダメージ
function ss_damage_all(r, attrs) {
	return function (fld, n) {
		for (var a = 0; a < attrs.length; a++) {
			var atr = attrs[a];
			for (var i = 0; i < GetNowBattleEnemys().length; i++) {
				// 攻撃
				ss_damage(fld, r, atr, 1, n, i);
			}
		}
		return true;
	};
}

// 敵単体に指定属性のダメージ
function ss_damage_s(r, attrs, atkn) {
	return function (fld, n) {
		var enemys = GetNowBattleEnemys();
		for (var an = 0; an < atkn; an++) {
			for (var a = 0; a < attrs.length; a++) {
				var atr = attrs[a];
				// 攻撃
				ss_damage(fld, r, atr, atkn, n, auto_attack_order(enemys, atr, n));
			}
		}
		return true;
	};
}

// 敵全体に割合ダメージ
function ss_ratiodamage_all(r) {
	return function (fld, n) {
		var ratio = ss_ratedo(r, fld, n);
		var enemys = GetNowBattleEnemys();
		for (var i = 0; i < enemys.length; i++) {
			var e = enemys[i];
			var dmg = Math.round(e.nowhp * ratio);
			e.nowhp = Math.max(e.nowhp - dmg, 0);
			// SSフラグを立てる
			e.flags.is_ss_attack = true;
			fld.log_push("Enemy[" + (i + 1) + "]: 割合ダメージ(" + (ratio * 100) + "%)(" + dmg + "ダメージ)");
		}
		return true;
	}
}

// 敵単体に割合ダメージ
function ss_ratiodamage_s(r) {
	return function (fld, n) {
		var ratio = ss_ratedo(r, fld, n);
		var enemys = GetNowBattleEnemys();
		var tg = auto_attack_order(enemys, -1, n);
		var e = enemys[tg];
		var dmg = Math.round(e.nowhp * ratio);
		e.nowhp = Math.max(e.nowhp - dmg, 0);
		// SSフラグを立てる
		e.flags.is_ss_attack = true;
		fld.log_push("Enemy[" + (tg + 1) + "]: 割合ダメージ(" + (ratio * 100) + "%)(" + dmg + "ダメージ)");
		return true;
	}
}

// ------------------------------------------------------
// 敵関連系
// ------------------------------------------------------
// 毒ダメージを与える
function poison(dm, t) {
	return function (fld, n) {
		var enemys = GetNowBattleEnemys();
		var dmg = ss_ratedo(dm, fld, n);
		for (var i = 0; i < enemys.length; i++) {
			(function () {
				var indx = i;
				var e = enemys[indx];
				e.turn_effect.push({
					desc: "毒(" + dm + ")",
					type: "poison",
					isdual: false,
					turn: t,
					lim_turn: t,
					effect: function () {
						e.nowhp = Math.max(e.nowhp - dmg, 0);
						fld.log_push("Enemy[" + (indx + 1) + "]: 毒(" + dmg + "ダメージ)");
					},
				});
			})();
			// SSフラグを立てる
			enemys[i].flags.is_ss_attack = true;
		}
		return true;
	}
}

// ------------------------------------------------------
// 味方サポート系
// ------------------------------------------------------
// 全体エンハ
function ss_enhance_all(p, t) {
	return function (fld, n) {
		var rate = ss_ratedo(p, fld, n);
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			now.turn_effect.push({
				desc: "攻撃力アップ",
				type: "ss_enhance",
				isdual: false,
				turn: t,
				lim_turn: t,
				effect: function (f, v, tg) {
					if (v == 1) {
						f.Allys.Now[tg].ss_enhance = rate;
					}
					else if (v == -1) {
						f.Allys.Now[tg].ss_enhance = 0;
					}
				},
			});
		}
		fld.log_push("味方全体攻撃力Up(" + (rate * 100) + "%, " + t + "t)");
		return true;
	};
}

// 単体エンハ
function ss_enhance_own(p, t) {
	return function (fld, n) {
		var rate = ss_ratedo(p, fld, n);
		var now = fld.Allys.Now[n];
		now.turn_effect.push({
			desc: "攻撃力アップ",
			type: "ss_enhance",
			isdual: false,
			turn: t,
			lim_turn: t,
			effect: function (f, v, tg) {
				if (v == 1) {
					f.Allys.Now[tg].ss_enhance = rate;
				}
				else if (v == -1) {
					f.Allys.Now[tg].ss_enhance = 0;
				}
			},
		});
		fld.log_push("Unit[" + (n + 1) + "]: 攻撃力Up(" + (rate * 100) + "%, " + t + "t)");
		return true;
	}
}

// 全体ステアップ
//   例: ss_statusup_all([500, 500], -1)
function ss_statusup_all(up_arr, t) {
	return function (fld, n) {
		var up_arrs = ss_ratedo(up_arr, fld, n);
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			now.turn_effect.push({
				desc: "ステータスアップ",
				type: "ss_statusup",
				isdual: true,
				turn: t,
				lim_turn: t,
				effect: function (f, v, tg) {
					var nowtg = f.Allys.Now[tg];
					if (v == 1) {
						nowtg.maxhp += up_arrs[0];
						nowtg.nowhp += up_arrs[0];
						nowtg.atk += up_arrs[1];
					}
					else if (v == -1) {
						nowtg.maxhp -= up_arrs[0];
						nowtg.nowhp = Math.min(f.Allys.Now[tg].nowhp, f.Allys.Now[tg].maxhp);
						nowtg.atk -= up_arrs[1];
					}
				},
			});
		}
		fld.log_push("味方全体ステータスUp(HP:" + hu + ", ATK: " + atku +
			(t != -1 ? (", " + t + "t") : "") + ")");
		return true;
	};
}

// ------------------------------------------------------
// 味方回復系
// ------------------------------------------------------
// 単純回復
function ss_heal(p) {
	return function (fld, n) {
		var rate = ss_ratedo(p, fld, n);
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			if (now.nowhp > 0) {
				now.nowhp = Math.min(now.nowhp + (now.maxhp * rate), now.maxhp);
			}
		}
		fld.log_push("味方全体HP回復(" + (rate * 100) + "%)");
		return true;
	};
}

// 蘇生
function ss_resurrection(p) {
	return function (fld, n) {
		var rate = ss_ratedo(p, fld, n);
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			if (now.nowhp <= 0) {
				now.nowhp = Math.min((now.maxhp * rate), now.maxhp);
			}
		}
		fld.log_push("味方全体蘇生(" + (rate * 100) + "%)");
		return true;
	};
}


// ------------------------------------------------------
// その他補助系
// ------------------------------------------------------
// パネル付与効果
function panel_addition(dsc, fc) {
	return function (fld, n) {
		fld.Status.panel_add.push({
			desc: dsc,
			func: fc,
		});
		return true;
	};
}

// 攻撃力アップパネル付与効果
function panel_attackup(p) {
	var dsc = "攻撃力アップ(" + (p * 100) + "%)";
	return panel_addition(dsc, function (fld) {
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			now.as_enhance = (now.as_enhance ? now.as_enhance : 0) + p;
		}
		fld.log_push("パネル付与効果: " + dsc);
	});
}

// チェインプラスパネル付与効果
function panel_chainplus(p) {
	var dsc = "チェインプラス(+" + p + ")";
	return panel_addition(dsc, function (fld) {
		if (fld.Status.chain_status >= 0) {
			fld.Status.chain += p;
			fld.log_push("パネル付与効果: " + dsc);
		}
	});
}

// ------------------------------------------------------
// 条件/効果値分岐系
// ------------------------------------------------------
// 属性特攻
function special_attr(attrs, a, b) {
	return function (fld, oi, ei) {
		var e = GetNowBattleEnemys(ei);
		return (attrs[e.attr] > 0) ? a : b;
	}
}

// 味方全体自傷して自傷した数だけ効果値を増やす
function ss_consume_all_cond(base, p) {
	return function (fld, n) {
		return base * ss_consume_all(p)(fld, n);
	}
}

// チェイン消費
function ss_chain_cost(ch, a, b) {
	return function (fld, n) {
		if (fld.Status.chain >= ch) {
			fld.Status.chain -= ch;
			fld.log_push("チェイン消費: " + ch);
			return a;
		}
		return b;
	}
}

// ------------------------------------------------------
// デメリット系
// ------------------------------------------------------
// 自分に割合pのダメージを与える
function ss_consume_own(p) {
	return function (fld, n) {
		var now = fld.Allys.Now[n];
		var dmg = Math.round(p * now.maxhp);
		fld.log_push("Unit[" + (n + 1) + "]: 自傷(" + (p * 100) + "%)");
		damage_ally(dmg, n);
		return true;
	};
}

// 味方全体に割合pのダメージを与える
function ss_consume_all(p) {
	return function (fld, n) {
		var ct = 0;
		fld.log_push("全体自傷(" + (p * 100) + "%)");
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			var dmg = Math.round(p * now.maxhp);
			if (now.nowhp > 0) {
				damage_ally(dmg, i);
				ct++;
			}
		}
		return ct;
	};
}
