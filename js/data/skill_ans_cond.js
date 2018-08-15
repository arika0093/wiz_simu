// ------------------------------------------------------
// AS発動条件のリストアップ
// 引数: fld, cond(owner), oi(ally index), ei(enemy index), p(panel), tgi(対象味方のindex)
// 戻り値: false: 未実行 / true: 実行
// ------------------------------------------------------
var AsCond = {
	// 常にtrue
	"always_true": function () {
		return true;
	},
	// パネル2色以上
	"as_panel_over2": function (fld, cond, oi, ei, panels){
		return panels.length >= 2;
	},
	// パネル3色(以上)
	"as_panel_over3": function (fld, cond, oi, ei, panels) {
		return panels.length >= 3;
	},
	// リーダー時
	"when_leader": function (fld, cond, oi, ei) {
		return oi == 0;
	},
	// HP一定以上
	"when_hp_more": function (fld, cond, oi, ei) {
		var {p} = cond.param;
		var now = fld.Allys.Now[oi];
		return now.nowhp >= now.maxhp * p;
	},
	// HP一定以下
	"when_hp_less": function (fld, cond, oi, ei) {
		var {p} = cond.param;
		var now = fld.Allys.Now[oi];
		return now.nowhp <= now.maxhp * p;
	},
	// HP一定未満
	"when_hp_under": function (fld, cond, oi, ei) {
		var {p} = cond.param;
		var now = fld.Allys.Now[oi];
		return now.nowhp < now.maxhp * p;
	},
	// デッキ内属性数判定
	"when_deckattr_check": function (fld, cond, oi, ei) {
		var count = 0;
		var attr_c = [0,0,0,0,0];
		var cards = fld.Allys.Deck;
		var {c_num} = cond.param;
		for (var i = 0; i < cards.length; i++) {
			attr_c[cards[i].attr[0]]++;
		}
		count = $.grep(attr_c, e => (e > 0) ).length;
		return count >= c_num;
	},
	// デッキ内特定属性数条件
	"when_deckattr_less": function (fld, cond, oi, ei) {
		var count = 0;
		var cards = fld.Allys.Deck;
		var {c_attr, c_num} = cond.param;
		for (var i = 0; i < cards.length; i++) {
			if (c_attr[cards[i].attr[0]] > 0) {
				count++;
			}
		}
		return count <= c_num;
	},
	// 味方種族一致
	"when_spec_match": function (fld, cond, oi, ei, p, tgi) {
		var cd = fld.Allys.Deck[tgi];
		var {m_specs} = cond.param;
		var rst = true;
		for (var i = 0; i < m_specs.length; i++) {
			rst = rst && (cd.species.indexOf(m_specs[i]) >= 0);
		}
		return rst;
	},
	// 味方副属性一致
	"when_subattr_match": function (fld, cond, oi, ei, p, tgi) {
		var {attr, sub} = cond.param;
		var cd = fld.Allys.Deck[tgi];
		return sub[cd.attr[1]] > 0;
	},
	// 敵特攻対象
	"when_enemyattr_match": function (fld, cond, oi, ei, p, tgi) {
		var {e_attr} = cond.param;
		var e = GetNowBattleEnemys(fld, ei);
		return ei < 0 || e.attr == e_attr;
	},
	// 自身が毒の時
	"when_own_poison": function (fld, cond, oi, ei, p, tgi) {
		var now = fld.Allys.Now[oi];
		return $.grep(now.turn_effect, (e) => {
			return e.type == "poison";
		}).length > 0;
	},
};

