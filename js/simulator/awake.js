// 潜在能力から特定要素のみを抜き出す
// (L時の潜在のみ取り出す場合は第三引数をtrueにする。正確性について保証しないため注意)
function pickup_awakes(card, type, l_awakes) {
	var awakes = [];
	if (l_awakes) {
		awakes = $.grep(open_awake_composite(card.Lawake), function (e) {
			return e.type == type;
		});
		// L時発動の潜在結晶の分も足す
		if (card.crystal && card.crystal.length > 0) {
			var awakes_cr = $.grep(open_awake_composite(card.crystal), function (e) {
				return e.type == type && e.is_legend;
			});
			awakes = awakes.concat(awakes_cr);
		}
	} else {
		awakes = $.grep(open_awake_composite(card.awakes), function (e) {
			return e.type == type;
		});
		// 潜在結晶の分も足す
		if (card.crystal && card.crystal.length > 0) {
			var awakes_cr = $.grep(open_awake_composite(card.crystal), function (e) {
				return e.type == type && !e.is_legend;
			});
			awakes = awakes.concat(awakes_cr);
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
				awakes2=awakes2.concat(open_awake_composite(val.proc))
			}
			// 単体潜在能力であるならばそのまま出力する
			else{
				awakes2=awakes2.concat(val)
			}
		}
	});
	return awakes2;
}

// 潜在能力を味方に反映させる
function add_awake_ally(cards, nows, own_no, legend_skill) {
	// 自身ステアップ
	var own_statups = pickup_awakes(cards[own_no], "own_status_up", legend_skill);
	// 味方ステアップ
	var ally_statups = pickup_awakes(cards[own_no], "status_up", legend_skill);
	// 自身ステアップの反映
	$.each(own_statups, function (n, e) {
		if(!e.cond || e.cond(Field, own_no)){
			nows[own_no].maxhp += e.up_hp;
			nows[own_no].nowhp += e.up_hp;
			nows[own_no].atk += e.up_atk;
		}
	});
	// 味方ステアップの反映
	$.each(ally_statups, function (n, e) {
		for (var t = 0; t < cards.length; t++) {
			if(e.attr[cards[t].attr[0]] > 0
			&& check_spec_inarray(e.spec, cards[t].species)
			&& (!e.cond || e.cond(Field, own_no, t))) {
				nows[t].maxhp += e.up_hp;
				nows[t].nowhp += e.up_hp;
				nows[t].atk += e.up_atk;
				// 副属性一致潜在があったらさらにアップ
				if (e.sub_attr && e.sub_attr[cards[t].attr[1]] > 0) {
					nows[t].maxhp += e.up_hp_2;
					nows[t].nowhp += e.up_hp_2;
					nows[t].atk += e.up_atk_2;
				}
			}
		}
	});
}

// L時の潜在能力を解除する
function minus_legend_awake(cards, nows, own_no) {
	// 自身ステアップ(L)
	var own_statups = pickup_awakes(cards[own_no], "own_status_up", true);
	// 味方ステアップ(L)
	var ally_statups = pickup_awakes(cards[own_no], "status_up", true);
	// 増加分を減らす
	$.each(own_statups, function (n, e) {
		if (!e.cond || e.cond(Field, own_no)) {
			var now = nows[own_no];
			now.maxhp = Math.max(now.maxhp - e.up_hp, 1);
			now.nowhp = Math.min(now.maxhp, now.nowhp);
			now.atk -= e.up_atk;
		}
	});
	$.each(ally_statups, function (n, e) {
		for (var t = 0; t < cards.length; t++) {
			if(e.attr[cards[t].attr[0]] > 0
			&& check_spec_inarray(e.spec, cards[t].species)
			&& (!e.cond || e.cond(Field, own_no, t))) {
				var now = nows[t];
				now.maxhp -= e.up_hp;
				now.nowhp = Math.min(now.maxhp, now.nowhp);
				now.atk -= e.up_atk;
				// 副属性一致潜在だったらさらに減らす
				if (e.sub_attr && e.sub_attr[cards[t].attr[1]] > 0) {
					nows[t].maxhp -= e.up_hp_2;
					nows[t].nowhp -= e.up_hp_2;
					nows[t].atk -= e.up_atk_2;
				}
			}
		}
	});
}

