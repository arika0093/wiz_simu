// 解答したときの処理
function panel(attr) {
	// もし誤答してたならチェインを切る
	if (attr.length <= 0) {
		Field.Status.chain = 0;
		Field.log_push("誤答(chain reset)");
	} else {
		// チェイン+1
		Field.Status.chain += 1;
		// エンハ処理
		answer_skill(pickup_answerskills(attr, "support"), attr);
		// 攻撃
		var atk_skill = pickup_answerskills(attr, "attack");
		// デフォのASを追加する
		$.each(atk_skill, function (i, e) {
			if (e != null) {
				atk_skill[i].unshift(Default_as()[0]);
			}
		});
		answer_skill(atk_skill, attr);
		// 回復
		answer_skill(pickup_answerskills(attr, "heal"), attr);
		// 各精霊のSSチャージを1増やす
		for (var i = 0; i < Field.Allys.Deck.length; i++) {
			var now = Field.Allys.Now[i];
			now.ss_current += 1;
			// L処理
			legend_timing_check(Field.Allys.Deck, Field.Allys.Now, i);
		}
	}
	// 敵の処理
	
	// 全滅確認
	allkill_check(false);
	Field.Status.totalturn += 1;
	Field.Status.nowturn += 1;
	// Fieldログ出力
	Field_log.save(Field.Status.totalturn, Field);
	// 表示
	sim_show();
}

// アンサースキルから踏んだパネルに応じた特定要素のみを抜き出す
function pickup_answerskills(attr, type, subtype) {
	var result = [];
	for (var i = 0; i < Field.Allys.Deck.length; i++) {
		// カード種類
		var card = Field.Allys.Deck[i];
		var al_now = Field.Allys.Now[i];
		// 死んでいたらnullを入れる
		if (al_now.nowhp <= 0) {
			result.push(null);
			continue;
		}
		// 踏んだパネル色と属性のどれかとで一致しない場合nullを入れる
		var is_match_attr = $.grep(attr, function (t) {
			return t == card.attr[0] || t == card.attr[1];
		}).length != 0;
		if (!is_match_attr) {
			result.push(null);
			continue;
		}

		// AS取得
		var ASkill = is_legendmode(card, al_now) ? card.as2 : card.as1;
		// 抜き出し
		result.push($.grep(ASkill.proc, function (e) {
			return (e.type == type) && (subtype !== undefined ? e.subtype == subtype : true);
		}));
	}
	return result;
}

// アンサースキルの処理
function answer_skill(as_arr, panel) {
	for (var i = 0; i < as_arr.length; i++) {
		// ASがないなら処理しない
		if (as_arr[i] == null || as_arr[i].length <= 0) { continue; }

		var card = Field.Allys.Deck[i];
		var now = Field.Allys.Now[i];
		var enemy_dat = Field.Enemys.Data[Field.Status.nowbattle - 1].enemy;
		var targ = Number($("#attack_target_sel").val());
		var rnd = Number($("#attack_rand_sel").val());
		// 種類で分岐
		switch (as_arr[i][0].type) {
			case "attack":
				answer_attack(card, now, enemy_dat, as_arr[i], panel, targ, rnd, i);
				break;
			case "support":
				answer_enhance(as_arr[i]);
				break;
			case "heal":
				answer_heal(as_arr[i]);
				break;
		}
	}
}

