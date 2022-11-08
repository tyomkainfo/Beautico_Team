$('.owl-carousel_1').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    navText: [ '', ' ' ],
    autoplay: true,
    smartSpeed:1000,
    autoWidth: true,
    responsive:{
        0:{
            items:1
        },

        1000:{
            items:1
        },

        1640:{
            items:1
        },

        1920:{
            items:1
        },
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

$(document).ready(function () {
    $('header .hidden_board button').on('click', function () {
        $('header .hidden_board').hide();
    })

    $('header .burger').on('click', function () {
        $('header .burger_menu_wrapper').addClass('active');
        $('html').css({ overflow: 'hidden' });
    })
    $('header .burger_menu_wrapper .close').on('click', function () {
        $('header .burger_menu_wrapper').removeClass('active');
        $('html').css({ overflow: 'auto' });
    })
})
