// 潜在能力から特定要素のみを抜き出す
// (L時の潜在のみ取り出す場合は第三引数をtrueにする。正確性について保証しないため注意)
function pickup_awakes(fld, card, type, l_awakes) {
	var awakes = [];
	if (l_awakes) {
		awakes = $.grep(open_awake_composite(card.Lawake), function (e) {
			return e.type == type;
		});
	} else {
		awakes = $.grep(open_awake_composite(card.awakes), function (e) {
			return e.type == type;
		});
	}
	// 潜在結晶の分も足す
	if (card.crystal && card.crystal.length > 0) {
		var awakes_cr = $.grep(open_awake_composite(card.crystal), function (e) {
			// L時指定ならis_legendがtrue, そうでないならis_legendがfalse
			return e.type == type && ((e.is_legend && l_awakes) || (!e.is_legend && !l_awakes));
		});
		awakes = awakes.concat(awakes_cr);
	}
	// クエスト無効処置の分を除外する
	if(typeof(fld) != "undefined"){
		var daw = fld.Quest.disable_awake
		if(daw){
			awakes = $.grep(awakes, function(e){
				return !daw(e);
			});
		}
	}
	return awakes;
}

// 複合潜在能力を展開する
function open_awake_composite(awakes_t){
	var awakes2 = [];
	$.each(awakes_t, function(index,val){
		if (val != undefined){
			// 複合潜在能力であるならば再帰的に展開する
			if (val.type=="awake_composite"){
				Array.prototype.push.apply(awakes2, open_awake_composite(val.proc));
			}
			// 単体潜在能力であるならばそのまま出力する
			else{
				awakes2.push(val);
			}
		}
	});
	return awakes2;
}

// 潜在能力を味方に反映させる
function add_awake_ally(fld, cards, nows, own_no, legend_skill, ignorenowhpup) {
	// 自身ステアップ
	var own_statups = pickup_awakes(fld, cards[own_no], "own_status_up", legend_skill);
	// 味方ステアップ
	var ally_statups = pickup_awakes(fld, cards[own_no], "status_up", legend_skill);
	// 自身ステアップの反映
	$.each(own_statups, function (n, e) {
		if(!e.cond || e.cond(fld, own_no)){
			nows[own_no].maxhp += e.up_hp;
			if(!ignorenowhpup){
				nows[own_no].nowhp += e.up_hp;
			}
			nows[own_no].atk += e.up_atk;
			nows[own_no].def_awhp += e.up_hp;
			nows[own_no].def_awatk += e.up_atk;
		}
	});
	// 味方ステアップの反映
	$.each(ally_statups, function (n, e) {
		for (var t in cards) {
			if(e.attr[cards[t].attr[0]] > 0                     // 現在の属性と一致していて
			//&& e.attr[nows[t].def_attr[0]] > 0	            // 元々の属性とも一致していて(修正により削除)
			&& check_spec_inarray(e.spec, cards[t].species)     // 対象種族とも一致していて
			&& (!e.cond || e.cond(fld, own_no, t))) {         // 潜在固有の条件とも一致する場合反映
				nows[t].maxhp += e.up_hp;
				if(!ignorenowhpup){
					nows[t].nowhp += e.up_hp;
				}
				nows[t].atk += e.up_atk;
				nows[t].def_awhp += e.up_hp;
				nows[t].def_awatk += e.up_atk;
				// 副属性一致潜在があったらさらにアップ
				if (e.sub_attr && e.sub_attr[cards[t].attr[1]] > 0) {
					nows[t].maxhp += e.up_hp_2;
					if(nows[t].nowhp > 0 && !ignorenowhpup) {
						nows[t].nowhp += e.up_hp_2;
					}
					nows[t].atk += e.up_atk_2;
					nows[t].def_awhp += e.up_hp_2;
					nows[t].def_awatk += e.up_atk_2;
				}
			}
		}
	});
}

// L時の潜在能力を解除する
function minus_legend_awake(fld, cards, nows, own_no) {
	// 自身ステアップ(L)
	var own_statups = pickup_awakes(fld, cards[own_no], "own_status_up", true);
	// 味方ステアップ(L)
	var ally_statups = pickup_awakes(fld, cards[own_no], "status_up", true);
	// 増加分を減らす
	$.each(own_statups, function (n, e) {
		if (!e.cond || e.cond(fld, own_no)) {
			var now = nows[own_no];
			now.maxhp = Math.max(now.maxhp - e.up_hp, 1);
			now.nowhp = Math.min(now.maxhp, now.nowhp);
			now.atk -= e.up_atk;
			now.def_awhp -= e.up_hp;
			now.def_awatk -= e.up_atk;
		}
	});
	$.each(ally_statups, function (n, e) {
		for (var t in cards) {
			if(e.attr[cards[t].attr[0]] > 0
			&& check_spec_inarray(e.spec, cards[t].species)
			&& (!e.cond || e.cond(fld, own_no, t))) {
				var now = nows[t];
				now.maxhp = Math.max(now.maxhp - e.up_hp, 1);
				now.nowhp = Math.min(now.maxhp, now.nowhp);
				now.atk -= e.up_atk;
				now.def_awhp -= e.up_hp;
				now.def_awatk -= e.up_atk;
				// 副属性一致潜在だったらさらに減らす
				if (e.sub_attr && e.sub_attr[cards[t].attr[1]] > 0) {
					nows[t].maxhp -= e.up_hp_2;
					nows[t].nowhp -= e.up_hp_2;
					nows[t].atk -= e.up_atk_2;
					now.def_awhp -= e.up_hp_2;
					now.def_awatk -= e.up_atk_2;
				}
			}
		}
	});
}

