// this program is running on Node.js 
// cards.jsを分割してcardsディレクトリに情報をぶっこむプログラム
var fs = require("fs");

fs.readFile('cards.php', 'utf8', function (err, data){
	var cards = data.split(/,\s*{/);
	for(var i = 0; i < cards.length; i++){
		var c = cards[i];
		var c_id = c.match(/cardno: (\d+),/);
		if(c_id){
			var cardid = c_id[1];
			fs.writeFile(`cards/${cardid}.js`, `{${c}`);
		} else {
			console.log(`ERR: ${c.substr(0,32)}`)
		}
	}
});