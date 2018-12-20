jQuery(function($) {
    "use strict";

    var gamba = window.gamba || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    gamba.mainFunction = function() {
        
        // slide homepage 2 - background slide
        $('.background-slide').slick({
            dots: true,
            arrows: false,
            speed: 700,
            fade: true,
            autoplay: true,
            autoplaySpeed: 7000,
            cssEase: 'linear',
            pauseOnHover: false
        });

        $('.background-slide').on('afterChange', function(event, slick, currentSlide){
            $('.slick-active  .group-title').addClass('animated fadeInDown');
            //$('.slick-active  .description').addClass('animated fadeInUp');
            $('.slick-active  .btn-left').addClass('animated fadeInLeft');
            $('.slick-active  .btn-right').addClass('animated fadeInRight');

            $('.slick-active  .group-title').removeClass('hidden');
            //$('.slick-active  .description').removeClass('hidden');
            $('.slick-active  .btn-left').removeClass('hidden');
            $('.slick-active  .btn-right').removeClass('hidden');
        });

        $('.background-slide').on('beforeChange', function(event, slick, currentSlide){
            $('.slick-active  .group-title').removeClass('animated fadeInDown');
            //$('.slick-active  .description').removeClass('animated fadeInUp');
            $('.slick-active  .btn-left').removeClass('animated fadeInLeft');
            $('.slick-active  .btn-right').removeClass('animated fadeInRight');

            $('.slick-active  .group-title').addClass('hidden');
            //$('.slick-active  .description').addClass('hidden');
            $('.slick-active  .btn-left').addClass('hidden');
            $('.slick-active  .btn-right').addClass('hidden');
        });

    };

   

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        gamba.mainFunction();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });

});
