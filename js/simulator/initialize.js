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
		// パネル付与関連
		panel_add: [],
		// ターンetc関連
		durturn: [],
		nowturn: 1,
		totalturn: 0,
		nowbattle: 1,
		finish: false,
		log: [],
	},
	log_push: function (text) {
		if (Field.Status.log[Field.Status.totalturn] === undefined) {
			Field.Status.log[Field.Status.totalturn] = [];
		}
		Field.Status.log[Field.Status.totalturn].push(text);
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
		Field.Allys.Deck = simDeck;
		Field.Allys.Now = new Array();
		for (var i = 0; i < simDeck.length; i++) {
			Field.Allys.Now[i] = {};
			var card = simDeck[i];
			var now = Field.Allys.Now[i];
			var mana = 200;
			// SS状態をリセット
			now.ss_current = 0;		// SSチャージターン
			now.ss_isfirst = true;	// SSをまだ発動していないかどうか
			now.ss_isboost = false;	// スキブを受けたかどうか
			now.islegend = false;
			// 現在のステ
			now.mana = mana;
			now.maxhp = card.hp + mana;
			now.nowhp = card.hp + mana;
			now.atk = card.atk + mana;
			now.flags = {};
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
		// 初期状態を保存
		Field_log.save(0, Field);
		// 表示
		sim_show();
	} else {
		$("#sim_info_status").html("#ERROR: URLが正しくありません。");
		$(".panel_button").attr("disabled", "disabled");
	}
});

// 全読み込みが終わってから実行
$(window).load(function () {
	// Simulatorの位置に移動する
	scrollTo(0, $("#sim_top").offset().top + 1);
});

// 次のターンに進む
function nextturn(is_ssfin) {
	// ターンエフェクト減算処理
	for (var i = 0; i < Field.Allys.Deck.length; i++) {
		for (var j = 0; j < Field.Allys.Now[i].turn_effect.length; j++) {
			Field.Allys.Now[i].turn_effect[j].lim_turn -= 1;
		}
	}
	var enemys = GetNowBattleEnemys();
	for (var i = 0; i < enemys.length; i++) {
		for (var j = 0; j < enemys[i].turn_effect.length; j++) {
			enemys[i].turn_effect[j].lim_turn -= 1;
		}
	}
	// 効果の継続確認
	turn_effect_check(true);
	enemy_turn_effect_check(true);
	// 全滅確認を行う
	var killed = allkill_check(is_ssfin);
	// 全滅していたらここで新しい敵の追加処理を行う
	if (killed && !Field.Status.finish) {
		enemy_popup_proc();
	}
	// SSで全滅 or パネルを踏んでる
	if (!is_ssfin || killed) {
		Field.Status.totalturn += 1;
	}
	Field.Status.nowturn += 1;
	// ログ保存
	Field_log.save(Field.Status.totalturn, Field);
}
