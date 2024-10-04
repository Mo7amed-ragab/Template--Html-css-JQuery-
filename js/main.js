$(function () {
  "use strict";
  // ------------ header height ----------------- //
  var myHeader = $('.head');
  var mySlider = $('.bxslider');
  myHeader.height($(window).height());
  $(window).resize(function () {
    myHeader.height($(window).height());
    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
      });
  });
  // -------------- links active class ------------- //
  $(".links li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
  // ------------- bxslider item center ---------------//
  mySlider.each(function () {
    $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
  });
  // ------------- trigger bxslider -------------- //   
  mySlider.bxSlider({
    pager: false
  });
  // -------------- scroll to div ------------ //
  $('.links li a').click(function () {
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top
    }, 1000);
    console.log('#' + $(this).data('value'));
  });
  // -------------- auto slider ---------------- //
  (function autoslider() {
    $ ('.slider .active').each(function () {
      if (!$(this).is(':last-child')) {
        $(this).delay(3000).fadeOut(1000, function () {
          $(this).removeClass('active').next().addClass('active').fadeIn();
          autoslider();
        });
      } else {
        $(this).delay(3000).fadeOut(1000, function () {
          $(this).removeClass('active');
          $('.slider div').eq(0).addClass('active').fadeIn();
          autoslider();
        });
      }
    });
  }());
  // --------------- niceScroll ---------------- //

  $('html').niceScroll({
    cursorcolor: '#1abc9c',
    cursorwidth: '10px',
    cursorborder: '1px solid #1abc9c',
  });
  
});
