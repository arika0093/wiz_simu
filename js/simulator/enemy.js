// 今戦っている相手の配列を返す
function GetNowBattleEnemys(fld, i) {
	if (i === undefined) {
		return fld.Enemys.Data[fld.Status.nowbattle - 1].enemy;
	} else {
		return fld.Enemys.Data[fld.Status.nowbattle - 1].enemy[i];
	}
}

// 敵出現順番生成
function CreateEnemypopup(fld, qst) {
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
function is_allkill(fld) {
	var i_allkill = true;
	var enemys = GetNowBattleEnemys(fld);
	for (var i = 0; i < enemys.length; i++) {
		// 全部の敵を倒してるかどうか判定する
		i_allkill = (i_allkill && enemys[i].nowhp <= 0);
	}
	return i_allkill;
}

// 味方全滅確認
function is_ally_alldeath(fld) {
	var allyd = true;
	var nows = fld.Allys.Now;
	for (var i = 0; i < nows.length; i++) {
		// 全部の敵を倒してるかどうか判定する
		allyd = (allyd && nows[i].nowhp <= 0);
	}
	return allyd;
}

// 敵を全滅させたか確認し、全滅してたら次の敵を出現させる
function allkill_check(fld, is_ssfinish) {
	var st = fld.Status;
	var enemy = GetNowBattleEnemys(fld);
	// 敵全滅確認
	var e_ak = is_allkill(fld);
	// 蘇生処理確認
	if (e_ak) {
		var rev_rst = enemy_reverse_check(fld);
		e_ak = !rev_rst;
	}
	// 全ての敵を倒していたら
	if (e_ak) {
		// 全終了確認
		if (fld.Enemys.Popuplist.length <= st.nowbattle) {
			// 終了処理開始
			st.finish = true;
			fld.log_push(st.nowbattle + "戦目突破(" + st.nowturn + "ターン)");
			fld.log_push("QUEST CLEARED! (Total: " + (st.totalturn + 1) + "turn)");
			// ログにSpeedscoreを記載
			fld.Status.speedscore = actionSpScoreAnalyze(st.totalturn + 1, durturn_string(fld), st.act_log);
			fld.log_push("ACTION-FACTOR: " + fld.Status.speedscore, "orange");
		} else {
			fld.log_push(st.nowbattle + "戦目突破(" + st.nowturn + "ターン)");
			// 次に進む
			st.nowbattle += 1;
			// タゲ全リセット
			target_allselect(fld, -1);
		}
		// パネル付与効果を全部リセット
		st.panel_add = [];
		//クエスト依存パネル効果の設定
		if (fld.Quest.panel_effect) {
			var peff = fld.Quest.panel_effect;
			for (var i = 0; i < peff.length; i++) {
				ss_object_done(fld, 0, peff[i]);
			}
		}
		st.durturn.push({ ssfin: is_ssfinish, turn: st.nowturn });
		st.nowturn = 1;
	} else if (!(e_ak && is_ssfinish)) {
		// ターンカウントを+1する
		st.nowturn += 1;
	}
	return e_ak;
}

// 敵攻撃の対象配列を生成する
function gen_enemytarget_array(fld, tnum, atkn, tgtype, nows) {
	var gen_ar = [];
	var deck_n = fld.Allys.Deck.length;
	var tgtype_isfunc = (tgtype !== true && tgtype);
	for (var an = 0; an < atkn; an++) {
		// 攻撃対象を毎回変えないなら最初の要素をコピーする
		if (tgtype !== true && an > 0) {
			gen_ar[an] = gen_ar[0];
			continue;
		}
		var tg_arr = [];
		// 生きてる味方を追加
		for (var i = 0; i < deck_n; i++) {
			var nw = nows ? nows[i] : fld.Allys.Now[i];
			if (nw.nowhp > 0) {
				tg_arr.push(i);
			}
		}
		// 攻撃対象関数が指定されているならそれを実行
		if (tgtype_isfunc) {
			var r = tgtype(nows, tnum);
		} else {
			// ランダム取得
			var gen_l = Math.min(tnum, tg_arr.length, deck_n);
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
		}
		r.sort(function (a, b) {
			if (a < b) return -1;
			if (a > b) return 1;
			return 0;
		});
		gen_ar[an] = r;
	}
	return gen_ar;
}

// 敵の攻撃処理を行う
function enemy_move(fld) {
	// 敵行動開始時の味方の状況を取得
	var nows_smove = $.extend(true, [], fld.Allys.Now);
	var enemys = GetNowBattleEnemys(fld);
	var e_moves = [];
	for (var i = 0; i < enemys.length; i++) {
		// 行動が定義されてないなら飛ばす
		var e = enemys[i];
		if (e.nowhp <= 0 || !e.move ||
			(!e.move.on_move && !e.move.on_move_angry)) { continue; }
		// ターンカウントを1減らす
		e.move.turn -= 1;
		// ターンカウントが0なら行動
		if (e.move.turn <= 0) {
			// ターンカウントを戻す
			e.move.turn = e.move.wait;
			// 遅延解除
			e.flags.isdelay = false;
			// 取得
			e_moves[i] = {
				move: get_enemy_move_skill(fld, e),
				index: i
			}
		} else {
			e_moves[i] = {
				move: null,
				index: i
			}
		}
	}
	// 優先度で並び替え
	e_moves.sort(function (a, b) {
		if ((!a.move || a.move.priority === undefined)
		 && (!b.move || b.move.priority === undefined)) {
			return a.index > b.index;
		}
		if (!b.move || b.move.priority === undefined) { return -1; }
		if (!a.move || a.move.priority === undefined) { return 1; }
		return a.move.priority < b.move.priority;
	});
	// 実行
	for (var i = 0; i < e_moves.length; i++) {
		if (!e_moves[i] || !e_moves[i].move) {
			continue;
		}
		var move = e_moves[i].move;
		var index = e_moves[i].index;
		// 力溜め状態解除
		turneff_break(fld, GetNowBattleEnemys(fld, index).turn_effect, index, "force_reservoir");
		// e_moves[i]が関数でない(=配列である)場合
		if (move.caller === undefined) {
			for (var mi = 0; mi < move.length; mi++) {
				move[mi](fld, index, nows_smove);
			}
		} else {
			move(fld, index, nows_smove);
		}
	}
	// スキカン確認
	turneff_check_skillcounter(fld);
}

// 条件に適した敵スキルを取得する
function get_enemy_move_skill(fld, e) {
	// 怒り時は怒りスキルを参照する
	var em = (e.move.isangry && e.move.on_move_angry) ? e.move.on_move_angry : e.move.on_move;
	// 行動番号が定義されてないなら最初に
	if (e.move.m_index === undefined) {
		e.move.m_index = 0;
	}
	// 使用可能なスキルを抜き出す(countが未定義または0)
	var uskils = $.grep(em, function (eskl) {
		if (!eskl) { return true; }
		if (eskl.count <= 0) {
			return true;
		} else {
			// count残存が残ってる場合-1する
			eskl.count--;
		}
	});
	// 攻撃スキルが抽出出来なかった場合行動しない
	if (uskils.length <= 0) { return null; }
	// ランダム取得ならランダムに、そうでないなら順番に取得
	if (e.move.atrandom) {
		var rst = uskils[Math.floor(Math.random() * uskils.length)];
	} else {
		if (uskils[0].interval > 0) {
			var call_index = 0;
			var rst = uskils[call_index];
			e.move.m_index = 0;
		} else {
			var call_index = Math.min(e.move.m_index, uskils.length - 1);
			var rst = uskils[call_index];
			e.move.m_index = (call_index + 1) % (uskils.length);
		}
	}
	if (rst == null) { return null; }
	// count値をintervalの値にする
	rst.count = rst.interval || 0;
	return rst.move;
}

// 敵出現時の先制攻撃処理を行う
function enemy_popup_proc(fld){
	var enemys = GetNowBattleEnemys(fld);
	for (var i = 0; i < enemys.length; i++) {
		if (enemys[i].move && enemys[i].move.on_popup) {
			for (var j = 0; j < enemys[i].move.on_popup.length; j++) {
				enemys[i].move.on_popup[j].move(fld, i);
			}
		}
	}
	// 味方スキル反射の処理を行う
	turneff_check_skillcounter(fld);
	// 怒り確認
	enemy_damage_switch_check(fld, "damage_switch", false, true, false);
}

// 敵ダメージなどに反応するあれこれの制御
// type: 取得するタイプ, is_ss: SS発動時かどうか, is_preem: 先制行動かどうか, is_reset: フラグをリセットするか
function enemy_damage_switch_check(fld, type, is_ss, is_preem, is_reset) {
	var rst = false;
	var enemys = GetNowBattleEnemys(fld);
	type = type || "damage_switch";
	$.each(enemys, function (i, e) {
		if (e.turn_effect.length > 0) {
			var skillct = $.grep(e.turn_effect, function (g) {
				return g.type == type;
			});
			for (var j = 0; j < skillct.length; j++) {
				var s = skillct[j];
				var ischeck = e.flags.on_damage || s.oncond_anytime;
				if (ischeck && s.cond(fld, i, is_ss, is_preem) && --s.on_cond.count <= 0) {
					s.on_cond.move(fld, i);
					s.on_cond.count = s.on_cond.interval;
					rst = true;
				}
			}
			if (is_reset) {
				e.flags.on_damage = false;
			}
		}
	});
	if (rst) {
		turneff_check_skillcounter(fld);
	}
	return rst;
}

// 敵復活処理を行う関数
function enemy_reverse_check(fld) {
	// 現在の戦闘を取得
	var nd = fld.Enemys.Data[fld.Status.nowbattle - 1];
	// 復活先が指定されているなら置き換え
	if (isexist_enemy_rev(fld)) {
		// 蘇生先のデータ取得
		var rd = fld.Enemys.revData[nd.rev_index];
		// 入れ替え
		nd.enemy[0] = rd;
		if (nd.enemy[2]) {
			delete nd.enemy.splice(1, 2);
		}
		else if (nd.enemy[1]) {
			delete nd.enemy.splice(1, 1);
		}
		nd.rev_check = true;
		fld.log_push("Enemy[" + (nd.rev_used + 1) + "]: 復活発動");
		// フラグリセット
		initialize_allys_flags(fld, fld.Allys.Now);
		// 先制行動
		enemy_popup_proc(fld);
		return true;
	}
	return false;
}

// 敵復活が存在するかどうかの確認関数
function isexist_enemy_rev(fld) {
	// 現在の戦闘を取得
	var nd = fld.Enemys.Data[fld.Status.nowbattle - 1];
	return !nd.rev_check && nd.rev_index !== undefined;
}

// argObjから敵行動を復旧する用の関数
function restoreEnemyMoveFunction(fld){
	var edata = fld.Enemys.Data;
	$.each(edata, (is,es) => {
		$.each(es, (i,e) => {
			var arg = e.argObj;
			var fc = arg.__fname__;
			var param = [];
			var count = 0;
			for(key in arg){
				var v = arg[key];
				if(v != fc){
					param[count] = v;
					count++;
				}
			}
			// evalで復元する
			e.move = eval(`${fc}(...[${param}])`);
		});
	});
	
	
	
	
	
	
}