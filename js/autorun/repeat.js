// -----------------------------------
// 単一条件のtestを指定回数行う用
// -----------------------------------
// Managed class
class RepeatTest {
	
	constructor(fld, tot, minrand){
		this.matched = 0;
		this.finished = 0;
		this.state = "created";
		this.field = fld;
		this.total = tot;
		this.use_mrnd = minrand;
		this.defer = new $.Deferred;
	}
	
	progress(b, suc_mrand){
		this.state = "progress";
		this.matched += b ? 1 : 0;
		this.finished += 1;
		if(this.use_mrnd && suc_mrand !== undefined){
			this.suc_mrand = suc_mrand;
		}
	}
	
	done(){
		this.state = "finish";
	}
}

// 指定Fieldの条件で指定回数ループ
// fld: Field
// cond: 条件判定関数(field, before_field)
// dotask: 判定前に行う関数(before_field's copy)
// cycle: loop's num
// isUsedMinRandApprox: 0.9近似を使うかどうか
//      乱数0.9で突破できたときに確定抜けとみなす(近似する)手法。
//      まれに抜けないが、基本的にはONで問題ない
function autoRun_RepeatTest(fld, cond, dotask, cycle, isUsedMinRandApprox){
	var rtest = new RepeatTest(fld, cycle, isUsedMinRandApprox);
	return repeatTestDone(fld, rtest, cond, dotask);
}

// loop-function
function repeatTestDone(fld, rtest, cond, task){
	var loop = rtest.total;
	var defer = rtest.defer;
	var isusedminrand = rtest.use_mrnd;
	var count = 0;
	var jobs = [];
	var doloopcheck = function(st){
		for(var i = st; i < loop; i++){
			var promise = singleTaskDoRepeat(fld, cond, task);
			promise.then(v => {
				rtest.progress(v);
				defer.notify(rtest);
			});
			jobs.push(promise);
		}
		Promise.all(jobs).then(arr => {
			rtest.done();
			defer.resolve(rtest);
		})
	}
	// -----------
	if(isusedminrand){
		// 最低乱数近似が有効なら、まずはそれをチェックする
		var f = $.extend(true, {}, fld);
		f.Status.const_rand = 0.9;
		var promise = singleTaskDoRepeat(f, cond, task);
		promise.then(v => {
			// 一旦報告
			rtest.progress(v, v);
			defer.notify(rtest);
			if(v){
				// 成功してたら終了報告
				rtest.done();
				defer.resolve(rtest);
			}else{
				// 失敗したら普通に処理する
				doloopcheck(1);
			}
		});
	} else {
		doloopcheck(0);
	}
	return defer.promise();
}

// single task
function singleTaskDoRepeat(fld, cond, task){
	return new Promise((res, rej) => {
		setTimeout(() => {
			var f = $.extend(true, {}, fld);
			var rst = false;
			// autorun mode start
			f.Status.isautomode = true;
			f.Status.seed = Math.random(1, 100000);
			// done
			task(f);
			rst = cond(f, fld);
			res(rst);
		}, 0);
	});
}

// -------------------
// 汎用的な終了条件（戦闘をまたぐ or 戦闘終了）
function condNextBattleOrFinish(fld, bef_f){
	var bef_battle = bef_f.Status.nowbattle;
	var aft_battle = fld.Status.nowbattle;
	return (aft_battle - bef_battle > 0 || fld.Status.finish);
}


// GUIから乱数チェッカを読んだときにtask関数を生成する
function convertRepeatStr2TaskFunc(){
	// task list
	var tobj = {
		"panel_fire":		[panelAnswerWithParam, [0]],
		"panel_water":		[panelAnswerWithParam, [1]],
		"panel_thunder":	[panelAnswerWithParam, [2]],
		"panel_multi":	    [panelAnswerWithParam, "#"],
		"alltarget_left":	[target_allselect, 0],
		"alltarget_center":	[target_allselect, 1],
		"alltarget_right":	[target_allselect, 2],
		"unit1_ss":			[ssPushWithParam, 0],
		"unit2_ss":			[ssPushWithParam, 1],
		"unit3_ss":			[ssPushWithParam, 2],
		"unit4_ss":			[ssPushWithParam, 3],
		"unit5_ss":			[ssPushWithParam, 4],
	};
	var doarr = $("#randcheck_actdata").text().split("/");
	
	return function(fld){
		fld.Status.isautomode = true;
		fld.Status.seed = Math.random(1, 100000);
		for (var j = 0; j < doarr.length; j++) {
			var ti = doarr[j];
			if (ti == "") { continue; }
			if(ti.indexOf("|") >= 0){
				var tis = ti.split("|");
				var p1 = tobj[tis[0]][1];
				tis[1] = tis[1].split(",").map(Number);
				tobj[tis[0]][0](fld, p1 == "#" ? tis[1] : p1);
			} else {
				tobj[ti][0](fld, tobj[ti][1]);
			}
		}
		return fld;
	}
}