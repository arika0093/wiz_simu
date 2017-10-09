// 解答したときの処理
function panel(attr) {
	var st = Field.Status;
	var cnst_rnd = Number($("#attack_rand_sel").val());
	var as_ignore = $("#as_ignore").prop('checked');
	// 文字ログ出力
	Field.log_push("【パネル: " + get_attr_string(attr, ",") + " / チェイン数: " +
		st.chain + "→" + (st.chain + 1) +
		" / 乱数: " + (cnst_rnd == -1 ? "Random" : cnst_rnd.toFixed(2)) +
	 " 】", "orange");
	// 再現用ログ関連
	actl_save_answer(attr, as_ignore);
	// チェイン+1
	if (st.chain_status >= 0) {
		st.chain += 1;
	}
	// 付与効果実行
	var pnladd = Number($("#panel_add_sel").val());
	if (pnladd != 0) {
		st.panel_add[pnladd - 1].func(Field);
	}
	// 解答した時点で生存している敵にフラグを建てる（タゲ異常パニック用）
	{
		var enemys = GetNowBattleEnemys();
		$.each(enemys, function (i,e) {
			e.flags.isAliveWhenAnswer = e.nowhp > 0 ? i+1 : false;
		});		
	}
	// 自傷する（ダメージパニック用）
	{
		for (var i = 0; i < Field.Allys.Deck.length; i++) {
			var now = Field.Allys.Now[i];
			var card = Field.Allys.Deck[i];
			var is_match_attr = $.grep(attr, function (t) {
				return t == card.attr[0] || t == card.attr[1];
			}).length != 0;
			if (is_match_attr) {
				$.each(now.turn_effect, function (n,e) {
					if(e.panic_consume){
						Field.log_push("Unit["+ (i+1) +"]: 【混乱自傷】");
						damage_ally(e.panic_damage, i, true);
						if(card.attr[1] != -1){
							damage_ally(e.panic_damage, i, true);
						}
					}
				});
			}
		}
	}
	// 味方攻撃処理
	{
		// 攻撃前状況のコピー
		var bf = $.extend(true, {}, Field);
		// 使用したASリスト
		var as_afters = [];
		// AS無視しないなら普通に、無視状況なら取得を少なく
		if (!as_ignore) {
			// コピー処理
			//pickup_answerskills(attr, "as_copy");
			// エンハ処理
			answer_skill(pickup_answerskills(attr, "support"), attr, as_afters, bf);
			// 攻撃
			var atk_skill = pickup_answerskills(attr, "attack");
			// 攻撃不可状況を除きデフォASを追加する
			$.each(atk_skill, function (i, e) {
				if (e != null) {
					atk_skill[i].unshift(Default_as()[0]);
				}
			});
			answer_skill(atk_skill, attr, as_afters, bf);
			// 回復
			answer_skill(pickup_answerskills(attr, "heal"), attr, as_afters, bf);
			// SS効果発動
			answer_skill(pickup_answerskills(attr, "as_spskill"), attr, as_afters, bf);
		} else {
			// 攻撃
			var atk_skill = pickup_answerskills(attr, "");
			// 攻撃不可状況を除きデフォASを追加する
			$.each(atk_skill, function (i, e) {
				if (e != null) {
					atk_skill[i].unshift(Default_as()[0]);
				}
			});
			answer_skill(atk_skill, attr, as_afters, bf);
		}
		// 使用したASの使用後処理
		for (var i = 0; i < as_afters.length; i++) {
			if (as_afters[i][0]) {
				as_afters[i][0]();
			}
		}
		// 自傷ASの処理
		var nows = Field.Allys.Now;
		for(var i=0; i < nows.length; i++){
			var hp = Field.Status.hpcons_task[i];
			if(hp > 0){
				Field.log_push("Unit[" + (i + 1) + "]: 自傷(" + Math.round(hp * 100) + "%)");
				damage_ally(Math.floor(nows[i].maxhp * hp), i);
				Field.Status.hpcons_task[i] = 0;
			}
		}
		// チェイン消費ASの処理
		var reducetask = Field.Status.chain_redtask || [];
		var tasksum = reducetask.length > 0 ? reducetask.reduce(function(p, c){ return p+c; }) : 0;
		if(tasksum > 0){
			var bef = Field.Status.chain;
			var aft = Math.max(bef - tasksum, 0);
			Field.log_push("AnswerSkill チェイン消費(" + bef + "→" + aft + ")");
			Field.Status.chain = aft;
		}
		// ASエンハ値リセット
		for (var i = 0; i < atk_skill.length; i++) {
			Field.Allys.Now[i].as_enhance = 0;
		}
	}
	// 各精霊のSSチャージを1増やす(L処理は敵の攻撃後に行う)
	for (var i = 0; i < Field.Allys.Deck.length; i++) {
		var now = Field.Allys.Now[i];
		if (now.nowhp > 0) {
			now.ss_current += 1;
		}
	}
	// 敵スキル処理
	{
		// 物理カウンター
		var enemys = GetNowBattleEnemys();
		$.each(enemys, function (i, e) {
			for (var n = 0; n < Field.Allys.Deck.length; n++) {
				if (e.flags.is_as_attack[n] > 0 && e.turn_effect.length > 0) {
					var skillct = $.grep(e.turn_effect, function (g) {
						return g.on_attack_damage;
					});
					for (var j = 0; j < skillct.length; j++) {
						skillct[j].on_attack_damage(Field, i, n);
					}
					e.flags.is_as_attack[n] = 0;
				}
			}
		});
		// 分裂処理
		enemy_damage_switch_check("enemy_division", false, false, false);
	}
	// 敵の処理
	enemy_move();
	// 各精霊のL処理をここで行う
	for (var i = 0; i < Field.Allys.Deck.length; i++) {
		var now = Field.Allys.Now[i];
		if (now.nowhp > 0) {
			// L処理
			legend_timing_check(Field.Allys.Deck, Field.Allys.Now, i);
		}
	}
	// この時点で保持しているturn_effectにフラグを立てる
	// （精霊強化やフィールド付与強化について、ターン減少処理を介さないようにするため）
	for (var i = 0; i < Field.Allys.Deck.length; i++) {
		var now = Field.Allys.Now[i];
		if (now.nowhp > 0) {
			$.each(now.turn_effect, function(i, e){
				e.isnotafteradded = true;
			});
		}
	}
	// 次のターンへ進む
	nextturn(false);
	// 表示
	sim_show();
}

