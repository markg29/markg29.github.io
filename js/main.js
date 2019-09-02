$( document ).ready(function() {

	var typed = new Typed(".typed", {
	  strings: ["Web Developer.", "Student."],
	  showCursor: false,
	  loop: true,
	  typeSpeed: 70,
	  startDelay: 1000
	});
    
    $('#slides').superslides({
    	animation: 'fade',
    	play: 5000,
    	pagination: false
    });

    $('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});

	$('.chart').easyPieChart({
        //your options goes here
    });

});