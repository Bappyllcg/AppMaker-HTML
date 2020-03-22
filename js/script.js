$(document).ready(function(){
	$(".testemonial-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
    });
    $('.mobileNav').click(function(){
        $('.main-menu').slideToggle();
    });
	
})