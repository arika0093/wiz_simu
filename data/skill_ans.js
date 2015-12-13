// -------------------------
// スキル(AS)
// -------------------------
// 基本構造(AS)
// type: attack(攻撃), support(エンハンス), heal(回復)
// isall: [攻撃時のみ参照]true(全体), false(単体)
// atkn: [攻撃時のみ参照](攻撃回数)
// rate: 攻撃or回復倍率
// chain: ASが発動する最低チェイン数
// attr: ASが発動する対象の属性
// spec: ASが発動する対象の種族
// cond: 詳細な条件を指定する場合に使用する
//  	(field: Fieldの参照渡し, oi: 自身のindex, ei: 敵のindex)
// 以上のデータをひとまとめにしたものを1つまたは複数個返却し、
// それぞれの場合において検証、値が最も大きいものを使用する
// 値が参照出来ない場合(AS未発動/属性特攻の対象でないなど)は100%として扱う
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
			cond: function (field, oi, ei) {
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
			cond: function (field, oi, ei) {
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
			cond: function (field, oi, ei) {
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
			cond: function (field, oi, ei) {
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
			cond: function (field, oi, ei) {
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
			cond: function (field, oi, ei) {
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
			cond: function (field, oi, ei) {
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
			cond: function (field, oi, ei) {
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
			cond: function (field, oi, ei) {
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
			cond: function (field, i) {
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
			cond: function (field, i) {
				return true;
			},
		}
	];
}
