/*  PSUEDOCODE:

Ideas to code:

Carousel rotator of cacti pics - working on below

When you hover over the text/photo of a post, make more of the text visible

Think about ways to get user input and give output


 /*Can you help me figure out this slick plugin?  I want to use it as a rotator in the main tag. I'm mostly confused on how I would deal with all of those file and link to things in my html.


<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="slick/slick.min.js"></script>

   $('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
}); */
			
$(document).ready(function() {
	$('.hamburger').on('click', function() {
		$('.header-nav').slideToggle();
	} 
	);
});