
(function($){
	"use strict"
	var AKSHAJ = {};
	
	/*--------------------
		* Skill
	----------------------*/
	AKSHAJ.SkillBar = function() {
		$('.skillbar').skillBars({
				from: 0,
				speed: 4000, 
				interval: 100,
				decimals: 0,
		});
	}

	/*--------------------
		* Pre Load
	----------------------*/
	AKSHAJ.WebLoad = function(){
		document.getElementById("loading").style.display = "none"; 
	}

	/*--------------------
		* Type It
	----------------------*/
	AKSHAJ.mTypeIt = function(){
		new TypeIt('#type-it', {
	        speed: 150,
	        loop:true,
	        strings: [
	          'a Research Scientist at Biotein',
	          'a Machine Learning Developer',
	          'a Cancer and Human Longevity Enthusiast',
	          'an Entrepreuner',
	          'a Life-Long Learner'
	        ],
	        breakLines: false
    	});	
	}
	

	/*--------------------
		* Header scroll
	----------------------*/
	var singlePageNavBar = $('.navbar');
	AKSHAJ.HeaderScroll = function() {
		singlePageNavBar.singlePageNav({
	        offset: 50,             
	        currentClass: 'current',
	        currentThreshold: 500,  
	        duration: 500,          
	        effect: 'swing'
	    });
	}

	/*--------------------
		* Header Fixed
	----------------------*/
	AKSHAJ.HeaderFixed = function(){
		if ($(window).scrollTop() >= 60) {
	       $('header').addClass('fixed-header');
	       $('body').addClass('fixed-header-body');
	    }
	    else {
	       $('header').removeClass('fixed-header');
	       $('body').removeClass('fixed-header-body');
	    }
	}
	/*--------------------
		* Header Fixed
	----------------------*/
	AKSHAJ.FullScreen = function(){
		$(".full-screen").height($(window).height());	
	}

	/*--------------------
		* Counter JS
	----------------------*/
	var a = 0;
	AKSHAJ.Counter = function(){
		var oTop = $('.counter-box').offset().top - window.innerHeight;
		  if (a == 0 && $(window).scrollTop() > oTop) {
		    $('.count').each(function () {
		          $(this).prop('Counter',0).animate({
		              Counter: $(this).text()
		          }, {
		              duration: 4000,
		              easing: 'swing',
		              step: function (now) {
		                  $(this).text(Math.ceil(now));
		              }
		          });
		      });
		    a = 1;
		  }
	}

	/*--------------------
		* owl Slider
	----------------------*/
	AKSHAJ.PortfolioSlider = function(){
		var testimonials_slider = $('#portfolio-slider-single');
	    testimonials_slider.owlCarousel({
	        loop: true,
	        margin: 0,
	        nav:false,
	        autoplay: true,
	        autoplayTimeout:10000,
	        autoplayHoverPause: true,
	        responsive: {
	          0: {
	            items: 1
	          },
	          768: {
	            items: 2
	          },
	          991: {
	            items: 3
	          },
	          1140: {
	            items: 3
	          },
	          1650: {
	            items: 4
	          }
	        }
	    });
	}

	AKSHAJ.ClientSlider = function(){
		var testimonials_slider = $('#client-slider-single');
	    testimonials_slider.owlCarousel({
	        loop: true,
	        margin: 0,
	        nav:false,
	        autoplay: true,
	        autoplayTimeout:10000,
	        autoplayHoverPause: true,
	        items:1
	    });
	}

	/*--------------------
		* AKSHAJ function
	----------------------*/
	// Window on Load
	$(window).on("load", function(){
		AKSHAJ.WebLoad();
	});
	// Document on Ready
	$(document).on("ready", function(){
		AKSHAJ.mTypeIt(),
		AKSHAJ.HeaderScroll(),
		AKSHAJ.SkillBar(),
		AKSHAJ.PortfolioSlider(),
		AKSHAJ.ClientSlider(),
		AKSHAJ.FullScreen();
	});

	// Document on Scrool
	$(window).on("scroll", function(){
		AKSHAJ.Counter(),
		AKSHAJ.HeaderFixed();
	});

	// Window on Resize
	$(window).on("resize", function(){
		AKSHAJ.FullScreen();
	});


})(jQuery);

var ml_webform_1580630 = ml_account('webforms', '1580630', 'f4w5f6', 'load');
ml_webform_1580630('animation', 'slideboxRight');