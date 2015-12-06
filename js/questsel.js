$(function () {
	var ct = 0;
	for (ct in Quests) {
		var sel = document.getElementById('QstSel');
		var opt = document.createElement('option');
		opt.value = Quests[ct].id;
		opt.appendChild(document.createTextNode(Quests[ct].name));
		sel.appendChild(opt);
	}
});

function optsel() {
	var sel = document.getElementById('QstSel');
	var desc = $("#Qstdesc");
	var selval = sel.options[sel.selectedIndex].value;
	var ct = 0;
	if (selval != "") {
		for (ct in Quests) {
			if (Quests[ct].id == selval) {
				desc.text(Quests[ct].desc);
				desc.fadeIn("slow");
			}
		}
	} else {
		desc.text("");
		desc.fadeOut("slow");
	}
};