// 潜在を無効化した後かけ直す関数
function func_reawake(fld, cards, nows){
	// 味方の現在HP/最大HP保存
	var allys_maxhp = [];
	var allys_nowhp = [];
	// 味方全員のステ上昇潜在を一旦無効化
	for(var i=0; i < nows.length; i++){
		var ntg = nows[i];
		allys_maxhp[i] = ntg.maxhp;
		allys_nowhp[i] = ntg.nowhp;
		ntg.def_awhp = ntg.def_hp;
		ntg.def_awatk = ntg.def_atk;
		ntg.maxhp = Math.max(ntg.def_hp, 1);
		ntg.nowhp = Math.min(ntg.maxhp, ntg.nowhp);
		ntg.atk = Math.max(ntg.def_atk, 0);
	}
	// 味方全体[助っ人込み]のステ上昇潜在を再度有効化
	for(var i in nows){
		add_awake_ally(fld, cards, nows, i, false);
	}
	// 味方全体のステ上昇潜在を再度有効化(L覚醒)
	for(var i=0; i < nows.length; i++){
		var ntg = nows[i];
		var isL = is_legendmode(fld, cards[i], ntg);
		if(isL){
			add_awake_ally(fld, cards, nows, i, true);
		}
	}
	// ステアップ効果値反映
	for(var i=0; i < nows.length; i++){
		var ntg = nows[i];
		$.each(ntg.turn_effect, function(j,e){
			if(e.type == "ss_statusup"){
				ntg.maxhp = Math.max(ntg.maxhp + e.up_hp, 1);
				ntg.atk = Math.max(ntg.atk + e.up_atk, 0);
			}
			if(e.type == "curse"){
				ntg.maxhp = Math.max(ntg.maxhp - e.hpdown, 1);
				ntg.atk = Math.max(ntg.atk - e.atkdown, 0);
			}
		});
	}
	// 元のHPと比較して修正
	for(var i=0; i < nows.length; i++){
		var ntg = nows[i];
		ntg.maxhp = Math.max(ntg.maxhp, 1);
		if(allys_nowhp[i] > 0){
			ntg.nowhp = Math.max(Math.min(allys_nowhp[i] + Math.max(ntg.maxhp - allys_maxhp[i], 0), ntg.maxhp), 1);
			/*
			var is_up = (ntg.maxhp >= allys_maxhp[i]);
			if(is_up){
				ntg.nowhp = Math.max(Math.min(allys_nowhp[i] + Math.max(ntg.maxhp - allys_maxhp[i], 0), ntg.maxhp), 1);
			} else {
				ntg.nowhp = Math.max(Math.min(allys_nowhp[i], ntg.maxhp), 1);
			}
			*/
		} else {
			ntg.nowhp = 0;
		}
	}
}

// ファストがいくつついているかを返却する
function has_fastnum(fld, card) {
	var turn = 0;
	// ss_fastについて取得(L時は考慮する必要がないため第三引数はfalse固定)
	var ss_awakes = pickup_awakes(fld, card, "ss_fast", false);
	for (var i = 0; i < ss_awakes.length; i++) {
		turn += ss_awakes[i].turn;
	}
	return turn;
}

// セカンドファストがいくつついているかを返却する
function has_secondfastnum(fld, card) {
	var turn = 0;
	// ss_fastについて取得(L時は考慮する必要がないため第三引数はfalse固定)
	var ss_awakes = pickup_awakes(fld, card, "ss_secondfast", false);
	for (var i = 0; i < ss_awakes.length; i++) {
		turn += ss_awakes[i].turn;
	}
	return turn;
}

// コストを返す
function card_cost(fld, card) {
	var cost = card.cost;
	// cost down
	var cd_awakes = pickup_awakes(fld, card, "costdown", false);
	for (var i = 0; i < cd_awakes.length; i++) {
		cost -= cd_awakes[i].down;
	}
	// costup
	if (card.crystal && card.crystal.length > 0) {
		for (var i = 0; i < card.crystal.length; i++) {
			cost += card.crystal[i].add_cost;
		}
	}
	return cost;
}

// パネブを返す
function card_paneb(fld, card) {
	var paneb = [0, 0, 0, 0, 0];
	var pb_awakes = pickup_awakes(fld, card, "panel_boost", false);
	for (var i = 0; i < pb_awakes.length; i++) {
		for (var j = 0; j < 5; j++) {
			paneb[j] += pb_awakes[i].attr[j] * pb_awakes[i].efv;
		}
	}
	return paneb;
}

