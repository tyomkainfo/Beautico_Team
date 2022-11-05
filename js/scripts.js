$('.owl-carousel_1').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],
    autoplay: false,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:2
        },

        1000:{
            items:5
        }
    }
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],
    autoplay: false,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:2
        },

        1000:{
            items:5
        }
    }
});

$( function() {
    $( "#accordion" ).accordion();
} );