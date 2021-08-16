$(document).ready(function() {

  //Выезжающее меню
  $(window).scroll(function() {
    const scrollMenu = $('.bottom-header').offset().top;
    const scrolled = $(this).scrollTop();
      if (scrolled > 116) {
        if (window.matchMedia('(min-width: 1100px)').matches) {
          $('.bottom-header').addClass('active');
          $('.page').addClass('scroll');
          $('.bottom-header__menu-list').addClass('active');
        }
      } else if (scrolled < 116) {
        $('.bottom-header').removeClass('active');
        $('.page').removeClass('scroll');
        $('.bottom-header__menu-list').removeClass('active');
      }
  });

  //menuHamburger
  $('.menu-toggle').click(function(){
    $(this).toggleClass('open');
    $('.bottom-header').toggleClass('_active');
    $('body').toggleClass('_no-scroll');
    $('.top-btn').toggleClass('_disabled');
    $('.top-header').toggleClass('_active');
  })

  $('.bottom-header__menu li a').on('click', function() {
    $('.menu-toggle').removeClass('open');
    $('.bottom-header').removeClass('_active');
    $('body').removeClass('_no-scroll');
    $('.top-btn').removeClass('_disabled');
    $('.top-header').toggleClass('_active');
  });
  
  //ТЕЛЕФОН МАСКА
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

  //FancyBox
  $(".fancybox").fancybox();

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
    $('.feedback-slider').slick('setPosition') //Инициализация табов
  });

  //Слайдер
  $('.feedback-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    infinite: false,
    variableWidth: true,
    prevArrow: '<button class="feedback-slider__btn feedback-slider__btn-prev"><img src="img/arrow-prev.png" alt=""></button>',
    nextArrow: '<button class="feedback-slider__btn feedback-slider__btn-next"><img src="img/arrow-next.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 871,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: true,
          speed: 500,
        }
      },
    ]
  });

  //Скроллбар
  $(window).on("load",function() {
    $(".feedback-slider__item-content article, .products-content__container, .retreat-content__container").mCustomScrollbar({
      theme: "dark"
    });
  });

  $('.webinar-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button class="webinar-slider__btn webinar-slider__btn-prev"><img src="img/arrow-prev.png" alt=""></button>',
    nextArrow: '<button class="webinar-slider__btn webinar-slider__btn-next"><img src="img/arrow-next.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 831,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          speed: 500,
          arrows: true,
        }
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
          arrows: true,
          speed: 500,
        }
      },
    ]
  });

  $('.meditation-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    prevArrow: '<button class="meditation-slider__btn meditation-slider__btn-prev"><img src="img/arrow-prev.png" alt=""></button>',
    nextArrow: '<button class="meditation-slider__btn meditation-slider__btn-next"><img src="img/arrow-next.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 831,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          speed: 500,
        }
      },
    ]
  });

  $('.social-page__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 1500,
    prevArrow: '<button class="social-page__slider-btn social-page__slider-btnprev"><img src="img/arrow-prev.png" alt=""></button>',
    nextArrow: '<button class="social-page__slider-btn social-page__slider-btnnext"><img src="img/arrow-next.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 1851,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: true,
        }
      },
      {
        breakpoint: 631,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: true,
          speed: 500,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: true,
          speed: 500,
        }
      },
    ]
  });

  //Выпадания
  $('.questions-page__item-title').on('click', function() {
    $(this).parents().toggleClass('_active'); 
    $(this).toggleClass('_enable'); 
    $(this).next().slideToggle('slow');
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
  
  /* Плавный скролл к якорю */
  $(function(){ $('.bottom-header__menu li a[href^="#"]').click(function(){
    var _href = $(this).attr('href');
    $('html, body').animate({scrollTop: $(_href).offset().top - 50 +'px'}); return false; });
  });
  
});