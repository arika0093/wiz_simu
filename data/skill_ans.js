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
			cond: always_true().cond,
		}
	];
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

// チェイン分散攻撃(r: 割合(1体の時), ch: 発動チェイン数)
function ChainVarianceAttack(r, ch) {
	return [
		{
			type: "attack",
			isall: true,
			atkn: 1,
			rate: r,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: function () {
				var enemys = GetNowBattleEnemys();
				var count = 0;
				for (var i = 0; i < enemys.length; i++) {
					if (enemys && enemys[i].nowhp > 0) {
						count++;
					}
				}
				this.rate = r / count;
				return true;
			},
		}
	];
}

// パネル依存攻撃(r1: 単色割合, r2: 二色割合, r3: 三色以上割合, ch: 発動チェイン数)
//   例: 3chain二色以上でダメージアップ(250%)なら ChainPanelsAttack(0, 2.5, 2.5, 3)
function ChainPanelsAttack(r1, r2, r3, ch) {
	return [
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: r1,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: function (fld, oi, ei, panels) {
				var rates = [r1, r2, r3];
				this.rate = rates[Math.min(panels.length - 1, 2)];
				return true;
			},
		}
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
			cond: function (fld, oi, ei) {
				var rates = [r1, r2, r3];
				var count = 0;
				var deck_attr = [0, 0, 0, 0, 0];
				// 属性カウント
				for (var i = 0; i < fld.Allys.Deck.length; i++) {
					var cd = fld.Allys.Deck[i];
					deck_attr[cd.attr[0]] = 1;
				}
				for (var i = 0; i < 5; i++) {
					if (deck_attr[i] > 0) { count++; }
				}
				this.rate = rates[Math.min(count, 2)];
				return true;
			},
		}
	];
}

// デッキ特定種族数依存攻撃
// (base: 種族が1体の時の割合, specs: 対象種族(例: [8,9]), ch: 発動チェイン数)
function ChainDeckSpecsAttack(base, specs, ch) {
	return [
		{
			type: "attack",
			isall: false,
			atkn: 1,
			rate: base,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: create_specs(1),
			cond: function (fld, oi, ei) {
				var rates = [r1, r2, r3];
				var count = 0;
				// 属性カウント
				for (var i = 0; i < fld.Allys.Deck.length; i++) {
					var cd = fld.Allys.Deck[i];
					for (var s = 0; s < cd.species.length; s++) {
						if (specs.indexOf(cd.species[s]) >= 0) {
							count++;
						}
					}
				}
				this.rate = base * count;
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
			cond: always_true().cond,
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
			cond: function (fld, oi, ei, panels) {
				var rates = [r1, r2, r3];
				this.rate = rates[Math.min(panels.length - 1, 2)];
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
			cond: always_true().cond,
		}
	];
}

// 種族回復(rate: 割合, attr: 対象属性, spec: 対象種族, ch: チェイン)
function SpecHeal(rate, attr, spec) {
	return [
		{
			type: "heal",
			rate: rate,
			chain: 0,
			attr: attr,
			spec: specific_specs(spec),
			cond: always_true().cond,
		}
	];
}

// パネル依存回復
// (r1: 単色割合, r2: 二色割合, r3: 三色以上割合, attr: 対象属性, ch: 発動チェイン数)
function ChainPanelsHeal(r1, r2, r3, attr) {
	return [
		{
			type: "heal",
			rate: r1,
			chain: 0,
			attr: attr,
			cond: function (fld, oi, ei, panels) {
				var rates = [r1, r2, r3];
				this.rate = rates[Math.min(panels.length - 1, 2)];
				return true;
			},
		}
	];
}
// ------------------------------------------------------
// 各種条件
// ------------------------------------------------------
// 常にtrue
function always_true() {
	return {
		cond: function () {
			return true;
		}
	}
}

// リーダー時
function when_leader() {
	return {
		cond: function (fld, oi, ei) {
			return oi == 0;
		}
	}
}

// HP一定以上
function when_hp_more(p) {
	return {
		cond: function (fld, oi, ei) {
			var now = fld.Allys.Now[i];
			return now[oi].nowhp >= now[oi].maxhp * p;
		}
	}
}
// HP一定以下
function when_hp_less(p) {
	return {
		cond: function (fld, oi, ei) {
			var now = fld.Allys.Now[i];
			return now[oi].nowhp <= now[oi].maxhp * p;
		}
	}
}
// HP一定未満
function when_hp_under(p) {
	return {
		cond: function (fld, oi, ei) {
			var now = fld.Allys.Now[i];
			return now[oi].nowhp < now[oi].maxhp * p;
		}
	}
}

// ------------------------------------------------------
// 攻撃後処理
// ------------------------------------------------------
// 全体自傷スキル
function as_consume_all(hp) {
	return {
		after: function (fld, oi, fst) {
			if (fst) {
				fld.log_push("全体自傷(" + (hp * 100) + "%)");
				for (var i = 0; i < fld.Allys.Deck.length; i++) {
					var now = fld.Allys.Now[i];
					damage_ally(Math.round(now.maxhp * hp), i);
				}
			}
		}
	}
}

// 単体自傷スキル
function as_consume_own(hp) {
	return {
		after: function (fld, oi, fst) {
			if (fst) {
				fld.log_push("Unit[" + (oi + 1) + "]: 自傷(" + (hp * 100) + "%)");
				var now = fld.Allys.Now[oi];
				damage_ally(Math.round(now.maxhp * hp), oi);
			}
		}
	}
}