// 誤答
function answer_miss()
{
	var fld = Field;
	fld.log_push("【誤答】");
	// 再現用ログ関連
	actl_save_answer_miss();
	// 誤答処理
	var cg = fld.Status.chain_awguard;
	if (cg > 0){
		fld.log_push("チェインガード潜在発動[残り:"+ (cg) +"→"+ (cg-1) +"]");
		fld.Status.chain_awguard--;
	}
	else if (fld.Status.chain_status > 0) {
		fld.log_push("チェインガード発動");
	}
	else {
		var ch_bef = fld.Status.chain;
		var ch_aft = fld.Status.chain = Math.floor(fld.Status.chain / 2);
		fld.log_push("チェイン減少[" + ch_bef + "→" + ch_aft + "]");
	}
	// 敵の処理
	enemy_move();
	// 敵ダメージ反応系
	//enemy_damage_switch_check();
	// 次のターンへ進む
	nextturn(false);
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
		// ASがない場合抜き出さない
		if (!ASkill || !ASkill.proc) {
			result.push([]);
			continue;
		}
		// 二重配列の場合1つにまとめる
		var as_proc = [];
		if (ASkill.proc[0].length) {
			for (var a = 0; a < ASkill.proc.length; a++) {
				multi_as(as_proc, ASkill.proc[a]);
			}
		} else {
			as_proc = ASkill.proc;
		}

		// 抜き出し
		result.push($.grep(as_proc, function (e) {
			return (e.type == type) && (subtype !== undefined ? e.subtype == subtype : true);
		}));
	}
	return result;
}

