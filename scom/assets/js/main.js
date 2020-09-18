(function($) {
	"use strict"

	jQuery(document).ready(function($) {

		new WOW().init();
		
		var homepageSlide = $(".hero-slider-inner");
		homepageSlide.owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			margin: 30,
			navText: false
		})
		
		

		homepageSlide.on('translate.owl.carousel', function(event) {
			var item = event.item.index - 2; 
			$('.owl-item').not('.cloned').eq(item).find('h1').addClass('animate__animated animate__fadeInUp');
			$(".hero-slider-inner .single-slider h2").removeClass("animate__animated animate__fadeInUp").hide();
			$(".hero-slider-inner .single-slider p").removeClass("animate__animated animate__fadeInUp").hide();
			$(".hero-slider-inner .single-slider a").removeClass("animate__animated animate__fadeInUp").hide();
		});

		
		homepageSlide.on('translated.owl.carousel', function(event) {
		    $(".hero-slider-inner .single-slider h2").addClass("animate__animated animate__fadeInUp").show();
		    $(".hero-slider-inner .single-slider p").addClass("animate__animated animate__fadeInUp").show();
		    $(".hero-slider-inner .single-slider a").addClass("animate__animated animate__fadeInUp").show();
		});
	});


}(jQuery));