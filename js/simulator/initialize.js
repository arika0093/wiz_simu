// 全データ
var Field = {
	// 各種定数(主に表示用)
	Constants: {
		Attr: [
			"火",
			"水",
			"雷",
			"光",
			"闇",
		],
		Species: [
			"龍族",
			"神族",
			"魔族",
			"天使",
			"妖精",
			"亜人",
			"物質",
			"魔法生物",
			"戦士",
			"術士",
			"アイテム",
			"AbCd",
		],
		Actlog_Ver: 103,
	},
	// クエストデータ
	Quest: {},
	// 味方データ
	Allys: {
		// カードデータ
		Deck: [],
		// 現在のステータス(maxhp, nowhp, atk, mana, ...)
		Now: [],
	},
	// 敵データ
	Enemys: {
		// 敵の出現順
		Popuplist: [],
		// 敵ステータス管理
		Data: [],
	},
	// 現在の状況管理
	Status: {
		// 乱数生成シード(試走結果再現に使用)
		seed: -1,
		// チェイン関連
		chain: 0,
		chain_status: 0,
		chainstat_turn: 0,
		// パネル付与関連
		panel_add: [],
		panel_guard: {
			attr: [],
			rate: 0,
		},
		// 継続効果関連
		continue_eff: [],
		// 最後に使用したSS
		latest_ss: null,
		// 助っ人関連
		is_helper: false,		// 助っ人が存在するかどうか
		is_hlpchanged: false,	// 助っ人と交代済であるか
		hlpchanged_index: -1,	// 交代した先のindex
		// ターンetc関連
		is_initialize: true,	// 初期化処理の最中はtrue
		durturn: [],
		nowturn: 1,
		totalturn: 0,
		nowbattle: 1,
		finish: false,
		limit_turn: -1,
		limit_now: -1,
		// 行動ログ
		act_log: [],
		is_spanel_only: true,
		turn_dmg: 0,
		total_kill: 0,
		speedscore: 0,
		// 結果保存
		result_id: 0,
		// 文字ログ
		log: [],
		d_log: [],
	},
	log_push: function (text, color) {
		var fs = Field.Status;
		if (fs.log[fs.totalturn] === undefined) {
			fs.log[fs.totalturn] = [];
		}
		text = color ? "//{" + color + "}" + text + "{}//" : text;
		fs.log[fs.totalturn].push(text);
	},
	detail_log: function (fc, title, text) {
		var fs = Field.Status;
		fs.d_log.push("#(battle: " + fs.nowbattle +
			", turn: " + (fs.totalturn+1) +
			"):{ " + text + "}"
		);
	}
}

// Field変数のログ(値が変わるallys.now, enemys.data, statusのみ入れておく)
var Field_log = {
	Allys: {},
	Enemys_data: [],
	Enemys_revdata: [],
	Status: [],
	now_index: 0,
	is_ssindex: false,
	// 保存関数
	save: function (index, fld) {
		this.Allys[index] = $.extend(true, {}, fld.Allys);
		this.Enemys_data[index] = $.extend(true, [], fld.Enemys.Data);
		this.Enemys_revdata[index] = $.extend(true, [], fld.Enemys.revData);
		this.Status[index] = $.extend(true, {}, fld.Status);
		this.now_index = index;
		// 保存indexより先の要素は消す
		this._removeover(index);
	},
	// 読み込み関数
	load: function (index) {
		var fld_reset = $.extend(true, {}, Field);
		fld_reset.Allys = $.extend(true, [], this.Allys[index]);
		fld_reset.Enemys.Data = $.extend(true, [], this.Enemys_data[index]);
		fld_reset.Enemys.revData = $.extend(true, [], this.Enemys_revdata[index]);
		fld_reset.Status = $.extend(true, {}, this.Status[index]);
		this.now_index = index;
		return fld_reset;
	},
	// サイズ
	length: function () {
		for (var i = 0; i < this.Status.length; i++) {
			if (!this.Status[i] || this.Status[i].chain === undefined) {
				return i;
			}
		}
		return this.Status.length;
	},
	// indexから先の余計な要素を消す
	_removeover: function (index) {
		for (var i = index + 1; i < this.length() ; i++) {
			this.Allys[i] = [];
			this.Enemys_data[i] = [];
			this.Status[i] = {};
		}
	}
}

