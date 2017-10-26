// -----------------------------------
// いわゆる総当たり攻撃で最適タゲや最適並び順を把握する
// -----------------------------------
// Managed class
class Brute4ceTest {
	
	constructor(fld){
		this.patterns = {};
		this.state = "created";
		this.field = fld;
		this.filter = null;
		this.tgmax = 0;
		this.loop = 1;
		this.is1stfixed = false;
		this.isusedmrnd = true;
		this.defer = new $.Deferred;
		this.doaction = (x)=>{
			return;
		}
		this.cond = (x) => {
			return true;
		}
	}
	
	progress(v, order){
		var key = order.toString();
		delete v.field;
		this.state = "progress";
		this.patterns[key] = v;
	}
	
	done(){
		this.state = "finish";
	}
	
	justMatchPatternsToArray(){
		return this.patternsToArray((p, arr) => {
			return this.isusedmrnd ? p.matched == 1 : p.matched == p.finished;
		})
	}
	
	patternsToArray(cond){
		var arr = [];
		for(var key in this.patterns){
			var a = key.split(",").map(e => { return Number(e)});
			var p = this.patterns[key];
			if(cond(p, a, this)){
				arr.push(a);
			}
		}
		return arr;
	}
}

// -------------------
// パネルを踏んだときの最適並び順を探すBrute4ce-Objectを返す
function initilizeBrute4ceObject(fld, action, cond, loop, fltArray, tgSrchMax, isFirstFix, isUsedMinRand){
	var btest = new Brute4ceTest(fld);
	btest.loop = loop;
	btest.filter = fltArray;
	btest.tgmax = tgSrchMax;
	btest.is1stfixed = isFirstFix;
	btest.isusedmrnd = isUsedMinRand;
	btest.doaction = action;
	btest.cond = cond;
	return btest;
}

// 0.9確定抜けの場合のみを抜き出す
function initMinRandBrute4ceObject(fld, action, cond, tgSrchMax, isFirstFix){
	return initilizeBrute4ceObject(fld, action, cond, 1, [], tgSrchMax, isFirstFix, true);
}

// -------------------
// 各testごとにpromiseを生成して管理する
function brute4ceTestDone(btest){
	var fld = btest.field;
	var defer = btest.defer;
	var loop = btest.loop;
	var action = btest.doaction;
	var cond = btest.cond;
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
		var promise = autoRun_RepeatTest(f, cond, action, loop, isUsedMRnd);
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



// -------------------
// test
function testForBrute4ce(pnl, fstfixed){
	var nextcheck = (fld, bef_f) => {
		var bef_battle = bef_f.Status.nowbattle;
		var aft_battle = fld.Status.nowbattle;
		return (aft_battle - bef_battle > 0 || fld.Status.finish);
	}
	var action = (fld) => {
		panelAnswerWithParam(fld, pnl);
	}
	var bobj = initilizeBrute4ceObject(
		Field, action, nextcheck, 10, null, 0, false, fstfixed, false
	);
	brute4ceTestDone(bobj)
		.done(v => {
			console.log(v.justMatchPatternsToArray());
		})
}