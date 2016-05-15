// -------------------------------
// テンプレート
function ss_template(obj) {
	var base_obj = {
		is_skill: true,
	};
	return $.extend(true, base_obj, obj);
}

function ss_condition(obj) {
	var base_obj = {
		is_cond: true,
	};
	return $.extend(true, base_obj, obj);
}

// -------------------------------
// 敵攻撃系
/**
 * 敵全体に指定属性のダメージ
 * r:		攻撃威力(ex: 1.0		-> 効果値100)
 * attrs:	攻撃属性(ex: [0,1]	-> 火,水)
 * ignore_counter: 反射無視を行うかどうか(trueで無視)
**/
function ss_damage_all(r, attrs, ignore_counter) {
	return ss_template({
		name: "ss_damage_all",
		type: "damage",
		target: "all",
		p1: r,
		p2: attrs,
		p3: ignore_counter,
	});
}

/**
 * 敵単体に指定属性のダメージ
 * r:		攻撃威力(ex: 1.0		-> 効果値100)
 * attrs:	攻撃属性(ex: [0,1]	-> 火,水)
 * atn:		攻撃回数(ex: 3		-> 3連撃)
 * ignore_counter: 反射無視を行うかどうか(trueで無視)
**/
function ss_damage_s(r, attrs, atn, ignore_counter) {
	return ss_template({
		name: "ss_damage_s",
		type: "damage",
		target: "single",
		p1: r,
		p2: attrs,
		p3: atn,
		p4: ignore_counter,
	});
}

/**
 * 敵全体に割合ダメージ
 * r: ダメージ割合(ex: 0.25 -> 25%)
**/
function ss_ratiodamage_all(r) {
	return ss_template({
		name: "ss_ratiodamage_all",
		type: "damage",
		subtype: "ratio",
		target: "all",
		p1: r,
	});
}

/**
 * 敵単体に割合ダメージ
 * r: ダメージ割合(ex: 0.25 -> 25%)
**/
function ss_ratiodamage_s(r) {
	return ss_template({
		name: "ss_ratiodamage_s",
		type: "damage",
		subtype: "ratio",
		target: "single",
		p1: r,
	});
}

/**
 * 味方全体スキルカウンター待機
 * r: 効果値
 * t: 継続ターン数
**/
function ss_skillcounter(r, t) {
	return ss_template({
		name: "ss_skillcounter",
		type: "turn_effect",
		subtype: "skill_counter",
		target: "ally",
		p1: r,
		p2: t,
	});
}

// ------------------------------------------------------
// 敵関連系
/**
 * 敵全体に毒の状態異常を付与
 * dm: ダメージ値
 * t: 継続ターン数
**/
function poison(dm, t) {
	return ss_template({
		name: "poison",
		type: "turn_effect",
		subtype: "poison",
		target: "all",
		p1: dm,
		p2: t,
	});
}

// ------------------------------------------------------
// 味方サポート系
/**
 * 味方全体に攻撃エンハンスを付与
 * p:	上昇値(ex: 0.6 -> 60%)
 * t:	継続ターン数
 * attr	付与対象の属性(ex; [1,0,0,0,0]	-> 火属性のみに付与)
**/
function ss_enhance_all(p, t, attr) {
	return ss_template({
		name: "ss_enhance_all",
		type: "turn_effect",
		subtype: "enhance",
		target: "ally",
		p1: p,
		p2: t,
		p3: attr,
	});
}

/**
 * 自身に攻撃エンハンスを付与
 * p:	上昇値(ex: 0.6 -> 60%)
 * t:	継続ターン数
**/
function ss_enhance_own(p, t, _nolog) {
	return ss_template({
		name: "ss_enhance_own",
		type: "turn_effect",
		subtype: "enhance",
		target: "own",
		p1: p,
		p2: t,
		p3: _nolog,
	});
}

/**
* ブーストエンハンス(毎ターン自傷を伴うエンハンス)を味方全体にかける
* p:	 効果値
* t:	 継続ターン数
* dmg:	 毎ターン受けるダメージの割合
* attr: 対象属性(ex. [1,0,0,0,0] -> 火属性のみ), 未指定で全属性
**/
function ss_boost_enhance_all(p, t, dmg, attr) {
	return ss_template({
		name: "ss_boost_enhance_all",
		type: "turn_effect",
		subtype: "enhance_boost",
		target: "ally",
		p1: p,
		p2: t,
		p3: dmg,
		p4: attr,
	});
}

/**
 * ブーストエンハンス(毎ターン自傷を伴うエンハンス)を自身にかける
 * p:	 効果値
 * t:	 継続ターン数
 * dmg:	 毎ターン受けるダメージの割合
**/
function ss_boost_enhance_s(p, t, dmg) {
	return ss_template({
		name: "ss_boost_enhance_s",
		type: "turn_effect",
		subtype: "enhance_boost",
		target: "own",
		p1: p,
		p2: t,
		p3: dmg,
	});
}

