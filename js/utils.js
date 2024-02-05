$(document).ready(function(){
	$('.nav__list-link, .header__button').click(function() {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top - 50;
		$("body,html").animate({scrollTop: destination }, 800);	
	});	
	
	$('.advantages__container').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,		
		dots: true,
		arrows: false,		
		responsive: 
		[		
		{
		  breakpoint: 765,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,						
		  }
		}
	   
	  ]	
	});
	
	$('.free__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		dots: true,
		arrows: true,
		responsive: 
	[
		{
		  breakpoint: 765,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,	
			centerMode: false,	
			arrows: false,
		  }
		}
	   
	  ]
	});	
	
	var headerHeight = $('.header').height() - 5; 	
	$(window).scroll(function(){
		if( $(window).scrollTop() > headerHeight ) {
			$('.nav').addClass('sticky');
		}
		else {
			$('.nav').removeClass('sticky');
		}
	});
	
	$('.menu_icon').click(function() {						
		$(this).toggleClass('close');		
		$('.nav__list').toggleClass('visible');	
		$('.nav').toggleClass('fix');	
	});
	$('.nav__list-link').click(function() {	
		$('.menu_icon').removeClass('close');
		$('.nav__list').removeClass('visible');
	});
	
	
		
	
	$('.parallax-layer1').parallax({
		mouseport: jQuery(".usage-port")
	});
	$('.parallax-layer2').parallax({
		mouseport: jQuery(".composition-port")
	})
	$('.parallax-layer3').parallax({
		mouseport: jQuery(".composition-port2")
	})	
	$('.parallax-layer4').parallax({
		mouseport: jQuery(".order-port")
	})

});

