<<<<<<< HEAD
<<<<<<< HEAD
// �t�@�X�g�X�L��
function fastskill(t) {
	return {
		type: "ss_fast",
		turn: t,			// �Z�k�^�[����
=======
﻿// ファストスキル
function Fastskill(t) {
	return {
		type: "ss_fast",
		turn: t,			// 短縮ターン数
>>>>>>> e22626d... 潜在能力関連の整備
	};
}

// 自身のステータスUp
function Statusup(hp, atk) {
	return {
		type: "own_status_up",
		up_hp: hp,
		up_atk: atk,
	};
}

// 属性ステUp
function Attr_statusup(hp, atk, attrs) {
	return {
		type: "status_up",
		attr: attrs,
		spec: create_specs(1),
		up_hp: hp,
		up_atk: atk,
	};
}

// 種族ステUp
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
function NEFTJOD(perc) {
	return {
		type: "neftjod",
		perc: perc,
	};
}

// パネルブースト(現状では何もしません)
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

// 戦後HP回復
function Heal_afterbattle(perc) {
	return {
		type: "heal_after_battle",
		perc: perc,
=======
﻿// ファストスキル
function Fastskill(t) {
	return {
		type: "ss_fast",
		turn: t,			// 短縮ターン数
>>>>>>> 447b73f... 潜在能力枠組み作成,
	};
}

// 自身のステータスUp
function Statusup(hp, atk) {
	return {
		type: "own_status_up",
		up_hp: hp,
		up_atk: atk,
	};
}

// 属性ステUp
function Attr_statusup(hp, atk, attrs) {
	return {
		type: "status_up",
		attr: attrs,
		spec: create_specs(1),
		up_hp: hp,
		up_atk: atk,
	};
}

// 種族ステUp
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
function NEFTJOD(perc) {
	return {
		type: "neftjod",
		perc: perc,
	};
}

// パネルブースト(現状では何もしません)
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

// 戦後HP回復
function Heal_afterbattle(perc) {
	return {
		type: "heal_after_battle",
		perc: perc,
	};
}