/**
 * 味方全体に精霊強化効果を付与し、自分は行動不能になる
 * atkup:	攻撃力上昇効果値
 * grdup:	属性軽減上昇効果値(未実装だけど今後のために指定)
 * attr:	強化属性
 * t:		効果適用ターン数
**/
function ss_reinforcement_all(atkup, grdup, attr, t) {
	return ss_template({
		name: "ss_reinforcement_all",
		type: "turn_effect",
		subtype: "reinforcement",
		target: "ally",
		p1: atkup,
		p2: grdup,
		p3: attr,
		p4: t,
	});
}

/**
 * 味方全体にステータスアップの効果を付与
 * up_arr:		上昇値(ex: [500,500] -> HP500,攻撃500UP)
 * up_limit:	上昇限界値(ex: [2000,2000] -> HP2000,攻撃2000以上は切り捨て)
 * t:			継続ターン数(ex: -1 -> 無制限)
**/
function ss_statusup_all(up_arr, up_limit, t) {
	return ss_template({
		name: "ss_statusup_all",
		type: "turn_effect",
		subtype: "statusup",
		target: "ally",
		p1: up_arr,
		p2: up_limit,
		p3: t,
	});
}

/**
 * 味方全体にダメージブロックをかける
 * d:	無効ダメージ値
 * t:	継続ターン数
**/
function ss_damageblock_all(d, t) {
	return ss_template({
		name: "ss_damageblock_all",
		type: "turn_effect",
		subtype: "damageblock",
		target: "ally",
		p1: t,
	});
}

/**
 * 味方全体に状態異常無効の効果を付与
 * t: 継続ターン数
**/
function ss_absattack_disable(t) {
	return ss_template({
		name: "ss_absattack_disable",
		type: "turn_effect",
		subtype: "state_guard",
		target: "ally",
		p1: t,
	});
}

/**
 * 味方全体にスキルブーストの効果を付与
 * f: 早めるターン数
**/
function ss_skillboost(f) {
	return ss_template({
		name: "ss_skillboost",
		type: "skillboost",
		target: "ally",
		p1: f,
	});
}

// ------------------------------------------------------
// フィールド干渉系
/**
 * 残滅SSを発動する。
 * dmg_r:	SSでのダメージ率。表記+100。
 * cont_r:	継続ダメージ率。表記+100。
 * attrs:	攻撃ダメージ属性。
**/
function ss_continue_damage(dmg_r, cont_r, attrs, turn) {
	return ss_template({
		name: "ss_continue_damage",
		type: "damage",
		subtype: "continue_damage",
		target: "all",
		p1: dmg_r + 1,
		p2: cont_r + 1,
		p3: attrs,
		p4: turn,
	});
}

/**
 * チェインを直接追加する。チェイン封印の効果を受けない。
 * ch: 追加チェイン数。
**/
function ss_addchain(ch) {
	return ss_template({
		name: "ss_addchain",
		type: "chain",
		target: "field",
		p1: ch,
	});
}

/**
 * チェイン保護する。チェイン封印を上書きする
 * t: 継続ターン。
**/
function ss_chain_protect(t) {
	return ss_template({
		name: "ss_chain_protect",
		type: "chain",
		target: "field",
		p1: t,
	});
}

// ------------------------------------------------------
// 味方回復系
/**
 * 味方全体を効果値だけ回復する。
 * p: 回復効果値(ex. 0.25 -> 25%)
**/
function ss_heal(p) {
	return ss_template({
		name: "ss_heal",
		type: "heal",
		target: "ally",
		p1: p,
	});
}

/**
 * 味方全体を固定値だけ回復する。
 * p: 回復値
**/
function ss_heal_absolute(p) {
	return ss_template({
		name: "ss_heal_absolute",
		type: "heal",
		target: "ally",
		p1: p,
	});
}

/**
 * 味方全体の状態異常を回復する。
**/
function ss_abstate_cure() {
	return ss_template({
		name: "ss_abstate_cure",
		type: "heal",
		subtype: "abstate",
		target: "ally",
	});
}

/**
 * 味方全体にリジェネの効果を付与する
 * p: 回復割合
 * t: 継続ターン数
**/
function ss_regenerate(p, t) {
	return ss_template({
		name: "ss_regenerate",
		type: "turn_effect",
		subtype: "regenerate",
		target: "ally",
		p1: p,
		p2: t,
	});
}

/**
 * 味方全体に起死回生の効果を付与する
 * r: 蘇生回復割合
 * t: 継続ターン数
**/
function ss_revival(r, t) {
	return ss_template({
		name: "ss_revival",
		type: "turn_effect",
		subtype: "revival",
		target: "ally",
		p1: r,
		p2: t,
	});
}

