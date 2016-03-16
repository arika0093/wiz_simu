// ------------------------------------
// 潜在結晶用
// ------------------------------------
var Awake_crystal_lists = [{
	name: "攻撃力アップ",
	imple: Statusup,
	param1: 0,
	param2: "{0}",
}, {
	name: "HPアップ",
	imple: Statusup,
	param1: "{0}",
	param2: 0,
}, {
	name: "コストダウン",
	imple: Costdown,
	param1: "{0}",
}, {
	name: "SS効果値アップ",
	imple: Awake_SkillRateup,
	param1: "{0}",
	param2: 0,
},];

// ------------------------------------
// 定義部分
// ------------------------------------
// コストダウン
function Costdown(d) {
	return {
		type: "costdown",
		down: d,
	}
}

// ファストスキル
function Fastskill(t) {
	return {
		type: "ss_fast",
		turn: t,			// 短縮ターン数
	}
}

// ステータスアップ
function Statusup(hp, atk) {
	return {
		type: "own_status_up",
		up_hp: hp,
		up_atk: atk,
	};
}

// 味方属性ステアップ
function Attr_statusup(hp, atk, attrs) {
	return {
		type: "status_up",
		attr: attrs,
		spec: create_specs(1),
		up_hp: hp,
		up_atk: atk,
	};
}

// 味方種族ステアップ
function Spec_statusup(hp, atk, specs) {
	return {
		type: "status_up",
		attr: [1, 1, 1, 1, 1],
		spec: specific_specs(specs),
		up_hp: hp,
		up_atk: atk,
	};
}

// 九死一生(Narrow escape from the jaw of death)
function NEFTJOD(perc, hpcond) {
	if (!hpcond) {
		hpcond = 10;
	}
	return {
		type: "neftjod",
		perc: perc,
		hpcond: hpcond,
	};
}

// パネルブースト
function Panel_boost(attrs, efv) {
	return {
		type: "panel_boost",
		attr: attrs,
		efv: efv,
	};
}

// 属性軽減
function Attr_relief(attrs, perc) {
	return {
		type: "attr_relief",
		attr: attrs,
		perc: perc,
	};
}

// 戦後回復
function Heal_afterbattle(perc) {
	return {
		type: "heal_after_battle",
		perc: perc,
	};
}

// 異常無効
function Abstate_invalid(tg_type) {
	return {
		type: "abstate_invalid",
		tgtype: tg_type,
	};
}

// 効果値アップ潜在
function Awake_SkillRateup(upval, skl_type) {
	return {
		type: "awake_rateup",
		skilltype: skl_type,
		upvalue: upval,
	};
}

// その他、試走に影響を及ぼさない潜在
function Awake_noeffect(name, efv) {
	return {
		type: "awake_noeffect",
		name: name,
		efv: efv,
	}
}