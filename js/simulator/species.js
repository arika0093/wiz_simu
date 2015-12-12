// 種族数
function spec_count() {
	// 種族(0: 龍族, 1: 神族, 2: 魔族, 3: 天使, 4: 妖精, 5: 亜人, 
	//     6: 物質, 7: 魔法生物, 8: 戦士, 9: 術士, 10: アイテム, 11: AbCd)
	return 12;
}

// 全てvalで初期化したspec配列を生成する
function create_specs(val) {
	var specs = new Array(spec_count());
	for (var i = 0; i < spec_count(); i++) {
		specs[i] = val;
	}
	return specs;
}

// 特定種族のみ1で初期化したspec配列を生成する
function specific_specs(spec) {
	var specs = new Array(spec_count());
	for (var i = 0; i < spec_count(); i++) {
		specs[i] = spec.indexOf(i) >= 0 ? 1 : 0;
	}
	return specs;
}

// 種族配列の中に自身の属する種族が存在するかどうか
function check_spec_inarray(arr, spec) {
	var rst = false;
	for (var i = 0; i < spec.length; i++) {
		rst = rst || arr[spec[i]] > 0;
	}
	return rst;
}