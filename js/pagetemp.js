// template page loader
$(function () {
	var url_b = (window.location.href.indexOf("/pages/") >= 0) ? ".." : "";

	$("#Header").load(url_b + "/template/header.html");
	$("#Footer").load(url_b + "/template/footer.html");
	if ($("#Updatelog")) {
		$.get(url_b + "update.txt", function (data) {
			var log = data.replace(/\n/g, "<br/>\n");
			$("#Updatelog").html(log);
		}, "text");
	}
})