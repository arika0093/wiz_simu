// -----------------------
// Lap timeをうまいこと推定するためにがんばる
// -----------------------
// この関数にぶんなげてあとはおまかせする感じ
function guessLapTimes(fld, datas){
	// initialize
	var st = fld.Status;
	if(!st.guessLapTime){
		st.guessLapTime = 0.00;
	}
	
	var {target} = datas;
	var fltg = forLapTimeGuessing[target];
	if(target && fltg ){
		// guessing
		if($.isFunction(fltg)){
			var rst = fltg(fld, datas);
		} else {
			var rst = fltg;
		}
		
		// adding
		if(rst && rst.time >= 0){
			fld.Status.guessLapTime += rst.time;
		} else {
			// console warning
			console.warn(`GLT: "${target}" is not defined. `);
		}
	}
	return true;
}

// 計算式とかを全部この中につっこむ
var forLapTimeGuessing = {
	// ---------------------------
	// Initialize
	"initialize": (fld, datas) => {
		var time = -1;
		// 回避不可能な時間と、ステアップなどのロード関連
		
		
		
		return { time }
	},
	
	// ---------------------------
	// アンサースキル
	// [AS]正答
	"answer/correct": (fld, datas) => {
		var time = -1;
		var {paneleff_index} = datas;
		
		return { time }
	},
	// [AS]誤答
	"answer/miss": -1,
	// [AS]連撃しない場合の計算処理
	"answer/no_calclate_frame": (fld, datas) => {
		var time = -1;
		var {as_arr, rem_duals} = datas;
		var maxDuals = Math.max(...rem_duals);
		// MAX攻撃回数が-1なら攻撃以外の処理(回復とか)
		if(maxDuals < 0){
			time = 0;
		} else {
			// 攻撃数
			const SummonFrame = 7;
			const ContractReflectFrame = 8;
			var atkCount = as_arr.filter(e => e.length > 0).length;
			var totalFrame = SummonFrame * atkCount + ContractReflectFrame;
			time = convertFrameToRealTime(totalFrame);
		}
		return { time }
	},
	// [AS]連撃等の計算処理
	"answer/calclate_frame": (fld, datas) => {
		var time = -1;
		var {totalframe} = datas;
		
		time = convertFrameToRealTime(totalframe);
		return { time }
	},
	
	// ---------------------------
	// SS関連
	// [SS]
	
	
	// ---------------------------
	// [敵関連]AS攻撃に対するカウンターにかかる時間
	"enemy/as_counter": (fld, datas) => {
		var time = -1;
		var {counter_count} = datas;
		
		return { time }
	},
	
	// ---------------------------
	// [その他]
	
	
	
	
}

// for AS, frame to real time(sec)
function convertFrameToRealTime(f){
	return -1;
}