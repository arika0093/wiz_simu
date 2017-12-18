// 精霊データのSSから攻撃系スキルを単独に切り出す
function separateOfDamagedSkillFromCard(card){
	var rst = [];
	var target_ss = $.map([card.ss1, card.ss2], (ss, i) => {
		var same_flag = (card.ss2 && (i == 0 && card.ss1.turn == card.ss2.turn));
		return (!same_flag ? {ss, i} : null);
	});
	$.each(target_ss, (i_ss, es) => {
		var e_ss = es.ss;
		var index = es.i;
		if(!e_ss || !e_ss.proc){
			// continue
			return true;
		}
		$.each(pickUpDamagedSkillFromCardProc(e_ss.proc), (i_po, e_po) => {
			// 各pickupされたSSごとに精霊データを作って、rstに保存
			if(e_po.rate >= 0){
				var sep_card = createCardDataOnlySSkill(card, e_po, (index != 0));
				rst.push(sep_card);
			}
		});
	});
	return rst;
}

// ss.procの配列データから各procごとに切り出し
// データをまとめたArray[Object]で返却
function pickUpDamagedSkillFromCardProc(sproc){
	var obj_temp = {
		rate: 0,
		target: "single",
		atk_num: 1,
		atk_attr: [],
		t_attr: null,
		descs: [],
	}
	
	// 再帰用関数
	function procRecurrsion(p){
		// Objectでないなら即返却
		if(!p || p >= 0 || (!p.is_skill && !p.is_cond)){
			return p;
		}
		
		// まず、条件かどうか確認
		var cond_obj = checkCondProc(p);
		if(cond_obj){
			// 各戻り値ごとに比較
			var vs = cond_obj.values;
			var ds = cond_obj.descs;
			var at = cond_obj.t_attr;
			return $.map(vs, (x, ci) => {
				// xが未定なら処理しない
				if(!x){
					return null;
				}
				var v = procRecurrsion(vs[ci]);
				var d = ds[ci];
				// vの型で分岐
				if($.isArray(v)){
					// 攻撃SS or 条件の配列データ
					// descを書き加えて返す
					return $.grep(v, (arr_v) => {
						if(arr_v.t_attr && at){
							arr_v.t_attr = $.map(at, (at_e, at_i) => {
								return arr_v.t_attr[at_i] & at_e;
							})
						}
						else if(at){
							arr_v.t_attr = at;
						}
						if(arr_v.descs){
							arr_v.descs.push(d);
						}
						return true;
					})
				}
				else if(v != null && v >= 0){
					// 単体攻撃SSの威力
					var a = (d.indexOf("非特効") >= 0 ? null : at);
					return {val: v, desc: d, t_attr: a};
				}
				else if(v === null){
					// 処理しない
					return null;
				}
				else {
					// ERR
					throw v;
				}
			});
			for(var ci = 0; ci < ds.length; ci++){
			}
		}
		
		// 次に、攻撃関数か確認
		var dmg_obj = checkDamagedSSproc(p);
		if(dmg_obj){
			// 返却objの基礎
			var rst_data = $.extend(true, {}, obj_temp, {
				target: dmg_obj.target,
				atk_num: dmg_obj.atk_num,
				atk_attr: dmg_obj.atk_attr,
				descs: []
			});
			// まず再帰で効果値がcondかどうか確認
			var vs = procRecurrsion(dmg_obj.rate);
			if($.isArray(vs)){
				// condごとの効果値配列/説明文が返却されている
				return $.map(vs, (c_e) => {
					return $.extend(true, {}, rst_data, {
						rate: c_e.val,
						t_attr: c_e.t_attr,
						descs: [c_e.desc]
					});
				})
			}
			else if(vs !== null && vs >= 0) {
				// 数字で効果値が指定されている
				return [$.extend(true, {}, rst_data, {
					rate: vs,
				})];
			}
			else {
				// ERR
				throw vs;
			}
		}
		
		// 該当しなければ反映させない
		return null;
	}
	
	// 各procごとに中身を確認する
	return $.map(sproc, (e) => {
		return procRecurrsion(e);
	});
}

