// 味方データ
var Allys = {
	// カードデータ
	Deck: [],
	// 現在のステータス(maxhp, nowhp, atk, mana)
	Now: [],
	// 現在の状況管理
	Status: {
		chain: 0,		// 現在のチェイン数
		durturn: [],	// 過去の経過ターン数
		nowturn: 1,		// 現在の経過ターン数
		totalturn: 1,	// 累計の経過ターン数
		nowbattle: 1,	// 現在の戦闘数
		log: [],		// ログ
	},
};

// 敵データ
var Enemys = {
	// クエストデータ
	Quest: {},
	// 敵の出現順
	Popuplist: [],
	// 敵ステータス管理
	Data: [],
};

// URLからデッキ/クエストを読み込む
$(function () {
	// load
	var simDeck = loaddeck_from_url();
	var simQuest = loadquest_from_url();
	// check
	if ((simDeck.length > 0 && simQuest !== undefined)) {
		// 味方データを読み込む
		Allys.Deck = simDeck;
		Allys.Now = new Array({},{},{},{},{});
		for (var i = 0; i < simDeck.length; i++) {
			var card = simDeck[i];
			var now = Allys.Now[i];
			var mana = 200;
			// SS状態をリセット
			now.ss_current = 0;		// SSチャージターン
			now.ss_isfirst = true;	// SSをまだ発動していないかどうか
			// 現在のステ
			now.enable = true;
			now.mana = mana;
			now.maxhp = card.hp + mana;
			now.nowhp = card.hp + mana;
			now.atk = card.atk + mana;
		}
		// 潜在を反映させる
		for (var i = 0; i < simDeck.length; i++) {
			add_awake_ally(Allys.Deck, Allys.Now, i, is_legendmode(card, now));
		}

		// 敵データを読み込む
		Enemys.Quest = simQuest;
		// 出現順番
		Enemys.Popuplist = CreateEnemypopup(simQuest);
		for (var i = 0; i < Enemys.Popuplist.length; i++) {
			var popup_enemys = simQuest.enemys[Enemys.Popuplist[i]];
			// 敵ステ
			Enemys.Data[i] = {};
			var data = Enemys.Data[i];
			data.enemy = [];
			for (var j = 0; j < popup_enemys.data.length; j++) {
				data.enemy[j] = popup_enemys.data[j];
				data.enemy[j].nowhp = popup_enemys.data[j].hp;
			}
		}
		// 表示
		sim_show();
	} else {
		$("#sim_info_status").html("#ERROR: URLが正しくありません。");
		$(".panel_button").attr("disabled", "disabled");
	}
});

// 敵出現順番生成
function CreateEnemypopup(qst) {
	var poplist = [];
	var pop_i = [];
	for (var t = 0; t < qst.aprnum; t++) {
		pop_i.push($.map(qst.enemys, function (e, i, c) {
			// 配列内に現在見てるターン数の数字があったら現在の配列番号を返す
			var aprt_i = $.inArray(t + 1, e.appearance);
			if (aprt_i >= 0) {
				return i;
			} else {

			}
		}));
		var rand = Math.floor(Math.random() * pop_i[t].length);
		poplist.push(pop_i[t][rand]);
	}
	return poplist;
}
