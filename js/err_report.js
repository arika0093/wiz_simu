window.onerror = function(errorMsg, fileName, lineNumber) {
    var errorInfo = {
        'errorMsg'   : errorMsg,           // エラーメッセージ
        'fileName'   : fileName,           // エラーが発生したスクリプトのファイル名
        'lineNumber' : lineNumber,         // エラーが発生した行
        'urlDispPage': location.href,      // エラー発生時に閲覧していた URL
        'userAgent'  : navigator.userAgent // エラーが発生したクライアントのユーザエージェント
    };
    $.ajax({
    	type: "POST",
    	url: "http://wiztools.net/api/err_report.php",
    	data: "t=set&d=" + JSON.stringify(errorInfo),
    	success: function (r) {
    		return;
    	},
    });
};