/**
 * 味方全体を蘇生する
 * r: 蘇生対象の属性(ex. [1,0,0,0,0] -> 火属性のみ)
 * p: 蘇生回復割合
**/
function ss_resurrection(r, p) {
	return ss_template({
		name: "ss_resurrection",
		type: "heal",
		subtype: "resurrection",
		target: "ally",
		p1: r,
		p2: p,
	});
}


// ------------------------------------------------------
// パネル付与系
/**
 * 攻撃力アップ効果をパネルに付与する
 * p: 攻撃力アップ割合
**/
function panel_attackup(p) {
	return ss_template({
		name: "panel_attackup",
		type: "panel_add",
		target: "panel",
		p1: p,
	});
}

/**
 * チェインプラス効果をパネルに付与する
 * p: 増加チェイン数
**/
function panel_chainplus(p) {
	return ss_template({
		name: "panel_chainplus",
		type: "panel_add",
		target: "panel",
		p1: p,
	});
}

/**
 * 回復付与効果をパネルに付与する
 * r: 回復割合
**/
function panel_healally(r) {
	return ss_template({
		name: "panel_healally",
		type: "panel_add",
		target: "panel",
		p1: r,
	});
}

/**
 * スキルブースト効果をパネルに付与する
 * t: ブースト数
**/
function panel_skillboost(t) {
	return ss_template({
		name: "panel_skillboost",
		type: "panel_add",
		target: "panel",
		p1: t,
	});
}

// ------------------------------------------------------
// 解除系
/**
 * 敵のスキル反射効果を無効化する
 * （スキル攻撃後に記載することで無効化される）
**/
function ss_ignore_skillcounter() {
	return ss_template({
		name: "ss_ignore_skillcounter",
		type: "break",
		target: "all",
	});
}

/**
 * 敵の物理カウンター効果を無効化する
 * target: 「"all"」と記述することで全体対象、それ以外は単体対象
**/
function ss_break_attackcounter(target) {
	var tg = (target == "all") ? "all" : "single";
	return ss_template({
		name: "ss_break_attackcounter",
		type: "break",
		target: tg,
		p1: tg,
	});
}

/**
 * 敵のスキルカウンター効果を無効化する
 * target: 「"all"」と記述することで全体対象、それ以外は単体対象
**/
function ss_break_skillcounter(target) {
	var tg = (target == "all") ? "all" : "single";
	return ss_template({
		name: "ss_break_skillcounter",
		type: "break",
		target: tg,
		p1: tg,
	});
}

/**
 * 敵のガード効果を無効化する
 * target: 「"all"」と記述することで全体対象、それ以外は単体対象
**/
function ss_break_attrguard(target) {
	var tg = (target == "all") ? "all" : "single";
	return ss_template({
		name: "ss_break_attrguard",
		type: "break",
		target: tg,
		p1: tg,
	});
}

/**
 * 敵のダメージブロック効果を無効化する
 * target: 「"all"」と記述することで全体対象、それ以外は単体対象
**/
function ss_break_dblock(target) {
	var tg = (target == "all") ? "all" : "single";
	return ss_template({
		name: "ss_break_dblock",
		type: "break",
		target: tg,
		p1: tg,
	});
}

// ------------------------------------------------------
// その他
/**
 * 前回発動したスキルをコピーする。
**/
function ss_latest_copy() {
	return ss_template({
		name: "ss_latest_copy",
		type: "skill_copy",
		is_skillcopy: true,
	});
}

// ------------------------------------------------------
// デメリット系
/**
 * 自分に割合ダメージを与える。
 * p: 与えるダメージ(ex. 0.1 -> 10%)
**/
function ss_consume_own(p) {
	return ss_template({
		name: "ss_consume_own",
		type: "demerit",
		p1: p,
	});
}

/**
 * 味方全体に割合ダメージを与える。
 * p: 与えるダメージ(ex. 0.1 -> 10%)
**/
function ss_consume_all(p) {
	return ss_template({
		name: "ss_consume_all",
		type: "demerit",
		p1: p,
	});
}

/**
 * 自身を封印状態にする
 * t: 封印ターン数
**/
function ss_allsealed_own(t) {
	return ss_template({
		name: "ss_allsealed_own",
		type: "demerit",
		p1: t,
	});
}


// ------------------------------------------------------
// 条件/効果値分岐系
/**
 * (条件系)HPが指定以上の時a,それ以外の場合bを返す。
 * cond: 条件HP(ex. 0.2 -> 20%)
 * a:	 条件を満たした時の値。
 * b:	 条件を満たさなかった時の値。
**/
function ss_hp_more(cond, a, b) {
	return ss_condition({
		name: "ss_hp_more",
		type: "own_hp",
		p1: cond,
		p2: a,
		p3: b,
	});
}

