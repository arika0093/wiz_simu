// global-value
var Glob_stat = {
	obj_type: "dmgcalc/query",
	cond: {
		find_killatk: false,
		add_atk: 0,
		add_awatk: 0,
		status_up: 0,
		level: 110,
		awakenum: 10,
		manaplus: 200,
		is_advawake: false,
		has_advaw: false,
		atktype: 1,
		as_panel_type: 0,
		ss_atk_attr: [],
		skillrate: 100,
		skill_awc_rate: 0,
		as_iscritical: false,
		enh_rate: 0,
		hit_num: 1,
		ssb_rate_min: 100,
		ssb_rate_add: 0,
		ssb_rate_exp: 1, //修正前: 2.5,
		ssb_rate_mch: 30,
		rand: 1.0,
		chain: 0,
		e_guard: 0,
		e_weaken: 0,
	},
	ally: {
		isloading: false,
		cardno: -1,
		card: null,
		name: "",
		imageno: -1,
		img_pref: null,
		attr_m: -1,
		attr_s: -1,
		atk: 0,
	},
	enemy: {
		isloading: false,
		imageno: -1,
		img_pref: null,
		attr: -1,
		hp: 100000,
	},
}


$(function(){
	// Cards sort
	Cards = Cards.sort(function (a, b) {
		return a.imageno < b.imageno ? 1 : -1;
	});
	// reset
	$("#ally_attr").val("");
	// initilize
	action_set();
	autocomp_set();
	dialog_init();
	// loading
	load_url();
});