// URLからデッキ/クエストを読み込む
$(function () {
	// load
	var deckdata = deckdata_Load(null, function (data) {
		// check
		if (data != null) {
			var simQuest = $.grep(Quests, function (e, i) {
				return e.id == data.quest;
			})[0];
			// 敵データを読み込む
			Field.Quest = simQuest;
			// -------------------------
			// 味方データを読み込む
			var als = Field.Allys;
			als.Deck = [];
			als.Now = new Array();
			for (var i = 0; i < data.deck.length; i++) {
				// 精霊読み込み
				var card = $.grep(Cards, function (e) {
					return e.cardno == data.deck[i].cardno;
				})[0];
				if (!card) { continue; }
				// 代入
				var ally = als.Deck[i] = $.extend(true, {}, card);
				// 潜在結晶を追加
				ally.crystal = data.deck[i].crystal;
				// 潜在個数を反映
				var awk_length = data.deck[i].awake;
				if (awk_length >= 0 && awk_length !== ally.awakes.length) {
					ally.awakes = ally.awakes.slice(0, awk_length);
				}
				// 現在のステ
				var now = als.Now[i] = {};
				var mana = data.deck[i].mana;
				now.mana = mana;
				now.maxhp = card.hp + mana;
				now.nowhp = card.hp + mana;
				now.atk = card.atk + mana;
				now.target = [];
				now.flags = {};
				now.flags.skill_counter = [];
				now.flags.damage_hits = [];
				now.turn_effect = [];
				now.after_turn = [];
				// SS状態をリセット
				now.ss_current = has_fastnum(ally);	// SSチャージターン
				now.ss_isfirst = true;	// SSをまだ発動していないかどうか
				now.ss_isboost = false;	// スキブを受けたかどうか
				now.islegend = false;
			}
			// 空要素を詰める
			als.Deck = $.grep(als.Deck, function (e) { return e !== undefined; });
			als.Now = $.grep(als.Now, function (e) { return e !== undefined; });
			// 助っ人チェック
			if (!!als.Deck[5]) {
				if (!simQuest.is_notusedhelper) {
					// 助っ人用位置へ移動させる(連番位置に置いておくと不便なので)
					als.Deck["helper"] = als.Deck[5];
					als.Now["helper"] = als.Now[5];
					Field.Status.is_helper = true;
				}
				als.Deck.pop();
				als.Now.pop();
			}
			// 潜在を反映させる
			for (var p in als.Deck) {
				var card = als.Deck[p];
				var now = als.Now[p];
				add_awake_ally(als.Deck, als.Now, p, false);
				if (Number(p) >= 0) {
					// 0tレジェンド精霊用(助っ人にはチェックを通さない)
					legend_timing_check(als.Deck, als.Now, p);
				}
			}
			// チェインブースト処理(助っ人は含めないので上と別処理)
			var dck = als.Deck;
			for (var i = 0; i < dck.length; i++) {
				var aws = pickup_awakes(dck[i], "awake_chboost", false);
				var add_chain = 0;
				$.each(aws, function (j, f) {
					add_chain += f.add;
				});
				if (add_chain > 0) {
					Field.Status.chain += add_chain;
					Field.log_push("Unit[" + (i + 1) + "]: Chain-Boost: +" + add_chain);
				}
			}
			// 戦闘開始前処理
			if (Field.Quest.battle_before) {
				var bbef = Field.Quest.battle_before;
				for (var i = 0; i < bbef.length; i++) {
					ss_object_done(Field, -1, bbef[i].proc);
				}
			}
			// -------------------------
			// 出現順番
			var fes = Field.Enemys;
			fes.Popuplist = CreateEnemypopup(simQuest);
			for (var i = 0; i < fes.Popuplist.length; i++) {
				var popup_enemys = simQuest.data[fes.Popuplist[i]];
				// 敵ステ
				fes.Data[i] = {};
				var data = fes.Data[i];
				data.enemy = [];
				for (var j = 0; j < popup_enemys.enemy.length; j++) {
					data.enemy[j] = $.extend(true, {}, popup_enemys.enemy[j]);
					data.enemy[j].nowhp = popup_enemys.enemy[j].hp;
					data.enemy[j].flags = {};
					data.enemy[j].flags.is_as_attack = [];
					data.enemy[j].turn_effect = [];
					//data.enemy[j].after_turn = [];
				}
			}
			// 蘇生時データ
			if (simQuest.revData) {
				fes.revData = [];
				for (var i = 0; i < simQuest.revData.length; i++) {
					var edat = simQuest.revData[i];
					// 敵ステ
					fes.revData[i] = {};
					fes.revData[i] = $.extend(true, {}, edat);
					fes.revData[i].nowhp = edat.hp;
					fes.revData[i].flags = {};
					fes.revData[i].flags.is_as_attack = [];
					fes.revData[i].turn_effect = [];
				}
			}
			// 敵の処理
			enemy_popup_proc();
			// -------------------------
			// タゲリセット
			target_allselect(-1);
			//クエスト依存パネル効果の設定
			if (Field.Quest.panel_effect) {
				var peff = Field.Quest.panel_effect;
				for (var i = 0; i < peff.length; i++) {
					ss_object_done(Field, 0, peff[i]);
				}
			}
			// 魔道杯乱舞方式なら処理を変更
			if (Field.Quest.limitturn) {
				var fs = Field.Status;
				fs.limit_turn = fs.limit_now = Field.Quest.limitturn;
			}
			// 初期化処理終了
			Field.Status.is_initialize = false;
			// 初期状態を保存
			Field_log.save(0, Field);
			// 表示
			$("#sim_log_inner").accordion({
				active: false,
				heightStyle: "content",
				collapsible: true
			});
			sim_show();
		} else {
			$("#sim_info_status").html("#ERROR: URLが正しくありません。");
			$(".panel_button").attr("disabled", "disabled");
		}
	});
});

