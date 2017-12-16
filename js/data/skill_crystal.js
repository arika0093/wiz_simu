// ------------------------------------
// 潜在結晶用データ定義
// ------------------------------------
var Awake_crystal_lists = [{
	genre: "ステータス変動(自身)",
	name: "攻撃力アップ",
	imple: Statusup,
	param1: 0,
	param2: "{0}",
	input_required: true,
}, {
	name: "HPアップ",
	imple: Statusup,
	param1: "{0}",
	param2: 0,
	input_required: true,
}, {
	name: "アドヴェリタス(ダメージ1.2倍/HP-1000)",
	imple: Awake_composite,
	param2: Statusup(-1000, 0),
	param3: Awake_damage_multiple(1.2),
}, {
	name: "夜空に届け！ファイアワークス！(花火/HP-300)",
	imple: Statusup,
	param1: -300,
	param2: 0,
}, {
	name: "改変の結晶〈オルタメア〉(HP-200)",
	imple: Statusup,
	param1: -200,
	param2: 0,
}, {
	name: "発見！魔道士たちの財宝(宝箱/ATK-300)",
	imple: Statusup,
	param1: 0,
	param2: -300,
}, {
	genre: "SS変化",
	name: "SS効果値アップ<攻撃系SS>",
	imple: function (upval) {
		var asr = Awake_SkillRateup(upval);
		asr.type = "awake_rateup_normal";
		return asr;
	},
	param1: "{0}",
	param2: 0,
	input_required: true,
}, {
	name: "SS効果値アップ<特攻大魔術>",
	imple: function (upval) {
		var asr = Awake_SkillRateup(upval);
		asr.type = "awake_rateup_sp";
		return asr;
	},
	param1: "{0}",
	param2: 0,
	input_required: true,
}, {
	name: "SS効果値アップ<毒>",
	imple: function (upval) {
		var asr = Awake_SkillRateup(upval);
		asr.type = "awake_rateup_poison";
		return asr;
	},
	param1: "{0}",
	param2: 0,
	input_required: true,
}, {
	name: "天罰の結晶〈インベラトラス〉(エンハ+50%/継続+1)",
	imple: Awake_composite,
	param2: function () {
		var asr = Awake_SkillRateup(50);
		asr.type = "awake_rateup_enhance";
		return asr;
	}(),
	param3: Awake_Turnup(1),
}, {
	name: "福音の結晶〈インベラトラス〉(精霊強化リジェネ+10%)",
	imple: Awake_composite,
	param2: function () {
		var asr = Awake_SkillRateup(10);
		asr.type = "awake_rateup_regenerateRF";
		return asr;
	}(),
}, {
	name: "ASCENSIVE(ブースト効果値+25%/自傷+5%)",
	imple: Awake_composite,
	param2: function () {
		var asc = Awake_ASCENSIVE(25, 5);
		return asc.proc[0];
	}(),
	param3: function () {
		var asc = Awake_ASCENSIVE(25, 5);
		return asc.proc[1];
	}(),
}, {
	name: "大当たりの結晶(多段威力+200/Hit+3)",
	imple: Awake_composite,
	param2: Awake_RateAndHitup(200, 3),
}, {
	name: "SS継続ターン数アップ",
	imple: Awake_Turnup,
	param1: "{0}",
	param2: 0,
	input_required: true,
}, {
	name: "SS発動ターン短縮",
	imple: Awake_Skillfast,
	param1: "{0}",
	input_required: true,
}, {
	name: "SSのヒット回数増加",
	imple: Awake_multihitadd,
	param1: "{0}",
	input_required: true,
}, {
	name: "SSチャージターン減少",
	imple: Awake_chargeTurnMinus,
	param1: "{0}",
	input_required: true,
}, {
	genre: "AS変化",
	name: "過ぎた夏の名残り(AS回復+2%)",
	imple: Awake_ASkillRateup,
	param1: 2,
	param2: "heal",
}, {
	name: "魔王からの贈り物(AS複属性エンハンス+20%)",
	imple: Awake_ASkillRateup,
	param1: 20,
	param2: "support",
	param3: "when_subattr_match",
	param4: 100,
}, {
	name: "AS効果値アップ",
	imple: Awake_ASkillRateup,
	param1: "{0}",
	param2: null,
	param3: null,
	param4: 100,
	input_required: true,
}, {
	name: "AS連撃数アップ",
	imple: Awake_ASkillAtknup,
	param1: "{0}",
	input_required: true,
}, {
	genre: "ステータス変動(味方全体)",
	name: "単属性攻撃力UP[火]",
	imple: Attr_statusup_oattr,
	param1: 0,
	param2: "{0}",
	param3: [1,0,0,0,0],
	input_required: true,
}, {
	name: "単属性攻撃力UP[水]",
	imple: Attr_statusup_oattr,
	param1: 0,
	param2: "{0}",
	param3: [0,1,0,0,0],
	input_required: true,
}, {
	name: "単属性攻撃力UP[雷]",
	imple: Attr_statusup_oattr,
	param1: 0,
	param2: "{0}",
	param3: [0,0,1,0,0],
	input_required: true,
}, {
	genre: "ステータス変動(味方全体/固定値)",
	name: "インフローレ(戦士ATK+200)",
	imple: Awake_composite,
	param2: Spec_statusup(0, 200, [8]),
}, {
	name: "カヲルの楽譜(天使HP+300)",
	imple: Awake_composite,
	param2: Spec_statusup(300, 0, [3]),
}, {
	name: "カヲルの楽譜(天使ATK+300)",
	imple: Awake_composite,
	param2: Spec_statusup(0, 300, [3]),
}, {
	name: "平衡を司る天秤(術士ATK+200)",
	imple: Awake_composite,
	param2: Spec_statusup(0, 200, [9]),
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
	name: "慈愛の結晶〈皇と剣〉(副光HP+300)",
	imple: Awake_composite,
	param2: Attr_statusup_sattr(0, 0, [1,1,1,1,1], 300, 0, [0,0,0,1,0]),
}, {
	name: "THE OLD ONE(副闇ATK+200)",
	imple: Awake_composite,
	param2: Attr_statusup_sattr(0, 0, [1,1,1,1,1], 0, 200, [0,0,0,0,1]),
}, {
	name: "アイドルの結晶〈きゃっつ(仮)〉(副光ATK,HP+200)",
	imple: Awake_composite,
	param2: Attr_statusup_sattr(0, 0, [1,1,1,1,1], 200, 200, [0,0,0,1,0]),
}, {
	name: "努力と継続の結晶〈女学院課題〉(副火ATK+200)",
	imple: Awake_composite,
	param2: Attr_statusup_sattr(0, 0, [1,1,1,1,1], 0, 200, [1,0,0,0,0]),
}, {
	name: "封呪槍〈コンファイナー〉(副水ATK+200)",
	imple: Awake_composite,
	param2: Attr_statusup_sattr(0, 0, [1,1,1,1,1], 0, 200, [0,1,0,0,0]),
}, {
	name: "闇を駆る空賊団の徽章(副雷ATK+200)",
	imple: Awake_composite,
	param2: Attr_statusup_sattr(0, 0, [1,1,1,1,1], 0, 200, [0,0,1,0,0]),
}, {
	name: "聖夜のプレゼント(術士HP/ATK+150)",
	imple: Awake_composite,
	param2: Spec_statusup(150, 150, [9]),
}, {
	name: "擬態の結晶〈ガーゴイル〉(物質HP+200)",
	imple: Awake_composite,
	param2: Spec_statusup(200, 0, [6]),
}, {
	name: "獄門の結晶〈ムールス〉(魔族HP+200)",
	imple: Awake_composite,
	param2: Spec_statusup(200, 0, [2]),
}, {
	name: "幻影の結晶〈ディルクーザ〉(龍族HP+200)",
	imple: Awake_composite,
	param2: Spec_statusup(200, 0, [0]),
}, {
	name: "屍霊王の結晶〈ヴァヌスス〉(術士HP+100)",
	imple: Awake_composite,
	param2: Spec_statusup(100, 0, [9]),
}, {
	name: "アラフト長老の結晶〈シガ〉(亜人HP+200)",
	imple: Awake_composite,
	param2: Spec_statusup(200, 0, [5]),
}, {
	name: "愛と悲しみの結晶〈ギブン〉(副光HP+100)",
	imple: Awake_composite,
	param2: Attr_statusup_sattr(0, 0, [1,1,1,1,1], 100, 0, [0,0,0,1,0]),
}, {
	name: "虚の結晶〈スタードであったもの〉(副闇HP+100)",
	imple: Awake_composite,
	param2: Attr_statusup_sattr(0, 0, [1,1,1,1,1], 100, 0, [0,0,0,0,1]),
}, {
	name: "荒鷲の結晶＜ブルーノ＞(副光ATK+100)",
	imple: Awake_composite,
	param2: Attr_statusup_sattr(0, 0, [1,1,1,1,1], 0, 100, [0,0,0,1,0]),
}, {
	genre: "L時発動結晶",
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
	name: "烈眼の欠片(L時味方ATK+500,自傷10%)",
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
	name: "絆の結晶〈ゾラスヴィルク〉(L時ATK+1000,被ダメUP回復×)",
	imple: Awake_composite,
	param2: function () {
		var dm = Awake_dragonmode(1000, 1.3);
		dm.proc[0].is_legend = true;
		return dm.proc[0];
	}(),
	param3: function () {
		var dm = Awake_dragonmode(1000, 1.3);
		dm.proc[1].is_legend = true;
		return dm.proc[1];
	}(),
	param4: function () {
		var dm = Awake_dragonmode(1000, 1.3);
		dm.proc[2].is_legend = true;
		return dm.proc[2];
	}(),
}, {
	name: "愛が響く結晶〈初音ミク〉(L時戦後回復)",
	imple: Awake_composite,
	param2: function () {
		var ha = Heal_afterbattle(10);
		ha.is_legend = true;
		return ha;
	}(),
}, {
	name: "凛煌眼(L時味方ATK+300/4T300ダメブロ/被ダメ1.2倍)",
	imple: Awake_composite,
	param2: {
		name: "L時味方攻撃力アップ",
		type: "status_up",
		attr: [1,1,1,1,1],
		spec: create_specs(1),
		up_hp: 0,
		up_atk: 300,
		is_legend: true,
	},
	param3: {
		name: "L時ダメージブロック(300/4T)",
		type: "awake_spskill",
		skill: "ss_damageblock",
		p1: 300,
		p2: 4,
		p3: "ringan",
		is_legend: true,
	},
	param4: function () {
		var dm = Awake_dragonmode(0, 1.3);
		dm.proc[1].is_legend = true;
		return dm.proc[1];
	}(),
}, {
	genre: "状態異常無効",
	name: "PTA印の成績表(反転無効)",
	imple: Awake_composite,
	param2: Abstate_invalid("heal_reverse"),
}, {
	name: "エクスマキナ(毒,弱体化,死の秒針無効)",
	imple: Awake_composite,
	param2: Abstate_invalid(["poison", "attr_weaken", "death_limit"]),
}, {
	name: "人外魔装〈刻銘羽〉(属性反転無効)",
	imple: Awake_composite,
	param2: Abstate_invalid("attr_reverse"),
}, {
	name: "救世の結晶〈サルヴァトル〉(ディスチャ無効)",
	imple: Awake_composite,
	param2: Abstate_invalid("discharge"),
}, {
	genre: "ダメージ軽減",
	name: "超魔道装具〈災害のリボン〉(術士軽減10%)",
	imple: Awake_composite,
	param2: Spec_relief([9], 10),
}, {
	name: "いつか見た天使の髪飾り(魔族軽減10%)",
	imple: Awake_composite,
	param2: Spec_relief([2], 10),
}, {
	name: "破槍の結晶〈ブリューダイン〉(神族軽減10%)",
	imple: Awake_composite,
	param2: Spec_relief([1], 10),
}, {
	name: "巡礼の結晶〈スビェート〉(光軽減10%)",
	imple: Awake_composite,
	param2: Attr_relief([0,0,0,1,0], 10),
}, {
	name: "異神の結晶〈バシレイデ〉(AbCd軽減10%)",
	imple: Awake_composite,
	param2: Spec_relief([11], 10),
}, {
    name: "敵か味方か結晶〈MGMkⅡ〉(物質軽減10%)",
    imple: Awake_composite,
    param2: Spec_relief([6], 10),
}, {
    name: "滅亡因子の結晶〈ヴィロムコ〉(闇軽減10%)",
    imple: Awake_composite,
    param2: Attr_relief([0,0,0,0,1], 10),
}, {
    name: "絶滅因子の結晶〈フーガァー〉(龍族軽減10%)",
    imple: Awake_composite,
    param2: Spec_relief([0], 10),
}, {
	genre: "その他[特殊攻略用]",
	name: "選ばれし者の証(ボス戦時SPMAX/発動100%)",
	imple: Awake_composite,
	param2: Awake_skillFC_atBoss(),
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