// アンサースキルの前処理
function answer_skill(as_arr, panel, as_afters, bef_f) {
	// 残り連撃回数管理
	var atk_duals = [1, 1, 1, 1, 1];
	var rem_duals = [1, 1, 1, 1, 1];
	// 攻撃前処理
	for (var i = 0; i < as_arr.length; i++) {
		var now = Field.Allys.Now[i];
		// 攻撃前処理
		$.each(now.turn_effect, function (_i, e) {
			if (e.bef_answer && as_arr[i]) {
				for (var ali = 0; ali < as_arr[i].length; ali++) {
					// 攻撃前処理を行い、戻り値がfalseなら除去する
					if (!e.bef_answer(Field, as_arr[i][ali])) {
						as_arr[i].splice(ali, 1);
						ali--;
					}
				}
			}
		});
	}
	// 各精霊の連撃回数を取得する
	for (var i = 0; i < as_arr.length; i++) {
		// パネルが一致するか確認
		var card = Field.Allys.Deck[i];
		var has_panelattr = (panel.indexOf(card.attr[0]) >= 0) || (card.attr[1] >= 0 && panel.indexOf(card.attr[1]) >= 0);
		if(has_panelattr){
			var chain = Field.Status.chain;
			// ASがないなら処理せず飛ばす
			if (as_arr[i] == null || as_arr[i].length <= 0) { continue; }
			for (var j = 0; j < as_arr[i].length; j++) {
				var card = Field.Allys.Deck[i];
				var as = as_arr[i][j];
				// atknを増やす関数が指定されているなら実行
				if(!as.atkn_funcadded && as.atkn && as.atkn.add_atkn){
					as.atkn = as.atkn.add_atkn(bef_f, j, -1);
					as.atkn_funcadded = true;
				}
				// 攻撃回数を増やす潜在結晶反映
				var aw_t = pickup_awakes(card, "awake_ans_atknup", false);
				if(aw_t.length > 0){
					for (var n = 0; n < aw_t.length; n++) {
						if (as.atkn >= 2 && !as.atkn_awakeadded) {
							as.atkn += aw_t[n].upvalue;
						}
					}
					as.atkn_awakeadded = true;
				}
				// ASが適用されるならば攻撃数を取得
				if (as.type == "attack" && is_answer_target(bef_f, as, chain, -1, -1, i, -1, panel)) {
					var subattr = (card.attr[1] >= 0) ? 2 : 1;
					rem_duals[i] = Math.max(rem_duals[i], as.atkn * subattr);
					atk_duals[i] = rem_duals[i];
				}
			}
		}
		else {
			// パネルがないなら飛ばす
			rem_duals[i] = atk_duals[i] = -1;
		}
	}
	// 連撃処理が入らないなら普通に攻撃関数を呼ぶ
	var maxatks = Math.max.apply(null, atk_duals);
	if(maxatks <= 1){
		for(var i=0; i < as_arr.length; i++){
			answer_skill_proc(as_arr, panel, i, atk_duals, rem_duals, i, as_afters, bef_f);
		}
	} else {
		// 連撃精霊がいるなら専用の処理に移動
		cardAttackAndDmgManage(as_arr, panel, as_afters, bef_f, atk_duals, rem_duals);
	}
}

