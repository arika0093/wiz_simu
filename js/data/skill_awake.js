// ------------------------------------
// 潜在定義部分
// ------------------------------------
// コストダウン
function Costdown(d) {
	return {
		type: "costdown",
		down: d,
		name: "コストダウン" + int2roman(d),
		desc: "デッキコスト-" + d,
	}
}

// ファストスキル
function Fastskill(t) {
	return {
		type: "ss_fast",
		turn: t,			// 短縮ターン数
		name: "ファストスキル" + int2roman(t),
		desc: "初回のスペシャルスキル発動を" + t +"ターン短縮",
	}
}

// ステータスアップ
function Statusup(hp, atk) {
	return {
		type: "own_status_up",
		up_hp: hp,
		up_atk: atk,
		name: (hp != 0 ? "HP" : "攻撃力") + "アップ" + int2roman(Math.max(hp, atk)/100),
		desc: (hp != 0 ? "HP" : "攻撃力") + "が" + Math.max(hp, atk) + "アップする"
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
		name: get_attr_string(attrs) + (hp != 0 ? "HP" : "攻撃力") + "アップ" + int2roman(Math.max(hp, atk)/100),
		desc: get_attr_string(attrs) + "の味方の" + (hp != 0 ? "HP" : "攻撃力") + "が" + Math.max(hp, atk) + "アップする"
	};
}

// 属性ステアップ/副属性でさらにステアップ
function Attr_statusup_sattr(hp, atk, attr, hp2, atk2, subattr) {
	return {
		type: "status_up",
		attr: attr,
		spec: create_specs(1),
		up_hp: hp,
		up_atk: atk,
		sub_attr: subattr,
		up_hp_2: hp2,
		up_atk_2: atk2,
		name: 	get_attr_string(attr) + (hp != 0 ? "HP" : "攻撃力") + "アップ" + int2roman(Math.max(hp, atk)/100) + "＋(副)" + 
				get_attr_string(subattr) + (hp2 != 0 ? "HP" : "攻撃力") + "アップ" + int2roman(Math.max(hp2, atk2)/100),
		desc: 	get_attr_string(attr) + "の味方" + (hp != 0 ? "HP" : "攻撃力") + "を" + Math.max(hp, atk) + "アップ、" + 
				"複属性が" + get_attr_string(subattr).replace("属性", "") + "だとさらに" + Math.max(hp2, atk2) + "アップ" 
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
		name: get_spec_string(specs) + (hp != 0 ? "HP" : "攻撃力") + "アップ" + int2roman(Math.max(hp, atk)/100),
		desc: "種族が" + get_spec_string(specs) + "の味方の" + (hp != 0 ? "HP" : "攻撃力") + "が" + Math.max(hp, atk) + "アップする"
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
		name: "九死一生" + (hpcond==90 ? "Ξ" : int2roman(perc/30) + ""),
		desc: "HP" + hpcond + "%以上で致死ダメージを受けても確率" + perc +"%で生存",
	};
}

// パネルブースト
function Panel_boost(attrs, efv) {
	return {
		type: "panel_boost",
		attr: attrs,
		efv: efv,
		name: "パネルブースト" + int2roman(efv) + "・" + get_attr_string(attrs).replace("属性",""),
		desc: get_attr_string(attrs) + "パネルが出やすくなる（効果値："+efv+"）",
	};
}

// 属性軽減
function Attr_relief(attrs, perc) {
	return {
		type: "damage_relief",
		attr: attrs,
		spec: create_specs(1),
		perc: perc,
		name: get_attr_string(attrs) + "ダメージ軽減" + int2roman(perc/10) ,
		desc: get_attr_string(attrs) + "ダメージを" + perc + "%軽減する" ,
	};
}

// 種族軽減
function Spec_relief(spec, perc) {
	return {
		type: "damage_relief",
		attr: [1,1,1,1,1],
		spec: specific_specs(spec),
		perc: perc,
		name: get_spec_string(spec) + "ダメージ軽減" + int2roman(perc/10) ,
		desc: get_spec_string(spec) + "の敵からのダメージを" + perc + "%軽減する" ,
	};
}

// 戦後回復
function Heal_afterbattle(perc) {
	return {
		type: "heal_after_battle",
		perc: perc,
		name: "バトル終了後にHP回復" + int2roman(perc/10),
		desc: "バトル終了後に味方全体のHPを" + perc + "%回復",
	};
}

// 異常無効
function Abstate_invalid(tg_type) {
	var tmptype = {
		"as_sealed": "アンサースキル封印",
		"ss_sealed": "SPスキル封印",
		"all_sealed": "封印",
		"poison": "毒",
		"death_limit": "死の秒針",
		"discharge": "ディスチャージ",
		"attr_weaken": "弱体化",
	};
	var mytg=(function(typs,tg){
					var outp="";
					if($.isArray(tg)){
					console.log(tg)
						tg.forEach(function(t){
							outp+=typs[t]+"・";
						})
						outp=outp.slice(0,-1);
					}else{
						outp=typs[tg]
					}
					return outp;
				})(tmptype, tg_type)
	return {
		type: "abstate_invalid",
		tgtype: tg_type,
		name: mytg + "無効",
		desc: "敵スキルの" + mytg + "を無効化"
	};
}

// AS効果値アップ潜在
function Awake_ASkillRateup(upval) {
	return {
		type: "awake_ans_rateup",
		upvalue: upval,
		name: "AS効果値アップ(+" + upval + ")",
		desc: "ASの効果値を" + upval + "%アップする",
	};
}

// SS効果値アップ潜在
function Awake_SkillRateup(upval, skl_type) {
	return {
		type: "awake_rateup",
		skilltype: skl_type,
		upvalue: upval,
		name: "SS効果値アップ(+" + upval + ")",
		desc: "SPスキルの効果値を" + upval + "%アップする" ,
	};
}

// SS継続ターン数アップ潜在
function Awake_Turnup(upval, skl_type) {
	return {
		type: "awake_turnup",
		skilltype: skl_type,
		upvalue: upval,
		name: "SS継続ターン数アップ(+" + upval + ")",
		desc: "SPスキルの継続ターン数を" + upval + "Tアップする",
	};
}

// 通常エリアでのみステアップ
function Guild_statusup(hp, atk) {
	return {
		type: "own_status_up_guild",
		up_hp: hp,
		up_atk: atk,
		name: "ギルドマスターの" + (hp != 0 ? "誓い" : "誇り") + int2roman(Math.max(hp, atk) / 100),
		desc: "通常エリアでのみ" + (hp != 0 ? "HP" : "攻撃力") + "が" + Math.max(hp, atk) + "アップする"
	};
}

// デッキ単色時のみステアップ
function OnlyAttr_statusup(hp, atk, o_attr) {
	return {
		type: "status_up",
		up_hp: hp,
		up_atk: atk,
		onlyattr: o_attr,
		name: "デッキ単色時のみステアップ",
		desc: "デッキ単色時のみステアップ",
		cond: function (fld, ai, oi) {
			// 発動条件
			var rst = true;
			var dcs = fld.Allys.Deck;
			for (var i = 0; i <= dcs.length; i++) {
				rst = rst && dcs.attr[0] == this.onlyattr && dcs.attr[1] == -1;
			}
			return rst;
		}
	};
}

// (L時発動)スペシャルスキルを発動
function Awake_SpecialSkill(spskill, p1, p2, p3, p4) {
	return {
		type: "awake_spskill",
		skill: spskill,
		p1: p1,
		p2: p2,
		p3: p3,
		p4: p4,
		name: "SP発動",
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