// action-set
function action_set(){
	/*
	$("#enemy_load").on("click", function(){
		// enemy loading
		
	});
	*/
	$("input[name=enemy_attr_rd]").on("change", function(){
		var attr = $(this).val();
		$("#enemy_attr_main").attr("class", "attr_" + attr);
		$("#enemy_attr_sub").attr("class", "attr_" + attr);
		if(!Glob_stat.enemy.isloading){
			var attr_grep = $.grep(Cards, function(e){
				// right or dark -> subattr, other -> single only
				var tg_attr = (attr > 2 ? e.attr[1] : (e.attr[1] == -1 ? e.attr[0] : NaN));
				return e.islegend && !e.disable && e.is_dist && attr == tg_attr;
			});
			var random_c = attr_grep[Math.floor(Math.random() * attr_grep.length)];
			Glob_stat.enemy.imageno = random_c.imageno;
			Glob_stat.enemy.img_pref = random_c.imageno_prefix;
			$("#enemy_img").attr("src", get_image_url(random_c.imageno, random_c.imageno_prefix));
		}
		calculate();
	});
	$("#ally_attr").on("change", function(){
		var attrs = $("#ally_attr option:selected").val().split(",");
		Glob_stat.ally.attr_m = attrs[0];
		Glob_stat.ally.attr_s = attrs[1];
		var atr0 = (attrs[0] >= 0 ? attrs[0] : "none");
		$("#ally01_attr_main").attr("class", "attr_" + atr0);
		$("#ally01_attr_sub").attr("class", "attr_" + (attrs[1] >= 0 ? attrs[1] : atr0));
		calculate();
	});
	$("#card_addatk_scan").on("change", function(){
		var checked = $(this).prop("checked");
		//$("#card_addatk").prop("disabled", checked);
		$(".calc_dmg").toggle(!checked);
		$(".calc_atk").toggle(checked);
		calculate();
	});
	$("#card_lv_1").on("click", function(){
		$("#card_lv").val("1").change();
	});
	$("#card_lv_max").on("click", function(){
		$("#card_lv").val("110").change();
	});
	/*
	$("#card_aw_0").on("click", function(){
		$("#card_awn").val("0").change();
	});
	$("#card_aw_max").on("click", function(){
		$("#card_awn").val("10").change();
	});
	*/
	$("#card_mn_200").on("click", function(){
		$("#card_mana").val("200").change();
	});
	$("#card_mn_400").on("click", function(){
		$("#card_mana").val("400").change();
	});
	$("#card_atkup_awk_m100").on("click", function(){
		var v = Number($("#card_atkup_awk").val());
		$("#card_atkup_awk").val(v - 100).change();
	});
	$("#card_atkup_awk_p100").on("click", function(){
		var v = Number($("#card_atkup_awk").val());
		$("#card_atkup_awk").val(v + 100).change();
	});
	$("#card_stup_m1000").on("click", function(){
		var v = Number($("#card_stup").val());
		$("#card_stup").val(v - 1000).change();
	});
	$("#card_stup_p1000").on("click", function(){
		var v = Number($("#card_stup").val());
		$("#card_stup").val(v + 1000).change();
	});
	$("input[name=calctype]").on("change", function(){
		var types = ["as", "ss", "bm", "ssb"]
		var type = Number($(this).val());
		for(var i=0; i<types.length; i++){
			if(i == type){
				$("." + types[i] + "_only").show();
				$("." + types[i] + "_without").hide();
			} else {
				$("." + types[i] + "_only").hide();
				$("." + types[i] + "_without").show();
			}
		}
		// 時限チェックなら乱数が不要なので無効化
		var checked = $("#cmb_ss_bm").prop("checked");
		$("#fld_rand").prop("disabled", checked);
		
		calculate();
	});
	$("#card_rate_m1").on("click", function(){
		var v = Number($("#card_rate").val());
		$("#card_rate").val(v - 100).change();
	});
	$("#card_rate_p1").on("click", function(){
		var v = Number($("#card_rate").val());
		$("#card_rate").val(v + 100).change();
	});
	$("#card_awenh_m1").on("click", function(){
		var v = Number($("#card_awenh").val());
		$("#card_awenh").val(v - 100).change();
	});
	$("#card_awenh_p1").on("click", function(){
		var v = Number($("#card_awenh").val());
		$("#card_awenh").val(v + 100).change();
	});
	$("#card_enh_m1").on("click", function(){
		var v = Number($("#card_enh").val());
		$("#card_enh").val(v - 100).change();
	});
	$("#card_enh_p1").on("click", function(){
		var v = Number($("#card_enh").val());
		$("#card_enh").val(v + 100).change();
	});
	$("#fld_rand_min").on("click", function(){
		$("#fld_rand").val("0.9").change();
	});
	$("#fld_rand_ave").on("click", function(){
		$("#fld_rand").val("1.0").change();
	});
	$("#fld_rand_max").on("click", function(){
		$("#fld_rand").val("1.1").change();
	});
	
	// mana edit
	$("#card_mana").on("change", function(){
		$("#ally01_mana").val("+" + $(this).val());
	});
	// calc
	$("input").on("change", function(){
		calculate();
	});
	$("input").on("keyup", function(){
		calculate();
	});
	
	// create url/pict
	$("#create_url").on("click", function(){
		$("#dialog_createurl").dialog("open");
	});
	$("#create_pct").on("click", function(){
		
	});
}

