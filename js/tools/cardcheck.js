// 自身の所持状況管理用
var Mylist = {
	type: "cardcheck",
};

// ページ表示時に実装
$(function () {
	// 読み込み
	var q = window.location.search.substring(1);
	if (q != "") {
		deckdata_LoadUrl(q, function (result) {
			var js = JSON.parse(result);
			var data = js.long.length > 0 ? JSON.parse(js.long) : {};
			if (data.type == "cardcheck") {
				Mylist = data;
			}
			list_reload();
		})
	} else {
		// 更新
		list_reload();
	}
	// Dialog
	$("#dialog_url_generate").dialog({
		autoOpen: false,
		width: 450,
		modal: true,
		buttons: {
			"OK": function () {
				$(this).dialog("close");
			},
		},
	});
});

// 表示更新
function list_reload() {
	// html更新
	var lshtml = "";
	for (var n in Cardlist) {
		var d = Cardlist[n];
		var l = Mylist[d.name] || {
			state: 0,
		};
		if (d.type) {
			lshtml += "<div class='type_box'>" + d.type + "</div>";
		} else {
			var c_style = Cardstate[l.state];
			lshtml += "<div class='chara_box " + c_style.style +
				"' title='" + d.name + "[" + c_style.state + "]'>";
			lshtml += "<img class='chara_image' src='" + get_image_url(d.imageno) + "' />";
			lshtml += "</div>";
		}
	}
	$("#checklist").html(lshtml);

	// イベント付与
	for (var n in Cardlist) {
		var c_box = $("div.chara_box:nth-child(" + (Number(n) + 1) + ")");
		c_box.bind("click", { index: n }, card_check);
		c_box.bind("contextmenu", { index: n }, card_uncheck);
		c_box.bind("touchstart", { index: n }, function (e) {
			var interval = 500;
			timer = setTimeout(function () {
				card_uncheck(e);
				return false;
			}, interval);
			c_box.bind("touchend", function () {
				clearTimeout(timer);
				touch_start(e);
			});
			c_box.bind("touchmove touchcancel", function () {
				clearTimeout(timer);
			});
		});
	}
}

// クリック時処理
function card_check(e) {
	var index = e.data.index;
	var card = Cardlist[index];
	var old_state = Mylist[card.name] ? Mylist[card.name].state : 0;
	// 更新
	Mylist[card.name] = ({
		state: (old_state + 1) % Cardstate.length,
	});
	// 表示リロード
	list_reload();
	return false;
}

// 右クリック時処理
function card_uncheck(e) {


	//return false;
}

// 結果をツイートする
function share_result() {
	deckdata_SaveUrl(Mylist, function (result) {
		var win_opt = "menubar=no,toolbar=no,resizable=yes,scrollbars=no,width=640px,height=360px,top=40px,left=40px";
		var js = JSON.parse(result);
		var url = absolutePath("/tools/cardcheck/") + "?" + js.short;
		var text = "【黒猫のウィズ】所持精霊チェックリスト で手持ち精霊を確認！ " + url;
		var tweeturl = "https://twitter.com/intent/tweet?" + "text=" + text;
		window.open(tweeturl, "share_result", win_opt);
	});
}

// URL生成
function generate_url() {
	deckdata_SaveUrl(Mylist, function (result) {
		var js = JSON.parse(result);
		$("#edit_generate_url").val(absolutePath("/tools/cardcheck/") + "?" + js.short);
		$("#dialog_url_generate").dialog("open");
	});
}

// 相対パス → 絶対パス
function absolutePath(path) {
	var e = document.createElement('span');
	e.insertAdjacentHTML('beforeend', '<a href="' + path + '" />');
	return e.firstChild.href;
}
