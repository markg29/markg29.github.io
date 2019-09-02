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
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});
 

    var skills_TopOffset = $(".skills_section").offset().top; // Get the top offset of the current window position

    $(window).scroll(function(){
    	if(window.pageYOffset > skills_TopOffset - $(window).height() + 200) {
	    		$('.chart').easyPieChart({
		        barColor: '#ecf0f1',
		        easing: 'easeInOut',
		        trackColor: '#34495e',
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent){
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });
    	}
    })
});