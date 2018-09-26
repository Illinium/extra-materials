$(document).ready(function () {
		//search what element clicked
	$(".dws-form").on("click", ".tab", function () {
		//remove class
		$(".dws-form").find(".active").removeClass("active");

		//add class
		$(this).addClass("active");
		$(".tab-form").eq($(this).index()).addClass("active");
	});
});