// 攻撃の処理
function answer_attack(card, now, enemy, as, attr, t, r, index) {
	// 敵それぞれに対して有効なASのindexの配列
	var as_pos = [];
	// 敵それぞれについて条件の良いASを取り出す
	for (var ai = 0; ai < as.length; ai++) {
		var chain = Field.Status.chain;
		for (var ei = 0; ei < enemy.length; ei++) {
			var rate_n = (is_answer_target(as[ai], chain, enemy[ei].attr, enemy[ei].spec, index, ei) ? as[ai].rate : 0);
			var rate_b = (as_pos[ei] !== undefined ? as[as_pos[ei]].rate : 0);
			as_pos[ei] = (rate_n >= rate_b ? ai : as_pos[ei]);
		}
	}
	// 攻撃順の属性(水炎属性の精霊が炎パネルを踏んだ時に炎から攻撃する的なアレ)
	var atk_attr = [];
	atk_attr[0] = (attr.indexOf(card.attr[0]) >= 0) ? card.attr[0] : card.attr[1];
	atk_attr[1] = (attr.indexOf(card.attr[0]) >= 0) ? card.attr[1] : card.attr[0];
	// 連撃回数分繰り返す
	for (var ati = 0; ati < as[as_pos[0]].atkn; ati++) {
		// 自身のそれぞれの属性について処理を行う
		for (var at = 0; at < 2; at++) {
			// 属性無しなら処理しない
			if (atk_attr[at] === undefined || atk_attr[at] == -1) {
				continue;
			}
			// どの敵を攻撃するか
			var targ = ((t != -1 && enemy[t] !== undefined && enemy[t].nowhp > 0) ?
				t : auto_attack_order(enemy, atk_attr[at]));
			// 各種情報
			var atr = atk_attr[at];
			var atk_as = as[as_pos[targ]]
			var en = enemy[targ];
			var ch = Field.Status.chain;
			// 全体攻撃なら敵全体にダメージ計算
			if (atk_as.isall) {
				for (var tg = 0; tg < enemy.length; tg++) {
					if (enemy[tg].nowhp <= 0) { continue; }
					// 乱数
					var rnd = (r != -1 ? r : 0.9 + (Math.random() * 0.2))
					// ダメージ計算
					var damage = as_attack_enemy(enemy[tg], now, atr, atk_as, attr, ch, rnd, index, tg);
				}
			} else {
				// 乱数
				var rnd = (r != -1 ? r : 0.9 + (Math.random() * 0.2))
				// ダメージ計算
				var damage = as_attack_enemy(en, now, atr, atk_as, attr, ch, rnd, index, targ);
			}
		}
	}
}

// エンハスキルの処理
function answer_enhance(as) {
	for (var ci = 0; ci < Field.Allys.Deck.length; ci++) {
		var rate = 0;
		var card = Field.Allys.Deck[ci];
		var now = Field.Allys.Now[ci];
		var chain = Field.Status.chain;
		// 最大の値を取り出す
		for (var ai = 0; ai < as.length; ai++) {
			rate = Math.max(rate,
				(is_answer_target(as[ai], chain, card.attr[0], card.species, ci) ? as[ai].rate : 0)
			);
		}
		// エンハ値追加
		var bef_enh = now.as_enhance ? now.as_enhance : 0;
		now.as_enhance = bef_enh + rate;
	}
}

// 回復スキルの処理
function answer_heal(as) {
	for (var ci = 0; ci < Field.Allys.Deck.length; ci++) {
		var rate = 0;
		var card = Field.Allys.Deck[ci];
		var now = Field.Allys.Now[ci];
		var chain = Field.Status.chain;
		// 最大の値を取り出す
		for (var ai = 0; ai < as.length; ai++) {
			rate = Math.max(rate,
				(is_answer_target(as[ai], chain, card.attr[0], card.species, ci) ? as[ai].rate : 0)
			);
		}
		if (rate > 0) {
			// 回復
			var heal_val = Math.floor(rate * now.maxhp);
			var before = now.nowhp;
			now.nowhp = Math.min(now.maxhp, now.nowhp + heal_val);
			Field.log_push("Unit[" + (ci + 1) + "]: HP回復(HP: " + before + "→" + now.nowhp + ")");
		}
	}
}

// ASの対象になるかどうかを確認する
function is_answer_target(as, ch, tg_attr, tg_spec, own_i, enm_i) {
	var rst = true;
	// チェイン確認
	rst = rst && (ch >= as.chain);
	// 属性確認
	rst = rst && (as.attr[tg_attr] == 1);
	// 種族確認
	rst = rst && (check_spec_inarray(as.spec, tg_spec));
	// 条件確認
	rst = rst && (as.cond(Field, own_i, enm_i));
	return rst;
}