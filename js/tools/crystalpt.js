// 出力
function cp_output_result() {
	var own_ct = 0;
	var bef_rst = 0;
	var max_rst = -1;
	var max_index = 0;
	// form
	var output = $("#output_form");
	var get_pt = Number($("#one_point").val());
	var max_mp = Number($("#max_stamina").val());
	var is_pa = $("#p_attemdance").prop("checked");
	var is_autocure = $("#autocure").prop("checked");
	//var is_teamreward = $("#teamreward").prop("checked");
	var op_html = "";

	// エラー処理
	if (!(get_pt && max_mp)) {
		$("#dialog_error").dialog({
			autoOpen: true,
			width: 450,
			modal: true,
			buttons: {
				"OK": function () {
					$(this).dialog("close");
				},
			},
		});
		return;
	}

	// 出力
	op_html += "<table id='op_table'>";
	op_html += "<tr><th class='point'>point</th><th class='desc'>説明</th><th class='ct_p'>クリスタル収支</th><th class='ct_p'>比較</th></tr>";
	for (var n = 0; n < rewards.length; n++) {
		var r = rewards[n];
		var nowmp = max_mp;
		// 収入があったら追加
		if (r.crystal > 0) {
			own_ct += r.crystal;
		}
		// 計算(追加分)
		nowmp += own_ct * max_mp;					// クリスタルで回復した分
		nowmp += is_pa ? 5 * max_mp : 0;			// 皆勤賞報酬分
		//nowmp += is_teamreward ? 3 * max_mp : 0;	// チーム報酬分
		// 計算(使用分)
		nowmp -= (r.point / get_pt) * 25;			// 消費分
		// 自然回復を考慮（使う必要がない場合はノーカン）
		nowmp += is_autocure ? Math.min(r.point / get_pt * 25, 1440) : 0;
		// output
		var result = (Math.ceil(nowmp / max_mp) - 1);
		var diff_rst = bef_rst < result;
		var cr_class = (result >= 0 ? "crystal_plus" : "crystal_minus");
		var cd_class = (diff_rst ? "diff_plus" : "diff_minus");
		op_html += "<tr class='" + r.type + (r.important ? " important" : "") + "'>" +
			"<td class='point'>" + r.point +
			"</td><td class='desc'>" + r.desc +
			"</td><td class='ct_p " + cr_class + "'>" + result +
			"</td><td class='" + cd_class + "'>" + (bef_rst != result ? "(" + (diff_rst ? "+" : "") + (result - bef_rst) + ")" : "") +
			"</td></tr>";
		// copy
		max_index = (bef_rst <= result && max_rst <= result && result >= 0 ? n : max_index);
		max_rst = Math.max(max_rst, result);
		bef_rst = result;
	}
	output.html(op_html);
	$("tr:nth-child(" + (max_index + 2) + ")").addClass("crystal_most");
	output.fadeIn("slow");
}