// auto-complete set
function autocomp_set(){
	$("#deck01").autocomplete({
		minLength: 2,
		delay: 500,
		source: function (req, resp) {
			var term = req.term.toLowerCase();
			var roma2kana = $.trim(r2k(req.term));
			var hira2kana = $.trim(h2k(req.term));
			resp($.map(Cards, function (value, key) {
				var rst = true;
				var al = value.alias;
				// アルファベット大文字小文字の区別をしない
				// &、・などは省略してチェック
				var nm = value.name.toLowerCase().replace(/[&・ ]/g, "");
				rst = rst && value.name.indexOf(term) >= 0;
				rst = rst || nm.indexOf(term) >= 0;
				rst = rst || nm.indexOf(roma2kana) >= 0;	// ローマ字からカタカナに変換して比較
				rst = rst || nm.indexOf(hira2kana) >= 0;	// 平仮名からカタカナに変換して比較
				if (al && al.length > 0) {					// 別名が定義されてるならそれら全てに対しチェック
					for (var i = 0; i < al.length; i++) {
						if (al[i].indexOf("/") == 0) {
							rst = rst || al[i].replace("/", "") == term;
						} else {
							rst = rst || al[i].toLowerCase().indexOf(term) >= 0;
							rst = rst || al[i].indexOf(roma2kana) >= 0;
							rst = rst || al[i].indexOf(hira2kana) >= 0;
						}
					}
				}
				rst = rst && value.as1.proc != null;		// ASが未定義のものは除く
				rst = rst && value.islegend;            	// L精霊以外は除く
				rst = rst && !value.disable;				// 無効化されていない(進化後が存在する精霊など)
				// 全表示の時も無効化精霊は出さない
				rst = rst || (term == "*all*" && value.imageno > 0 && !value.disable);
				if (rst){
					return {
						label: value.name,
						value: value.cardid,
						data: value,
					}
				}
			}));
		},
		focus: function(e, dec) {
			//select_show(dec.item.data);
			return false;
		},
		select: function (e, dec) {
			// 表示
			select_show(dec.item.data, true);
			// 閉じる
			$(".selector").autocomplete("close");
			return false;
		}
	})
	.autocomplete("instance")._renderItem = function (ul, dec) {
		var AS = dec.data.as2 ? dec.data.as2 : dec.data.as1;
		return $("<li class='clearfix'>")
		.append("<img src='" + get_image_url(dec.data.imageno, dec.data.imageno_prefix) + "' /><a>" + dec.label
			+ "</a><br/><p>" + AS.desc + "</p>")
		.appendTo(ul);
	};
}

// apply suggest
function select_show(c, seled, v){
	v = v || Glob_stat;
	if(c){
		$("#deck01").val(c.name);
		$("#ally01_img").attr("src", get_image_url(c.imageno, c.imageno_prefix));
		$("#ally01_attr_main").attr("class", "attr_" + c.attr[0]);
		$("#ally01_attr_sub").attr("class", "attr_" + (c.attr[1] != -1 ? c.attr[1] : c.attr[0]));
		if(seled){
			var has_adv = $.grep(c.awakes, function(e){
				return e.name.indexOf("ダメージを1.1倍") >= 0;
			}).length > 0;
			$("#ally_atk").val(c.atk);
			$("#ally_attr").val(c.attr[0] + "," + c.attr[1]);
			$("#card_isadvaw").prop("checked", has_adv);
			$("#ally01_img").off("click");
			$("#ally01_img").on("click", function(){
				window.open("/search/detail/?id=" + c.cardno, "_blank")
			});
			// set
			v.ally.isloading = true;
			v.ally.name = c.name;
			v.ally.card = c;
			v.ally.cardno = c.cardno;
			v.ally.imageno = c.imageno;
			v.ally.img_pref = c.imageno_prefix;
			v.ally.attr_m = c.attr[0];
			v.ally.attr_s = c.attr[1];
			v.ally.atk = c.atk;
			v.cond.has_advaw = has_adv;
			var attack_ss = c.ss1 && $.grep(c.ss1.proc, function(e){
				var atkss_list = [
					"ss_damage_all",
					"ss_damage_s",
					"ss_damage_all_cons",
					"ss_damage_slash",
					"ss_damage_explosion",
					"ss_continue_damage",
					"ss_accumulateDamageOfHeal",
					"ss_accumulateDamageOfBurn"
				];
				return atkss_list.indexOf(e.name) >= 0;
			});
			var attack_dual_ss = c.ss1 && c.attr[1] >= 0 && $.grep(c.ss1.proc, function(e){
				var atkss_list = [
					"ss_damage_all",
					"ss_damage_s",
					"ss_damage_slash",
				];
				return atkss_list.indexOf(e.name) >= 0 && e.p2 && (e.p2.indexOf(c.attr[1]) >= 0);
			});
			if(attack_ss.length > 0){
				// reset
				$("input[name=ss_attr_col]").prop("checked", false);
				// check attack-attr
				var is_acc = attack_ss[0].name.indexOf("accumulate") >= 0;
				if(is_acc || (attack_dual_ss.length > 0 && c.attr[1] >= 0)){
					$("#ss_attr_col_0" + c.attr[1]).prop("checked", true);
				}
				if(!is_acc){
					$("#ss_attr_col_0" + c.attr[0]).prop("checked", true);
				}
				v.cond.ss_atk_attr = $.map($("input[name=ss_attr_col]:checked"), function(e){
					return $(e).val();
				});
				// check ss
				$("#cmb_ss").prop("checked", true).change();
			} else {
				$("#cmb_as").prop("checked", true).change();
			}
		}
	}
}