// ------------------------------------------------------
// AS効果値上乗せスキルのリストアップ
// 引数: fld, addf(owner), oi(own index), ei(enemy index), p(panel), tgi(対象味方のindex)
// 戻り値: 効果値を追加する
// ------------------------------------------------------
var AsAddRate = {
	// デッキ内種族数依存
	"as_deckspecs": function (fld, addf, oi, ei, p, tgi) {
		var {base, specs, ubase} = addf.param;
		var count = 0;
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var cd = fld.Allys.Deck[i];
			for (var s = 0; s < cd.species.length; s++) {
				if (specs.indexOf(cd.species[s]) >= 0) {
					count++;
				}
			}
		}
		return ubase + base * count;
	},
	// 戦闘不能精霊数依存
	"as_deckdeads": function (fld, addf, oi, ei, p, tgi) {
		var {base, ubase} = addf.param;
		var count = 0;
		var count = 0;
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var nw = fld.Allys.Now[i];
			if (nw.nowhp <= 0) {
				count++;
			}
		}
		return ubase + base * count;
	},
	// ランダム攻撃
	"as_stakeattack": function (fld, addf, oi, ei, p, tgi){
		var {u, t} = addf.param;
		return Number((Math.random() * (t - u) + u).toFixed(1));
	},
	// L精霊数依存
	"as_legendnum": function (fld, addf, oi, ei, p, tgi) {
		var l_count = 0;
		var cards = fld.Allys.Deck;
		var nows = fld.Allys.Now;
		var {rate} = addf.param;
		for (var i = 0; i < nows.length; i++) {
			l_count += (is_legendmode(fld, cards[i], nows[i]) ? 1 : 0);
		}
		return l_count * rate;
	},
	// 回答時間依存
	"as_timedep": function (fld, addf, oi, ei, p, tgi) {
		var time = Number($("#answer_time_sel").val());
		var {rate} = addf.param;
		return rate * time;
	},
	// 単色精霊数依存
	"as_singleattr_num": function (fld, addf, oi, ei, p, tgi) {
		var cards = fld.Allys.Deck;
		var {a,b} = addf.param;
		var num = 0
		for(var i=0; i < cards.length; i++){
			num += (cards[i].attr[1] == -1 ? 1 : 0);
		}
		return a + b * num;
	},
	// デッキ内属せお数依存
	"as_deckinattr_num": function (fld, addf, oi, ei, p, tgi) {
		var cards = fld.Allys.Deck;
		var {a,b} = addf.param;
		var match_attr = [0, 0, 0, 0, 0];
		for(var i=0; i < cards.length; i++){
			$.each(cards[i].attr, (i, e) => {
				if(e >= 0){
					match_attr[e]++;
				}
			});
		}
		return a + b * $.grep(match_attr, e => e > 0).length;
	},
	// チェインを消費して火力アップ
	"as_reducechain": function (fld, addf, oi, ei, p, tgi) {
		var nowchain = fld.Status.chain;
		var redtask = fld.Status.chain_redtask || [];
		var {rate, red_ch} = addf.param;
		var reducetask = 0;
		if ((nowchain - reducetask) >= red_ch) {
			redtask[oi] = red_ch;
			fld.Status.chain_redtask = redtask;
			return rate;
		} else {
			return 0;
		}
	},
};

// ------------------------------------------------------
// AS発動後スキルのリストアップ
// 引数: fld, aft(owner), oi(own index), g_dmg(added damage)
// ------------------------------------------------------
var AsAfter = {
	// HP吸収
	"as_hp_absorption": function (fld, aft, as, oi, g_dmg) {
		var {r} = aft.param;
		return function () {
			var now = fld.Allys.Now[oi];
			var hl = Math.floor(g_dmg * r);
			heal_ally(fld, hl, oi);
			fld.log_push("Unit[" + (oi + 1) + "]: HP吸収(+" + hl + ")");
		}
	},
	// 全体自傷スキル
	"as_consume_all": function (fld, aft, as, oi) {
		var {hp} = aft.param;
		return function () {
			for (var i = 0; i < fld.Allys.Deck.length; i++) {
				fld.Status.hpcons_task[i] += hp;
			}
		}
	},
	// 単体自傷スキル
	"as_consume_own": function (fld, aft, as, oi) {
		var {hp} = aft.param;
		return function () {
			fld.Status.hpcons_task[oi] += hp;
		}
	},
};

