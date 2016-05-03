/**
 * 行動ログを管理/保存するための関数群
 * 共通接頭語: actl_
 * ---------------------------------
 * actl_save_answer(attr):	AS攻撃を記録する
 * actl_save_special(i):	SS攻撃を記録する
 ** actl_save_target():		ターゲット状態を保存する
 ** actl_save_object(obj):	引数のobjを行動ログに追加する
 ** actl_save_seed():		現在のseed値を記録する
**/
// ---------------------------------
// サーバーに結果を送信する
function actl_send_result(after) {
	var st = Field.Status;
	var ally = [];
	var send = "tp=regist";
	// データ整理
	$.each(Field.Allys.Deck, function (i, e) {
		ally[i] = e.cardno;
	});
	// クエリ生成
	send += "&sh=" + window.location.search.substring(1);
	send += "&ac=" + JSON.stringify(st.act_log);
	send += "&t=" + st.totalturn;
	send += "&td=" + encodeURIComponent(durturn_string());
	send += "&st=" + Field.Quest.id;
	send += "&a1=" + ally[0];
	send += "&a2=" + ally[1];
	send += "&a3=" + ally[2];
	send += "&a4=" + ally[3];
	send += "&a5=" + ally[4];
	send += "&is_sp=" + Number(st.is_spanel_only);
	send += "&is_sf=" + Number(st.durturn[Field.Quest.aprnum - 1].ssfin);
	send += "&ver=" + Field.Constants.Actlog_Ver;
	// ajaxを使用
	$.ajax({
		type: "POST",
		url: "http://wiztools.net/api/result_sav.php",
		data: send,
		success: after,
	});
}


// AS記録
function actl_save_answer(attr) {
	var st = Field.Status;
	// タゲ保存
	actl_save_target();
	// save
	actl_save_object({
		type: "answer",
		attr: attr,
	});
	// 複色パネルを踏んだかどうかのフラグ
	st.is_spanel_only = st.is_spanel_only && attr.length <= 1;
}

// SS記録
function actl_save_special(i) {
	// タゲ保存
	actl_save_target();
	// save
	actl_save_object({
		type: "special",
		index: i,
	});
}

// タゲ記録
function actl_save_target() {
	var st = Field.Status;
	var tg = [];
	// listup
	$.each(Field.Allys.Now, function (i, e) {
		tg[i] = $.extend(true, [], e.target);
	});
	// 全て共通の値の場合tgをその値にする(データ量節約)
	var base_tg = tg[0][0] !== undefined ? tg[0][0] : -1;
	var deftg = $.grep(tg, function (e) {
		return e[0] != base_tg && e[1] != base_tg;
	});
	if (deftg.length == 0) {
		tg = Number(base_tg);
	}
	// add
	var set_rand = Number($("#attack_rand_sel").val();
	var add_obj = {
		type: "target",
		target: tg,
	};
	if (set_rand != -1) {
		add_obj.const_rand = set_rand;
	}
	actl_save_object(add_obj);
	return true;
}

// ログ追加
function actl_save_object(obj) {
	var st = Field.Status;
	if (!st.act_log[st.totalturn]) {
		st.act_log[st.totalturn] = {};
		st.act_log[st.totalturn].action = [];
	}
	// seedが未登録なら追加
	if (!st.act_log[st.totalturn].seed) {
		actl_save_seed();
	}
	st.act_log[st.totalturn].action.push($.extend(true, {}, obj));
}

// seed記録
function actl_save_seed() {
	var st = Field.Status;
	if (st.seed <= 0) {
		st.seed = new Date().getMilliseconds() + 1;
	}
	st.act_log[st.totalturn].seed = st.seed;
}