// dialog set
function dialog_init(){
	// URL gen
	$("#dialog_createurl").dialog({
		autoOpen: false,
		width: 450,
		modal: true,
		open: function(){
			create_url(function(result){
				var js = JSON.parse(result);
				$("#createurl_rst").val("https://wiztools.net/damagecalc/?q=" + js.short);
				history.replaceState('','',"?q=" + js.short);
			});
		},
		buttons: {
			"OK": function () {
				$(this).dialog("close");
			},
		},
	});
}

// calclation
function calculate(v){
	// get
	v = v || valueget();
	var vc = v.cond;
	var va = v.ally;
	var ve = v.enemy;
	var lg = {
		p: function(key, value){
			lg[key] = value;
		}
	};
	// cond check
	if(vc.atk <= 0 || !(va.attr_m >= 0) || !(ve.attr >= 0)){
		return;
	}
	lg.p("glob_stat", v);
	// calc atk
	var pure_atk = calcLvStatus(vc.level, 110, va.atk/2, va.atk)*1;
	var base_atk = pure_atk + vc.status_up*1 + vc.manaplus*1 + vc.add_awatk*1;
	var last_atk = base_atk + vc.add_atk*1;
	lg.p("精霊自身の攻撃力(Lv補正あり)", pure_atk);
	lg.p("基礎攻撃力+ステアップ+マナプラス", base_atk);
	lg.p("基礎攻撃力+ステアップ+マナプラス+攻撃力補正", last_atk);
	// atk rate, chain, rand, and etc.
	var chain = vc.chain*1;
	var rand = vc.rand*1;
	var eguard = (1 - vc.e_guard/100);
	var eweak = (1 + vc.e_weaken/100);
	lg.p("チェイン数", chain);
	lg.p("使用乱数", rand);
	lg.p("敵ガード補正", eguard);
	lg.p("敵弱体化補正", eweak);
	// adv awake
	var advrate = 1;
	advrate += (vc.is_advawake ? 0.2 : 0);
	advrate += (vc.has_advaw ? 0.1 : 0);
	lg.p("アドヴェリタス潜在補正", advrate);
	// switch of skilltype
	var rate = 1;
	var critical = 1;
	var mgn_totalrate = 0;
	var dmg_func = null;
	switch(Number(vc.atktype)){
		case 0:
			// AS
			// magnification
			var is_contain_sattr = (va.attr_s != -1);
			var m_mgn = attr_magnification(va.attr_m, ve.attr);
			var s_mgn = attr_magnification(va.attr_s, ve.attr);
			var m_pnl = (vc.as_panel_type != 1 ? 1.0 : 0.5);
			var s_pnl = (vc.as_panel_type != 0 ? 1.0 : 0.5);
			mgn_totalrate = m_mgn * m_pnl + (is_contain_sattr ? s_mgn * s_pnl : 0);
			// rate
			rate = 0.5 * (vc.skillrate/100 + vc.enh_rate/100);
			// critical
			critical = (vc.as_iscritical ? 3 : 1);
			// add logobj
			lg.p("主属性:属性有利係数", m_mgn);
			lg.p("副属性:属性有利係数", s_mgn);
			lg.p("主属性:パネル係数", m_pnl);
			lg.p("副属性:パネル係数", s_pnl);
			lg.p("副属性を持っているかどうか", is_contain_sattr);
			lg.p("属性有利係数*パネル係数", mgn_totalrate);
			lg.p("AS補正済み基礎効果値(AS効果値+エンハンス)", rate);
			lg.p("クリティカル係数", critical);
			break;
		case 1:
			// SS
			// magnification
			$.each(vc.ss_atk_attr, function(i,e){
				var mgn = attr_magnification(e, ve.attr);
				mgn_totalrate += mgn;
				lg.p("属性[" + (i+1) + "]有利係数", mgn);
			});
			// rate
			rate = (vc.skillrate/100 + vc.skill_awc_rate/100 + vc.enh_rate/100);
			// lod added
			lg.p("属性有利係数の合計", mgn_totalrate);
			lg.p("基礎効果値(SS効果値+潜在結晶+エンハンス)", rate);
			break;
		case 2:
			// timebomb
			rate = (vc.skillrate/100 + vc.enh_rate/100 + 1 + chain/100);
			mgn_totalrate = attr_magnification(va.attr_m, ve.attr);
			dmg_func = function(atk, rand){
				return Math.floor(Math.floor(atk * rate) * mgn_totalrate * advrate * eguard * eweak);
			}
			lg.p("時限効果値", rate);
			lg.p("属性有利係数", mgn_totalrate);
			break;
		case 3:
			// burst
			rate = Math.floor(vc.ssb_rate_min + vc.ssb_rate_add * Math.pow(chain/vc.ssb_rate_mch, vc.ssb_rate_exp))/100
				 + vc.enh_rate/100;
			mgn_totalrate = attr_magnification(va.attr_m, ve.attr);
			lg.p("基礎効果値(SS効果値+エンハンス)", rate);
			lg.p("属性有利係数", mgn_totalrate);
			break;
	}
	// 打点を計算するか、ATKを計算するかで振り分ける
	if(!vc.find_killatk){
		// 打点計算
		if(!dmg_func){
			// 乱数以外を全て入れる
			var dmg_without_rand = (last_atk * rate * critical * mgn_totalrate * advrate * (1 + chain/100) * eguard * eweak);
			// 指定乱数込み
			var dmg = Math.floor(dmg_without_rand * rand);
			// 最低乱数込み
			var dmg_l = Math.floor(dmg_without_rand * 0.9);
			// 最高乱数込み
			var dmg_h = Math.floor(dmg_without_rand * 1.1);
			// 確殺に必要な乱数
			var need_rand_str = "";
			if(ve.hp <= dmg_l){
				need_rand_str = "0.9000[確定]";
			} else if(ve.hp >= dmg_h){
				need_rand_str = "-.----[撃破不可]";
			} else {
				var nr = ve.hp / dmg_without_rand;
				need_rand_str = "" + Math.floor(nr * 10000)/10000;
				lg.p("確殺に必要な乱数", nr);
			}
			$("#dmg_show_min").text(dmg_l);
			$("#dmg_show_min").toggleClass("killing", dmg_l >= ve.hp);
			$("#dmg_show_max").text(dmg_h);
			$("#dmg_show_max").toggleClass("killing", dmg_h >= ve.hp);
			$("#dmg_show_jstrand").text(need_rand_str);
			lg.p("乱数以外を全て入れた打点", dmg_without_rand);
			lg.p("指定乱数込み打点", dmg);
			lg.p("最低乱数込み打点", dmg_l);
			lg.p("最高乱数込み打点", dmg_h);
		} else {
			var dmg = dmg_func(last_atk, 1);
			$("#dmg_show_min").text("------");
			$("#dmg_show_max").text("------");
			$("#dmg_show_jstrand").text("-.----");
		}
		// html apply
		$("#dmg_show").text(dmg);
		$("#dmg_show").toggleClass("killing", dmg >= ve.hp);
		$("#enemy_hp_remain").text(Math.max(ve.hp - dmg, 0));
		// log add
	} else {
		// 打点計算
		if(!dmg_func){
			// 攻撃力と乱数以外を全て入れる
			var dmg_without_rand_and_atk
				= rate * critical * mgn_totalrate * advrate * (1 + chain/100) * eguard * eweak;
			// 指定乱数込み
			var dmg_watk = (dmg_without_rand_and_atk * rand);
			var need_atk = Math.floor(ve.hp / dmg_watk) - last_atk;
			// 最低乱数込み
			var dmg_l_watk = (dmg_without_rand_and_atk * 0.9);
			var need_atk_l = Math.floor(ve.hp / dmg_l_watk) - last_atk;
			// 最高乱数込み
			var dmg_h_watk = (dmg_without_rand_and_atk * 1.1);
			var need_atk_h = Math.floor(ve.hp / dmg_h_watk) - last_atk;
			// html apply
			$("#atk_show_max").text("あと " + need_atk_l);
			$("#atk_show_max").toggleClass("killing", need_atk_l <= 0);
			$("#atk_show_min").text("あと " + need_atk_h);
			$("#atk_show_min").toggleClass("killing", need_atk_h <= 0);
			lg.p("乱数と攻撃以外を全て入れた係数", dmg_without_rand_and_atk);
			lg.p("最低乱数時の必須打点", need_atk_l);
			lg.p("最高乱数時の必須打点", need_atk_h);
		} else {
			var dmg_without_atk = dmg_func(1, 1, 1);
			var need_atk = Math.floor(ve.hp / dmg_without_atk) - last_atk;
			$("#atk_show_max").text("------");
			$("#atk_show_min").text("------");
		}
		$("#atk_show").text("あと " + need_atk);
		$("#atk_show").toggleClass("killing", need_atk <= 0);
		// log add
		lg.p("指定乱数時の必須打点", need_atk);
	}
	// button enable
	$("#create_url").prop("disabled", false);
	$("#create_pct").prop("disabled", false);
	
	console.log(lg);
	return lg;
}

