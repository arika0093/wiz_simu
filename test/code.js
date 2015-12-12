$(function () {
	var test1 = {
		name: "icecream",
		price: 100,
	};
	var test2 = test1;

	test2.name = "ice";
	$(".show").text(test1.name);
});