// ------------------------------------------------------
// 基本スキル
// ------------------------------------------------------
// 通常攻撃
function Default_as() {
	return [
		{
			type: "attack",
			isall: false,
			isdefault: true,
			disactuate: true,
			atkn: 1,
			rate: 1,
			chain: 0,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: always_true().cond,
		}
	];
}

// 条件付与
function add_cond(as){
	for (var i = 0; i < as.length; i++) {
		for (var j = 1; j < arguments.length; j++) {
			var obj = arguments[j];
			for (var key in obj) {
				var b = as[i][key];
				var v = obj[key];
				// 型が同じなら合成処理をする
				if (b && v && typeof(b) == typeof(v)) {
					switch ( typeof(b) ){
						case "object":
							if($.isArray(b)){
								as[i][key] = b.concat(v);
							} else {
								as[i][key] = [b].concat(v);
							}
							break;
						case "string":
							as[i][key] = `${b}/${v}`;
							break;
						default:
							break;
					}
				}
				// 元のASに存在しないpropならそのまま代入
				else if(!b && v){
					as[i][key] = obj[key];
				}
			}
		}
	}
	return as;
}


// 複数ASをまとめる
// (内部用/旧関数のため使用しないでください)
function multi_as(as1) {
	for (var i = 1; i < arguments.length; i++) {
		for (var j = 0; j < arguments[i].length; j++) {
			as1.push(arguments[i][j]);
		}
	}
	return as1;
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
			cond: always_true().cond,
		}
	];
}

// HPを消費して攻撃するチェインアタッカー
// (rate: 割合, ch: 発動チェイン数, hp: 消費HPの割合)
function ChainAttack_as_consume_own(rate, ch, hp) {
	return [
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: always_true().cond,
			after: as_consume_own(hp).after,
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
			cond: when_leader().cond,
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
			cond: always_true().cond,
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
			cond: always_true().cond,
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
			cond: always_true().cond,
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
			cond: always_true().cond,
		}, {
			type: "attack",
			isall: false,
			disactuate: true,
			atkn: n,
			rate: 1,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: always_true().cond,
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
			cond: always_true().cond,
		}
	];
}

// チェイン種族特攻全体攻撃(rate: 割合, ch: 発動チェイン数)
function ChainAllSpecAttack(rate, spec, ch) {
	return [
		{
			type: "attack",
			isall: true,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: specific_specs(spec),
			cond: always_true().cond,
		}
	];
}

// チェイン分散攻撃(r: 割合(1体の時), ch: 発動チェイン数)
function ChainVarianceAttack(r, ch) {
	return [
		{
			type: "attack",
			isall: true,
			isvariance: true,
			atkn: 1,
			rate: r,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: always_true().cond,
		}
	];
}

// パネル依存攻撃(r1: 単色割合, r2: 二色割合, r3: 三色以上割合, ch: 発動チェイン数)
//   例: 3chain二色以上でダメージアップ(250%)なら ChainPanelsAttack(0, 2.5, 2.5, 3)
function ChainPanelsAttack(r1, r2, r3, ch) {
	return ChainPanelsAttrDualAttack(r1, r2, r3, [1,1,1,1,1], 1, ch);
}

// パネル依存連撃攻撃(r1: 単色割合, r2: 二色割合, r3: 三色以上割合, atkn: 攻撃回数, ch: 発動チェイン数)
function ChainPanelsDualAttack(r1, r2, r3, atkn, ch) {
	return ChainPanelsAttrDualAttack(r1, r2, r3, [1,1,1,1,1], atkn, ch);
}

// パネル依存属性特攻攻撃(r1: 単色割合, r2: 二色割合, r3: 三色以上割合, attr: 属性, ch: 発動チェイン数)
function ChainPanelsAttrAttack(r1, r2, r3, attr, ch) {
	return ChainPanelsAttrDualAttack(r1, r2, r3, attr, 1, ch);
}

// パネル依存属性特攻連撃(r1: 単色割合, r2: 二色割合, r3: 三色以上割合, attr: 属性, atkn: 攻撃回数, ch: 発動チェイン数)
function ChainPanelsAttrDualAttack(r1, r2, r3, attr, atkn, ch) {
	return [
		{
			type: "attack",
			isall: false,
			atkn: atkn,
			rate: r1,
			chain: ch,
			attr: attr,
			spec: create_specs(1),
			cond: always_true().cond,
		}, {
			type: "attack",
			isall: false,
			atkn: atkn,
			rate: r2,
			chain: ch,
			attr: attr,
			spec: create_specs(1),
			cond: as_panel_over2().cond,
		}, {
			type: "attack",
			isall: false,
			atkn: atkn,
			rate: r3,
			chain: ch,
			attr: attr,
			spec: create_specs(1),
			cond: as_panel_over3().cond,
		},
	];
}

