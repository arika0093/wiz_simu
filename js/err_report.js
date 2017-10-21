/*
window.onerror = function (errorMsg, fileName, lineNumber) {
	fileName = fileName.replace(/\s+/g, '');
    var errorInfo = {
        'errorMsg'   : errorMsg,           // エラーメッセージ
        'fileName'   : fileName,           // エラーが発生したスクリプトのファイル名
        'lineNumber' : lineNumber,         // エラーが発生した行
        'urlDispPage': location.href,      // エラー発生時に閲覧していた URL
        'userAgent'  : navigator.userAgent // エラーが発生したクライアントのユーザエージェント
    };
    if (fileName) {
    	$.ajax({
    		type: "POST",
    		url: "http://api.wiztools.net/err_report.php",
    		data: "t=set&d=" + JSON.stringify(errorInfo),
    		success: function (r) {
    			return;
    		},
    	});
    }
};
*/