// procから攻撃系のSSかどうか判定
// 攻撃系のSSなら、効果値etcの変数箇所を示したObjectを返す
// そうでないなら、null
function checkDamagedSSproc(proc){
	var createDmgSSObject = (r_pos, atkn, attr) => {
		var target = proc.target;
		var rate = (r_pos >= 0 ? r_pos : proc[r_pos]);
		var atk_num = (atkn >= 0 ? atkn : proc[atkn]);
		var atk_attr = (attr >= 0 ? attr : proc[attr]);
		return { rate, target, atk_num, atk_attr };
	};
	var targets = {
		"ss_damage_all":        createDmgSSObject("p1", 1, "p2"),
		"ss_damage_s":          createDmgSSObject("p1", "p3", "p2"),
		"ss_damage_all_cons":   createDmgSSObject("p1", "p3", "p2"),
		"ss_damage_slash":      createDmgSSObject("p1", "p3", "p2"),
		"ss_damage_slash_all":  createDmgSSObject("p1", 1, "p2"),
		"ss_damage_explosion":  createDmgSSObject("p1", 1, "p2"),
		"ss_continue_damage":   createDmgSSObject("p1", 1, "p3"),
	};
	
	if(targets[proc.name]){
		return targets[proc.name];
	} else {
		return null;
	}
}