// パネル依存種族特攻攻撃(r1: 単色割合, r2: 二色割合, r3: 三色以上割合, spec: 種族, ch: 発動チェイン数)
function ChainPanelsSpecAttack(r1, r2, r3, spec, ch) {
	return [
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: r1,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: specific_specs(spec),
			cond: always_true().cond,
		},
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: r2,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: specific_specs(spec),
			cond: as_panel_over2().cond,
		},
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: r3,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: specific_specs(spec),
			cond: as_panel_over3().cond,
		},
	];
}

// デッキ属性数依存攻撃(r1: 単色割合, r2: 二色割合, r3: 三色以上割合, ch: 発動チェイン数)
function ChainDeckAttrsAttack(r1, r2, r3, ch) {
	return [
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: r1,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: always_true().cond,
		}, {
			type: "attack",
			isall: false,
			atkn: 1,
			rate: r2,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: when_deckattr_check(2).cond,
		}, {
			type: "attack",
			isall: false,
			atkn: 1,
			rate: r3,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: when_deckattr_check(3).cond,
		}
	];
}

// デッキ特定種族数依存攻撃
// (base: 加算割合, specs: 対象種族(例: [8,9]), ch: 発動チェイン数, ubase: 種族が1体の時の割合 - 加算割合)
// (例1: 効果値 50,200,350,500,650) → ChainDeckSpecsAttack(1.5, specs, ch)
// (例2: 効果値150,300,450,600,750) → ChainDeckSpecsAttack(1.5, specs, ch, 1)
// ※互換性確保のためにubaseの定義が若干複雑です。
function ChainDeckSpecsAttack(base, specs, ch, ubase) {
	ubase = ubase || 0;
	var adf = as_deckspecs(base, specs, ubase);
	return [
		add_cond({
			type: "attack",
			isall: false,
			atkn: 1,
			rate: 1,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: always_true().cond
		}, adf)
	];
}

// 戦闘不能味方数依存攻撃
// (base: 戦闘不能味方が1体の時の割合, ch: 発動チェイン数, ubase: 誰も倒れてない時の基本倍率)
function ChainDeckDeadsAttack(base, ch, ubase) {
	ubase = ubase ? ubase : 1;
	var adf = as_deckdeads(base, ubase);
	return [
		add_cond({
			type: "attack",
			isall: false,
			atkn: 1,
			rate: 1,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: always_true().cond
		}, adf)
	];
}

// イチかバチか攻撃(最低値, 最高値, チェイン)
function ChainStakesAttack(u, t, ch) {
	var adf = as_stakeattack(u, t);
	var r = add_cond([{
		type: "attack",
		isall: false,
		atkn: 1,
		rate: 1,
		chain: ch,
		attr: [1, 1, 1, 1, 1],
		spec: create_specs(1),
		cond: always_true().cond
	}], adf)
	return r;
}

// パネル依存イチかバチか攻撃(単色最低値, 単色最高値, 二色最低値, 二色最高値, 三色以上最低値, 三色以上最高値, チェイン)
function ChainStakesAttack3(u1, t1, u2, t2, u3, t3, ch) {
	var adf1 = as_stakeattack(u1, t1);
	var adf2 = as_stakeattack(u2, t2);
	var adf3 = as_stakeattack(u3, t3);
	return [
		add_cond({
			type: "attack",
			isall: false,
			atkn: 1,
			rate: 1,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: always_true().cond
		}, adf1),
		add_cond({
			type: "attack",
			isall: false,
			atkn: 1,
			rate: 1,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: as_panel_over2().cond
		}, adf2),
		add_cond({
			type: "attack",
			isall: false,
			atkn: 1,
			rate: 1,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: as_panel_over3().cond
		}, adf3),
	];
}

// ------------------------------------------------------
// エンハンス
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
			cond: always_true().cond,
		}
	];
}

// チェインエンハンス(副属性でさらにアップ)(r1, r2: 割合, attr: 対象属性, sub: 対象副属性, ch: チェイン)
// 例: ChainEnhance_SubAttr(0.3, 0.8, [1,0,0,0,0], [0,0,1,0,0], 3)
function ChainEnhance_SubAttr(r1, r2, attr, sub, ch) {
	return [
		{
			type: "support",
			subtype: "enhance",
			rate: r1,
			chain: ch,
			attr: attr,
			spec: create_specs(1),
			cond: always_true().cond,
		}, {
			type: "support",
			subtype: "enhance",
			rate: r2,
			chain: ch,
			attr: attr,
			subattr: sub,
			spec: create_specs(1),
			cond: when_subattr_match(attr, sub).cond,
		}
	];
}

