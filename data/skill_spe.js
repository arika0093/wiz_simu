// 使い方
// ex1) 10%ASエンハ
// proc: [ss_enhance(0.1)],
// ex2) 50%全体自傷して100%エンハ
// proc: [damage_ally_all(0.5), ss_enhance(1)]
// -----------------------------------
// 攻撃系
// -----------------------------------
// 敵にSSダメージ
function ss_damage(fld, r, atr, atkn, own, tg) {
	var enemy = GetNowBattleEnemys(tg);
	var now = fld.Allys.Now[own];
	var rnd = damage_rand();
	attack_enemy(enemy, now, atr, r, atkn, [atr],
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

// -----------------------------------
// 味方サポート系
// -----------------------------------
// 全体エンハ
function ss_enhance_all(p, t) {
	return function (fld, n) {
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
						f.Allys.Now[tg].ss_enhance = p;
					}
					else if (v == -1) {
						f.Allys.Now[tg].ss_enhance = 0;
					}
				},
			});
		}
		fld.log_push("味方全体攻撃力Up(" + (p*100) + "%, " + t + "t)");
		return true;
	};
}

// 単体エンハ
function ss_enhance_own(p, t) {
	return function (fld, n) {
		var now = fld.Allys.Now[n];
		now.turn_effect.push({
			desc: "攻撃力アップ",
			type: "ss_enhance",
			isdual: false,
			turn: t,
			lim_turn: t,
			effect: function (f, v, tg) {
				if (v == 1) {
					f.Allys.Now[tg].ss_enhance = p;
				}
				else if (v == -1) {
					f.Allys.Now[tg].ss_enhance = 0;
				}
			},
		});
		fld.log_push("Unit[" + (n + 1) + "]: 攻撃力Up(" + (p * 100) + "%, " + t + "t)");
		return true;
	}
}

// 全体ステアップ
function ss_statusup_all(hu, atku, t) {
	return function (fld, n) {
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
						nowtg.maxhp += hu;
						nowtg.nowhp += hu;
						nowtg.atk += atku;
					}
					else if (v == -1) {
						nowtg.maxhp -= hu;
						nowtg.nowhp = Math.min(f.Allys.Now[tg].nowhp, f.Allys.Now[tg].maxhp);
						nowtg.atk -= atku;
					}
				},
			});
		}
		fld.log_push("味方全体ステータスUp(HP:" + hu + ", ATK: " + atku +
			(t != -1 ? (", " + t + "t") : "") + ")");
		return true;
	};
}

// 単純回復
function ss_heal(p) {
	return function (fld, n) {
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			if (now.nowhp > 0) {
				now.nowhp = Math.min(now.nowhp + (now.maxhp * p), now.maxhp);
			}
		}
		fld.log_push("味方全体HP回復(" + (p * 100) + "%)");
		return true;
	};
}

// -----------------------------------
// その他補助系
// -----------------------------------
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
		if (Field.Status.chain_status >= 0) {
			fld.Status.chain += p;
			fld.log_push("パネル付与効果: " + dsc);
		}
	});
}

// -----------------------------------
// デメリット系
// -----------------------------------
// 自分に割合pのダメージを与える
function consume_own(p) {
	return function (fld, n) {
		var now = fld.Allys.Now[n];
		var dmg = Math.floor(p * now.maxhp);
		fld.log_push("Unit[" + (n + 1) + "]: 自傷(" + (p * 100) + "%)");
		damage_ally(dmg, n);
		return true;
	};
}

// 味方全体に割合pのダメージを与える
function consume_all(p) {
	return function (fld, n) {
		var ct = 0;
		fld.log_push("全体自傷(" + (p * 100) + "%)");
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			var dmg = Math.floor(p * now.maxhp);
			if (now.nowhp > 0) {
				damage_ally(dmg, i);
				ct++;
			}
		}
		return ct;
	};
}
