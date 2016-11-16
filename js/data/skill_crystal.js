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
	genre: "AS変化",
	name: "AS効果値アップ",
	imple: Awake_ASkillRateup,
	param1: "{0}",
}, {
	genre: "SS変化",
	name: "SS効果値アップ",
	imple: Awake_SkillRateup,
	param1: "{0}",
	param2: 0,
}, {
	name: "SS継続ターン数アップ",
	imple: Awake_Turnup,
	param1: "{0}",
	param2: 0,
}, {
	name: "SS発動ターン短縮",
	imple: Fastskill,
	param1: "{0}",
}, {
	name: "SSのヒット回数増加",
	imple: Awake_multihitadd,
	param1: "{0}",
}, {
	genre: "イベント結晶",
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
		skill: "ss_damageblock",
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
	name: "PTA印の成績表(反転無効)",
	imple: Awake_composite,
	param2: Abstate_invalid("heal_reverse"),
}, {
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
}, {
	name: "カヲルの楽譜(天使HP+300)",
	imple: Awake_composite,
	param2: Spec_statusup(300, 0, [3]),
}, {
	name: "カヲルの楽譜(天使ATK+300)",
	imple: Awake_composite,
	param2: Spec_statusup(0, 300, [3]),
}, {
	name: "覇色の結晶(L時HP,ATK+500)",
	imple: Awake_composite,
	param2: {
		name: "L時味方攻撃力アップ",
		type: "status_up",
		attr: [1, 1, 1, 1, 1],
		spec: create_specs(1),
		up_hp: 500,
		up_atk: 500,
		is_legend: true,
	},
}, {
	name: "勝戦の結晶〈ベルク旗艦〉(戦士HP+200)",
	imple: Awake_composite,
	param2: Spec_statusup(200, 0, [8]),
}, {
	name: "共闘の結晶〈セラフィム〉(魔族ATK+300)",
	imple: Awake_composite,
	param2: Spec_statusup(0, 300, [2]),
}, {
	name: "魂魄の結晶〈追憶〉(物質ATK+300)",
	imple: Awake_composite,
	param2: Spec_statusup(0, 300, [6]),
}, {
	name: "誇りの結晶〈クロード〉(味方全体ATK-500)",
	imple: Awake_composite,
	param2: Attr_statusup(0, -500, [1,1,1,1,1]),
}, {
	name: "絆の結晶〈ゾラスヴィルク〉(L時ATK+1000,被ダメUP回復×)",
	imple: Awake_composite,
	param2: function () {
		var dm = Awake_dragonmode(1000, 1.3);
		dm.is_legend = true;
		return dm;
	}(),
}, {
	genre: "精霊結晶",
	name: "巡礼の結晶〈スビェート〉(光軽減10%)",
	imple: Awake_composite,
	param2: Attr_relief([0,0,0,1,0], 10),
}, {
	name: "異神の結晶〈バシレイデ〉(AbCd軽減10%)",
	imple: Awake_composite,
	param2: Spec_relief([11], 10),
}, {
	name: "擬態の結晶〈ガーゴイル〉(物質HP+200)",
	imple: Awake_composite,
	param2: Spec_statusup(200, 0, [6]),
}, {
	name: "獄門の結晶〈ムールス〉(魔族HP+200)",
	imple: Awake_composite,
	param2: Spec_statusup(200, 0, [2]),
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

