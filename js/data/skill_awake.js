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
	if(hp != 0){
		tmpName = "HP";
		tmpValue = hp;
	}else if(atk != 0){
		tmpName = "攻撃力";
		tmpValue = atk;
	}
	if(tmpValue > 0){
		tmpUD = "アップ";
	}else{
		tmpUD = "ダウン";
		tmpValue = -tmpValue;
	}
	return {
		type: "own_status_up",
		up_hp: hp,
		up_atk: atk,
		name: tmpName + tmpUD + int2roman(tmpValue/100),
		desc: tmpName + "が" + tmpValue + tmpUD +"する"
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
function Heal_afterbattle(perc, ape) {
	return {
		type: "heal_after_battle",
		perc: perc,
		append_cond: ape,
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
		"heal_reverse": "回復反転",
	};
	var mytg=(function(typs,tg){
		var outp="";
		if($.isArray(tg)){
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

// 通常エリアでのみステアップ
function Guild_statusup(hp, atk) {
	return {
		type: "own_status_up",
		up_hp: hp,
		up_atk: atk,
		name: "ギルドマスターの" + (hp != 0 ? "誓い" : "誇り") + int2roman(Math.max(hp, atk) / 100),
		desc: "通常エリアでのみ" + (hp != 0 ? "HP" : "攻撃力") + "が" + Math.max(hp, atk) + "アップする",
		cond: function (fld, oi, ai) {
			// 発動条件
			return false;
		}
	};
}

// デッキ単色時のみ味方ステアップ
function OnlyAttr_statusup(hp, atk, o_attr) {
	return {
		type: "status_up",
		up_hp: hp,
		up_atk: atk,
		attr: [1,1,1,1,1],
		spec: create_specs(1),
		onlyattr: o_attr,
		name: "デッキ単色時のみステアップ",
		desc: "デッキ単色時のみステアップ",
		cond: function (fld, oi, ai) {
			// 発動条件
			var rst = true;
			var dcs = fld.Allys.Deck;
			for (var i = 0; i < dcs.length; i++) {
				rst = rst && dcs[i].attr[0] == this.onlyattr && dcs[i].attr[1] == -1;
			}
			return rst;
		}
	};
}

// チェインブースト
function Awake_Chainboost(ch) {
	return {
		type: "awake_chboost",
		add: ch,
		name: "チェインブースト" + int2roman(ch),
		desc: "クエスト開始時のチェインを+" + ch + "する"
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

// ------------------------------------
// 主に潜在結晶用の関数
// ------------------------------------
// 複合潜在能力
// （煌眼、覇眼等の複数効果を有する潜在能力定義用）
function Awake_composite(name, p1, p2, p3, p4) {
	return {
		type: "awake_composite",
		name: name,
		desc: name,
		proc: [p1, p2, p3, p4],
	};
}

// 最終ダメージ定数倍
function Awake_damage_multiple(rate, lowhp) {
	if (lowhp === undefined) {
		// 後方互換性維持(潜在結晶時)
		return {
			type: "awake_damage_multiple",
			rate: rate,
		}
	} else {
		// 普通の潜在に置く場合
		var desc = "ダメージを" + rate + "倍して、HPを" + lowhp + "下げる";
		return Awake_composite(desc, Statusup(-lowhp, 0), {
			type: "awake_damage_multiple",
			rate: rate,
		});
	}
}

// 攻撃力+X、被ダメージ*Y倍、回復効果を受けない
function Awake_dragonmode(up_atk, up_damaged) {
	var desc = "攻撃力+" + up_atk + ",被ダメージ" + up_damaged + "倍,回復しない";
	return Awake_composite(desc,
		Statusup(0, up_atk),
		Awake_damaged_multiple(up_damaged),
		Awake_noheal()
	);
}

// Hit回数増加
function Awake_multihitadd(n) {
	return {
		type: "Awake_multihitadd",
		upvalue: n,
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
		desc: "SPスキルの効果値を" + upval + "%アップする",
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

// 被ダメージ定数倍
function Awake_damaged_multiple(rate) {
	return {
		type: "awake_damaged_multiple",
		rate: rate,
	};
}

// 回復効果を受けない
function Awake_noheal() {
	return {
		type: "awake_no_heal",
	};
}

// セカンドファスト
function Awake_secondfast(t) {
	return {
		type: "ss_secondfast",
		turn: t,			// 短縮ターン数
		name: "セカンドファスト" + int2roman(t),
		desc: "2回目以降のスペシャルスキル発動を" + t + "ターン短縮",
	}
}
