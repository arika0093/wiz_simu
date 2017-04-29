// -------------------
//	comment.js
// -------------------
//	読み込むとdl.List末尾にコメントフォームを自動で設置する。
//	comment.cssと同時に読み込んで使用する。
//	読み込み時にAjaxを用いた通信を行いコメント一覧をすべて取得する。
//	動作にはjquery, jquery-uiの読み込みが必要。
// -------------------
var PAGE_VIEW = 25+1;

//	on load
$(function () {
	cm_setcomment();
});

// コメント欄を設置
function cm_setcomment(dom) {
	// comment_box_html
	var loc = window.location;
	var load_url = loc.pathname + loc.search;
	var cm_html =
		"<div id='comment_box'> \
		<div class='pg_moved'></div> \
		<div class='show_comments'></div> \
		<div class='pg_moved'></div> \
		<form action='//api.wiztools.net/comment/cm_post.php' name='post_comment' \
			enctype='multipart/form-data' method='POST' onsubmit='/*comment_send();*/'> \
			<input type='text' name='dspname' placeholder='《名前を入れてください: 省略可》'> \
			<textarea rows=4 name='post_content' placeholder='《コメントをここに入力: 必須》' required /> \
			<input id='cm_file' name='upfile' type='file' accept='image/*' /> \
			<input type='hidden' name='writed_page' value='" + load_url + "' /> \
			<input type='hidden' name='sc_name' value='' /> \
			<button id='cm_send' type='submit'>投稿</button> \
		</form></div>";
	// -------
	// load
	var is_select = !!dom;
	dom = is_select ? $(dom) : $("dl.List");
	// add after
	if (!is_select) {
		cm_html = "<dt>コメント欄</dt><dd>" + cm_html + "</dd>";
	}
	dom.append(cm_html);

	// comment load & add
	cm_loadandapply("div#comment_box .show_comments", load_url, 0);
}

// 指定URLへ書き込まれたコメントを読み込んで反映させる
function cm_loadandapply(dom_s, url, page) {
	// set url
	if (!url || url == "/") {
		url = "";
	}
	// create send-obj
	var sobj = {
		pagenum: page,
		writed_page: url,
	};
	// get
	$.ajax({
		type: "POST",
		url: "http://api.wiztools.net/comment/cm_load.php",
		data: "dat=" + JSON.stringify(sobj),
		success: function (rst) {
			var dats = JSON.parse(rst);
			var dom = $(dom_s);
			if(!dats.success){
				// エラー時は内容を表示
				dom.html("<p class='error_happen'>" + dats.error_detail + "</p>");
			}
			else if (!dats || dats.no_comment) {
				// コメントがない時は代替テキスト表示
				dom.html("<p class='no_comment'>（このページにはまだコメントが投稿されていません）</p>");
			}
			else {
				var total = Number(dats.total[0][0]);
				var tpnum = Math.floor(total / PAGE_VIEW) + 1;
				var app_html = "";
				// pagemoveを作成
				cm_create_pmovelink("#comment_box div.pg_moved", tpnum, page);
				// 内容を表示
				$.each(dats.cms, function (i, e) {
					if (i < page * PAGE_VIEW || i >= ((page + 1) * PAGE_VIEW) - 1) {
						return;
					}
					app_html += cm_generate_cmhtml(total-i-1, e);
				});
				dom.html(app_html);
			}
		},
	})
}

// pagemoveを作成する
function cm_create_pmovelink(dom_s, tot_p, nowp) {
	// get
	var dom = $(dom_s);
	var s_html = "";
	// add
	var gen_link = function (content, page) {
		var d = "#comment_box";
		var loc = window.location;
		var hf = 'cm_loadandapply("' + d + ' .show_comments", "' +
			loc.pathname + loc.search + '", ' + page + ')';
		return "<a href='" + d + "' onclick='" + hf + "' >" + content + "</a>　";
	}
	s_html += gen_link("<<", 0);
	s_html += (nowp > 0) ? gen_link("<", nowp - 1) : "<　";
	s_html += (nowp > 2) ? "…　" : "";
	for (var i = Math.max(nowp - 2, 0) ; i < Math.min(nowp + 3, tot_p) ; i++) {
		var num_s = "" + (i + 1);
		s_html += (i != nowp) ? gen_link(num_s, i) : num_s + "　";
	}
	s_html += (nowp < tot_p - 3) ? "…　" : "";
	s_html += (nowp < tot_p - 1) ? gen_link(">", nowp + 1) : ">　";
	s_html += gen_link(">>", tot_p - 1);
	dom.html(s_html);
}


// コメント欄のHTMLを生成する
function cm_generate_cmhtml(i, e) {
	var name = e["disp_name"] || "<span class='cm_defname'>とある魔法使い</span>";
	var conts = e["content"].replace(/\n/g, "<br/>");
	var src_path = '//api.wiztools.net/comment/up_images/' + e["added_image_url"];
	var rst = 
		"<div class='cm_comment'> \
		<div class='cmm_top'><span class='cmm_idname'>" + (i + 1) + ": " + name + "</span> \
		<span class='cmm_date'>" + e["postdate"] + "</span></div> \
		<div class='cmm_content'>" + conts + "<br/>" +
		(e["added_image_url"] ? "<a target='_blank' href='" + src_path + "'><img class='cmm_image' src='" + src_path + "' /></a>" : "") +
		"</div></div>";
	return rst;
}