// 種族チェインエンハンス(rate: 割合, attr: 対象属性, spec: 対象種族, ch: チェイン)
function ChainSpecEnhance(rate, attr, spec, ch) {
	return [
		{
			type: "support",
			subtype: "enhance",
			rate: rate,
			chain: ch,
			attr: attr,
			spec: specific_specs(spec),
			cond: always_true().cond,
		}
	];
}

// パネル依存エンハンス
// (r1: 単色割合, r2: 二色割合, r3: 三色以上割合, attr: 対象属性, ch: 発動チェイン数)
function ChainPanelsEnhance(r1, r2, r3, attr, ch) {
	return [
		{
			type: "support",
			subtype: "enhance",
			rate: r1,
			chain: ch,
			attr: attr,
			spec: create_specs(1),
			cond: always_true().cond,
		},
		{
			type: "support",
			subtype: "enhance",
			rate: r2,
			chain: ch,
			attr: attr,
			spec: create_specs(1),
			cond: as_panel_over2().cond,
		},
		{
			type: "support",
			subtype: "enhance",
			rate: r3,
			chain: ch,
			attr: attr,
			spec: create_specs(1),
			cond: as_panel_over3().cond,
		},
	];
}


// デッキに特定属性が一定以下の時にエンハンス
// rate:	エンハンス値
// attr:	エンハンス対象属性
// c_attr:	エンハンス発動条件の属性
// c_num:	エンハンス発動条件の味方数
// ch:		発動チェイン数
function ChainEnhance_attrless(rate, attr, c_attr, c_num, ch) {
	return [{
		type: "support",
		subtype: "enhance",
		rate: rate,
		chain: ch,
		attr: attr,
		spec: create_specs(1),
		cond: when_deckattr_less(c_attr, c_num).cond,
	},];
}


// ------------------------------------------------------
// 回復
// ------------------------------------------------------
// 回復(rate: 割合, attr: 対象属性, ch: チェイン)
function Heal(rate, attr, ch) {
	chain = ch ? ch : 0;
	return [
		{
			type: "heal",
			rate: rate,
			chain: chain,
			attr: attr,
			spec: create_specs(1),
			cond: always_true().cond,
		}
	];
}

// 種族回復(rate: 割合, attr: 対象属性, spec: 対象種族, ch: チェイン)
function SpecHeal(rate, attr, spec, ch) {
	chain = ch ? ch : 0;
	return [
		{
			type: "heal",
			rate: rate,
			chain: chain,
			attr: attr,
			spec: specific_specs(spec),
			cond: always_true().cond,
		}
	];
}

// パネル依存回復
// (r1: 単色割合, r2: 二色割合, r3: 三色以上割合, attr: 対象属性, ch: 発動チェイン数)
function ChainPanelsHeal(r1, r2, r3, attr, ch) {
	chain = ch ? ch : 0;
	return [
		{
			type: "heal",
			rate: r1,
			chain: chain,
			attr: attr,
			spec: create_specs(1),
			cond: always_true().cond,
		},
		{
			type: "heal",
			rate: r2,
			chain: chain,
			attr: attr,
			spec: create_specs(1),
			cond: as_panel_over2().cond,
		},
		{
			type: "heal",
			rate: r3,
			chain: chain,
			attr: attr,
			spec: create_specs(1),
			cond: as_panel_over3().cond,
		},
	];
}


// ------------------------------------------------------
// その他
// ------------------------------------------------------
// AS軽減(rate: 割合, attr: 対象属性)
function as_guard(rate, attr, ch) {
	chain = ch ? ch : 0;
	return [
		{
			type: "as_spskill",
			subtype: "as_guard",
			skill: ss_attr_guard,
			p1: attr,
			p2: rate,
			p3: 1,
			p4: "AS",
			rate: rate,
			chain: chain,
			attr: attr,
			spec: create_specs(1),
			cond: always_true().cond,
		}
	];
}

// 左隣のASコピー
function as_copy() {
	return [
		{
			type: "as_copy",
			cond: always_true().cond,
		}
	];
}

// ------------------------------------------------------
// 各種条件(add_condで足す)
// ------------------------------------------------------
// 常にtrue
function always_true() {
	return {
		cond: [{
			param: {},
			func: "always_true",
		}]
	}
}