// 精霊の攻撃順序/ダメージ反映を管理する処理
function cardAttackAndDmgManage(as_arr, panel, as_afters, bef_f, atk_duals, rem_duals){
	var SummonFrame = 7;	        // 横方向の増加F（召喚間隔）
	var DualAtkFrame = 9;           // 連撃処理の間隔F
	var ContractReflectFrame = 8;   // ダメージ反映F
	// 現在処理しているF位置を取得
	var CalcNowFrame = function(i, n) {
		return i * SummonFrame + n * DualAtkFrame;
	}
	// 現在Fから予約リストを処理する
	var ReflectContractsList = function(nf){
		var es = GetNowBattleEnemys();
		$.each(es, function(i,e){
			var cs = e.contract_dmgs;
			if(!cs){
				return;
			}
			$.each(cs, function(ic, c){
				if(!c.isreflected &&
					(nf < 0 || c.added_f + ContractReflectFrame <= nf)){
					e.nowhp = Math.max(e.nowhp - c.damage, 0);
					c.isreflected = true;
				}
			});
			e.contract_dmgs = $.grep(cs, function(c){
				return !c.isreflected;
			});
		});
	}
	// ------------------------------------------
	var loop_ct = -1;
	// 攻撃が全部終わったかどうかを確認する関数
	var isAllAtkEndCheck = function () {
		// 残攻撃回数を減らして全て0以下なら終了
		var rst = false;
		for (var l = 0; l < rem_duals.length; l++) {
			if (l <= loop_ct) {
				rem_duals[l]--;
			}
			rst = rst || rem_duals[l] > 0;
		}
		loop_ct++;
		return !rst;
	};
	// 参照攻撃番号までのスキップ精霊数を取得する関数
	var countSkipNum = function(x){
		var ct = 0;
		for(var n = x; n >= 0; n--){
			if(atk_duals[n] < 0){
				ct++;
			}
		}
		return ct;
	}
	// ------------------------------------------
	for(var i = 0; !isAllAtkEndCheck(); i++){
		// Skip精霊分だけStart位置を補正
		var cskip = countSkipNum(i)
		var ix = i + cskip;
		// ループカウントに支障がないよう補正
		if(atk_duals.length > i && atk_duals[i] < 0){
			loop_ct++;
		}
		for (var j = ix; j >= 0; j--) {
			// 攻撃精霊の幅を超えていたら無視
			if (j >= as_arr.length) {
				continue;
			}
			// 攻撃しない精霊をSkip
			if(atk_duals[j] < 0){
				// j--;
				continue;
			}
			// F位置を取得
			var F = CalcNowFrame(j - cskip, atk_duals[j] - rem_duals[j]);
			// 予約ダメージの反映
			ReflectContractsList(F);
			// 攻撃処理へ移行
			answer_skill_proc(as_arr, panel, j, atk_duals, rem_duals, loop_ct, as_afters, bef_f, F);
		}
	}
	// 予約ダメージの全反映
	ReflectContractsList(-1);
}

// アンサースキルの処理
function answer_skill_proc(as_arr, panel, i, atk_duals, rem_duals, loop_ct, as_afters, bef_f, nframe) {
	var card = Field.Allys.Deck[i];
	var now = Field.Allys.Now[i];
	var enemy_dat = GetNowBattleEnemys();
	// ASがないなら処理せず飛ばす
	if (as_arr[i] == null || as_arr[i].length <= 0) { return; }
	// 参照番を超えてるなら終了
	if (i > loop_ct) { return; }
	// 残攻撃回数が0以下なら飛ばす
	if (rem_duals[i] <= 0) { return; }
	// 攻撃属性(水炎属性の精霊が炎パネルを踏んだ時に炎から攻撃する的なアレ)
	var atk_attr = -1;
	if(panel.indexOf(card.attr[0]) >= 0){
		// 副属性を持っているなら、残り攻撃回数が半分以下なら属性を入れ替え
		if(card.attr[1] >= 0){
			atk_attr = (rem_duals[i] > atk_duals[i] / 2) ? card.attr[0] : card.attr[1];
		} else {
			atk_attr = card.attr[0];
		}
	} else {
		atk_attr = (rem_duals[i] > atk_duals[i]/2) ? card.attr[1] : card.attr[0];
	}
	// 攻撃属性がないならスルー
	if (atk_attr < 0) { return; }
	// 種類で分岐
	var rst = [];
	switch (as_arr[i][0].type) {
		case "attack":
			rst = answer_attack(card, now, enemy_dat, as_arr[i], atk_attr, panel, i, rem_duals[i], bef_f, nframe);
			break;
		case "support":
			rst = answer_enhance(as_arr[i], i, panel, bef_f);
			break;
		case "heal":
			rst = answer_heal(as_arr[i], i, panel, bef_f);
			break;
		case "as_spskill":
			rst = answer_spskill(as_arr[i], i, panel, bef_f);
			break;
		/*
		case "as_copy":
			// 処理的には大したことないのでここに暫定記載

			rst = true;
			break;
		*/
	}
	// 攻撃後処理に追加
	if (rst.length > 0) {
		as_afters.push(rst);
	}
}

