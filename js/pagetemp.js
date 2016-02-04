// template page loader
$(function () {
	$("#Header").load("/template/header.html");
	$("#Footer").load("/template/footer.html");
	if ($("#Updatelog")) {
		$.get("/text/update.txt", function (data) {
			var log = data.replace(/\n/g, "<br/>\n");
			$("#Updatelog").html(log);
		}, "text");
	}
})