// パネル色が二色以上
function as_panel_over2() {
	return {
		cond: [{
			param: {},
			func: "as_panel_over2",
		}]
	}
}

// パネル色が三色以上
function as_panel_over3() {
	return {
		cond: [{
			param: {},
			func: "as_panel_over3",
		}]
	}
}

// リーダー時
function when_leader() {
	return {
		cond: [{
			param: {},
			func: "when_leader",
		}]
	}
}

// HP一定以上
function when_hp_more(p) {
	return {
		cond: [{
			param: {p},
			func: "when_hp_more",
		}]
	}
}
// HP一定以下
function when_hp_less(p) {
	return {
		cond: [{
			param: {p},
			func: "when_hp_less",
		}]
	}
}

// HP一定未満
function when_hp_under(p) {
	return {
		cond: [{
			param: {p},
			func: "when_hp_under",
		}]
	}
}

// デッキ内属性数が一定以下
function when_deckattr_check(c_num){
	return {
		cond: [{
			param: {c_num},
			func: "when_deckattr_check",
		}]
	}
}

// デッキ内指定属性数が一定以下
function when_deckattr_less(c_attr, c_num) {
	return {
		cond: [{
			param: {c_attr, c_num},
			func: "when_deckattr_less",
		}]
	}
}

// 味方種族一致
function when_spec_match(m_specs) {
	return {
		cond: [{
			param: {m_specs},
			func: "when_spec_match",
		}]
	}
}

// 味方副属性一致
function when_subattr_match(attr, sub) {
	return {
		cond: [{
			param: {attr, sub},
			func: "when_subattr_match",
		}]
	}
}

// 敵特攻対象
function when_enemyattr_match(e_attr) {
	return {
		cond: [{
			param: {e_attr},
			func: "when_subattr_match",
		}]
	}
}

// 自身が毒の時
function when_own_poison() {
	return {
		cond: [{
			param: {},
			func: "when_own_poison",
		}]
	}
}

// ------------------------------------------------------
// 条件依存効果値UP(add_condで足す)
// ------------------------------------------------------
// デッキ特定種族数依存攻撃
function as_deckspecs(base, specs, ubase){
	return {
		is_afteradd: true,
		add_f: [{
			param: {base, specs, ubase},
			func: "as_deckspecs",
		}]
	}
}

// 戦闘不能味方数依存攻撃
function as_deckdeads(base, ubase){
	return {
		is_afteradd: true,
		add_f: [{
			param: {base, ubase},
			func: "as_deckdeads",
		}]
	}
}

// 戦闘不能味方数依存攻撃
function as_stakeattack(u, t){
	return {
		is_afteradd: true,
		add_f: [{
			param: {u, t},
			func: "as_stakeattack",
		}]
	}
}

// L精霊数依存
// (rate: L精霊数による増え幅)
function as_legendnum(rate) {
	return {
		is_afteradd: true,
		add_f: [{
			param: {rate},
			func: "as_legendnum",
		}]
	}
}

// 回答時間依存
// (rate: 解答時間による増え幅)
function as_timedep(rate) {
	return {
		is_afteradd: true,
		add_f: [{
			param: {rate},
			func: "as_timedep",
		}]
	}
}

// 単色精霊数依存
// (a: 0体の時の基礎倍率, b: 一体増加ごとに増える倍率)
function as_singleattr_num(a, b) {
	return {
		is_afteradd: true,
		add_f: [{
			param: {a, b},
			func: "as_singleattr_num",
		}],
		add_atkn: [{
			param: {a, b},
			func: "as_singleattr_num",
		}]
	}
}

// チェインを消費して火力アップ
// (rate: 消費時の増え幅, red_ch: 消費チェイン)
function as_reducechain(rate, red_ch) {
	return {
		is_afteradd: true,
		add_f: [{
			param: {rate, red_ch},
			func: "as_reducechain",
		}]
	}
}

// ------------------------------------------------------
// 攻撃後処理(add_condで足す)
// ------------------------------------------------------
// HP吸収
function as_hp_absorption(r) {
	return {
		after: [{
			param: {r},
			func: "as_hp_absorption",
		}]
	}
}

// 全体自傷スキル
function as_consume_all(hp) {
	return {
		after: [{
			param: {hp},
			func: "as_consume_all",
		}]
	}
}

// 単体自傷スキル
function as_consume_own(hp) {
	return {
		after: [{
			param: {hp},
			func: "as_consume_own",
		}]
	}
}