// ダメージ軽減値を返す
function card_dmg_relief(fld, card, now, t_attr) {
	var r = 0;
	var ar_awakes = pickup_awakes(fld, card, "damage_relief", false);
	if (is_legendmode_onAnswer(fld, card, now)) {
		ar_awakes = ar_awakes.concat(pickup_awakes(fld, card, "damage_relief", true));
	}
	for (var i = 0; i < ar_awakes.length; i++) {
		if (ar_awakes[i].attr[t_attr] > 0 &&
			check_spec_inarray(ar_awakes[i].spec, card.species)) {
			r += ar_awakes[i].perc;
		}
	}
	$.each(now.turn_effect, function (_i, e) {
		if (e.isguard && e.attr[t_attr]) {
			r += e.rate;
		}
	});
	r = Math.min(100, r);
	return r / 100;
}

// 九死一生の判定を行う
function awake_neftjod_check(fld, now, index, before_hp) {
	var neft = pickup_awakes(fld, fld.Allys.Deck[index], "neftjod", false);
	if (is_legendmode_onAnswer(fld, fld.Allys.Deck[index], now)) {
		neft = neft.concat(pickup_awakes(fld, fld.Allys.Deck[index], "neftjod", true));
	}
	if (neft.length > 0) {
		var neft_total = 0;
		$.each(neft, function (i, e) {
			neft_total += e.perc / 100;
		});
		if ((before_hp >= Math.floor(now.maxhp * neft[0].hpcond / 100))
		&& (Math.random() <= neft_total)) {
			return true;
		} else {
			return false;
		}
	}
}

// 戦後回復値を返す
function cards_heal_afterbattle(fld, cards, nows) {
	var r = 0;
	for(var p in cards){
		var c = cards[p];
		var abh_awakes = pickup_awakes(fld, c, "heal_after_battle", false);
    	if (is_legendmode_onAnswer(fld, c, nows[p])) {
            abh_awakes = abh_awakes.concat(pickup_awakes(fld, c, "heal_after_battle", true));
        }
		for (var j = 0; j < abh_awakes.length; j++) {
			var aw = abh_awakes[j];
			var ap_cond = aw.append_cond;
			if(!ap_cond || (c.ape && c.ape.indexOf(ap_cond) >= 0)){
                r += aw.perc;
			}
		}
	}
	return r / 100;
}

// 潜在による異常無効を確認する
function Awake_AbsInvalid(fld, card, now, type) {
	var flag = false;
	var ai_awakes = pickup_awakes(fld, card, "abstate_invalid", false);
	if (is_legendmode_onAnswer(fld, card, now)) {
		ai_awakes = ai_awakes.concat(pickup_awakes(fld, card, "abstate_invalid", true));
	}
	for (var i = 0; i < ai_awakes.length; i++) {
		// 定義が配列なら全てに対しチェック
		if ($.isArray(ai_awakes[i].tgtype)) {
			flag = flag || $.grep(ai_awakes[i].tgtype, function (e) {
				return e == type;
			}).length > 0;
		}
		// 単体定義なら1つに対しチェック
		else if (type === ai_awakes[i].tgtype) {
			return true;
		}
	}
	return flag;
}

// 最終補正値を取得する
function Awake_get_multiple(fld, card, now) {
	var rate = 1;
	var type = "awake_damage_multiple";
	var dm_awakes = pickup_awakes(fld, card, type, false);
	if (is_legendmode_onAnswer(fld, card, now)) {
		dm_awakes = dm_awakes.concat(pickup_awakes(fld, card, type, true));
	}
	for (var i = 0; i < dm_awakes.length; i++) {
		var dm = dm_awakes[i];
		rate += (dm.rate - 1);
	}
	return rate;
}

// (被ダメージ)最終補正値を取得する
function Awake_get_damaged_multiple(fld, card, now) {
	var rate = 1;
	var type = "awake_damaged_multiple";
	var dm_awakes = pickup_awakes(fld, card, type, false);
	if (is_legendmode(fld, card, now)) {
		dm_awakes = dm_awakes.concat(pickup_awakes(fld, card, type, true));
	}
	for (var i = 0; i < dm_awakes.length; i++) {
		var dm = dm_awakes[i];
		rate += (dm.rate - 1);
	}
	return rate;
}

// L時突入時に潜在SSを発動する
function Awake_dospskill(fld, index) {
	var card = fld.Allys.Deck[index];
	var now = fld.Allys.Now[index];
	if (!is_legendmode(fld, card, now)) {
		return false;
	}
	var ls_awakes = pickup_awakes(fld, card, "awake_spskill", true);
	for (var i = 0; i < ls_awakes.length; i++) {
		var ls = ls_awakes[i];
		SpSkill[ls.skill](fld, index, null, [ls.p1, ls.p2, ls.p3, ls.p4]);
	}
}