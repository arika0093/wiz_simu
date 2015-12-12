// -------------------------
// ƒXƒLƒ‹(AS)
// -------------------------
// Šî–{\‘¢(AS)
// type: 1(UŒ‚), 2(ƒGƒ“ƒnƒ“ƒX), 3(‰ñ•œ)
// isall: [UŒ‚‚Ì‚İQÆ]true(‘S‘Ì), false(’P‘Ì)
// atkn: [UŒ‚‚Ì‚İQÆ](UŒ‚‰ñ”)
// rate: UŒ‚or‰ñ•œ”{—¦
// chain: AS‚ª”­“®‚·‚éÅ’áƒ`ƒFƒCƒ“”
// attr: AS‚ª”­“®‚·‚é‘ÎÛ‚Ì‘®«
// spec: AS‚ª”­“®‚·‚é‘ÎÛ‚Ìí‘°
// ˆÈã‚Ìƒf[ƒ^‚ğ‚Ğ‚Æ‚Ü‚Æ‚ß‚É‚µ‚½‚à‚Ì‚ğ1‚Â‚Ü‚½‚Í•¡”ŒÂ•Ô‹p‚µA
// ‚»‚ê‚¼‚ê‚Ìê‡‚É‚¨‚¢‚ÄŒŸØA’l‚ªÅ‚à‘å‚«‚¢‚à‚Ì‚ğg—p‚·‚é
// ’l‚ªQÆo—ˆ‚È‚¢ê‡(AS–¢”­“®/‘®«“ÁU‚Ì‘ÎÛ‚Å‚È‚¢‚È‚Ç)‚Í100%‚Æ‚µ‚Äˆµ‚¤
// -------------------------
// ƒ`ƒFƒCƒ“ƒAƒ^ƒbƒJ[(rate: Š„‡, ch: ”­“®ƒ`ƒFƒCƒ“”)
function ChainAttack(rate, ch) {
	return [
		{
			type: 1,
			isall: false,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
<<<<<<< HEAD
<<<<<<< HEAD
			spec: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
=======
			spec: create_specs(1),
>>>>>>> e22626d... æ½œåœ¨èƒ½åŠ›é–¢é€£ã®æ•´å‚™
=======
			spec: create_specs(1),
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,
		}
	];
}

// ƒ`ƒFƒCƒ“˜AŒ‚ƒAƒ^ƒbƒJ[(rate: Š„‡, ch: ”­“®ƒ`ƒFƒCƒ“”, n: UŒ‚‰ñ”)
function ChainDualAttack(rate, ch, n) {
	return [
		{
			type: 1,
			isall: false,
			atkn: n,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
<<<<<<< HEAD
<<<<<<< HEAD
			spec: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
=======
			spec: create_specs(1),
>>>>>>> e22626d... æ½œåœ¨èƒ½åŠ›é–¢é€£ã®æ•´å‚™
=======
			spec: create_specs(1),
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,
		}
	];
}

// ‘®«“ÁU(rate: Š„‡, ch: ”­“®ƒ`ƒFƒCƒ“”, attr: ‘ÎÛ‘®«)
function ChainAttrAttack(rate, ch, attr) {
	return [
		{
			type: 1,
			isall: false,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: attr,
<<<<<<< HEAD
<<<<<<< HEAD
			spec: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
=======
			spec: create_specs(1),
>>>>>>> e22626d... æ½œåœ¨èƒ½åŠ›é–¢é€£ã®æ•´å‚™
=======
			spec: create_specs(1),
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,
		}
	];
}

// í‘°“ÁU(rate: Š„‡, ch: ”­“®ƒ`ƒFƒCƒ“”, spec: ‘ÎÛí‘°)
function ChainSpecAttack(rate, ch, spec) {
	return [
		{
			type: 1,
			isall: false,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
			spec: spec,
		}
	];
}

// ‘®«“ÁU˜AŒ‚(rate: Š„‡, ch: ”­“®ƒ`ƒFƒCƒ“”, n: UŒ‚‰ñ”, attr: ‘ÎÛ‘®«)
function ChainDualAttrAttack(rate, ch, n, attr) {
	return [
		{
			type: 1,
			isall: false,
			atkn: n,
			rate: rate,
			chain: ch,
			attr: attr,
<<<<<<< HEAD
<<<<<<< HEAD
			spec: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
=======
			spec: create_specs(1),
>>>>>>> e22626d... æ½œåœ¨èƒ½åŠ›é–¢é€£ã®æ•´å‚™
=======
			spec: create_specs(1),
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,
		}
	];
}

// ƒ`ƒFƒCƒ“‘S‘ÌUŒ‚(rate: Š„‡, ch: ”­“®ƒ`ƒFƒCƒ“”)
function ChainAllAttack(rate, ch) {
	return [
		{
			type: 1,
			isall: true,
			atkn: 1,
			rate: rate,
			chain: ch,
			attr: [1, 1, 1, 1, 1],
<<<<<<< HEAD
<<<<<<< HEAD
			spec: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
=======
			spec: create_specs(1),
>>>>>>> e22626d... æ½œåœ¨èƒ½åŠ›é–¢é€£ã®æ•´å‚™
=======
			spec: create_specs(1),
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,
		}
	];
}

// -------
// ‰ñ•œ(rate: Š„‡, attr: ‰ñ•œ‚·‚é‘®«)
function Heal(rate, attr) {
	return [
		{
			type: 3,
			rate: rate,
			chain: 0,
			attr: attr,
<<<<<<< HEAD
<<<<<<< HEAD
			spec: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
=======
			spec: create_specs(1),
>>>>>>> e22626d... æ½œåœ¨èƒ½åŠ›é–¢é€£ã®æ•´å‚™
=======
			spec: create_specs(1),
>>>>>>> 447b73f... æ½œåœ¨èƒ½åŠ›æ çµ„ã¿ä½œæˆ,
		}
	];
}
