// template page loader
$(function () {
	// iframe対策
	if (window != parent) {
		top.location.href = document.location.href;
		return;
	}
	// コンテンツ読み込み
	$("#Top").load("/template/top.html", function () {
		var tgl_tg = $(".spmenu_toggle");
		tgl_tg.click(function () {
			var tg = [
				$("#menu"),
				$("body")
			];
			$.each(tg, function (i, e) {
				e.toggleClass("mn_opened");
			});
			$("#menu").click(function () {
				$.each(tg, function (i, e) {
					e.removeClass("mn_opened");
				});
			})
		});
	});
	$("#Header").load("/template/header.html", function () {
		// twitter関連のcookieがあるかチェック
		var ld = $.cookie("wt_tld");
		if (ld) {
			var ld_jsn = JSON.parse(ld);
			// ログイン済み
			$("li#twlogin ul.submenu").html('<li id="mn_twitter"><a>ログイン中(@' + ld_jsn.scname + ')</a></li>');
		} else {
			// 未ログイン
			$("li#twlogin ul.submenu").html('<li id="mn_twitter"><a href="//api.wiztools.net/twitter/login.php">Twitterでログイン</a></li>');
		}
	});
	$("#Footer").load("/template/footer.html");
})

