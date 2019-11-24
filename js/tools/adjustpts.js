// クエスト名とポイントの定義
var PtDatas = [{
	name: "絶級",
	rank: "1位",
	pt: 3900,
	is_ev: true,
}, /* { // 封魔級は廃止されたらしい
	name: "封魔級",
	rank: "1位",
	pt: 2200,
	is_ev: true,
}, */ {
	name: "上級",
	rank: "1位",
	pt: 1500,
	is_ev: true,
}, {
	name: "中級",
	rank: "1位",
	pt: 1000,
	is_ev: true,
}, {
	name: "絶級",
	rank: "9位以下",
	pt: 528,
	is_ev: true,
	is_lo: true,
}, {
	name: "封魔級",
	rank: "9位以下",
	pt: 298,
	is_ev: true,
	is_lo: true,
}, {
	name: "上級",
	rank: "9位以下",
	pt: 203,
	is_ev: true,
	is_lo: true,
}, {
	name: "中級",
	rank: "9位以下",
	pt: 135,
	is_ev: true,
	is_lo: true,
}, {
	name: "玖式",
	rank: "1位",
	pt: 5500,
}, {
	name: "捌式",
	rank: "1位",
	pt: 4800,
}, {
	name: "漆式",
	rank: "1位",
	pt: 4200,
	is_up: true,
}, {
	name: "陸式",
	rank: "1位",
	pt: 3600,
	is_dg: true,
}, {
	name: "玖式",
	rank: "9位以下",
	pt: 713, // thanks: https://twitter.com/primula_vulgari/status/1076325790654951432
	is_lo: true,
	is_dg: true,
}, {
	name: "捌式",
	rank: "9位以下",
	pt: 650, // 1位ptと以前の漆式9位からの推測値
	is_lo: true,
}, {
	name: "漆式",
	rank: "9位以下",
	pt: 572, // 1位ptと以前の陸式9位からの推測値
	is_lo: true,
}, {
	name: "陸式",
	rank: "9位以下",
	pt: 490, // thanks: @selilin_wiz
	is_lo: true,
	is_dg: true,
},
];

// 計算を開始する
function calc(){
	// 値を入手
	var evh_pt = Number( $("#evh_pt").val() );
	var evh_9t = Number( $("#evh_9th").val() );
	var now_sp = Number( $("#now_sp").val() );
	var lst_sp = Number( $("#last_sp").val() );
	var is_noused_dgrade = $("#not_dgrade").prop("checked");
	var is_update = $("#lst_17th").prop("checked");
	
	var get_pt = lst_sp - now_sp;
	
	// 初期化
	PtDatas = $.grep(PtDatas, (e) => {
		return e && !e.is_added;
	});
	// イベ覇追加
	if(evh_pt > 0){
		PtDatas.push({
			name: "覇級",
			rank: "1位",
			pt: evh_pt,
			is_ev: true,
			is_added: true,
		});
	}
	// イベ覇9位以下を追加できるなら追加
	if(evh_9t > 0){
		PtDatas.push({
			name: "覇級",
			rank: "9位以下",
			pt: evh_9t,
			is_ev: true,
			is_lo: true,
			is_added: true,
		});
	}
	// 不適切なやつを抜く
	if(is_noused_dgrade){
		PtDatas = $.grep(PtDatas, (e) => {
			return e && !e.is_dg;
		});
	}

	// 降段使う場合はPtをそれ用にしておく(処理がめんどそうなので据え置き)
	/*
	if((!is_noused_dgrade && is_update)){
		var added = $.grep(PtDatas, (e) => {
			return e && e.is_up;
		});
		get_pt -= added[0];
	}
	*/
	
	// 計算条件指定開始
	var tnum = PtDatas.length;
	var calc_txt =
		`Min`                           + `\n` +
		`obj: ` + genText(true, false)  + `\n` +
		``                              + `\n` +
		`Subject To`                    + `\n` +
		`cap:`                          + `\n` +
		genText(true, true) + ` = ${get_pt}\n` +
		``                              + `\n` +
		`Bounds`                        + `\n` +
		genBounds(false)                + `\n` +
		``                              + `\n` +
		`Generals`                      + `\n` +
		genText(false, false)           + `\n` +
		``                              + `\n` +
		`END\n`;
	
	$("#result_dd").html("--- Running Start ------------<br/>");
	run(calc_txt)
}

