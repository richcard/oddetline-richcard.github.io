/**    
 * 
 * ---------------------------------------------------------------------------
 *
 * Template Name: Arina - Factory & Construction HTML5 Responsive Template
 * Template URL:	 http://coderboys.net/arina
 * Author : themewarehouse
 * Description: This is industrial and factory HTML5 template
 * Version : 1.0 
 *
 * --------------------------------------------------------------------------- 
 *
 */

(function ($) {
    'use strict';

    /*  =========================
            Fixed Menu
        =========================*/

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.menu-area').addClass('fixed-menu');
        } else {
            $('.menu-area').removeClass('fixed-menu');
        }
    });

    /*  ======================================
            Mobile Menu
        ====================================== */

    var mobile_menu = $('ul.navigation');
    mobile_menu.slicknav({
        prependTo: '.responsive-menu-wrap'
    });

    /*  =========================
            sticky
        =========================*/
    $(".menu-area").sticky({
        topSpacing: 0
    });

    /*  ======================================
            Owl Carousel
        ====================================== */

    // main slider & destination slider
    var slider_pulse = $('.slider-wraper, .client-comment-info');
    slider_pulse.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 500,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*---------- blog slider ---------*/
    var blog_slider = $('.blog-slide');
    blog_slider.owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 5000,
        mouseDrag: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    /*  ======================================
            CounterUp
        ====================================== */

    var progress = $('.counter');
    progress.waypoint(function () {
        var CounterUp = $('.counter');
        CounterUp.each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 2500,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            });
        });
    }, {
        offset: '100%'
    });

    /*  ======================================
            Barfiller
        ====================================== */

    var progress_bar = $('.barfiller');
    progress_bar.waypoint(function () {

        /*-------------------------------------
            Progress Bar
        -------------------------------------*/

        var progressbarOne = $('#bar1');
        var progressbarTwo = $('#bar2');
        var progressbarThree = $('#bar3');
        var progressbarFour = $('#bar4');
        var progressbarFive = $('#bar5');
        var progressbarSix = $('#bar6');

        progressbarOne.barfiller();
        progressbarTwo.barfiller();
        progressbarThree.barfiller();
        progressbarFour.barfiller();
        progressbarFive.barfiller();
        progressbarSix.barfiller();

    }, {
        offset: '100%'
    });

    /*  ======================================
            Slick Slider
        ====================================== */

    var brand_bar = $('.partners-brand');
    brand_bar.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    /*  =============================
		    wmBox for popup video
		============================= */

    $.wmBox();

    /*  ======================================
            Scroll Up
        ====================================== */

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: "<a class='hvr-icon-bob click-top'></a>", // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*  ======================================
            Parallax 
        ====================================== */

    var parallax_effect = $('.parallax');
    parallax_effect.jarallax({
        speed: 0.5
    });

    $(window).on('load', function () {

        /*  ======================================
                Preloader
            ====================================== */

        var preloader = $('.preloader');
        preloader.fadeOut('500');

        /*  ======================================
                Isotope
            ====================================== */

        // init Isotope

        var isotope_content = $('.iso-content');
        isotope_content.isotope({
            itemSelector: '.iso-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.iso-item'
            }
        });

        // filter items on button click

        var isotope_nav = $('.iso-nav ul li');
        isotope_nav.on('click', function () {
            $('.iso-nav ul li').removeClass('portfolio-active');
            $(this).addClass('portfolio-active');
            var selector = $(this).attr('data-filter');
            $('.iso-content').isotope({
                filter: selector
            });
            return false;
        });
    });
}(jQuery));
