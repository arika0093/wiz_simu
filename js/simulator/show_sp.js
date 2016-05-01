/**
 * スマートフォン用シミュ表示の構成管理
**/
// ---------------------------------
$(function () {
	var w_width = window.innerWidth;
	if (w_width < 600) {
		var s_top = $("div#sim_top");
		var s_ally = $("div.sim_ally");
		var s_enem = $("div.sim_enemy");
		var s_panl = $("div.sim_panel");
		var s_ads = $("div.simu_ads");

		s_enem.insertBefore(s_ally);
		s_panl.insertBefore(s_ally);
		s_ads.insertBefore(s_top);
	}
});