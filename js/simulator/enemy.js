// 今戦っている相手の配列を返す
function GetNowBattleEnemys(i) {
	if (i === undefined) {
		return Field.Enemys.Data[Field.Status.nowbattle - 1].enemy;
	} else {
		return Field.Enemys.Data[Field.Status.nowbattle - 1].enemy[i];
	}
}

// 敵出現順番生成
function CreateEnemypopup(qst) {
	var poplist = [];
	var pop_i = [];
	for (var t = 0; t < qst.aprnum; t++) {
		pop_i.push($.map(qst.data, function (e, i, c) {
			// 配列内に現在見てるターン数の数字があったら現在の配列番号を返す
			var aprt_i = $.inArray(t + 1, e.appearance);
			if (aprt_i >= 0) {
				return i;
			}
		}));
		if (!qst.overlap && poplist.length > 0) {
			// 重複回避
			for (var i = 0; i < pop_i[t].length; i++) {
				if (poplist.indexOf(pop_i[t][i]) >= 0) {
					pop_i[t].splice(pop_i[t].indexOf(pop_i[t][i]), 1);
					i--;
				}
			}
		}
		var rand = Math.floor(Math.random() * pop_i[t].length);
		poplist.push(pop_i[t][rand]);
	}
	return poplist;
}

// 全滅確認
function is_allkill() {
	var i_allkill = true;
	var enemys = GetNowBattleEnemys();
	for (var i = 0; i < enemys.length; i++) {
		// 全部の敵を倒してるかどうか判定する
		i_allkill = (i_allkill && enemys[i].nowhp == 0);
	}
	return i_allkill;
}

// 敵を全滅させたか確認し、全滅してたら次の敵を出現させる
function allkill_check(is_ssfinish) {
	var ntrun = Field.Status.nowturn;
	var enemy = GetNowBattleEnemys();
	// 敵全滅確認
	var e_ak = is_allkill();
	// 全ての敵を倒していたら
	if (e_ak) {
		// 全終了確認
		if (Field.Enemys.Popuplist.length <= Field.Status.nowbattle) {
			// 終了処理開始
			Field.Status.finish = true;
			Field.log_push(Field.Status.nowbattle + "戦目突破(" + ntrun + "ターン)");
			Field.log_push("QUEST CLEARED! (Total: " + (Field.Status.totalturn + 1) + "turn)");
		} else {
			Field.log_push(Field.Status.nowbattle + "戦目突破(" + ntrun + "ターン)");
			// 次に進む
			Field.Status.nowbattle += 1;
		}
		// パネル付与効果を全部リセット
		Field.Status.panel_add = [];
		Field.Status.durturn.push({ ssfin: is_ssfinish, turn: ntrun });
		Field.Status.nowturn = 0;
	}
	return e_ak;
}

// 敵攻撃の対象配列を生成する
function gen_enemytarget_array(tnum, atkn, isallrnd) {
	var gen_ar = [];
	var deck_n = Field.Allys.Deck.length;
	var gen_l = Math.min(tnum, deck_n);
	for (var an = 0; an < atkn; an++) {
		if (!isallrnd && an > 0) {
			gen_ar[an] = gen_ar[0];
			continue;
		}
		var tg_arr = [0, 1, 2, 3, 4];
		tg_arr.splice(deck_n, 5 - deck_n);
		var a = tg_arr.concat();
		var t = [];
		var r = [];
		var l = a.length;
		var n = gen_l < l ? gen_l : l;
		while (n-- > 0) {
			var i = Math.floor(Math.random() * l);
			r[n] = t[i] || a[i];
			--l;
			t[i] = t[l] || a[l];
		}
		gen_ar[an] = r;
	}
	return gen_ar;
}

// 敵の攻撃処理を行う
function enemy_move() {
	var enemys = GetNowBattleEnemys();
	var e_moves = [];
	for (var i = 0; i < enemys.length; i++) {
		// 行動が定義されてないなら飛ばす
		var e = enemys[i];
		if (e.nowhp <= 0 || !e.move || !e.move.on_move) { continue; }
		// 怒り時は怒りスキルを参照する
		var em = e.move.isangry ? e.move.on_move_angey : e.move.on_move;
		// ターンカウントを1減らす
		e.move.turn -= 1;
		// ターンカウントが0なら行動
		if (e.move.turn <= 0) {
			// 行動番号が定義されてないなら最初に
			if (e.move.m_index === undefined) {
				e.move.m_index = 0;
			}
			// ターンカウントを戻す
			e.move.turn = e.move.wait;
			// ランダム取得ならランダムに、そうでないなら順番に取得
			if (e.move.atrandom) {
				e_moves[i] = em[Math.floor(Math.random() * em.length)];
			} else {
				e_moves[i] = em[e.move.m_index];
				e.move.m_index = (e.move.m_index + 1)%(em.length);
			}
		} else {
			e_moves[i] = null;
		}
	}
	// 実行
	for (var i = 0; i < e_moves.length; i++) {
		if (e_moves[i] == null) {
			continue;
		}
		// e_moves[i]が関数でない(=配列である)場合
		if (e_moves[i].caller === undefined) {
			for (var mi = 0; mi < e_moves[i].length; mi++) {
				e_moves[i][mi](Field, i);
			}
		} else {
			e_moves[i](Field, i);
		}
	}
}

// 敵出現時の先制攻撃処理を行う
function enemy_popup_proc(){
	var enemys = GetNowBattleEnemys();
	for (var i = 0; i < enemys.length; i++) {
		if (enemys[i].move && enemys[i].move.on_popup) {
			for (var j = 0; j < enemys[i].move.on_popup.length; j++) {
				enemys[i].move.on_popup[j](Field, i);
			}
		}
	}
}

// ターン継続効果の確認(敵版)
function enemy_turn_effect_check(is_turn_move) {
	var enemys = GetNowBattleEnemys();
	for (var i = 0; i < enemys.length; i++) {
		for (var te = 0; te < enemys[i].turn_effect.length; te++) {
			var turneff = enemys[i].turn_effect[te];
			// 同一typeが複数存在し新しい方が重複不可なら最初の要素を消す
			var duals = $.grep(enemys[i].turn_effect, function (e) {
				return (e.type == turneff.type) && (!turneff.isdual);
			});
			if (duals.length >= 2) {
				var ix = enemys[i].turn_effect.indexOf(duals[0]);
				enemys[i].turn_effect.splice(ix, 1);
				te = (ix <= te ? te - 1 : te);
				continue;
			}
			if (turneff.lim_turn >= 0 && (!turneff._notfirst || is_turn_move)) {
				// 発動
				var prm = (!turneff._notfirst ? 1 : Math.min(turneff.lim_turn - 1, 0));
				turneff.effect(Field, prm, i);
				turneff._notfirst = true;
			}
			if (turneff.lim_turn == 0) {
				// 残りターンが0なら除外
				enemys[i].turn_effect.splice(te, 1);
				te--;
			}
		}
	}
}