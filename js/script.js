/* =================================
Navigation Bar
================================= */

$(function ($) {
	$(document).ready(function () {

		// hide .navbar first
		$("#hiddennav").hide();

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
});

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
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
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
































