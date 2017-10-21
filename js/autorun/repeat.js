// -----------------------------------
// 回数を重ねて結果を返す系統
// -----------------------------------
// 指定Fieldの条件で指定回数ループ、結果を返す
function autoRun_RepeatTest(fld, cond, dotask, rep_num, ){
	var fld_before = $.extend(true, fld, {});
	var fld_success = null;
	var fld_failed = null;
	var rst_object = {
		field: {
			before: fld_before,
			success: null,
			failed: null,
		},
		matched: 0,
		total: rep_num,
	};
	var count = 0;
	
	for(var i=0; i<rep_num; i++){
		fld = $.extend(true, fld_before, {});
		// autorun mode start
		fld.Status.isautomode = true;
		fld.Status.seed = Math.random(1, 100000);
		// done
		fld = dotask(fld);
		if(cond(fld_copy)){
			count++
			if(!fld_success){
				fld_success = $.extend(true, fld, {});
			}
		} else {
			if(!fld_failed){
				fld_failed = $.extend(true, fld, {});
			}
		}
	}
	// autorun end
	fld = $.extend(true, fld_before, {});
	rst_object.matched = count;
	
	return rst_object;
}




