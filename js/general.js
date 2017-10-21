// ------------------------------------
// 便利関数
// ------------------------------------
// 画像のURLを返却する
function get_image_url(no, pref) {
	pref = pref || "";
	if (no < 0) {
		return "/image/noimage.png";
	}
	return "http://i.quiz.colopl.jp/img/card/small/" + pref + "card_" + ("0000" + no).slice(-5) + "_0.png"
}

// 大きい画像のURLを返却する
function get_image_url_b(no, pref) {
	pref = pref || "";
	if (no < 0) {
		return "/image/noimage.png";
	}
	return "http://i.quiz.colopl.jp/img/card/middle/" + pref + "card_" + ("0000" + no).slice(-5) + "_1.png"
}


// 属性配列を属性文字列に変換する
function get_attr_string(attr, spl_char) {
	spl_char = spl_char || "・";
	Attr= [
		"火",
		"水",
		"雷",
		"光",
		"闇",
	]
	if (typeof(attr)=="number"){
		if (attr < Attr.length){
			return Attr[attr] + "属性"
		}{
			return false;
		}
	}
	if (attr == undefined || attr.length < 1){
		return false;
	}else{
		isBIN = true;
		// 1,0表示の配列による属性を文字列にする
		attrstr = "";
		if(attr.length >= 5){
			for(var i = 0; i < 5; i++){
				if(attr[i] == 1){
					attrstr += attrstr != "" ? spl_char : ""
					attrstr += Attr[i];
				}else if(attr[i] != 0){
					isBIN = false;
				}
			}
		}else{
			isBIN = false;
		}
		// 属性番号直打ちの配列による属性を文字列にする
		if(isBIN == false){
			attrstr = "";
			oldnum = -1;
			attr.sort(function(a,b){
				if( a < b ) return -1;
				if( a > b ) return 1;
				return 0;
			});
			for(var i = 0; i < attr.length; i++){
				if(oldnum == attr[i] || attr[i] > Attr.length - 1){
					return false;
				}else{
					attrstr += attrstr != "" ? spl_char : ""
					attrstr += Attr[attr[i]];
					oldnum = attr[i];
				}
			}
		}
		if(attrstr == "火・水・雷・光・闇"){
			attrstr = "全";
		}
		attrstr += "属性";
		return attrstr;
	}
}


// 種族配列を種族文字列に変換する
function get_spec_string(spec) {
	Species= [
		"龍族",
		"神族",
		"魔族",
		"天使",
		"妖精",
		"亜人",
		"物質",
		"魔法生物",
		"戦士",
		"術士",
		"アイテム",
		"AbCd",
	]
	if (typeof(spec)=="number"){
		if (spec < Species.length){
			return Species[spec]
		}{
			return false;
		}
	}
	if (spec == undefined || spec.length < 1){
		return false;
	}else{
		specstr = "";
		oldnum = -1;
		spec.sort(function(a,b){
			if( a < b ) return -1;
			if( a > b ) return 1;
			return 0;
		});
		for(var i = 0; i < spec.length; i++){
			if(oldnum == spec[i] || spec[i] > Species.length - 1){
				return false;
			}else{
				specstr += specstr != "" ? "・" : ""
				specstr += Species[spec[i]];
				oldnum = spec[i];
			}
		}
		return specstr
	}
}

// アラビア数字をローマ数字に変換
function int2roman(n) {
	var roman = {
		0: false,
		1: "Ⅰ",
		2: "Ⅱ",
		3: "Ⅲ",
		4: "Ⅳ",
		5: "Ⅴ",
		6: "Ⅵ",
		7: "Ⅶ",
		8: "Ⅷ",
		9: "Ⅸ",
		10: "Ⅹ",
		15: "ⅩⅤ",
		20: "ⅩⅩ",
		30: "ⅩⅩⅩ",
		60: "ＬⅩ",
	}
	return roman[n]
}

// --------------------------
// ごくごく一般的な関数群
ArrayMath = {
	sum(arr, cond, key){
		var sum = 0;
		if(!arr){ return NaN; }
		arr.forEach(function(elm) {
			if(!cond || cond(elm)){
				var v = key ? elm[key] : elm;
				sum += v;
			}
		});
		return sum;
	},
	average(arr, cond, key){
		if(arr.length <= 0){
			return NaN;
		}
		var s = sum(arr, cond, key);
		return s / arr.length;
	},
	mode(arr, cond, key){
		var array_length, count, i, max, value;
		array_length = arr.length;
		count = [];
		for (i = 0; i < array_length; i++) {
			if (count[arr[i]]) {
				count[arr[i]]++;
			} else {
				count[arr[i]] = 1;
			}
		}
		max = 0;
		for (i in count) {
			if (count[i] > max) {
				max = count[i];
				value = i;
			}
		}
		if (max > 1) {
			return Number(value);
		} else {
			return NaN;
		}
	}
}

// --------------------------
// 関数のargumentsを受け取りargObj={__fname__: 関数名, 変数名: 値}を返す
function getArgA(args){
	var oCallFunc = args.callee;
	if (!oCallFunc.name) {
		return null;
	}
	var mFilter = RegExp(oCallFunc.name + "\\\(\(.*?\)\\\)")
	var argNameStr = oCallFunc.toString().match(mFilter)[1]
	var argNameArray = argNameStr.replace(/ /g,"").split(",")
	var argObj = {__fname__: oCallFunc.name}
	argNameArray.forEach(function(e, n){
		argObj[e] = args[n]
	})
	return argObj
}

// 呼び出し元関数のargObj={__fname__: 関数名, 変数名: 値}を返す
function getArg(){
	return getArgA(arguments.callee.caller.arguments)
}

// 呼び出し元関数の呼び出し元関数のargObj={__fname__: 関数名, 変数名: 値}を返す
function getParentArg(){
	return getArgA(arguments.callee.caller.caller.arguments)
}

// 引数が数値に変換可能なら変換する、無理ならそのまま返す
function ifNumThenStr2Num(myStr){
	return isFinite(myStr) ? Number(myStr) : myStr
}

// 数字を3桁ごとにカンマで区切る
function comma3(myNum){
	if (typeof(myNum)=="number" && myNum>=1000 && myNum%1==0){
		return myNum.toString().replace(/(\d)(?=(\d{3})+$)/g , '$1,');
	}else{
		return myNum
	}
}

// 指定したidのシミュレータを開く
function sim_by_id(id){
	var dd = deckdata_DataTemplate();
	dd.quest = id;
	$.ajax({
		type: 'POST',
		url: "http://api.wiztools.net/shorten.php",
		data: "t=set&d=" + JSON.stringify(dd),
		success: function(res,ts){
			var js=JSON.parse(res);
			location = '/simulator/?' + js.short
		}
    })
}

// 相対パス → 絶対パス
function absolutePath(path) {
	var e = document.createElement('span');
	e.insertAdjacentHTML('beforeend', '<a href="' + path + '" />');
	return e.firstChild.href;
}



// 広告を挟み込む
function adsence_html(style) {
	style = style || "";
	return '<div style=' + style + '><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5156005489853976" data-ad-slot="6536828444" data-ad-format="auto"></ins>' +
		'<script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>';
}