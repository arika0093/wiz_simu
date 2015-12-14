// 使い方
// ex1) 10%ASエンハ
// proc: [ss_enhance(0.1)],
// ex2) 50%全体自傷して100%エンハ
// proc: [damage_ally_all(0.5), ss_enhance(1)]
// -----------------------------------
// 攻撃系
// -----------------------------------

// -----------------------------------
// 味方サポート系
// -----------------------------------
// 単純エンハ
function ss_enhance(p) {
	return function (fld, n) {
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			now.ss_enhance = (now.ss_enhance ? now.ss_enhance : 0) + p;
		}
		return true;
	};
}

// 単純回復
function ss_heal(p) {
	return function (fld, n) {
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			now.nowhp = Math.min(now.nowhp + (now.maxhp * p), now.maxhp);
		}
		return true;
	};
}

// -----------------------------------
// 補助系
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
function damage_own(p) {
	return function (fld, n) {
		var now = fld.Allys.Now[n];
		var dmg = Math.floor(p * now.maxhp);
		now.nowhp = Math.max(now.nowhp - dmg, 0);
		fld.log_push("Unit[" + (n+1) + "]: 自傷(" + (p * 100) + "%)");
		return true;
	};
}

// 味方全体に割合pのダメージを与える
function damage_ally_all(p) {
	return function (fld, n) {
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			var dmg = Math.floor(p * now.maxhp);
			now.nowhp = Math.max(now.nowhp - dmg, 0);
		}
		fld.log_push("全体自傷(" + (p * 100) + "%)");
	};
}
