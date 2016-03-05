function deckdata_template() {
	// URLに保存する最低限のカード情報
	return $.extend(true, {}, {
		id: -1,
		mana: 200,
		awake: 0,
		crystal: [],
	});
}

function deckdata_create(deck, mana_array, awake_array) {
	var cards = [];
	for (var i = 0; i < deck.length; i++) {
		var c_tmp = deckdata_template();
		c_tmp.id = deck.id;
		c_tmp.mana = mana_array[i];
		c_tmp.awake = awake_array[i];
		cards.push(c_tmp);
	}
	return cards;
}