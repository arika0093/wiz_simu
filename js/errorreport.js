window.onerror = function(errorMsg, fileName, lineNumber) {
    var errorInfo = {
        'errorMsg'   : errorMsg,           // エラーメッセージ
        'fileName'   : fileName,           // エラーが発生したスクリプトのファイル名
        'lineNumber' : lineNumber,         // エラーが発生した行
        'urlDispPage': location.href,      // エラー発生時に閲覧していた URL
        'userAgent'  : navigator.userAgent // エラーが発生したクライアントのユーザエージェント
    };
	// jQueryが読み込まれていることを前提にAJAXで書きます
	$.ajax({
		type: "POST",
		contentType: "application/json;charset=UTF-8",
		url: "/errorreport/report.php",
		data: JSON.stringify(errorInfo),
	});
};