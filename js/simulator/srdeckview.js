var id = location.search.indexOf("?qid=") == 0 ?		location.search.substr(5) : null;
var genre = location.search.indexOf("?genre=") == 0 ?	location.search.substr(7) : null;

// 読み込み時に実行
$(function () {
	// get query
	if (id) {
		getSimResult(id, createView);
	} else if (genre) {
		makeList(genre, "/simulator/d/?qid=");
		$("#stage").hide();
	} else {
		$("#result").html("存在しないクエストが指定されました。");
	}
});

function getSimResult(id, after) {
	var send = "tp=view";
	send += "&st=" + id;
	// use ajax
	$.ajax({
		type: "POST",
		url: "http://api.wiztools.net/result_sav.php",
		data: send,
		success: after,
	});
}

function createView(rst) {
	var rs = JSON.parse(rst);
	var rows = rs.results;
	var op = "";

	if (!rows) {
		$("#result").html("共有デッキが登録されていません。");
		return false;
	}
	var loop_n = Math.min(rows.length, 100);
	var bef_deckMD5 = "";
	for (var i = 0; i < loop_n; i++) {
		var r = rows[i];
		if (bef_deckMD5 == r.deckMD5) { continue; }
		op += "<div class='decks'>" +
			"<div class='turn'>" + r.turn + "T ( " + r.turn_detail + " )</div>" +
			"<div class='run'><a target='_blank' href='/simulator/?" + r.shorturl + "'>試走開始</a></div>" +
			"<div class='cardimgs'>" + cardImgListup(r) + "</div>" +
			(r.post_user ? "<div class='user'>投稿者: " + r.post_user + "</div>" : "") +
			"<div class='comment'>" + (r.post_comment ? r.post_comment.replace(/\n/g, "<br/>") : "") + "</div>" +
			"</div>";
		bef_deckMD5 = r.deckMD5;
	}

	var qst = $.grep(Quests, function (q, n) {
		return q.id == id;
	})[0];
	$("#stage").text(qst.name);
	$("#result").html(op);
	return true;
}

function cardImgListup(r) {
	var op = "";
	for (var i = 1; i <= 5; i++) {
		var cn = r["ally_" + i];
		if (cn == -1) { continue; }
		var c = $.grep(Cards, function (e) {
			return e.cardno == cn;
		})[0];
		op += "<span class='dimg'><a title='" + c.name +
			"' href='/search/detail/?id=" + cn + "'>" +
			"<img src='" + get_image_url(c.imageno) + "'></a></span>"
	}
	return op;
}