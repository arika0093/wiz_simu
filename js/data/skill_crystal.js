// ------------------------------------
// 潜在結晶用データ定義
// ------------------------------------
var Awake_crystal_lists = [{
	genre: "ステータス変動",
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
	genre: "威力増加",
	name: "SS効果値アップ",
	imple: Awake_SkillRateup,
	param1: "{0}",
	param2: 0,
}, {
	type: "覇眼戦線2",
	name: "煌眼の欠片(L時味方ATK+100/25%回復)",
	imple: Awake_composite,
	param2: {
		name: "L時味方攻撃力アップ",
		type: "status_up",
		attr: [1,1,1,1,1],
		spec: create_specs(1),
		up_hp: 0,
		up_atk: 100,
		is_legend: true,
	},
	param3: {
		name: "L時HP回復(25%)",
		type: "awake_spskill",
		skill: "ss_heal",
		p1: 0.25,
		is_legend: true,
	},
}, {
	name: "凛眼の欠片(L時ダメブロ300,4T)",
	imple: Awake_composite,
	param2: {
		name: "L時ダメージブロック(300/4T)",
		type: "awake_spskill",
		skill: "ss_damageblock_all",
		p1: 300,
		p2: 4,
		p3: "ringan",
		is_legend: true,
	},
}, {
	name: "烈眼の欠片(L時味方ATK+500)",
	imple: Awake_composite,
	param2: {
		name: "L時味方攻撃力アップ",
		type: "status_up",
		attr: [1, 1, 1, 1, 1],
		spec: create_specs(1),
		up_hp: 0,
		up_atk: 500,
		is_legend: true,
	},
}, {
	genre: "聖サタニック女学院",
	name: "PTA印の成績表(反転無効)",
	imple: Awake_composite,
	param2: Abstate_invalid("heal_reverse"),
}, {
	genre: "幻魔特区スザクⅢ",
	name: "インフローレ(戦士ATK+200)",
	imple: Awake_composite,
	param2: Spec_statusup(0, 200, [8]),
}, {
	name: "エクスマキナ(毒,弱体化,死の秒針無効)",
	imple: Awake_composite,
	param2: Abstate_invalid(["poison", "attr_weaken", "death_limit"]),
}, {
	name: "アドヴェリタス(ダメージ1.2倍/HP-1000)",
	imple: Awake_composite,
	param2: Statusup(-1000, 0),
	param3: Awake_damage_multiple(1.2),
}

];


// ------------------------------------
// 潜在結晶読み込み後処理
// ------------------------------------
//　Awake_compositeのdesc埋め
//　（オブジェクト内で他のプロパティは参照できないのでここでいれる）
(function(){
	Awake_crystal_lists.forEach(function(e){
		if(e.imple == Awake_composite){
			e.param1 = e.name;
		}
	})
})()

// ------------------------------------
// 潜在結晶用 関数
// ------------------------------------
// 複合潜在能力
// （煌眼、覇眼等の複数効果を有する潜在能力定義用）
function Awake_composite(name, p1, p2, p3, p4) {
	return {
		type: "awake_composite",
		desc: name,
		proc: [p1, p2, p3, p4],
	};
}

// 最終ダメージ定数倍
function Awake_damage_multiple(rate) {
	return {
		type: "awake_damage_multiple",
		rate: rate,
	};
}