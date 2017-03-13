Maxrep = 200;

// ページ表示時に行う
$(function () {
	// twitterログインしてないならログインページに飛ばす
	var ld = $.cookie("wt_tld");
	if (!ld) {
		//location.href = "//api.wiztools.net/twitter/login.php";
	}
})

// IDから取得・表示を行う
function fillResArea() {
	var QS = GetQueryString();
	var id = QS.id;
	renewContents(id);
}

function renewContents(id) {
	$.ajax({
		type: 'GET',
		url: "//api.wiztools.net/imgReader/resget.cgi?" + id,
		dataType: 'json',
		success: function (mjson) {
			appearContents(mjson);
			if (!mjson.isFinite && Maxrep > 0) {
				Maxrep = Maxrep - 1;
				setTimeout(function () {
					renewContents(id);
				}, 2000);
			}
		},
		error: function (xhr, tstat, errt) {
			console.log(tstat);
		}
	});
}

function errorCheck(obj) {
	if (obj.error && obj.error != "undefined" && obj.error != false) {
		errors += "<b>エラーが発生しました</b><br>";
	}
	if (obj.errorMsg && obj.errorMsg != "undefined") {
		errors += "エラー： " + obj.errorMsg + "<br>";
	}
	resArea.innerHTML = errors + outp
}

function putTD(myStr) {
	outp += "<td>" + myStr + "</td>";
}


function imgNo2Img(imageno, i_pref) {
	return "<img class=\"cImg result\" src=" + get_image_url(imageno, i_pref) + ">";
}

function imgNo2Name(imageno) {
	var res = "DB未登録<br><a href=#?" + imageno + ">[登録依頼]</a>";
	Cards.forEach(function (card) {
		if (card.imageno == imageno && !card.disable) {
			res = "<a href=/search/detail/?id=" + card.cardno + ">" + card.name + "</a>";
		}
	})
	return res;
}

var outp = "";
var errors = "";

function appearContents(data) {
	console.log(data)
	outp += "<style>" + data.css + "</style>";
	errorCheck(data);
	if (data.completion && data.isFinite && data.completion == false && data.isFinite == true) {
		errors += "エラー： 解析ステータスが未完了で解析プログラムが終了しました。<br>";
		resArea.innerHTML = errors + outp
	}
	var titles = ["登録", "元画像", "認識画像", "確度", "名前"]
	outp += "<table border=1><tr>"
	titles.forEach(function (t) {
		putTD("<b>" + t + "</b>");
	})
	outp += "</tr>"
	data.imgs.forEach(function (img) {
		img.cards.forEach(function (card) {
			outp += "<tr>"
			putTD("<input type=checkbox checked>");
			putTD("<div class=trim>" + card.html + "</div>");
			putTD(imgNo2Img(card.imageno));
			putTD(Math.round(card.concordanceRate * 100) + "[%]");
			putTD(imgNo2Name(card.imageno));
			outp += "</tr>"
		})
	})
	resArea.innerHTML = errors + outp
	outp = "";
}

function GetQueryString() {
	var result = {};
	if (1 < window.location.search.length) {
		// 最初の1文字 (?記号) を除いた文字列を取得する
		var query = window.location.search.substring(1);

		// クエリの区切り記号 (&) で文字列を配列に分割する
		var parameters = query.split('&');

		for (var i = 0; i < parameters.length; i++) {
			// パラメータ名とパラメータ値に分割する
			var element = parameters[i].split('=');

			var paramName = decodeURIComponent(element[0]);
			var paramValue = decodeURIComponent(element[1]);

			// パラメータ名をキーとして連想配列に追加する
			result[paramName] = paramValue;
		}
	}
	return result;
}
