$('.schedule button').click(function() {
	$('.schedule button').toggleClass('off-state');
	$('.schedule-day').toggleClass('hidden');
});


$(function(){
	$('.toggleNav').click(function(event) {
		$('body').toggleClass('open');
	});

	$('.navigation').click(function(event) {
		$('body').removeClass('open');
	}); 
	
	$('.navigation a').click(function(event) {
		event.preventDefault();
		$(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true});

	});
	$('nav').affix({
	 	offset: {
			top: $('header').outerHeight() - 50
		}
	})

	$('.play').click(function(event) {
		$('.highlights').html('<div class="video"><iframe src="https://player.vimeo.com/video/140530649?autoplay=1&color=ffffff&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>')
	});
});