// value-get
function valueget(){
	var v = Glob_stat;
	// cond
	var vc = v.cond;
	vc.find_killatk = $("#card_addatk_scan").prop("checked");
	vc.add_atk = $("#card_addatk").val();
	vc.add_awatk = $("#card_atkup_awk").val();
	vc.status_up = $("#card_stup").val();
	vc.level = $("#card_lv").val();
	//vc.awakenum = $("#card_awn").val();
	vc.manaplus = $("#card_mana").val();
	vc.is_advawake = $("#card_isadv").prop("checked");
	vc.has_advaw = $("#card_isadvaw").prop("checked");
	vc.atktype = $("input[name=calctype]:checked").val();
	vc.as_panel_type = $("input[name=as_panel_col]:checked").val();
	vc.as_iscritical = $("#as_critical").prop("checked");
	vc.ss_atk_attr = $.map($("input[name=ss_attr_col]:checked"), function(e){
		return $(e).val();
	});
	vc.skillrate = $("#card_rate").val();
	vc.skill_awc_rate = $("#card_awenh").val();
	vc.enh_rate = $("#card_enh").val();
	vc.hit_num = $("#card_atkn").val();
	vc.ssb_rate_min = $("#card_rate_ssb_min").val();
	vc.ssb_rate_add = $("#card_rate_ssb_max").val();
	vc.rand = $("#fld_rand").val();
	vc.chain = $("#fld_chain").val();
	vc.e_guard = $("#enemy_guard").val();
	vc.e_weaken = $("#enemy_weaken").val();
	// ally
	var va = v.ally;
	va.atk = $("#ally_atk").val();
	// enemy
	var ve = v.enemy;
	ve.hp = $("#enemy_hp_input").val();
	ve.attr = $("input[name=enemy_attr_rd]:checked").val();
	return v;
}

