/*  PSUEDOCODE:

Ideas to code:

Carousel rotator of cacti pics - working on below

When you hover over the text/photo of a post, make more of the text visible

Think about ways to get user input and give output


*/

			
$(document).ready(function() {
	$('.hamburger').on('click', function() {
		$('.header-nav').slideToggle();
	} 
	);
});

/*
$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});



$(document).ready(function(){
  $('.rotator').slick({
    setting-name: setting-value
  });
});*/