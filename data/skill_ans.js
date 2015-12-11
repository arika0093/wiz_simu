// -------------------------
// スキル(AS)
// -------------------------
// 基本構造(AS)
// type: 1(攻撃), 2(エンハンス), 3(回復)
// isall: [攻撃時のみ参照]true(全体), false(単体)
// atkn: [攻撃時のみ参照](攻撃回数)
// rate: 攻撃or回復倍率
// chain: ASが発動する最低チェイン数
// attr: ASが発動する対象の属性
// spec: ASが発動する対象の種族
// 以上のデータをひとまとめにしたものを1つまたは複数個返却し、
// それぞれの場合において検証、値が最も大きいものを使用する
// 値が参照出来ない場合(AS未発動/属性特攻の対象でないなど)は100%として扱う
// -------------------------
// チェインアタッカー(rate: 割合, ch: 発動チェイン数)
function ChainAttack(rate, ch) {
	return [
		{
			type: 1,
			isall: false,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		}
	];
}

// チェイン連撃アタッカー(rate: 割合, ch: 発動チェイン数, n: 攻撃回数)
function ChainDualAttack(rate, ch, n) {
	return [
		{
			type: 1,
			isall: false,
			atkn: n,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		}
	];
}

// 属性特攻(rate: 割合, ch: 発動チェイン数, attr: 対象属性)
function ChainAttrAttack(rate, ch, attr) {
	return [
		{
			type: 1,
			isall: false,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: attr,
			spec: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		}
	];
}

// 種族特攻(rate: 割合, ch: 発動チェイン数, spec: 対象種族)
function ChainSpecAttack(rate, ch, spec) {
	return [
		{
			type: 1,
			isall: false,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: spec,
		}
	];
}

// 属性特攻連撃(rate: 割合, ch: 発動チェイン数, n: 攻撃回数, attr: 対象属性)
function ChainDualAttrAttack(rate, ch, n, attr) {
	return [
		{
			type: 1,
			isall: false,
			atkn: n,
			rate: rate,
			chain: ch,
			attr: attr,
			spec: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		}
	];
}

// チェイン全体攻撃(rate: 割合, ch: 発動チェイン数)
function ChainAllAttack(rate, ch) {
	return [
		{
			type: 1,
			isall: true,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		}
	];
}

// -------
// 回復(rate: 割合, attr: 回復する属性)
function Heal(rate, attr) {
	return [
		{
			type: 3,
			rate: rate,
			chain: 0,
			attr: attr,
			spec: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		}
	];
}
