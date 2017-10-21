// -----------------------------------------
// ターゲッティング関連の処理を行うjs
// -----------------------------------------
// 攻撃順序を自動で指定する
// obj_tg: 味方データ、各敵への効果値などが格納されたobject
function auto_attack_order(fld, enemys, attr, own_index, obj_tg) {
	// 挑発使用中の敵がいるか取得
	var t_rst = getTauntingEnemy(fld, enemys);
	if(t_rst != -1){
		return t_rst;
	}
	// パニシャ時のランダムターゲット
	var pt_rst = getRandomTargetingWithPanicshout(fld, enemys, own_index);
	if(pt_rst != -1){
		return pt_rst;
	}
	// 凶暴化時のランダムターゲット
	var bt_rst = getRandomTargetingWithBersek(fld, enemys, own_index);
	if(bt_rst != -1){
		return bt_rst;
	}
	// 手動ターゲッティングを取得
	var mt_rst = getManualTargeting(fld, enemys, attr, own_index);
	if(mt_rst != -1){
		return mt_rst;
	}
	// 自動ターゲッティング
	return getAutoTargeting(fld, enemys, attr, own_index, obj_tg);
}

// 挑発使用中の敵indexを取得
function getTauntingEnemy(fld, enemys){
	var taunt_n = enemys.indexOf($.grep(enemys, function(e){
		return $.grep(e.turn_effect, function(te){
				return te.is_taunt;
			}).length > 0;
	})[0]);
	if(taunt_n >= 0){
		return taunt_n;
	}
	return -1;
}

// 凶暴化時のランダムターゲット
function getRandomTargetingWithBersek(fld, enemys, own_index){
	var now = fld.Allys.Now[own_index];
	var is_rndberserk = $.grep(now.turn_effect, function (e) {
		return e.panic_target && e.isberserk;
	}).length > 0;
	if(is_rndberserk){
		return Math.floor(dmg_generate_rand(fld, 0, 3)) % 3;
	} else {
		return -1;
	}
}

// パニシャ時のランダムターゲット
function getRandomTargetingWithPanicshout(fld, enemys, own_index){
	var alives = [];
	var now = fld.Allys.Now[own_index];
	var is_rndtarget = $.grep(now.turn_effect, function (e) {
		return e.panic_target;
	}).length > 0;
	if(is_rndtarget){
		$.each(enemys, function(i, e){
			if(e.flags.isAliveWhenAnswer > 0){
				alives.push(e.flags.isAliveWhenAnswer - 1);
			}
		});
		var tmp = Math.floor(dmg_generate_rand(fld, 0, alives.length)) % alives.length;
		tg = alives[tmp];
		return tg;
	} else {
		return -1;
	}
}

// 手動ターゲッティングを取得
function getManualTargeting(fld, enemys, attr, own_index){
	var fst_attr = fld.Allys.Deck[own_index].attr[0];
	var now = fld.Allys.Now[own_index];
	var tg = Number(attr == fst_attr ? now.target[0] : now.target[1]);
	for (var i = tg; i > 0; i--) {
		if (enemys[i]) { break; }
		else { tg--; }
	}
	if (tg != -1){
		var sumcon = sumContractDamages(fld, enemys[tg]);
		if(enemys[tg] && enemys[tg].nowhp > sumcon) {
			return tg;
		}
	}
	return -1;
}

// 自動ターゲッティング時のソート処理
function getAutoTargeting(fld, enemys, attr, own_index, obj_tg){
	var atg_list = [
		getOverKillCheck,
		getAttrMgnBestCheck,
		getAttrMgnBetterCheck,
		getEnemyWaitTurnCheck,
		getEnemyLowerHPCheck,
		getEnemyLeftPriorityCheck
	];
	// 敵リストから死亡した敵を抜いてコピーを生成する
	var e_copy = $.grep(enemys, function(e){
		var contdmg = sumContractDamages(fld, e);
		return (e.nowhp - contdmg) > 0;
	});
	// 各処理を順番に実行する
	$.each(atg_list, function(i,e){
		if(e_copy.length <= 1){
			return;
		}
		e_copy = e(fld, e_copy, attr, own_index, obj_tg);
	});
	var l = e_copy.length;
	if(l >= 2){
		// 最終候補が複数: その中からランダム
		var tg = Math.floor(dmg_generate_rand(fld, 0, l)) % l;
		return enemys.indexOf(e_copy[tg]);
	} else if(l <= 0){
		// 最終候補がない: 全ての敵からランダム
		var l = enemys.length;
		var tg = Math.floor(dmg_generate_rand(fld, 0, l)) % l;
		return tg;
	} else {
		// 最終候補が1つ: それを返す
		return enemys.indexOf(e_copy[0]);
	}
}

// -----------------------------------
// ワンパン判定
function getOverKillCheck(fld, enemys, attr, own_index, obj_tg){
	var matched = $.grep(enemys, function(e){
		// ワンパン判定確認
		if(obj_tg){
			var idx = enemys.indexOf(e);
			var as_i = obj_tg.as_pos[idx];
			var as = obj_tg.as_list[as_i];
			var rate = obj_tg.as_rate[as_i];
			var sumcon = sumContractDamages(fld, e);
			var dmg = calculate_damage(fld, e, obj_tg.now, attr, rate, as.atkn, obj_tg.panel, obj_tg.chain, -1, own_index, idx, false, 1, true).damage;
			return (e.nowhp - sumcon - dmg) <= 0;
		}
		return false;
	});
	if(matched.length > 0){
		return matched;
	}
	return enemys;
}

// 属性有利判定
function getAttrMgnBestCheck(fld, enemys, attr, own_index, obj_tg){
	var matched = $.grep(enemys, function(e){
		var mgn = attr_magnification(attr, e.attr);
		return (mgn >= 1.5);
	});
	if(matched.length > 0){
		return matched;
	}
	return enemys;
}

// 属性不利判定
function getAttrMgnBetterCheck(fld, enemys, attr, own_index, obj_tg){
	var matched = $.grep(enemys, function(e){
		var mgn = attr_magnification(attr, e.attr);
		return (mgn >= 1);
	});
	if(matched.length > 0){
		return matched;
	}
	return enemys;
}

// 待機ターン判定
function getEnemyWaitTurnCheck(fld, enemys, attr, own_index, obj_tg){
	var lowest_turn = Math.min.apply(null, $.map(enemys, function(e){
		return (e.move ? e.move.turn : 999);
	}));
	var matched = $.grep(enemys, function(e){
		return (e.move && e.move.turn == lowest_turn);
	});
	if(matched.length > 0){
		return matched;
	}
	return enemys;
}

// 低HP判定
function getEnemyLowerHPCheck(fld, enemys, attr, own_index, obj_tg){
	var lowest_hp = Math.min.apply(null, $.map(enemys, function(e){
		return e.nowhp;
	}));
	var matched = $.grep(enemys, function(e){
		return (e.nowhp == lowest_hp);
	});
	if(matched.length > 0){
		return matched;
	}
	return enemys;
}

// 左側優先
function getEnemyLeftPriorityCheck(fld, enemys, attr, own_index, obj_tg){
	return [enemys[0]];
}
