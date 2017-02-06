$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 9000,
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
    }


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});




