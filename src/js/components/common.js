$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 788,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /*
    *
    * Tabs
    *
    */

    $(".content__item").not(":first").hide();
    $(".tabs-wrap .tabs__item").click(function () {
        $(".tabs-wrap .tabs__item").removeClass("tabs__item--activ").eq($(this).index()).addClass("tabs__item--activ");
        $(".content__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("tabs__item--activ");

    
   
    /*
    *
    * Header drop down
    *
    */

    // $(document).scroll(function () {
    //     if (($(document).scrollTop() > 400) & ($(document).width() > 800)) {
    //         $('.main-header').addClass('header_fixed');
    //     } else
    //         $('.main-header').removeClass('header_fixed');
    // });


    /*
    *
    * Scrol to section
    *
    */

    // $('nav a').on('click', function (event) {
    //     event.preventDefault();
    //     var ellClick = $(this).attr('href');
    //     var distScroll = $(ellClick).offset().top;
    //     $('html, body').animate(
    //         { 'scrollTop': distScroll }, 1500);
    // })
    

    /*
    *
    * Show more
    *
    */

    $('.show-btn').on('click', function (event) {
        event.preventDefault();
        $('.show__more').slideToggle();
    })


    /*
    *
    * Button Up
    *
    */

    $('body').append('<button class="btn-up"/>');

    $('.btn-up').click(function () {
        $('html, body').animate({ 'scrollTop': 0 }, 1000);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.btn-up').addClass('btn-up__active');
        } else {
            $('.btn-up').removeClass('btn-up__active');
        }
    })


    $('.bottom-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 788,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
 

});

/*
    *
    * Modal Window
    *
    */

    // $('.btn-login').click(function (event) {
    //     event.preventDefault();
    //     $('.modalwindow').show();
    //     $('.overlay-modal').show();
    //     $('body').css('overflow', 'hidden');
    // })

    // $('.material-icons').click(function (event) {
    //     event.preventDefault();
    //     $('.modalwindow').hide();
    //     $('.overlay-modal').hide();
    //     $('body').css('overflow', '');
    // })

    // $(document).bind('click keydown', function (event) {
    //     if (event.keyCode == 27) {
    //         $('.modalwindow').hide();
    //         $('.overlay-modal').hide();
    //         $('body').css('overflow', '');
    //     }
    // })


/*
*
* Price show
*
*/

// $('.price-show').not(':first').hide();
// $('.switch .switch-input').click(function () {
//     $('.price-show').fadeToggle(300);
// });
