// RSSを読み込んで反映させるJavascript
// --------------------------------------
// 取得したRSSからHTMLを生成する
function CreateHTML_fromRSS(div, result) {
	if (!result.error) {
		var ins_html = "";
		var art_size = result.feed.entries.length;
		if (art_size <= 0) {
			ins_html = "現在お知らせはありません。";
		}
		for (var i = 0; i < art_size; i++) {
			// 記事取得
			var entry = result.feed.entries[i];
			// 日付処理
			var entryDate = new Date(entry.publishedDate);
			var entryYear = entryDate.getYear();
			if (entryYear < 2000) {
				entryYear += 1900;
			}
			var entryMonth = entryDate.getMonth() + 1;
			if (entryMonth < 10) {
				entryMonth = "0" + entryMonth;
			}
			var entryDay = entryDate.getDate();
			if (entryDay < 10) {
				entryDay = "0" + entryDay;
			}
			var date = entryYear + "/" + entryMonth + "/" + entryDay;
			// HTMLに追加
			var snip_end = entry.contentSnippet.indexOf("&#160;");
			if (snip_end <= 0) {
				snip_end = 120;
			}
			ins_html += '<div class="article"><h3><a href="'
				+ entry.link + '"></p>' + entry.title + '</a></h3><p class="date">'
				+ date
				+ '</p><div class="content">'
				+ entry.contentSnippet.substring(0, snip_end)
				+ '...<br/><a target="_blank" href="' + entry.link + '">続きを読む</a></div></div>';
		}
		div.html(ins_html);
	}
}

// RSSを取得する
function ReadRSS(div, rss_url) {
	function rss_init() {
		// load rssfeed
		var feed = new google.feeds.Feed(rss_url);
		// load entries num
		feed.setNumEntries(5);
		feed.load(function (result) {
			CreateHTML_fromRSS(div, result);
		});
	}
	google.setOnLoadCallback(rss_init);
}

// load API
google.load("feeds", "1");

var date = new Date();
var dtquery = date.getMonth() + date.getDay() + date.getHours();

// Update RSS
var rec = $("#rss_recent");
if (rec) {
	ReadRSS(rec, "http://blog.wiztools.net/author/updatepost/feed/?" + dtquery);
}
// Information RSS
var inf = $("#rss_information");
if (inf) {
	ReadRSS(inf, "http://blog.wiztools.net/author/admin/feed/?" + dtquery);
}
