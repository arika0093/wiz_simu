// 全ての読み込み完了後に呼ばれる関数
var loadfin = function () { 
	var pageH = $("body").height() + 30;

	$("#fade").css("height", pageH).delay(400).fadeOut(300);
	$("#loader").delay(300).fadeOut(150);
	$("#loadnoscr").delay(300).fadeOut(150);
};

jQuery.event.add(window, "load", loadfin);

// 3秒後に強制で終了
setTimeout(loadfin, 2800);