// AS攻撃の処理
// (カード種類, 現在の状況, 敵データ, 自身のAS一覧, 攻撃属性, パネル, 味方番号, 残り攻撃回数, 現在F数)
function answer_attack(card, now, enemy, as, attr, panel, index, atk_rem, bef_f, nframe) {
	// 敵それぞれに対して有効なASのindexの配列
	var as_rate = [];
	var as_pos = [];
	var as_afters = [];

	// 敵それぞれについて条件の良いASを取り出す
	for (var ai = 0; ai < as.length; ai++) {
		var chain = Field.Status.chain;
		for (var ei = 0; ei < enemy.length; ei++) {
			var is_ans = is_answer_target(bef_f, as[ai], chain, enemy[ei].attr, enemy[ei].spec, index, ei, panel);
			var rate_n = (is_ans ? as[ai].rate : 0);
			var rate_b = (as_pos[ei] !== undefined ? as_rate[ei] : 0);
			var aw_t = pickup_awakes(card, "awake_ans_rateup", false);
			// AS効果値後乗せ処理
			if (is_ans && as[ai].is_afteradd && !as[ai].disactuate) {
				rate_n += as[ai].add_f(bef_f, index, ei, panel);
			}
			// 潜在結晶考慮処理
			for (var i = 0; i < aw_t.length; i++) {
				if (is_ans && !as[ai].disactuate) {
					rate_n += Math.floor(aw_t[i].upvalue) / 100;
				}
			}
			as_rate[ei] = (rate_n >= rate_b ? rate_n : rate_b);
			as_pos[ei] = (rate_n >= rate_b ? ai : as_pos[ei]);
		}
	}
	// どの敵を攻撃するか
	var obj_tg = {
		now: now,
		as_list: as,
		as_rate: as_rate,
		as_pos: as_pos,
		panel: panel,
		chain: Field.Status.chain,
	};
	var targ = auto_attack_order(Field, enemy, attr, index, obj_tg);
	// 各種情報
	var g_dmg = 0;
	var atk_as = as[as_pos[targ]]
	var en = enemy[targ];
	var ch = Field.Status.chain;
	// 凶暴化状態か取得
	var is_berserk = $.grep(now.turn_effect, function(e){
		return e.isberserk
	}).length > 0;
	// 敵データを取得できなかったら(=外れた場合)MISSを出して終了
	if(is_berserk && (en === undefined || en.nowhp <= 0 || atk_as === undefined)){
		Field.log_push("Unit[" + (index + 1) + "]: MISS(target: 敵[" + (targ + 1) + "])");
		atk_as = as[as_pos[0]];
	}
	// 全体攻撃なら敵全体にダメージ計算
	else if (atk_as.isall) {
		// 分散攻撃なら敵の数取得
		var var_num = 0;
		if(atk_as.isvariance){
			for(var i=0; i<enemy.length; i++){
				var enm = enemy[i];
				if (enm.nowhp > 0) {
					var_num += 1;
				}
			}
		}
		// それぞれに攻撃
		for (var tg = 0; tg < enemy.length; tg++) {
			if (enemy[tg].nowhp <= 0) { continue; }
			var is_as = enemy[tg].flags.is_as_attack;
			// 乱数
			var rnd = damage_rand();
			// ダメージ計算
			g_dmg += attack_enemy(enemy[tg], now, attr, as_rate[targ], atk_as.atkn, panel, ch, rnd, index, tg, false, var_num, nframe);
			is_as[index] = is_as[index] ? is_as[index] + 1 : 1;
		}
	} else {
		// 乱数
		var rnd = damage_rand();
		var is_as = enemy[targ].flags.is_as_attack;
		// ダメージ計算
		g_dmg = attack_enemy(en, now, attr, as_rate[targ], atk_as.atkn, panel, ch, rnd, index, targ, false, 0, nframe);
		is_as[index] = is_as[index] ? is_as[index] + 1 : 1;
	}
	// 攻撃後処理
	if (atk_as.after && atk_rem == atk_as.atkn) {
		as_afters.push(atk_as.after(Field, index, g_dmg));
	}
	Field.Status.turn_dmg += g_dmg;
	return as_afters;
}

