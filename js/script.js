/* =================================
Navigation Bar
================================= */

 /* $(function ($) {
	$(document).ready(function () {

		// hide .navbar first
		//$("#hiddennav").hide();

		// fade in .navbar
		$(function ($) {
			$(window).scroll(function () {

				// set distance to scroll before fadeIn
				if ($(this).scrollTop() = 0) {
					$('#hiddennav').fadeOut();
				} else {
					$('#hiddennav').fadeOut();
				}
			});
		});

	});
}(jQuery));

var position = $(window).scrollTop();

// should start at 0

$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll > position) {
		$("#hiddennav").hide();
	} else {
		$('#hiddennav').fadeIn();
	}
	position = scroll;
}); */

/* =================================
Team
================================= */

$(function () {
	$("#team-viewer").owlCarousel({
		items: 4,
		autoplay: false,
		responsiveClass: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		responsive : {
    // breakpoint from 0 up
    0 : {
        items: 1
      
    },
    // breakpoint from 480 up
    480 : {
        items: 2
    },
	
	// breakpoint from 768 up
    768 : {
        items: 3
    },
    // breakpoint from 992 up
    992 : {
        items: 4
    },
}
	});
});

/* =================================
Map
================================= */

$(function initMap() {
	// The location of KMMB
	var addressString = 'Level 23, NU Tower, 2, Jalan Tun Sambanthan, Sentral, Kuala Lumpur, 50470 Malaysia';
	var kmmb = {
		lat: 3.132352,
		lng: 101.686268
	};
	// 1. The map, centered at KMMB Nu Sentral Office

	var map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 15,
			center: kmmb
		});

	// The marker, positioned at KMMB Nu Sentral Office
	var marker = new google.maps.Marker({
		position: kmmb,
		map: map
	});

	// 3. Add Info Window

	var infowindow = new google.maps.InfoWindow({
		content: addressString
	});

	// 4. Show info window when user clicks the marker

	marker.addListener('click', function () {
		infowindow.open(map, marker);
	});
});



/* =================================
Mobile Menu
================================= */
$(function () {
	
	// 1. Show Mobile Navigation 
	$("#mobile-nav-open-btn").click(function() {
		
		// show mobile menu
		$("#mobile-nav").css("height", "100%");
		
		// and hide hamburger button
		$("#mobile-nav-open-btn").hide();
		
	});
	
	// 2. Hide Mobile Navigation
	
	$("#mobile-nav-close-btn").click(function() {
		
		// hide mobile menu, 300ms transition attached in CSS
		$("#mobile-nav").css("height", "0%");
		
		// and show hamburger button, upon closing of mobile menu, not simultaneously onclick, because of  transparency
		
		setTimeout(function() {
			$("#mobile-nav-open-btn").show();
		}, 300);
			
		})
		
		
	});
	
	
/* =================================
Animation
================================= */
// Animate on scroll

$(function () {	
	new WOW().init();

});

//Animation for Home screen tagline on page load
$(window).on('load', function() {
	
	$("#navlogo").addClass("animated fadeIn");
	$("#navMenu").addClass("animated fadeIn");
	$("#navbar-full-text").addClass("animated fadeIn");
	$("#navbar-short-text").addClass("animated fadeIn");
	$("#heading-1").addClass("animated fadeInDown");
	$("#heading-2").addClass("animated fadeInDown");
	$("#heading-3").addClass("animated fadeInDown");
	$("#heading-4").addClass("animated fadeInDown");
});






















