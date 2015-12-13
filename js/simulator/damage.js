// 指定属性で相手を攻撃
//	enemy: 敵データ, now: 自身のデータ, atk_atr: 攻撃属性, as: 攻撃AS,
//	pn: 踏んだパネル, ch: チェイン数, rnd: 乱数
function as_attack_enemy(enemy, now, atk_atr, as, pn, ch, rnd) {
	var d = 0;
	// エンハ
	var as_enh = now.as_enhance !== undefined ? now.as_enhance : 0;
	var ss_enh = now.ss_enhance !== undefined ? now.ss_enhance : 0;
	// 攻撃
	d = (now.atk / 2) * (1 + ch / 100) * rnd / as.atkn;
	// AS倍率、エンハ
	d *= (as.rate + as_enh + ss_enh);
	// パネル
	d *= (pn.indexOf(atk_atr) >= 0 ? 1 : 0.5);
	// 属性考慮
	d *= attr_magnification(atk_atr, enemy.attr);
	// 切り捨て
	d = Math.floor(d);

	// HPから削る
	enemy.nowhp = Math.max(enemy.nowhp - d, 0);

	return d;
}

// 属性有利係数を返す
function attr_magnification(atk_atr, def_atr) {
	// 両方とも火水雷
	if (atk_atr <= 2 && def_atr <= 2) {
		var magn = [1, 1.5, 0.5];
		return magn[(atk_atr - def_atr + 3)%3];
	}
	// 両方とも光闇
	else if (atk_atr >= 3 && def_atr >= 3) {
		return (atk_atr != def_atr ? 1.5 : 1);
	}
	// それ以外なら1
	else {
		return 1;
	}
}