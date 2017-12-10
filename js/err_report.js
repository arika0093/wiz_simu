// error show
// requred: https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.4/platform.min.js
isErrShowReport = true;

window.onerror = function (errorMsg, fileName, lineNumber) {
	// 二件目以降はスルー
	if(!isErrShowReport){
		return;
	}
	if(deckdata_SaveUrl && typeof Field !== undefined){
		deckdata_SaveUrl(Field, (dat) => {
			var js = JSON.parse(dat);
			onErrDialogShow(fileName, errorMsg, lineNumber, js.short);
		});
	} else {
		onErrDialogShow(fileName, errorMsg, lineNumber);
	}
};

function onErrDialogShow(fileName, errorMsg, lineNumber, short_path){
// 整形
	var plt = platform || null;
	var dat = getDateString(new Date());
	fileName = fileName.replace(/\?.*/g, '');
	// エラー内容
	var err_text =
		`エラーが発生しました。\n` +
		`まずは再読み込み(ctrl+F5)を行ってみてください。直る可能性があります。\n` +
		`バグ報告を行う際は、このメッセージと発生状況を添えていただくと助かります。`;
	var err_detail =
		`--------------------------\n` +
		`URL: ${location.href} \n` +
		`Message: ${errorMsg} \n` +
		(short_path ? `Variable: /labs/s2l?${short_path} \n` : "") +
		`File: ${fileName}:${lineNumber} \n` +
		`Date: ${dat} \n` +
		`Browser: ${plt ? plt.description : navigator.userAgent} \n` +
		`--------------------------` +
		``;
	// エラー表示用dialogがあるか確認
	var err_dialog = $("#err_dlg");
	if (err_dialog) {
		// dialog作成
		err_dialog.dialog({
			autoOpen: false,
			modal: true,
			width: 600,
			buttons: {
				"Copy": function(){
					var rst = execCopy(err_detail);
					alert(rst ? "コピーに成功しました" : "コピーに失敗しました。未対応のブラウザです。");
				},
				"Close": function(){
					$(this).dialog("close");
				},
			},
		});
		// 適用
		var err_html = (err_text + "\n" + err_detail).replace(/\n/g, "<br/>");
		$("#err_text").html(err_html);
		// 開く
		err_dialog.dialog("open");
	} else {
		// ないならalertで表示
		alert(err_text + "\n" + err_detail);
	}
	isErrShowReport = false;
}

