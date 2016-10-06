$(document).ready(function () {
  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')){ 
        closeBlog();
        return;
    }

    var currentWidth = $('.panel-cover').width();
    
    $('.content-wrapper').show();

    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      
      $('html, body').animate({
        scrollTop: $('.content-wrapper').offset().top
      });

      $('.content-wrapper').addClass('animated slideInRight');

    } 
    else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {});
      $('.panel-cover').addClass('panel-cover--collapsed');
    }
  });

  $('.closeButton').click(function(e){
    closeBlog();
  });

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  });

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  });

  var closeBlog = function(){
    var currentWidth = $('.panel-cover').width();

    $('.panel-cover').removeClass('panel-cover--collapsed');
    $('.content-wrapper').hide();
    if (currentWidth < 960) {

        $('.panel-cover').animate({'max-width': $('body').width(), 'width': '100%'}, 400, swing = 'swing', function () {})
        $('.panel-title').css('margin', '0 auto');
    }
    else{
        $('.panel-cover').animate({'max-width': $('body').width(), 'width': '100%'}, 400, swing = 'swing', function () {})
    }
  };

});
