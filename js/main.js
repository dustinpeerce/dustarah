$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 9000,
	});


	// Max height on Slider image and Map
	$('#slider').css('max-height', $(window).height());
	$('#map').css('max-height', $(window).height() - 70);

	// Position the slider text in the middle
	var sliderHeight = $('#slider').innerHeight() + 70;
	var sliderHeaderHeight = $('.slider-header-container').outerHeight(true);
	var remainingSize = sliderHeight - sliderHeaderHeight;
	var topValue = remainingSize/2;
	$('.slider-header-container').css('top', topValue);

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 20) {
	        $(".navbar").addClass("top-nav-collapse");
	    } else {
	        $(".navbar").removeClass("top-nav-collapse");
	    }
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $(document).on('click', 'a.page-scroll', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});

	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
	window.initMap = function() {
        var uluru = {lat: 36.995483, lng: -86.437271};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          scrollwheel: false,
          center: uluru
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

        var contentString = '<p><strong>La Gala</strong><br>' +
        					'601 State Street<br>' +
        					'Bowling Green, KY 42101</p>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        infowindow.open(map, marker);
    }

	// Counter
	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});

