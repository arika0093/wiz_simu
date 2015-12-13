// -------------------------
// スキル(AS)
// -------------------------
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

// チェインアタッカー/一定チェインでさらにアップ
//	(rate: 割合, ch: 発動チェイン数, rate_a: 割合2, ch_a: 発動チェイン2)
function ChainAttack_plus(rate, ch, rate_a, ch_a) {
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
		},
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: rate_a,
			chain: ch_a,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: function (fld, oi, ei) {
				return true;
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
			spec: spec,
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

// -------
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

// -------
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
