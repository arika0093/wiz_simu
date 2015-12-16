// ------------------------------------------------------
// 基本スキル
// ------------------------------------------------------
// 通常攻撃
function Default_as() {
	return [
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: 1,
			chain: 0,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: function (fld, oi, ei) {
				return true;
			},
		}
	];
}

// 複数ASをまとめる
function multi_as(as1) {
	for (var i = 1; i < arguments.length; i++) {
		as1.concat(arguments[i]);
	}
	return as1;
}

// 条件付与
function add_cond(as, obj) {
	for (var i = 0; i < as.length; i++) {
		for (var key in obj) {
			if (obj[key]) {
				as[i][key] = obj[key];
			}
		}
	}
	return as;
}

// ------------------------------------------------------
// 基本攻撃
// ------------------------------------------------------
// チェインアタッカー(rate: 割合, ch: 発動チェイン数)
function ChainAttack(rate, ch) {
	return [
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: function (fld, oi, ei) {
				return true;
			},
		}
	];
}

// HPを消費して攻撃するチェインアタッカー
// (rate: 割合, ch: 発動チェイン数, hp: 消費HPの割合)
function ChainAttack_ConsumeHP(rate, ch, hp) {
	return [
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: function (fld, oi, ei) {
				return true;
			},
		}
	];
}

// リーダー時に発動するチェインアタッカー
// (rate: 割合, ch: 発動チェイン数)
function ChainAttack_Leader(rate, ch) {
	return [
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: function (fld, oi, ei) {
				return oi == 0;
			},
		}
	];
}

// チェイン連撃アタッカー(rate: 割合, ch: 発動チェイン数, n: 攻撃回数)
function ChainDualAttack(rate, ch, n) {
	return [
		{
			type: "attack",
			isall: false,
			atkn: n,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: function (fld, oi, ei) {
				return true;
			},
		}
	];
}

// 属性特攻(rate: 割合, ch: 発動チェイン数, attr: 対象属性)
function ChainAttrAttack(rate, ch, attr) {
	return [
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: attr,
			spec: create_specs(1),
			cond: function (fld, oi, ei) {
				return true;
			},
		}
	];
}

// 種族特攻(rate: 割合, ch: 発動チェイン数, spec: 対象種族)
function ChainSpecAttack(rate, ch, spec) {
	return [
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: specific_specs(spec),
			cond: function (fld, oi, ei) {
				return true;
			},
		}
	];
}

// 属性特攻連撃(rate: 割合, ch: 発動チェイン数, n: 攻撃回数, attr: 対象属性)
function ChainDualAttrAttack(rate, ch, n, attr) {
	return [
		{
			type: "attack",
			isall: false,
			atkn: n,
			rate: rate,
			chain: ch,
			attr: attr,
			spec: create_specs(1),
			cond: function (fld, oi, ei) {
				return true;
			},
		}
	];
}

// チェイン全体攻撃(rate: 割合, ch: 発動チェイン数)
function ChainAllAttack(rate, ch) {
	return [
		{
			type: "attack",
			isall: true,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: function (fld, oi, ei) {
				return true;
			},
		}
	];
}

// ------------------------------------------------------
// チェインエンハンス(rate: 割合, attr: 対象属性, ch: チェイン)
function ChainEnhance(rate, attr, ch) {
	return [
		{
			type: "support",
			subtype: "enhance",
			rate: rate,
			chain: ch,
			attr: attr,
			spec: create_specs(1),
			cond: function (fld, i) {
				return true;
			},
		}
	];
}

// ------------------------------------------------------
// 回復(rate: 割合, attr: 対象属性)
function Heal(rate, attr) {
	return [
		{
			type: "heal",
			rate: rate,
			chain: 0,
			attr: attr,
			spec: create_specs(1),
			cond: function (fld, i) {
				return true;
			},
		}
	];
}

// ------------------------------------------------------
// 各種条件
// ------------------------------------------------------
// リーダー時
function when_leader() {
	return function (fld, oi, ei) {
		return index == 0;
	}
}

// 全体自傷スキル
function ConsumeHP_all(hp) {
	return function (fld, oi, fst) {
		if (fst) {
			for (var i = 0; i < fld.Allys.Deck.length; i++) {
				var now = fld.Allys.Now[i];
				now.nowhp = Math.max(Math.floor(now.nowhp - (now.maxhp * hp)), 0);
			}
		}
	}
}

// 単体自傷スキル
function ConsumeHP_own(hp) {
	return function (fld, oi, fst) {
		if (fst) {
			var now = fld.Allys.Now[oi];
			now.nowhp = Math.max(Math.floor(now.nowhp - (now.maxhp * hp)), 0);
		}
	}
}
