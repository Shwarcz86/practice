$(document).ready(function() {

  //Выезжающее меню
  $(window).scroll(function() {
    const scrollMenu = $('.bottom-header').offset().top;
    const scrolled = $(this).scrollTop();
      if (scrolled > 200) {
        $('.bottom-header').addClass('_active');
      } else if(scrolled < 200) {
        $('.bottom-header').removeClass('_active');
      }
  });

  //menuHamburger
  $('.menu-toggle').click(function() {
    $('.header__top-menu._hidden').addClass('_active');
    $('body').addClass('_no-scroll');
  })

  //menu
  $('.btn-menu').click(function(){
    $('.header__top-menu._hidden').addClass('_active');
    $('body').addClass('_no-scroll');
  })

  $('.header__btn-close').click(function(){
    $('.header__top-menu._hidden').toggleClass('_active');
    $('body').removeClass('_no-scroll');
  })

  $(window).load(function() {
  //Слайдер-баннер
  $('.banner-page__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 1500,
    infinite: true,
    fade: true,
    /*
    autoplay: true,
    autoplaySpeed: 5000,
    appendArrows:'.banner-page .container',
    */
    prevArrow: '<button class="banner-page__slider-btn banner-page__slider-btnprev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="banner-page__slider-btn banner-page__slider-btnnext"><img src="img/arrow-right.png" alt=""></button>',
  });

  $('.banner-page__slider-btn').wrap('<div class="container"></div>');
  });

  if (window.matchMedia('(min-width: 800px)').matches) {
    $('#fullpage').fullpage({
      // Прокрутка целой страницы
      autoScrolling: true,
      scrollHorizontally: true,
      sectionSelector: '.page-section',
      /*
      responsiveWidth: true,
      responsiveHeight: true,
      scrollOverflow: true,
      */
    });
  }

  $('.offers-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 500,
    variableWidth: true,
    centerMode: true,
    prevArrow: '<button class="offers-slider__btn offers-slider__btn-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="offers-slider__btn offers-slider__btn-next"><img src="img/arrow-right.png" alt=""></button>',
  });

  $('.img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    prevArrow: '<button class="banner-page__slider-btn _img-slider banner-page__slider-btnprev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="banner-page__slider-btn _img-slider banner-page__slider-btnnext"><img src="img/arrow-right.png" alt=""></button>',
  });

  /* Анимация чисел */
  /*
  if ($('body').hasClass('home')) {
    var show = true;
    var countbox = ".home .text-box";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 850 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.home .text-box ._counter').css('opacity', '1');
            $('.home .text-box ._counter').spincrement({
                thousandSeparator: " ",
                duration: 2400
            });           
            show = false;
        }
    });
  }
*/
  //ТЕЛЕФОН МАСКА
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

  $('.club-slider').slick({
    asNavFor: '.info-slider',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 300,
    focusOnSelect: true,
    appendArrows:'.club-page__inner',
    prevArrow: '<button class="club-slider__btn club-slider__btn-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="club-slider__btn club-slider__btn-next"><img src="img/arrow-right.png" alt=""></button>',
  });

  //Счетчик
  $(".club-slider").on('afterChange', function (event, slick, currentSlide) {
      $(".cp").text(currentSlide<9?`0${currentSlide+1}`:currentSlide+1);
  });

  $('.info-slider').slick({
    asNavFor: '.club-slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    adaptiveHeight: true,
  });

  $('.video-page__slider').slick({
    asNavFor: '.info-video__slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 300,
    focusOnSelect: true,
    appendArrows:'.video-page__inner',
    prevArrow: '<button class="video-page__slider-btn video-page__slider-btnprev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="video-page__slider-btn video-page__slider-btnnext"><img src="img/arrow-right.png" alt=""></button>',
  });

  //Счетчик
  $(".video-page__slider").on('afterChange', function (event, slick, currentSlide) {
    $(".cp-1").text(currentSlide<9?`0${currentSlide+1}`:currentSlide+1);
  });

  $('.info-video__slider').slick({
    asNavFor: '.video-page__slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    speed: 300,
  });

  $('.gallery-page__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 500,
    appendArrows:'.gallery-page__wrapper',
    prevArrow: '<button class="gallery-page__slider-btn gallery-page__slider-btnprev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="gallery-page__slider-btn gallery-page__slider-btnnext"><img src="img/arrow-right.png" alt=""></button>',
  });

  //Выпадания списка в меню
  $('.header__top-menu .menu-item-has-children button').on('click', function() {
    $(this).next().slideToggle('fast');
    $(this).toggleClass('active');
  });

  //Скроллбар
  $(window).on("load",function() {
    $(".map-page__objects-list").mCustomScrollbar({
      theme: "dark",
    });
  });

/*
  var $slider = $('.club-slider');

  if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');
    
    var updateSliderCounter = function(slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + ' / ' +slidesCount)
    };
  
    $slider.on('init', function(event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });
  
    $slider.on('afterChange', function(event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });
  
    $slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      speed: 500,
      prevArrow: '<button class="banner-page__slider-btn _img-slider banner-page__slider-btnprev"><img src="img/arrow-left.png" alt=""></button>',
      nextArrow: '<button class="banner-page__slider-btn _img-slider banner-page__slider-btnnext"><img src="img/arrow-right.png" alt=""></button>',
    });
  }

*/
});


/*

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
    ]
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

  //Выпадания списка в меню
  $('.header__menu-link').on('click', function() {
    if (window.matchMedia('(max-width: 940px)').matches) {
      $(this).next().slideToggle('slow');
      $(this).toggleClass('active');
    }
  });

*/