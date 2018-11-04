// -----------------------
// Lap timeをうまいこと推定するためにがんばる
// -----------------------
// 計算式とかを全部この中につっこむ
var forLapTimeGuessing = {
	// ---------------------------
	// "hoge": -1, のように指定する方法
	//      単純に該当スキルにかかる秒数を-1の箇所に指定する
	//      -1は未指定を意味する
	// "hoge": (fld, datas) => {} のように関数を指定する方法
	//      関数を実行し、戻り値の{ time }の値を秒数として解釈する
	//      -1は上述と同様に未指定扱いになる
	// ---------------------------
	// [基本] 初期化
	"initialize": (fld, datas) => {
		var time = -1;
		// 回避不可能な時間と、ステアップなどのロード関連
		
		
		
		return { time }
	},
	// [基本] Wave移行
	
	// [基本] クリア時所要時間
	
	// [基本] 戦後回復処理
	
	// [基本] 烈眼処理
	
	// ---------------------------
	// [AS] 正答
	"answer/correct": (fld, datas) => {
		var time = -1;
		var {paneleff_index} = datas;
		
		return { time }
	},
	// [AS] 誤答
	"answer/miss": -1,
	// [AS] 連撃しない場合の計算処理
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
	// [AS] 連撃等の計算処理
	"answer/calclate_frame": (fld, datas) => {
		var time = -1;
		var {totalframe} = datas;
		
		time = convertFrameToRealTime(totalframe);
		return { time }
	},
	
	// ---------------------------
	// [SS]
	
	
	
	// ---------------------------
	// [敵行動] 敵の攻撃
	"enemy/attack": (fld, datas) => {
		var time = -1;
		var {attackNum, targetNum} = datas;
		
		return { time }
	},
	// [敵行動] 特効攻撃
	"enemy/attack_attrsp": (fld, datas) => {
		var time = -1;
		var {attackNum, targetNum} = datas;
		
		return { time }
	},
	// [敵行動] 割合
	"enemy/attack_ratio": (fld, datas) => {
		var time = -1;
		var {attackNum, targetNum, target_subtype} = datas;
		
		return { time }
	},
	// [敵行動] 亡者の怨念
	"enemy/attack_deadgrudge": (fld, datas) => {
		var time = -1;
		var {} = datas;
		// enemy/attackも通過するので、その分を引くこと
		
		return { time }
	},
	// [敵行動] 防御貫通攻撃
	"enemy/attack_ignoreguard": (fld, datas) => {
		var time = -1;
		var {targetNum, attackNum} = datas;
		
		return { time }
	},
	// [敵行動] 反動攻撃
	"enemy/recoilAttack": -1,
	// [敵行動] 毒
	"enemy/poison": -1,
	// [敵行動] 毒(継続エフェクト)
	"enemy/poison/effect": -1,
	// [敵行動] 弱体化
	"enemy/attr_weaken": -1,
	// [敵行動] AS封印
	"enemy/as_sealed": -1,
	// [敵行動] SS封印
	"enemy/ss_sealed": -1,
	// [敵行動] 封印
	"enemy/all_sealed": -1,
	// [敵行動] 恐怖
	"enemy/fear": -1,
	// [敵行動] パニックシャウト
	"enemy/panicshout": -1,
	// [敵行動] 死の秒針
	"enemy/deathlimit": -1,
	// [敵行動] 回復反転
	"enemy/healreverse": -1,
	// [敵行動] 盗む
	"enemy/stole": -1,
	// [敵行動] 盗むから復帰したときのエフェクト(L化除く)
	"enemy/stole/break": -1,
	// [敵行動] 呪い
	"enemy/cursed": (fld, datas) => {
		var time = -1;
		var {target_subtype} = datas;
		switch(target_subtype){
			case "normal": 
				// 普通の呪い
				
				break;
			case "statusdown":
				// ステ低下のみ
				
				break;
			case "breakeffect":
				// 効果破壊のみ
				
				break;
			default:			
				break;
		}
		
		return { time }
	},
	// [敵行動] 属性反転
	"enemy/attrreverse": -1,
	// [敵行動] 強制進行
	"enemy/forcedProgress": -1,
	// [敵行動] スキルカウンター(貼った時)
	"enemy/skill_counter": -1,
	// [敵行動] スキルカウンター(カウンター時[単発攻撃])
	"enemy/skill_counter/damage": -1,
	// [敵行動] スキルカウンター(カウンターしてからスキル発動までにかかる時間)
	"enemy/skill_counter/effect": -1,
	// [敵行動] 味方SS使用に反応する行動
	"enemy/skill_responce": -1,
	// [敵行動] 物理カウンターを貼るのにかかる時間
	"enemy/attack_counter": -1,
	// [敵行動] 物理カウンターで反撃するのにかかる時間
	"enemy/attack_counter/damage": -1,
	// [敵行動] 多段式カウンターを貼るのにかかる時間
	"enemy/attack_counter_dual": -1,
	// [敵行動] 多段式カウンターで反撃するのにかかる時間
	"enemy/attack_counter_dual/damage": (fld, datas) => {
		var time = -1;
		var {hitcount} = datas;
		
		return { time }
	},
	// [敵行動] ダメブロ*
	"enemy/damageblock": timeConvertToSingleFromAll(-1),
	// [敵行動] 属性ガード*
	"enemy/attrguard": timeConvertToSingleFromAll(-1),
	// [敵行動] 属性免疫*
	"enemy/attrIncreaseGuard": timeConvertToSingleFromAll(-1),
	// [敵行動] 属性吸収*
	"enemy/attr_absorb": timeConvertToSingleFromAll(-1),
	// [敵行動] バリアウォール
	"enemy/barrier": -1,
	// [敵行動] 多層バリア
	"enemy/multibarrier": -1,
	// [敵行動] 挑発
	"enemy/taunt": -1,
	// [敵行動] 鉄壁
	"enemy/impregnable": -1,
	// [敵行動] 分裂発動
	"enemy/division": -1,
	// [敵行動] 逃走
	"enemy/escape": -1,
	// [敵行動] 回復
	"enemy/heal": -1,
	// [敵行動] 蘇生
	"enemy/resurrection": -1,
	// [敵行動] 力溜め
	"enemy/force_reservoir": -1,
	// [敵行動] 怒り
	"enemy/angry": -1,
	// [敵行動] ステータスアップ
	"enemy/statusup": -1,
	// [敵行動] 属性変化
	"enemy/statusup": -1,
	// [敵行動] 全滅時蘇生
	"enemy/reverseAtAllDeath": -1,
	// [敵行動] 残滅(初回時)
	"enemy/continue_eff": -1,
	// [敵行動] 残滅(ターンごと)
	"enemy/continue_eff/effect": -1,
	// [敵行動] チェイン解除
	"enemy/chain_break": -1,
	// [敵行動] チェイン減少
	"enemy/chain_reduce": -1,
	// [敵行動] チェイン封印
	"enemy/chain_sealed": -1,
	// [敵行動] パネル変換
	"enemy/panel_change": -1,
	// [敵行動] パネルリザーブ(発動時)
	"enemy/panel_reserve": -1,
	// [敵行動] パネルリザーブ(毎回の変換エフェクト)
	"enemy/panel_reserve/effect": -1,
	// [敵行動] ディスチャージ
	"enemy/discharge": -1,
	// [敵行動] 味方スキルチャージ
	"enemy/allySkillCharge": -1,
	
	
	// ---------------------------
	// [その他] 
	
	
	
}

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
		} else if(!rst) {
			// console warning
			console.log(`GLT: "${target}" is not defined. `);
		} else {
			console.log(`GLT: "${target}" is not implement. `);
		}
	}
	return true;
}

// 全体対象スキルで内部的に単体対象スキルを発動にしてる場合に介す関数
// ex. damage_block_allは内部的にdamage_block_ownを呼び出している
//     → 単純にallを実行するとダメブロ単体×敵の数だけ余計にかかってしまう
//     → この関数をコールして回避する
//     この関数に対応させる場合、datas.targetNumを指定する必要がある
function timeConvertToSingleFromAll(time){
	return (fld, datas) => {
		var {target_subtype, targetNum} = datas;
		if(target_subtype == "all"){
			// 全体の場合は、細工をする
			// マイナス値を返すと未実装とされるため、直接弄る
			var mtime = Math.max(targetNum - 1, 0) * time;
			fld.Status.guessLapTime -= mtime;
			// 返す値は0
			return 0;
		} else {
			// 単体の場合はそのまま
			return time;
		}
	}
}




// for AS, frame to real time(sec)
function convertFrameToRealTime(f){
	return -1;
}