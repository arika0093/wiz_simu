// JavaScriptを動的に読み込む
$(function () {
	// 読み込むscript一覧
	var load_js = [

	];

	// 読み込み処理
	for (var i = 0; i < load_js.length; i++) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = load_js[i];

		var firstScript = document.getElementsByTagName('script')[0];
		firstScript.parentNode.insertBefore(script, firstScript);
	}
});