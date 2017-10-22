// -----------------------------------
// いわゆる総当たり攻撃で最適タゲや最適並び順を把握する
// -----------------------------------
// Managed class
class Brute4ceTest {
	
	constructor(fld, filt, tm, is_ff, is_umr){
		this.patterns = {};
		this.state = "created";
		this.field = fld;
		this.filter = filt;
		this.tgmax = tm;
		this.is1stfixed = is_ff;
		this.isusedmrnd = is_umr;
		this.defer = new $.Deferred;
	}
	
	progress(v, order){
		var key = order.toString();
		delete v.field;
		this.patterns[key] = v;
		console.log(order, `${v.matched}/${v.finished}`);
	}
	
	done(){
		this.state = "finish";
	}
}

// パネルを踏んだときの最適並び順を探す関数
function findBetterOrderAndTarget(fld, panel, cond, loop, fltArray, tgSrchMax, isFirstFix, isUsedMinRand){
	var btest = new Brute4ceTest(fld, fltArray, tgSrchMax, isFirstFix, isUsedMinRand);
	return brute4ceTestDone(fld, btest, panel, cond, loop);
}

// 0.9確定抜けの場合のみを抜き出す
function findMinRandOrderAndTarget(fld, panel, cond, tgSrchMax, isFirstFix){
	return findBetterOrderAndTarget(fld, panel, cond, 1, [], tgSrchMax, isFirstFix, true);
}

// -------------------
// 各testごとにpromiseを生成して管理する
function brute4ceTestDone(fld, btest, panel, cond, loop){
	var defer = btest.defer;
	var tgSrchMax = btest.tgmax;
	var isFirstFix = btest.is1stfixed;
	var isUsedMRnd = btest.isusedmrnd;
	
	var jobs = [];
	var decks = fld.Allys.Deck;
	var allyarr = $.map(decks, (e,i) => { return i; });
	var enemys = GetNowBattleEnemys(fld);
	var enemyNum = enemys.length;
	var allorder = ArrayMath.permutations(allyarr);
	$.each(allorder, (aoi,aoe) => {
		// 全並び順について調査
		// 先頭固定フラグがついているなら、先頭が違うケースは調べない
		if(isFirstFix && aoe[0] != 0){
			return;
		}
		// 入れ替える
		var f = reOrderFieldAllyData(fld, aoe);
		// 実際にtest
		var promise = autoRun_RepeatTest(f, cond, (x)=>{
			panelAnswerWithParam(x, panel);
		}, loop, isUsedMRnd);
		// 途中経過報告
		promise.progress(v => {
			//console.log(aoe, `${v.matched} / ${v.finished}`);
		})
		promise.done(v => {
			btest.progress(v, aoe);
			defer.notify(btest);
		});
		// 監視
		jobs.push(promise);
	});
	// 全結果報告
	Promise.all(jobs).then(arr => {
		btest.done();
		defer.resolve(btest);
	})
	return defer.promise();
}

// Fieldの味方indexをarrで指定してその通りに並び替えたコピーを返す
function reOrderFieldAllyData(fld, arr){
	var f = $.extend(true, {}, fld);
	var als = f.Allys;
	var als_c = $.extend(true, {}, als);
	var count = 0;
	for(var key in arr){
		var v = arr[key];
		als.Deck[count] = als_c.Deck[v];
		als.Now[count] = als_c.Now[v];
		count++;
	}
	return f;
}



// test
function testForBrute4ce(pnl, fstfixed){
	var nextcheck = function(fld, bef_f){
		var bef_battle = bef_f.Status.nowbattle;
		var aft_battle = fld.Status.nowbattle;
		return (aft_battle - bef_battle > 0 || fld.Status.finish);
	}
	//var p = findBetterOrderAndTarget(Field, pnl, nextcheck, 10, false, fstfixed, true);
	var p = findMinRandOrderAndTarget(Field, pnl, nextcheck, false, fstfixed);
	p.done(v => {
		console.log(v);
	})
}