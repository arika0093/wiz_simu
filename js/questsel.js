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