// value-set
function valueset(v){
	// cond
	var vc = v.cond;
	$("#card_addatk_scan").prop("checked", vc.find_killatk);
	$("#card_addatk").val(vc.add_atk);
	$("#card_atkup_awk").val(vc.add_awatk);
	$("#card_stup").val(vc.status_up);
	$("#card_lv").val(vc.level);
	//$("#card_awn").val(vc.awakenum);
	$("#card_mana").val(vc.manaplus);
	$("#card_isadv").prop("checked", vc.is_advawake);
	$("#card_isadvaw").prop("checked", vc.has_advaw);
	$("input[name=calctype][value=" + vc.atktype + "]").prop("checked", true);
	$("input[name=as_panel_col][value=" + vc.as_panel_type + "]").prop("checked", true);
	$("#as_critical").prop("checked", vc.as_iscritical);
	$("input[name=ss_attr_col]").prop("checked", false);
	$.each(vc.ss_atk_attr, function(i,e){
		$("#ss_attr_col_0" + Number(e)).prop("checked", true);
	});
	$("#card_rate").val(vc.skillrate);
	$("#card_awenh").val(vc.skill_awc_rate);
	$("#card_enh").val(vc.enh_rate);
	$("#card_atkn").val(vc.hit_num );
	$("#card_rate_ssb_min").val(vc.ssb_rate_min);
	$("#card_rate_ssb_max").val(vc.ssb_rate_add);
	$("#fld_rand").val(vc.rand);
	$("#fld_chain").val(vc.chain);
	$("#enemy_guard").val(vc.e_guard);
	$("#enemy_weaken").val(vc.e_weaken);
	// ally
	var va = v.ally;
	/*
	select_show(va.card, true);
	$("#deck01").val(va.name);
	$("#ally01_img").attr("src", get_image_url(va.imageno, va.img_pref));
	$("#ally01_attr_main").attr("class", "attr_" + va.attr_m);
	$("#ally01_attr_sub").attr("class", "attr_" + (va.attr_s != -1 ? va.attr_s : va.attr_m));
	$("#ally_atk").val(va.atk);
	$("#ally_attr").val(va.attr_m + "," + va.attr_s);
	$("#card_isadvaw").prop("checked", vc.has_advaw);
	$("#ally01_img").off("click");
	$("#ally01_img").on("click", function(){
		window.open("/search/detail/?id=" + va.cardno, "_blank")
	});
	*/
	// enemy
	var ve = v.enemy;
	$("#enemy_hp_input").val(ve.hp);
	$("input[name=enemy_attr_rd]").prop("checked", false);
	$("#enemy_attr_" + ve.attr).prop("checked", true);
	$("#enemy_attr_main").attr("class", "attr_" + ve.attr);
	$("#enemy_attr_sub").attr("class", "attr_" + ve.attr);
	$("#enemy_img").attr("src", get_image_url(ve.imageno, ve.img_pref));
	
	Glob_stat = v;
	calculate();
	return v;
}

// calc-




// genelate url
function create_url(after){
	// objをJSON化して短縮する
	deckdata_SaveUrl(Glob_stat, after);
}

// load url
function load_url(){
	// クエリ取得
	var q = location.search;
	if (!q || q == "") {
		return false;
	}
	q = q.indexOf("?q=") == 0 ? q.substr(3) : q;
	// get
	deckdata_LoadUrl(q, function (result){
		// parse
		var js = JSON.parse(result);
		var obj = js.long.length > 0 ? JSON.parse(js.long) : null;
		if(obj == null){
			return;
		}
		obj = $.extend(true, {}, Glob_stat, obj);
		select_show(obj.ally.card, true, obj);
		valueset(obj);
		if(obj.cond.empty_rate){
			var r = $("#card_rate");
			r.val("");
			r.focus();
			obj.cond.empty_rate = false;
		}
	});
	return true;
}

// LvからHP/ATKを計算する
function calcLvStatus(nowLv, maxLv, statusAt1, maxStatus) {
	nowLv = nowLv || maxLv;
	return Math.floor((statusAt1) + (maxStatus - statusAt1) / (maxLv - 1) * (nowLv - 1));
}
