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
		for (var i = 0; i < simDeck.length; i++) {
			// マナプラス
			var mana = 200;
			// 現在のステ
			Allys.Now[i] = {};
			Allys.Now[i].maxhp = simDeck[i].hp + mana;
			Allys.Now[i].nowhp = simDeck[i].hp + mana;
			Allys.Now[i].atk = simDeck[i].atk + mana;
			Allys.Now[i].mana = mana;
			Allys.Now[i].ss_current = 0;	// SSチャージターン
			Allys.Now[i].ss_isfirst = true; // SSをまだ発動していないかどうか
		}
		// 敵データを読み込む
		Enemys.Quest = simQuest;
		// 出現順番
		Enemys.Popuplist = CreateEnemypopup(simQuest);
		for (var i = 0; i < Enemys.Popuplist.length; i++) {
			var popup_enemys = simQuest.enemys[Enemys.Popuplist[i]];
			// 敵ステ
			Enemys.Data[i] = {};
			Enemys.Data[i].enemy = [];
			for (var j = 0; j < popup_enemys.data.length; j++) {
				Enemys.Data[i].enemy[j] = popup_enemys.data[j];
				Enemys.Data[i].enemy[j].nowhp = popup_enemys.data[j].hp;
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
