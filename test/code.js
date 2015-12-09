$(function () {
	var test1 = {
		name: "icecream",
		price: 100,
	};
	var test2 = {
		item: [],
		tag: ["cold", "sweets",],
	}

	test2.item = test1;
	test2.item.short = "ice";
	$(".show").text(test2.item.short);
});