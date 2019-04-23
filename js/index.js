$(document).ready(function() {

	$("#about-nav").click(function() {
		$('body').animate({
		    scrollTop: $("#about").offset().top
		}, 500);
	});

	$("#faq-nav").click(function() {
		$('body').animate({
		    scrollTop: $("#faq").offset().top
		}, 500);
	});

	$("#sponsors-nav").click(function() {
		$('body').animate({
		    scrollTop: $("#sponsors").offset().top
		}, 500);
	});

	$("#contact-nav").click(function() {
		$('body').animate({
		    scrollTop: $("#contact").offset().top
		}, 500);
	});

});