// procから条件指定のSSかどうか判定
// もし条件指定系なら、効果値や状況を示したObjectを返す
// そうでないなら、null
function checkCondProc(proc){
	// parse用Obj生成関数
	var createCondprocObject = (vls, dcs, t_attr) => {
		var values = $.map(vls, (e) => {
			if($.isFunction(e)){
				var rst = e(proc);
				if(Number(rst) >= 0){
					return rst;
				} else {
					return "";
				}
			}
			return proc[e];
		})
		var descs = $.map(dcs, (e) => {
			if($.isFunction(e)){
				return e(proc);
			}
			return dcs;
		})
		t_attr = t_attr ? proc[t_attr] : null;
		return { values, descs, t_attr };
	};
	// 各cond_proc定義
	var p = proc;
	var targets = {
		"ss_hp_more": createCondprocObject(
			["p2", "p3"],
			[
				(p) => `HP${p.p1*100}%以上`,
				(p) => `HP${p.p1*100}%未満`
			]
		),
		"ss_hp_less": createCondprocObject(
			["p2", "p3"],
			[
				(p) => `HP${p.p1*100}%以下`,
				(p) => `HP${p.p1*100}%超過`
			]
		),
		"ss_hp_under": createCondprocObject(
			["p2", "p3"],
			[
				(p) => `HP${p.p1*100}%未満`,
				(p) => `HP${p.p1*100}%以上`
			]
		),
		"ss_hp_leader": createCondprocObject(
			["p2", "p3"],
			[`リーダー時`, `非リーダー時`]
		),
		"special_attr": createCondprocObject(
			["p2", "p3"],
			[`特効対象`, `非特効対象`],
			["p1"]
		),
		"ss_answertime": createCondprocObject(
			[
				(p) => (p.p1 + p.p2 * 4),
				(p) => (p.p1 + p.p2 * 3),
				(p) => (p.p1 + p.p2 * 2),
				(p) => (p.p1 + p.p2 * 1),
				(p) => (p.p1 + p.p2 * 0),
			],
			[`～1秒`, `1～2秒`, "2～3秒", "3～4秒", "4秒以上"]
		),
		"ss_legendnum": createCondprocObject(
			[
				(p) => (p.p1 + p.p2 * 5),
				(p) => (p.p1 + p.p2 * 4),
				(p) => (p.p1 + p.p2 * 3),
				(p) => (p.p1 + p.p2 * 2),
				(p) => (p.p1 + p.p2 * 1),
				(p) => (p.p1 + p.p2 * 0),
			],
			[`L精霊[5]`, `L精霊[4]`, "L精霊[3]", "L精霊[2]", "L精霊[1]", "L精霊[0]"]
		),
		"ss_singleattr_num": createCondprocObject(
			[
				(p) => (p.p1 + p.p2 * 5),
				(p) => (p.p1 + p.p2 * 4),
				(p) => (p.p1 + p.p2 * 3),
				(p) => (p.p1 + p.p2 * 2),
				(p) => (p.p1 + p.p2 * 1),
				(p) => (p.p1 + p.p2 * 0),
			],
			[`単精霊[5]`, `単精霊[4]`, "単精霊[3]", "単精霊[2]", "単精霊[1]", "単精霊[0]"]
		),
		"ss_intenselyval": createCondprocObject(
			[
				(p) => (p.p1 + p.p2)
			],
			[`最小値`]
		),
		"ss_consume_all_cond": createCondprocObject(
			[
				(p) => (p.p1 * 5)
			],
			[`5体生存時`]
		),
		"ss_seal_all_cond": createCondprocObject(
			[
				(p) => (p.p1 * 5)
			],
			[`5体生存時`]
		),
		"ss_is_assealed_own_skill": createCondprocObject(
			["p1"],
			[`AS封印時`]
		),
		"ss_is_abstate_own": createCondprocObject(
			["p1", "p2"],
			[`異常時`, `非異常時`]
		),
		"ss_is_poison_own": createCondprocObject(
			["p1", "p2"],
			[`(自身)毒時`, `(自身)非毒時`]
		),
		"ss_is_cursed_own": createCondprocObject(
			["p1", "p2"],
			[`呪い時`, `非呪い時`]
		),
		"ss_is_poison_enemy": createCondprocObject(
			["p1", "p2"],
			[`(相手)毒時`, `(相手)非毒時`]
		),
		"ss_pureattr_cond": createCondprocObject(
			[
				(p) => (p.p1 * 1),
				(p) => (p.p1 * 0.35),
				(p) => (p.p1 * 0.25),
				(p) => (p.p1 * 0.15),
				(p) => (p.p1 * 0.1),
			],
			[`単属性[5]`, `単属性[4]`, "単属性[3]", "単属性[2]", "単属性[1]"]
		),
		"ss_multiattr_cond": createCondprocObject(
			[
				(p) => (p.p1 * 1),
				(p) => (p.p1 * 0.35),
				(p) => (p.p1 * 0.25),
				(p) => (p.p1 * 0.15),
				(p) => (p.p1 * 0.1),
			],
			[`複属性[5]`, `複属性[4]`, "複属性[3]", "複属性[2]", "複属性[1]"]
		),
		"ss_chain_cond": createCondprocObject(
			["p2", "p3"],
			[
				(p) => `${p.p1}ch以上`,
				(p) => `${p.p1}ch未満`,
			]
		),
		"ss_chain_cost": createCondprocObject(
			["p2", "p3"],
			[
				(p) => `${p.p1}ch消費`,
				(p) => `${p.p1}ch未満`,
			]
		),
	};
	// 既存のものを利用して一部は対応
	targets["ss_chain_cond_skill"] = targets["ss_chain_cond"];
	targets["ss_chain_cost_skill"] = targets["ss_chain_cost"];
	targets["ss_hp_more_skill"] = targets["ss_hp_more"];
	targets["ss_hp_less_skill"] = targets["ss_hp_less"];
	targets["ss_is_poison_own_skill"] = targets["ss_is_poison_own"];
	targets["ss_is_cursed_own_skill"] = targets["ss_is_cursed_own"];
	
	// cond系なら適切なものを返す
	if(proc.is_cond){
		return targets[proc.name];
	} else {
		return null;
	}
}


