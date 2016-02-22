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
		// チェイン関連
		chain: 0,
		chain_status: 0,
		chainstat_turn: 0,
		// パネル付与関連
		panel_add: [],
		// 継続効果関連
		continue_eff: [],
		// 最後に使用したSS
		latest_ss: null,
		// ターンetc関連
		durturn: [],
		nowturn: 1,
		totalturn: 0,
		nowbattle: 1,
		finish: false,
		// ログ
		log: [],
		d_log: [],
	},
	log_push: function (text) {
		var fs = Field.Status;
		if (fs.log[fs.totalturn] === undefined) {
			fs.log[fs.totalturn] = [];
		}
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
	Allys_now: [],
	Enemys_data: [],
	Status: [],
	// 保存関数
	save: function (index, fld) {
		this.Allys_now[index] = $.extend(true, [], fld.Allys.Now);
		this.Enemys_data[index] = $.extend(true, [], fld.Enemys.Data);
		this.Status[index] = $.extend(true, {}, fld.Status);
		// 保存indexより先の要素は消す
		this._removeover(index);
	},
	// 読み込み関数
	load: function (index) {
		var fld_reset = $.extend(true, {}, Field);
		fld_reset.Allys.Now = $.extend(true, [], this.Allys_now[index]);
		fld_reset.Enemys.Data = $.extend(true, [], this.Enemys_data[index]);
		fld_reset.Status = $.extend(true, {}, this.Status[index]);
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
			this.Allys_now[i] = [];
			this.Enemys_data[i] = [];
			this.Status[i] = {};
		}
	}
}

// URLからデッキ/クエストを読み込む
$(function () {
	// load
	var simDeck = loaddeck_from_url();
	var simQuest = loadquest_from_url();
	// check
	if ((simDeck.length > 0 && simQuest !== undefined)) {
		// 味方データを読み込む
		Field.Allys.Deck = [];
		Field.Allys.Now = new Array();
		for (var i = 0; i < simDeck.length; i++) {
			Field.Allys.Deck[i] = simDeck[i].card;
			var card = simDeck[i].card;
			var now = Field.Allys.Now[i] = {};
			var mana = simDeck[i].mana;
			// SS状態をリセット
			now.ss_current = has_fastnum(card);	// SSチャージターン
			now.ss_isfirst = true;	// SSをまだ発動していないかどうか
			now.ss_isboost = false;	// スキブを受けたかどうか
			now.islegend = false;
			// 現在のステ
			now.mana = mana;
			now.maxhp = card.hp + mana;
			now.nowhp = card.hp + mana;
			now.atk = card.atk + mana;
			now.target = [];
			now.flags = {};
			now.flags.skill_counter = [];
			now.turn_effect = [];
		}
		// 潜在を反映させる
		for (var i = 0; i < simDeck.length; i++) {
			add_awake_ally(Field.Allys.Deck, Field.Allys.Now, i, is_legendmode(card, now));
			// (0tレジェンドに入る精霊が出たらコメントアウト(ここでL時の潜在反映を同時に行うため))
			// now.islegend = legend_timing_check(card, now);
		}

		// 敵データを読み込む
		Field.Quest = simQuest;
		// 出現順番
		Field.Enemys.Popuplist = CreateEnemypopup(simQuest);
		for (var i = 0; i < Field.Enemys.Popuplist.length; i++) {
			var popup_enemys = simQuest.data[Field.Enemys.Popuplist[i]];
			// 敵ステ
			Field.Enemys.Data[i] = {};
			var data = Field.Enemys.Data[i];
			data.enemy = [];
			for (var j = 0; j < popup_enemys.enemy.length; j++) {
				data.enemy[j] = $.extend(true, {}, popup_enemys.enemy[j]);
				data.enemy[j].nowhp = popup_enemys.enemy[j].hp;
				data.enemy[j].flags = {};
				data.enemy[j].flags.is_as_attack = [];
				data.enemy[j].turn_effect = [];
			}
		}
		// 敵の処理
		enemy_popup_proc();
		// タゲリセット
		target_allselect(-1);
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

// 全読み込みが終わってから実行
$(window).load(function () {
	// スマホ版でなければ
	if (window.innerWidth >= 600) {
		// Simulatorの位置に移動する
		scrollTo(0, $("#sim_top").offset().top + 1);
	} else {
		// 広告の位置に移動する
		scrollTo(0, $("div.simu_ads").offset().top + 1);
	}
});

// 次のターンに進む
function nextturn(is_ssfin) {
	var f_st = Field.Status;
	// 全滅していなかったら効果ターンを減少
	reduce_turneffect();
	// 効果の継続確認
	ss_continue_effect_check();
	turn_effect_check(true);
	enemy_turn_effect_check(true);
	// フラグの初期化
	initialize_allys_flags(Field.Allys.Now);
	// チェイン状態の確認
	if (f_st.chain_status != 0) {
		f_st.chainstat_turn -= 1;
		if (f_st.chainstat_turn == 0) {
			f_st.chain_status = 0;
			Field.log_push("Status: チェイン状態解除");
		}
	}
	// 全滅確認
	var killed = allkill_check(is_ssfin);
	if (killed && !f_st.finish) {
		// 戦後回復処理
		var abh = cards_heal_afterbattle(Field.Allys.Deck);
		if (abh > 0) {
			for (var i = 0; i < Field.Allys.Deck.length; i++) {
				var now = Field.Allys.Now[i];
				heal_ally(Math.floor(now.maxhp * abh), i);
			}
			Field.log_push("戦後回復: " + (abh * 100) + "%");
		}
		// ここで新しい敵の処理を行う
		enemy_popup_proc();
	}
	// SSで全滅 or パネルを踏んでる
	if (!is_ssfin || killed) {
		f_st.totalturn += 1;
	}
	f_st.nowturn += 1;
	// ログ保存
	Field_log.save(f_st.totalturn, Field);
}

// 味方フラグを初期化する
function initialize_allys_flags(nows) {
	$.each(nows, function (i, e) {
		e.flags.skill_counter = [];
	});
}