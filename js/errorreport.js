window.onerror = function(errorMsg, fileName, lineNumber) {
    var errorInfo = {
        'errorMsg'   : errorMsg,           // エラーメッセージ
        'fileName'   : fileName,           // エラーが発生したスクリプトのファイル名
        'lineNumber' : lineNumber,         // エラーが発生した行
        'urlDispPage': location.href,      // エラー発生時に閲覧していた URL
        'userAgent'  : navigator.userAgent // エラーが発生したクライアントのユーザエージェント
    };
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/errorreport/report.php');
    xhr.setRequestHeader('Content-Type', 'applicatoin/json;charset=UTF-8');
    xhr.send(JSON.stringify(errorInfo));
};