// ファストがいくつついているかを返却する
function has_fastnum(card) {
	var turn = 0;
	// ss_fastについて取得(L時は考慮する必要がないため第三引数はfalse固定)
	var ss_awakes = pickup_awakes(card, "ss_fast", false);
	for (var i = 0; i < ss_awakes.length; i++) {
		turn += ss_awakes[i].turn;
	}
	return turn;
}

// コストを返す
function card_cost(card) {
	var cost = card.cost;
	// cost down
	var cd_awakes = pickup_awakes(card, "costdown", false);
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
function card_paneb(card) {
	var paneb = [0, 0, 0, 0, 0];
	var pb_awakes = pickup_awakes(card, "panel_boost", false);
	for (var i = 0; i < pb_awakes.length; i++) {
		for (var j = 0; j < 5; j++) {
			paneb[j] += pb_awakes[i].attr[j] * pb_awakes[i].efv;
		}
	}
	return paneb;
}

// ダメージ軽減値を返す
function card_dmg_relief(card, now, t_attr) {
	var r = 0;
	var ar_awakes = pickup_awakes(card, "damage_relief", false);
	if (is_legendmode(card, now)) {
		ar_awakes = ar_awakes.concat(pickup_awakes(card, "damage_relief", true));
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
function awake_neftjod_check(now, index, before_hp) {
	var neft = pickup_awakes(Field.Allys.Deck[index], "neftjod", false);
	if (is_legendmode(Field.Allys.Deck[index], now)) {
		neft = neft.concat(pickup_awakes(Field.Allys.Deck[index], "neftjod", true));
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
function cards_heal_afterbattle(cards) {
	var r = 0;
	for(var p in cards){
		var c = cards[p];
		var abh_awakes = pickup_awakes(c, "heal_after_battle", false);
		for (var j = 0; j < abh_awakes.length; j++) {
			r += abh_awakes[j].perc;
		}
	}
	return r / 100;
}

// 潜在による異常無効を確認する
function Awake_AbsInvalid(card, now, type) {
	var ai_awakes = pickup_awakes(card, "abstate_invalid", false);
	if (is_legendmode(card, now)) {
		ai_awakes = ai_awakes.concat(pickup_awakes(card, "abstate_invalid", true));
	}
	for (var i = 0; i < ai_awakes.length; i++) {
		// 定義が配列なら全てに対しチェック
		if ($.isArray(ai_awakes[i].tgtype)) {
			return $.grep(ai_awakes[i].tgtype, function (e) {
				return e == type;
			}).length > 0;
		}
		// 単体定義なら1つに対しチェック
		else if (type === ai_awakes[i].tgtype) {
			return true;
		}
	}
	return false;
}

// 最終補正値を取得する
function Awake_get_multiple(card, now) {
	var rate = 1;
	var type = "awake_damage_multiple";
	var dm_awakes = pickup_awakes(card, type, false);
	if (is_legendmode(card, now)) {
		dm_awakes = dm_awakes.concat(pickup_awakes(card, type, true));
	}
	for (var i = 0; i < dm_awakes.length; i++) {
		var dm = dm_awakes[i];
		rate *= dm.rate;
	}
	return rate;
}

// L時突入時に潜在SSを発動する
function Awake_dospskill(fld, index) {
	var card = fld.Allys.Deck[index];
	var now = fld.Allys.Now[index];
	if (!is_legendmode(card, now)) {
		return false;
	}
	var ls_awakes = pickup_awakes(card, "awake_spskill", true);
	for (var i = 0; i < ls_awakes.length; i++) {
		var ls = ls_awakes[i];
		SpSkill[ls.skill](fld, index, null, [ls.p1, ls.p2, ls.p3, ls.p4]);
	}
}