(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  // Sticky Menu
  $(window).scroll(function () {
    var height = $('.top-header').innerHeight();
    if ($('header').offset().top > 10 || $( "#navigation" ).hasClass( "show" )) {
      $('.top-header').addClass('hide');
      $('.navigation').addClass('nav-bg');
      $('.navigation').css('margin-top','-'+height+'px');
    } else {
      $('.top-header').removeClass('hide');
      $('.navigation').removeClass('nav-bg');
      $('.navigation').css('margin-top','-'+0+'px');
    }
  });


  // white menu mobile
  $('.custom-hamburger').on('click', function () {
      if ($( "#navigation" ).hasClass( "show" ) && $('header').offset().top <= 10 ) {
      $('.navigation').removeClass('nav-bg');
    } else if ($( "#navigation" ).hasClass( "show" ) && $('header').offset().top <= 10 ) {
      $('.navigation').removeClass('nav-bg');
    } else {
      $('.navigation').addClass('nav-bg');
    }
  });


  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 7500,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    arrows: true,
    fade: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
    dots: true
  });
  $('.hero-slider').slickAnimation();


  // filter
  $(document).ready(function () {
    var containerEl = document.querySelector('.filtr-container');
    var filterizd;
    if (containerEl) {
      filterizd = $('.filtr-container').filterizr({});
    }
    //Active changer
    $('.filter-controls li').on('click', function () {
      $('.filter-controls li').removeClass('active');
      $(this).addClass('active');
    });
  });

  //  Count Up
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });

  // Animation
  $(document).ready(function () {
    $('.has-animation').each(function (index) {
      $(this).delay($(this).data('delay')).queue(function () {
        $(this).addClass('animate-in');
      });
    });
  });

  // Expanded cards
  $(document).ready(function(){
  var zindex = 10;

  $("button.click-only").click(function(e){
    e.preventDefault();

    var isShowing = false;
    var card = $(this).parent();

    if (card.hasClass("d-card-show")) {
      isShowing = true
    }

    if ($("div.dashboard-cards").hasClass("showing")) {
      $("div.card.d-card-show").find(".flip-title")
        .removeClass("zwin")
        .addClass("download")

      $("div.card.d-card-show")
        .removeClass("d-card-show");



      if (isShowing) {
        $("div.dashboard-cards")
          .removeClass("showing");

      } else {
        card
          .css({zIndex: zindex})
          .addClass("d-card-show");


        $("div.card.d-card-show").find(".flip-title")
          .removeClass("zwin")
          .addClass("download")

        $("div.card.d-card-show").find(".flap1")
          .css("display: block;")

        card.find(".flip-title")
          .removeClass("download")
          .addClass("zwin")

        $(".flap1").css("display: none;")

      }

      zindex++;

    } else {
      $("div.dashboard-cards")
        .addClass("showing");

      card
        .css({zIndex:zindex})
        .addClass("d-card-show");

      card.find(".flip-title")
        .removeClass("download")
        .addClass("zwin")

      $(".flap1").css("display: block;")

      zindex++;
    }
  });
});

$(document).ready(function() {
    $(".navbar-nav").accessibleDropDown();


});

$.fn.accessibleDropDown = function () {
    var el = $(this);
    /* Make dropdown menus keyboard accessible */

    $("a", el).focus(function(e) {
        var focusedElement = $(this).parents("li");
//        $(document).on('keydown', function(event) {
//            if(event.which == 13) {
//                console.log('adding class to ', focusedElement)
//                focusedElement.addClass("accessible-hover");
//            }
//        })
        focusedElement.addClass("accessible-hover");
        console.log('focus', $(this));
        console.log('add class to ', focusedElement);
    }).blur(function() {
        console.log('blur', $(this));
        console.log('remove class from ', $(this).parents('li'));
        $(this).parents("li").removeClass("accessible-hover");

    });
};

$( "button" ).click( function(e) {
			var obj=this;
			setTimeout(function() { disableCardLinks(e, obj); }, 1000);
		});

		function disableCardLinks(pEvent, pThis)
		{
		    var Cards = $('.filtr-item')
		    Cards.find('a').attr('tabindex', '0');
			var hiddenCards = $('.filteredOut');
            console.log(hiddenCards.find('a'));
            hiddenCards.find('a').attr('tabindex', '-1');
		}


})(jQuery);
