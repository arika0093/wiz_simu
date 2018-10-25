// ----------------------------
// 精霊ソートの一覧
// ----------------------------
var SrchSortOptions = [
	// 実装順(降順)
	/*
	createSortObject({
		id: "regist",
		name: "実装順",
		sort: function (a, b) {
			return -1 * compareKey("def_index", a, b);
		}
	}),
	*/
	// 画像順(降順)
	createSortObject({
		id: "image",
		name: "画像順",
		sort: function (a, b) {
			return -1 * compareKey("imageno", a, b);
		}
	}),
	// 属性(昇順)
	createSortObject({
		id: "attr",
		name: "属性順",
		sort: function (a, b) {
			return compareKey("0", a.attr, b.attr)
				|| compareKey("1", a.attr, b.attr);
		}
	}),
	// 種族(昇順)
	createSortObject({
		id: "spec",
		name: "種族順",
		sort: function (a, b) {
			return compareKey("species", a, b);
		}
	}),
	// HP順(降順)
	createSortObject({
		id: "hp",
		name: "HP",
		sort: function (a, b) {
			return -1 * compareKey("hp", a, b);
		}
	}),
	// ATK順(降順)
	createSortObject({
		id: "atk",
		name: "ATK",
		sort: function (a, b) {
			return -1 * compareKey("atk", a, b);
		}
	}),
	// 初回SSターン(昇順)
	createSortObject({
		id: "fss",
		name: "SSターン",
		sort: function (a, b) {
			var getssturn = (c) => {
				var ss1 = (
					c.ss1 ? Math.max(c.ss1.turn - has_fastnum(undefined, c), 0) : 999
				)
				var ss2 = (
					c.ss2 ? Math.max(c.ss2.turn - has_fastnum(undefined, c), 0) : 999
				)
				return [ss1, ss2];
			}
			var a_turn = getssturn(a);
			var b_turn = getssturn(b);
			return compareKey("0", a_turn, b_turn)
				|| compareKey("1", a_turn, b_turn);
		}
	}),
	
	
	
	
	
	
	
]


// 検索ソートobjのベース
function createSortObject(append){
	append = append || {};
	return $.extend(true, {
		name: "",               // 表示名
		dialog: "",             // 呼び出しダイアログ名
		is_denial: false,       // 比較結果を入れ替えるかどうか(否定条件)
		sort: (a,b) => {},      // 比較関数
	}, append);
}

// キーを比較する汎用関数
function compareKey(p, a, b) {
	return (a[p] > b[p] ? 1 : (a[p] < b[p] ? -1 : 0));
}