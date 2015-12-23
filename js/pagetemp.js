// template page loader
$(function () {
	$("#Header").load("./template/header.html");
	$("#Footer").load("./template/footer.html");
	if ($("#Updatelog")) {
		$.get("update.txt", function (data) {
			var log = data.replace(/\n/g, "<br/>\n");
			$("#Updatelog").html(log);
		}, "text");
	}
	if ($("#Simu_info")) {
		$("#Simu_info").load("./template/siminfo.html");
	}
})