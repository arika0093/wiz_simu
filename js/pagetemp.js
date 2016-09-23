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
		//$.cookie("KEY");
	});
	$("#Footer").load("/template/footer.html");
})