// 特定のSSのみを持つ精霊データを作成する
function createCardDataOnlySSkill(base, ss_proc, is_ss2){
	var c_clone = $.extend(true, {}, base);
	var ss_base = $.extend(true, {}, (is_ss2 ? base.ss2 : base.ss1));
	
	// SS整形
	var descs = ss_proc.descs;
	$.extend(ss_base, ss_proc);
	delete ss_base.proc;
	delete ss_base.descs;
	// 代入
	ss_base.subdesc = descs.join(",");
	ss_base.is_ss2 = is_ss2;
	c_clone.disp_ss = ss_base;
	// 潜在結晶の効果値を代入しておく
	if(ss_base.subdesc.indexOf("非特効") < 0){
		ss_base.crystal = checkSkillCrystalUpvalue(ss_base.desc);
	}
	ss_base.rateWithCrs = ss_proc.rate + (ss_base.crystal || 0);
	return c_clone;
}

// objectデータの内容に沿って暫定火力計算を行い、仮ダメージを代入
// 仮ダメージ順に並び替える
function calcPreDamageAndSort(cs){
	// 現在の指定オプションを取得する
	var c_obj = getSdmgObject();
	// c_objから値を取り出す
	var upatk_aw = c_obj ? c_obj.upatk_aw : 0;
	var upatk_st = c_obj ? c_obj.upatk_st : 0;          // 補正ATK
	var uprate = c_obj ? c_obj.uprat_aw : 0;            // 補正効果値
	var rand = c_obj ? c_obj.rand : 1;                  // 補正効果値
	var e_attr_set = c_obj ? c_obj.e_attr : -1;         // 敵属性
	var is_awake_adv = c_obj ? c_obj.aw_adv : true;     // アド潜在
	var is_awake_atk = c_obj ? c_obj.aw_atk : true;     // 攻撃UP潜在
	var is_cryst_rat = c_obj ? c_obj.cr_rat : true;     // 威力UP結晶
	var is_cryst_adv = c_obj ? c_obj.cr_adv : false;    // アド結晶
	
	// まず全精霊に火力計算処理
	$.each(cs, (ci, c) => {
		var ss = c.disp_ss;
		if(!ss){
			return;
		}
		// 色々値を取り出す
		var rate = (is_cryst_rat ? ss.rateWithCrs : ss.rate);
		var attrs = ss.atk_attr;
		var is_L = ss.is_ss2;
		
		// 敵属性
		// 未指定なら、自身の有利属性に合わせる
		var e_attr = (e_attr_set >= 0 ? e_attr_set : ((c.attr[0] + 2) % 3));
		// 指定されているなら、攻撃対象属性と合わない場合終了
		if(e_attr_set >= 0 && ss.t_attr && ss.t_attr[e_attr] <= 0){
			ss.is_disp = false;
			ss.pre_damage = 0;
			return;
		}

		// 潜在の値を取る
		// 自身ステアップ
		var own_statups = pickup_awakes(undefined, c, "own_status_up", false);
		var ally_statups = pickup_awakes(undefined, c, "status_up", false);
		// 1.1倍補正
		var adv_aws = pickup_awakes(undefined, c, "awake_damage_multiple", false);
		// L時のSSならL潜在の値も取得
		if(is_L){
			own_statups.push(...pickup_awakes(undefined, c, "own_status_up", true));
			ally_statups.push(...pickup_awakes(undefined, c, "status_up", true));
			adv_aws.push(...pickup_awakes(undefined, c, "awake_damage_multiple", true));
		}
		
		// 潜在から攻撃力を計算する
		var calcMyATK = () => {
			var pre_atk = c.atk;
			var atk = pre_atk;
			// 潜在を考慮する
			if(is_awake_atk){
				$.each(own_statups, (i, e) => {
					atk += e.up_atk;
				})
				$.each(ally_statups, (i, e) => {
					var matched_m = (e.attr[c.attr[0]] > 0 && e.spec[c.species] > 0);
					var matched_s = (e.sub_attr && e.sub_attr[c.attr[1]] > 0);
					atk += (matched_m ? e.up_atk : 0);
					atk += (matched_s ? e.up_atk_2 : 0);
				})
			}
			return atk;
		}
		// 火力計算用関数
		var calcDmg = () => {
			var dmg = (rate + uprate) * (ss.aw_atk + upatk_aw + upatk_st);
			// 属性相性
			var attr_rates = 0;
			if(attrs.length > 0){
				for(var i = 0; i < attrs.length; i++){
					attr_rates += attr_magnification(attrs[i], e_attr);
				}
				dmg *= attr_rates;
			}
			// アド潜在を確認
			var adv_rate = 0;
			if(is_awake_adv && adv_aws.length > 0) {
				for (var i = 0; i < adv_aws.length; i++) {
					var d = adv_aws[i];
					if(!d.rate){ continue; }
					adv_rate += (d.rate - 1);
				}
				dmg *= (adv_rate + 1);
			}
			// アド結晶確認
			if(is_cryst_adv){
				dmg *= 1.2;
			}
			// 乱数
			dmg *= rand;
			
			// 切り捨てて返す
			return Math.floor(dmg);
		}

		// 代入
		ss.is_disp = true;
		ss.aw_atk = calcMyATK();
		ss.pre_damage = calcDmg();
	});
	
	// 仮ダメージ順(降順)に並び替え
	cs.sort((ac, bc) => {
		var a = ac.disp_ss;
		var b = bc.disp_ss;
		if(a.pre_damage > b.pre_damage){ return -1; }
		if(a.pre_damage < b.pre_damage){ return +1; }
		return 0;
	})
	return cs;
}

