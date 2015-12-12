<<<<<<< HEAD
<<<<<<< HEAD
// ‰ğ“š‚µ‚½‚Æ‚«‚Ìˆ—
function panel(attr) {
	var is_allkill = true;
	// ‚à‚µŒë“š‚µ‚Ä‚½‚È‚çƒ`ƒFƒCƒ“‚ğØ‚é
	if (attr.length <= 0) {
		Allys.Status.chain = 0;
	} else {
		// ‘S‘Ì‚É‚Â‚¢‚Äˆ—
		Allys.Status.chain += 1;
		// Še¸—ì‚É‚Â‚¢‚Äˆ—
		for (var i = 0; i < Allys.Deck.length; i++) {
			// ASˆ—
			answer_skill(i, attr);
			// SSƒ`ƒƒ[ƒW‚ğ1‘‚â‚·
			Allys.Now[i].ss_current += 1;
		}
	}
	// “G‚Ìˆ—
	for (var i = 0; i < Enemys.Data[Allys.Status.nowbattle - 1].enemy.length; i++) {
		// ‘S•”‚Ì“G‚ğ“|‚µ‚Ä‚é‚©‚Ç‚¤‚©”»’è‚·‚é
		is_allkill = (is_allkill && Enemys.Data[Allys.Status.nowbattle - 1].enemy[i].nowhp == 0);
	}
	// ‘S‚Ä‚Ì“G‚ğ“|‚µ‚Ä‚¢‚½‚ç
	if (is_allkill) {
		// Ÿ‚Éi‚Ş
=======
=======
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,
ï»¿// è§£ç­”ã—ãŸã¨ãã®å‡¦ç†
function panel(attr) {
	var is_allkill = true;
	// ã‚‚ã—èª¤ç­”ã—ã¦ãŸãªã‚‰ãƒã‚§ã‚¤ãƒ³ã‚’åˆ‡ã‚‹
	if (attr.length <= 0) {
		Allys.Status.chain = 0;
	} else {
		// å…¨ä½“ã«ã¤ã„ã¦å‡¦ç†
		Allys.Status.chain += 1;
		// å„ç²¾éœŠã«ã¤ã„ã¦å‡¦ç†
		for (var i = 0; i < Allys.Deck.length; i++) {
			// ASå‡¦ç†
			answer_skill(i, attr);
			// SSãƒãƒ£ãƒ¼ã‚¸ã‚’1å¢—ã‚„ã™
			Allys.Now[i].ss_current += 1;
		}
	}
	// æ•µã®å‡¦ç†
	for (var i = 0; i < Enemys.Data[Allys.Status.nowbattle - 1].enemy.length; i++) {
		// å…¨éƒ¨ã®æ•µã‚’å€’ã—ã¦ã‚‹ã‹ã©ã†ã‹åˆ¤å®šã™ã‚‹
		is_allkill = (is_allkill && Enemys.Data[Allys.Status.nowbattle - 1].enemy[i].nowhp == 0);
	}
	// å…¨ã¦ã®æ•µã‚’å€’ã—ã¦ã„ãŸã‚‰
	if (is_allkill) {
		// æ¬¡ã«é€²ã‚€
<<<<<<< HEAD
>>>>>>> e22626d... æ½œåœ¨èƒ½åŠ›é–¢é€£ã®æ•´å‚™
=======
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,
		Allys.Status.nowbattle += 1;
		Allys.Status.durturn.push(Allys.Status.nowturn);
		Allys.Status.nowturn = 0;
	}
<<<<<<< HEAD
<<<<<<< HEAD
	// ƒ^[ƒ“’Ç‰Á
	Allys.Status.nowturn += 1;
	Allys.Status.totalturn += 1;
	// •\¦
	sim_show();
}

// ƒAƒ“ƒT[ƒXƒLƒ‹‚Ìˆ—
function answer_skill(no, attr) {
	// ƒJ[ƒhí—Ş
	var card = Allys.Deck[no];
	var al_now = Allys.Now[no];
	// ASæ“¾
	var ASkill = is_legendmode(card, al_now) ? card.AS2 : card.AS1;
	// “¥‚ñ‚¾ƒpƒlƒ‹F‚Æ‘®«‚Ì‚Ç‚ê‚©‚ªˆê’v‚µ‚Ä‚¢‚é‚©Šm”F
=======
=======
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,
	// ã‚¿ãƒ¼ãƒ³è¿½åŠ 
	Allys.Status.nowturn += 1;
	Allys.Status.totalturn += 1;
	// è¡¨ç¤º
	sim_show();
}

// ã‚¢ãƒ³ã‚µãƒ¼ã‚¹ã‚­ãƒ«ã®å‡¦ç†
function answer_skill(no, attr) {
	// ã‚«ãƒ¼ãƒ‰ç¨®é¡
	var card = Allys.Deck[no];
	var al_now = Allys.Now[no];
	// ASå–å¾—
	var ASkill = is_legendmode(card, al_now) ? card.AS2 : card.AS1;
	// è¸ã‚“ã ãƒ‘ãƒãƒ«è‰²ã¨å±æ€§ã®ã©ã‚Œã‹ãŒä¸€è‡´ã—ã¦ã„ã‚‹ã‹ç¢ºèª
<<<<<<< HEAD
>>>>>>> e22626d... æ½œåœ¨èƒ½åŠ›é–¢é€£ã®æ•´å‚™
=======
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,
	var is_match_attr = $.grep(attr, function (e) {
		return e == card.attr[0] || e == card.attr[1];
	}).length != 0;
	if (is_match_attr) {
<<<<<<< HEAD
<<<<<<< HEAD
		// ƒGƒ“ƒn‚Ìˆ—

		// UŒ‚ƒXƒLƒ‹‚Ìˆ—

		// ‰ñ•œƒXƒLƒ‹‚Ìˆ—
=======
=======
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,
		// ã‚¨ãƒ³ãƒã®å‡¦ç†

		// æ”»æ’ƒã‚¹ã‚­ãƒ«ã®å‡¦ç†

		// å›å¾©ã‚¹ã‚­ãƒ«ã®å‡¦ç†
<<<<<<< HEAD
>>>>>>> e22626d... æ½œåœ¨èƒ½åŠ›é–¢é€£ã®æ•´å‚™
=======
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,

	}
}

<<<<<<< HEAD
<<<<<<< HEAD
// UŒ‚ƒXƒLƒ‹‚Ìˆ—
function answer_attack(card, now, as, attr) {
	// ‚»‚ê‚¼‚ê‚Ì‘®«‚É‚Â‚¢‚Äˆ—‚ğs‚¤
	for (var i = 0; i < 2; i++) {
		// ‘®«–³‚µ‚È‚çˆ—‚µ‚È‚¢
=======
=======
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,
// æ”»æ’ƒã‚¹ã‚­ãƒ«ã®å‡¦ç†
function answer_attack(card, now, as, attr) {
	// ãã‚Œãã‚Œã®å±æ€§ã«ã¤ã„ã¦å‡¦ç†ã‚’è¡Œã†
	for (var i = 0; i < 2; i++) {
		// å±æ€§ç„¡ã—ãªã‚‰å‡¦ç†ã—ãªã„
<<<<<<< HEAD
>>>>>>> e22626d... æ½œåœ¨èƒ½åŠ›é–¢é€£ã®æ•´å‚™
=======
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,
		if (card.attr[i] === undefined) {
			continue;
		}



	}
}