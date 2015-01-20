$( document ).ready(function() {
	$("#home").on("click", function () {
		$( "#MainContent" ).load( "home.html" );
	});
	$(".navbar-brand").on("click", function () {
		$( "#MainContent" ).load( "home.html" );
	});
	$("#about").on("click", function () {
		$( "#MainContent" ).load( "about.html" );
	});
	$("#skills").on("click", function () {
		$( "#MainContent" ).load( "skills.html" );
	});
	$("#articles").on("click", function () {
		$( "#MainContent" ).load( "articles.html" );
	});
});

