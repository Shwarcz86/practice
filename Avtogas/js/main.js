$(document).ready(function() {

  //MENU
  $('.header__btn').on('click', function(e) { 
    $('.header__btn').toggleClass('header__btn_active');
    $('.header__menu').toggleClass('header__menu_active');
    $('body').toggleClass('no-scroll');
    $('.top-btn').toggleClass('top-btn_disabled');
  });

  //ТЕЛЕФОН МАСКА
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

  //ТАБЫ
  $('.tab').on('click', function(e) { 
    e.preventDefault();

    $($(this).siblings()).removeClass('tab_active'); 
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content_active');

    $(this).addClass('tab_active'); 
    $($(this).attr('href')).addClass('tabs-content_active');

    if (window.matchMedia('(max-width: 580px)').matches) { // аналог media-queries
      $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 85 +'px'});
    }
  });

  //Кнопка вверх
  var button = $('.top-btn');	
  $(window).scroll (function () {
    if ($(this).scrollTop () > 600) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });	 
  button.on('click', function() {
  $('body, html').animate({
  scrollTop: 0
  }, 800);
  return false;
  });		 

  //Слайдер
    $('.brand-page__slider').slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      dots: true,
      speed: 1500,
      infinite: false,
      prevArrow: '<button class="brand-page__slider-btn brand-page__slider-btnprev"><img src="img/arrow-prev.png" alt=""></button>',
      nextArrow: '<button class="brand-page__slider-btn brand-page__slider-btnnext"><img src="img/arrow-next.png" alt=""></button>',
      responsive: [
        {
          breakpoint: 1421,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true,
          }
        },
        {
          breakpoint: 1141,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          }
        },
        {
          breakpoint: 861,
          settings: {
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          }
        },
        {
          breakpoint: 601,
          settings: {
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        },
      ]
    });

    $('.reviews-page__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      dots: true,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: '<button class="reviews-page__slider-btn reviews-page__slider-btnprev"><img src="img/arrow-prev.png" alt=""></button>',
      nextArrow: '<button class="reviews-page__slider-btn reviews-page__slider-btnnext"><img src="img/arrow-next.png" alt=""></button>',
      responsive: [
        {
          breakpoint: 1801,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 1301,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
          }
        },
        {
          breakpoint: 1251,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            adaptiveHeight: true,
            speed: 500,
          }
        },
        {
          breakpoint: 431,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            adaptiveHeight: true,
            centerMode: false,
            speed: 500,
          }
        },
      ]
    });
    
});