// 全読み込みが終わってから実行
$(window).load(function () {
	// スマホ版でなければ
	if (window.innerWidth >= 600) {
		// Simulatorの位置に移動する
		scrollTo(0, $("#sim_top").offset().top + 1);
	} else {
		// 広告の位置に移動する
		scrollTo(0, $("div.simu_ads").offset().top - 1);
	}
});

// 次のターンに進む
function nextturn(is_ssfin) {
	var f_st = Field.Status;
	// 烈眼ダメージ
	retsugan_check(is_ssfin);
	// 効果の継続確認
	ss_continue_effect_check();
	turn_effect_check(false, is_ssfin);
	enemy_turn_effect_check(false);
	// 怒り確認
	enemy_damage_switch_check("damage_switch", false, false, false);
	// 全滅していなかったら効果ターンを減少
	reduce_turneffect(is_ssfin);
	turn_effect_check(true, is_ssfin);	// 再度チェックをいれる(バグるかも)
	enemy_turn_effect_check(true);
	// 総ダメージ出力
	Field.log_push("TURN TOTAL DAMAGE: " + Field.Status.turn_dmg, "blue");
	Field.Status.turn_dmg = 0;

	// 全滅確認
	var killed = allkill_check(is_ssfin);
	if (killed && !f_st.finish) {
		// 戦後回復処理
		var abh = cards_heal_afterbattle(Field.Allys.Deck);
		var nows = Field.Allys.Now;
		if (abh > 0) {
			for (var i = 0; i < Field.Allys.Deck.length; i++) {
				heal_ally(Field, Math.floor(nows[i].maxhp * abh), i);
			}
			Field.log_push("戦後回復: " + (abh * 100) + "%");
		}
		// 出現前にフラグリセット
		initialize_allys_flags(nows);
		// ここで新しい敵の処理を行う
		enemy_popup_proc();
	}
	// チェイン状態の確認
	if (f_st.chain_status != 0) {
		if (f_st.chain_status >= 2 || !killed) {
			f_st.chainstat_turn -= 1;
		}
		if (f_st.chainstat_turn == 0) {
			f_st.chain_status = 0;
			Field.log_push("Status: チェイン状態解除");
		}
	}
	// SSで全滅させてない or 全ての敵を全滅
	if (!is_ssfin || killed) {
		f_st.totalturn += 1;
	}
	// 魔道杯乱舞の終了処理
	if (!is_ssfin && !killed) {
		f_st.limit_now -= 1;
		// 残りターンが0になったら終了フラグを立てる
		if (!killed && f_st.limit_turn > 0 && f_st.limit_now <= 0) {
			f_st.finish = true;
			f_st.fin_timeup = true;
		}
	}
	// 全終了してたらサーバーに結果送信
	if (Field.Status.finish && !Field.Status.fin_timeup && !Field.Status.isautomode) {
		actl_send_result(function (rst) {
			var js = JSON.parse(rst);
			Field.Status.result_id = Number(js.result_id);
			return true;
		});
	}
	// フラグの初期化
	initialize_allys_flags(Field.Allys.Now);
	Field.Status.panel_guard = {
		attr: [],
		rate: 0,
	};
	// チャージスキル処理
	turneff_chargeskill_check();
	// 助っ人関連の処理
	helper_change_process();
	// seed リセット
	Field.Status.seed = 0;
	// ログ保存
	Field_log.save(f_st.totalturn, Field);
	Field_log._removeover(f_st.totalturn);
	Field_log.is_ssindex = false;
}

// 味方フラグを初期化する
function initialize_allys_flags(nows) {
	$.each(nows, function (i, e) {
		e.flags.skill_counter = [];
		e.flags.damage_hits = [];
	});
}

// 助っ人交代の処理
// (別ファイルを作るには内容が少ないのでここに記載)
function helper_change_process() {
	var fs = Field.Status;
	var nows = Field.Allys.Now;
	// チェックの必要がないなら何もしない
	if (!fs.is_helper || is_ally_alldeath()) {
		return;
	}
	for (var i = 0; i < nows.length ; i++) {
		if (fs.is_hlpchanged) {
			continue;
		}
		if (nows[i].nowhp <= 0) {
			// 入れ替え(Deck)
			var sw_d = Field.Allys.Deck[i];
			Field.Allys.Deck[i] = Field.Allys.Deck["helper"];
			Field.Allys.Deck["helper"] = sw_d;
			// 入れ替え(Now)
			var sw_n = nows[i];
			nows[i] = nows["helper"];
			nows["helper"] = sw_n;
			// 処理(L化)
			nows[i].ss_current = 999;
			legend_timing_check(Field.Allys.Deck, Field.Allys.Now, i);
			// フラグON
			fs.is_hlpchanged = true;
			fs.hlpchanged_index = i;
			Field.log_push("Unit[" + (i + 1) + "]: 助っ人交代");
		}
	}

}