// 現在指定されているOptionを取得する関数
function getSdmgObject(){
	var upatk_aw =  $("#sdmgopt_awatk").val() - 0;
	var upatk_st =  $("#sdmgopt_statk").val() - 0;
	var uprat_aw =  $("#sdmgopt_enh").val() / 100;
	var rand_v =    $("#sdmgopt_rand").val() - 0.0;
	var e_attr =    $("#sdmgopt_eattr option:selected").val() - 0;
	var aw_adv =    $("#sdmgopt_flg_awadv").prop("checked");
	var aw_atk =    true;
	var cr_rat =    $("#sdmgopt_flg_crrate").prop("checked");
	var cr_adv =    $("#sdmgopt_flg_cradv").prop("checked");
	
	var rand = (rand_v > 0 ? rand_v : 1);
	
	return {
		upatk_aw,
		upatk_st,
		uprat_aw,
		rand,
		e_attr,
		aw_adv,
		aw_atk,
		cr_rat,
		cr_adv
	}
}

// Option保存データから復元する関数
function setSdmgObject(so){
	if(!so){
		return;
	}
	if(so.upatk_aw > 0){
		$("#sdmgopt_awatk").val(so.upatk_aw);
	}
	if(so.upatk_st > 0) {
		$("#sdmgopt_statk").val(so.upatk_st);
	}
	if(so.uprat_aw > 0) {
		$("#sdmgopt_enh").val(so.uprat_aw * 100);
	}
	if(so.uprat_aw != 1) {
		$("#sdmgopt_rand").val(so.rand_v);
	}
	$("#sdmgopt_eattr").val(so.e_attr);
	$("#sdmgopt_flg_awadv").prop("checked", so.aw_adv);
	$("#sdmgopt_flg_crrate").prop("checked", so.cr_rat);
	$("#sdmgopt_flg_cradv").prop("checked", so.cr_adv);
	
	$("#sdmgopt_eattr").selectmenu("refresh");
	$("div.sdmg_opt_controlgroup").controlgroup("refresh");
}


