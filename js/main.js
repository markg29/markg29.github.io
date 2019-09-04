$( document ).ready(function() {

	var typed = new Typed(".typed", {
	  strings: ["Full Stack Web Developer.", "Student at Baliuag University."],
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
    var stats_TopOffset = $(".stats_section").offset().top;
    var countUpFinished = false;

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

    	if(!countUpFinished && window.pageYOffset > stats_TopOffset - $(window).height() + 200){
	    		$('.counter').each(function(){
	    		var el = $(this);
	    		var endValue = parseInt(el.text());

	    		el.countup(endValue);
	    	});
	    		countUpFinished = true;
    	}

    });

    $("[data-fancybox]").fancybox();

	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

	$('#filters a').click(function(){
		$('#filters .current').removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");
		$(".items").isotope({
		filter: selector,
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});
	return false;

	});


});