// エンハスキルの処理
function answer_enhance(as, i, p, bef_f) {
	var as_afters = [];
	var is_afteradded = false;
	for (var ci = 0; ci < Field.Allys.Deck.length; ci++) {
		var ass = {rate: 0};
		var card = Field.Allys.Deck[ci];
		var now = Field.Allys.Now[ci];
		var chain = Field.Status.chain;
		var time = Number($("#answer_time_sel").val());

		// 最大の値を取り出す
		for (var ai = 0; ai < as.length; ai++) {
			var as_t = {rate: 0};
			if (is_answer_target(bef_f, as[ai], chain, card.attr[0], card.species, i, -1, p, ci)) {
				as_t = $.extend(true, {}, as[ai]);
				// AS効果値後乗せ処理
				if (as_t.is_afteradd) {
					as_t.rate += as_t.add_f(bef_f, i, -1, p, ci);
				}
			}
			ass = (ass.rate < as_t.rate) ? as_t : ass;
		}

		// エンハ値追加
		var bef_enh = now.as_enhance ? now.as_enhance : 0;
		now.as_enhance = bef_enh + ass.rate;
		// 攻撃後処理
		if (ass.after && !is_afteradded) {
			as_afters.push(ass.after(Field, i, true));
			is_afteradded = true;
		}
	}
	return as_afters;
}

// 回復スキルの処理
function answer_heal(as, i, p, bef_f) {
	var as_afters = [];
	for (var ci = 0; ci < Field.Allys.Deck.length; ci++) {
		var ass = {rate: 0};
		var card = Field.Allys.Deck[ci];
		var now = Field.Allys.Now[ci];
		var chain = Field.Status.chain;
		var time = Number($("#answer_time_sel").val());

		// 最大の値を取り出す
		for (var ai = 0; ai < as.length; ai++) {
			var as_t = {rate: 0};
			if (is_answer_target(bef_f, as[ai], chain, card.attr[0], card.species, i, -1, p, ci)) {
				as_t = $.extend(true, {}, as[ai]);
				// AS効果値後乗せ処理
				if (as_t.is_afteradd) {
					as_t.rate += as_t.add_f(bef_f, i, -1, p, ci);
				}
			}
			ass = ass.rate < as_t.rate ? as_t : ass;
		}
		if (ass.rate > 0) {
			// 回復
			var heal_val = Math.floor(ass.rate * now.maxhp);
			var before = now.nowhp;
			heal_ally(Field, heal_val, ci);
			Field.log_push("Unit[" + (ci + 1) + "]: HP回復(HP: " + before + "→" + now.nowhp + ")");
			// 攻撃後処理
			if (ass.after && ci == 0) {
				as_afters.push(ass.after(Field, i, true));
			}
		}
	}
	return as_afters;
}

// SP発動スキルの処理
function answer_spskill(as, i, p, bef_f) {
	var as_afters = [];
	for (var ai = 0; ai < as.length; ai++) {
		ass = as[ai];
		if (is_answer_target(bef_f, ass, chain, -1, -1, i, -1, panel)) {
			var sco = ass.skill(ass.p1, ass.p2, ass.p3, ass.p4);
			ss_object_done(Field, i, sco);
		}
		// 攻撃後処理（いらない？）
		if (ass.after)  {
			as_afters.push(ass.after(Field, i, true));
		}
	}
	return as_afters;
}

// ASの対象になるかどうかを確認する
function is_answer_target(bef_f, as, ch, tg_attr, tg_spec, own_i, enm_i, panels, tg_i) {
	var rst = true;
	var cond_rst = false;
	// チェイン確認
	rst = rst && (ch >= as.chain);
	// 属性確認
	rst = rst && (tg_attr < 0 || as.attr[tg_attr] == 1);
	// 種族確認
	rst = rst && (tg_spec < 0 || check_spec_inarray(as.spec, tg_spec));
	// 条件確認
	rst = rst && !!(cond_rst = as.cond(bef_f, own_i, enm_i, panels, tg_i));
	// condで効果値が変更されたらapply
	if (rst && cond_rst > 1) {
		as.rate = cond_rst;
	}
	return rst;
}