// テストする関数
function run(test_str){
	var job = new Worker("/js/tools/adjustpts_th.js");
	job.onmessage = function (e) {
		var obj = e.data;
		switch (obj.action){
			case 'log':
				outputLog(obj.message);
				break;
			case 'done':
				var arr = $.map(obj.result, e => e);
				outputResult(arr);
				break;
		}
	};
	// 解は整数固定(MIP:true)
	job.postMessage({action: 'load', data: test_str, mip: true});
}

// ログ出力用関数
function outputLog(txt){
	var rst = $("#result_dd");
	rst.append(txt + "<br/>");
}

// 結果出力用関数
function outputResult(rst_arr){
	var rst = $("#result_dd");
	var now_sp = Number( $("#now_sp").val() );
	var lst_sp = Number( $("#last_sp").val() );
	var now_dp = Number( $("#now_dp").val() );
	var add_sp = now_sp;
	var add_dp = now_dp;
	var get_pt = lst_sp - now_sp;
	
	// Ptデータをコピー
	var cpDatas = $.extend(true, [], PtDatas);
	// 回数を代入
	$.each(cpDatas, (i, e) => {
		e.count = rst_arr[i];
	});
	
	// ソート
	var cpSorts = object_array_sort(cpDatas, ["count", "pt", "rank"], "desc", null);
	
	// 順に表示
	var html = `<table id="rst_table">`;
	html += `<tr>` +
		`<th colspan="2">周回箇所</th>` +
		`<th>獲得順位</th>` +
		`<th>獲得ポイント</th>` +
		`<th>回数</th>` +
		`<th>調整終了時Pt(総合)</th>` +
		`${now_dp > 0 ? "<th>調整終了時Pt(デイリー)</th>" : ""}` +
		`<tr/>`;
	$.each(cpSorts, (i, e) => {
		if(e.count <= 0){
			return;
		}
		add_sp += e.pt * e.count;
		add_dp += e.pt * e.count;
		html += `<tr>` +
			`<td>${e.is_ev ? "イベント" : "通常"}</td>` +
			`<td>${e.name}</td>` +
			`<td>${e.rank}</td>` +
			`<td>${e.pt} Pt</td>` +
			`<td>${e.count} 回</td>` +
			`<td>${add_sp} Pt</td>` +
			`${now_dp > 0 ? `<td>${add_dp} Pt</td>` : "" }` +
		`<tr/>`;
	});
	html += `<table/>`;
	rst.html(html);
}



// text生成用関数
function genText(sep_flag, is_coeff){
	var simp = (e, i) => {
		var s = sep_flag ? "+" : "";
		var c = is_coeff ? " " + e.pt : "";
		return ` ${s}${c} x${i+1}`;
	};
	return $.map(PtDatas, simp).join("");
}

// bounds生成関数
function genBounds(is_flag){
	var chk = (e,i) => {
		return `x${i+1} >= ${(is_flag && e.is_up) ? 1 : 0}`;
	}
	return $.map(PtDatas, chk).join("\n");
}

// object-sorting
function object_array_sort(data,keys,order,fn){
	//デフォは降順(DESC)
	var num_a = -1;
	var num_b = 1;
	if(order === 'asc'){//指定があれば昇順(ASC)
		num_a = 1;
		num_b = -1;
	}
	data = data.sort(function(a, b){
		for(var i=0; i < keys.length; i++){
			var x = a[keys[i]];
			var y = b[keys[i]];
			if (x > y) return num_a;
			if (x < y) return num_b;
		}
		return 0;
	});
	if(fn){
		fn(data);
	}
	return data;
}