/**
 * (条件系)HPが指定以下の時a,それ以外の場合bを返す。
 * cond: 条件HP(ex. 0.2 -> 20%)
 * a:	 条件を満たした時の値。
 * b:	 条件を満たさなかった時の値。
**/
function ss_hp_less(cond, a, b) {
	return ss_condition({
		name: "ss_hp_less",
		type: "own_hp",
		p1: cond,
		p2: a,
		p3: b,
	});
}

/**
 * (条件系)HPが指定未満の時a,それ以外の場合bを返す。
 * cond: 条件HP(ex. 0.2 -> 20%)
 * a:	 条件を満たした時の値。
 * b:	 条件を満たさなかった時の値。
**/
function ss_hp_under(cond, a, b) {
	return ss_condition({
		name: "ss_hp_under",
		type: "own_hp",
		p1: cond,
		p2: a,
		p3: b,
	});
}

/**
 * (条件系)精霊がリーダーの時a,それ以外の場合bを返す。
 * a:	 条件を満たした時の値。
 * b:	 条件を満たさなかった時の値。
**/
function ss_when_leader(a, b) {
	return ss_condition({
		name: "ss_when_leader",
		type: "own_position",
		p1: a,
		p2: b,
	});
}

/**
 * (条件系)敵属性が指定属性と合致した時a,それ以外の場合bを返す。
 * attrs:	対象の敵属性。(ex. [1,0,0,0,0] -> 火属性が対象)
 * a:		条件を満たした時の値。
 * b:		条件を満たさなかった時の値。
**/
function special_attr(attrs, a, b) {
	return ss_condition({
		name: "special_attr",
		type: "enemy_attr",
		p1: attrs,
		p2: a,
		p3: b,
	});
}

/**
 * (条件系)味方全体の自傷を行い、自傷した数*基礎値の数値を返す。
 * base: 掛け算の基礎値。
 * p:	 自傷ダメージ割合。
**/
function ss_consume_all_cond(base, p) {
	return ss_condition({
		name: "ss_consume_all_cond",
		type: "consume_cond",
		p1: base,
		p2: p,
	});
}

/**
 * (条件系)自身が毒の場合a,そうでない場合bを返す。
 * a: 条件を満たした時の値。
 * b: 条件を満たさなかった時の値。
**/
function ss_is_poison_own(a, b) {
	return ss_condition({
		name: "ss_is_poison_own",
		type: "is_abstate_own",
		p1: a,
		p2: b,
	});
}

/**
 * (条件系)相手が毒の場合a,そうでない場合bを返す。
 * a: 条件を満たした時の値。
 * b: 条件を満たさなかった時の値。
**/
function ss_is_poison_enemy(a, b) {
	return ss_condition({
		name: "ss_is_poison_enemy",
		type: "is_abstate_enemy",
		p1: a,
		p2: b,
	});
}

/**
 * (条件系)チェインが一定以上の場合a,そうでない場合bを返す。
 * ch:	条件チェイン数。
 * a:	条件を満たした時の値。
 * b:	条件を満たさなかった時の値。
**/
function ss_chain_cond(ch, a, b) {
	return ss_condition({
		name: "ss_chain_cond",
		type: "chain",
		p1: ch,
		p2: a,
		p3: b,
	});
}

/**
 * (条件系)現在のチェイン数に応じて実行SSを分岐する際に使用する
 * ch:	条件チェイン
 * ss1:	条件を満たしていた場合に発動するSS
 * ss2:	条件を満たしていない場合に発動するSS
**/
function ss_chain_cond_skill(ch, ss1, ss2) {
	return ss_condition({
		name: "ss_chain_cond",
		type: "chain",
		p1: ch,
		p2: ss1,
		p3: ss2,
		is_delay: true,
	});
}

/**
 * (条件系)チェインが消費できる場合強制消費してa,そうでない場合bを返す。
 * ch:	消費するチェイン数。
 * a:	条件を満たした時の値。
 * b:	条件を満たさなかった時の値。
**/
function ss_chain_cost(ch, a, b) {
	return ss_condition({
		name: "ss_chain_cost",
		type: "chain",
		p1: ch,
		p2: a,
		p3: b,
	});
}

// チェイン消費SS分岐(ch: 消費チェイン, ss1: 消費して発動するSS, ss2: 消費せず発動するSS)
function ss_chain_cost_skill(ch, ss1, ss2) {
	return ss_condition({
		name: "ss_chain_cost_skill",
		type: "chain",
		p1: ch,
		p2: ss1,
		p3: ss2,
		is_delay: true,
	});
}
