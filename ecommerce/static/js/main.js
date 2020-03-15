jQuery(document).ready(function() {
    "use strict";

    /******************************************
      Newsletter popup
    ******************************************/

    jQuery('#myModal').appendTo("body");

    function show_modal() {
        jQuery('#myModal').modal('show');
    }

    jQuery('#myModal').modal({
        keyboard: false,
        backdrop: false
    });
    /******************************************
      Navigation
    ******************************************/

    jQuery('.mega-menu-title').on('click', function() {
        if (jQuery('.mega-menu-category').is(':visible')) {
            jQuery('.mega-menu-category').slideUp();
        } else {
            jQuery('.mega-menu-category').slideDown();
        }
    });


    jQuery('.mega-menu-category .nav > li').hover(function() {
        jQuery(this).addClass("active");
        jQuery(this).find('.popup').stop(true, true).fadeIn('slow');
    }, function() {
        jQuery(this).removeClass("active");
        jQuery(this).find('.popup').stop(true, true).fadeOut('slow');
    });


    jQuery('.mega-menu-category .nav > li.view-more-cat').on('click', function(e) {
        if (jQuery('.mega-menu-category .nav > li.more-menu').is(':visible')) {
            jQuery('.mega-menu-category .nav > li.more-menu').stop().slideUp();
            jQuery(this).find('a').text('More');
        } else {
            jQuery('.mega-menu-category .nav > li.more-menu').stop().slideDown();
            jQuery(this).find('a').text('Close menu');
            jQuery(this).find('a').addClass('menu-hide');

        }
        e.preventDefault();
    });
    /******************************************
      Featured Slider
    ******************************************/
    jQuery("#featured-slider .slider-items").owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
        itemsTablet: [640, 2], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /******************************************
      Trending Slider
    ******************************************/
    jQuery("#trending-slider .slider-items").owlCarousel({
        items: 5, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
        itemsTablet: [640, 2], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /******************************************
      Top Products Slider
    ******************************************/
    jQuery("#top-products-slider .slider-items").owlCarousel({
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1024, 1], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });

    /******************************************
      Brand Logo Slider
    ******************************************/
    jQuery("#jtv-brand-logo-slider .slider-items").owlCarousel({
        autoPlay: true,
        items: 5, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
        itemsTablet: [640, 2], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: false,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /******************************************
      Category Banner Slider
    ******************************************/
    jQuery("#category-desc-slider .slider-items").owlCarousel({
        autoplay: true,
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1024, 1], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /******************************************
      Related Products Slider
    ******************************************/
    jQuery("#jtv-related-products-slider .slider-items").owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
        itemsTablet: [640, 2], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /******************************************
      Upsell Products Slider
    ******************************************/
    jQuery("#jtv-upsell-products-slider .slider-items").owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
        itemsTablet: [640, 2], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });

    /******************************************
      Mobile Menu
    ******************************************/
    jQuery(document).ready(function(jQuery) {
        jQuery("#jtv-mobile-menu").mobileMenu({
            MenuWidth: 250,
            SlideSpeed: 300,
            WindowsMaxWidth: 767,
            PagePush: true,
            FromLeft: true,
            Overlay: true,
            CollapseMenu: true,
            ClassName: "jtv-mobile-menu"
        });
    });




});


/******************************************
    PRICE FILTER
******************************************/

jQuery('.slider-range-price').each(function() {
    var min = jQuery(this).data('min');
    var max = jQuery(this).data('max');
    var unit = jQuery(this).data('unit');
    var value_min = jQuery(this).data('value-min');
    var value_max = jQuery(this).data('value-max');
    var label_reasult = jQuery(this).data('label-reasult');
    var t = jQuery(this);
    jQuery(this).slider({
        range: true,
        min: min,
        max: max,
        values: [value_min, value_max],
        slide: function(event, ui) {
            var result = label_reasult + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
            console.log(t);
            t.closest('.slider-range').find('.amount-range-price').html(result);
        }
    });
})

var isTouchDevice = ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0);
jQuery(window).on("load", function() {
    jQuery().UItoTop();


});
/*-------------------------------------------------------------
 Counter up min js
---------------------------------------------------------------*/
(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);

/*----------------------------
     cart-plus-minus-button
------------------------------ */
    jQuery(".cart-plus-minus")
    jQuery(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        jQuerybutton.parent().find("input").val(newVal);
    });
	jQuery('.acc-toggle').on('click', function(){
		if (jQuery('.acc-toggle input').is(':checked')) {
			jQuery('.create-acc-body').slideDown();
		}else{
			jQuery('.create-acc-body').slideUp();
		}
	});
		
	jQuery('.ship-toggle').on('click', function(){
		if (jQuery('.ship-toggle input').is(':checked')) {
			jQuery('.ship-acc-body').slideDown();
		}else{
			jQuery('.ship-acc-body').slideUp();
		}
	});

/******************************************
    ToTop
******************************************/
(function(jQuery) {
    jQuery.fn.UItoTop = function(options) {

        var defaults = {
            text: '',
            min: 200,
            inDelay: 600,
            outDelay: 400,
            containerID: 'toTop',
            containerHoverID: 'toTopHover',
            scrollSpeed: 1200,
            easingType: 'linear'
        };

        var settings = $.extend(defaults, options);
        var containerIDhash = '#' + settings.containerID;
        var containerHoverIDHash = '#' + settings.containerHoverID;

        jQuery('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');
        jQuery(containerIDhash).hide().click(function() {
                jQuery('html, body').animate({
                    scrollTop: 0
                }, settings.scrollSpeed, settings.easingType);
                jQuery('#' + settings.containerHoverID, this).stop().animate({
                    'opacity': 0
                }, settings.inDelay, settings.easingType);
                return false;
            })
            .prepend('<span id="' + settings.containerHoverID + '"></span>')
            .hover(function() {
                jQuery(containerHoverIDHash, this).stop().animate({
                    'opacity': 1
                }, 600, 'linear');
            }, function() {
                jQuery(containerHoverIDHash, this).stop().animate({
                    'opacity': 0
                }, 700, 'linear');
            });

        jQuery(window).scroll(function() {
            var sd = $(window).scrollTop();
            if (typeof document.body.style.maxHeight === "undefined") {
                jQuery(containerIDhash).css({
                    'position': 'absolute',
                    'top': $(window).scrollTop() + $(window).height() - 50
                });
            }
            if (sd > settings.min)
                jQuery(containerIDhash).fadeIn(settings.inDelay);
            else
                jQuery(containerIDhash).fadeOut(settings.Outdelay);
        });

    };
})(jQuery);