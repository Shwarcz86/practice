$(document).ready(function() {

  //Выезжающее меню
  $(window).scroll(function() {
    const scrollMenu = $('.header').offset().top;
    const scrolled = $(this).scrollTop();
      if (scrolled > 10) {
        if (window.matchMedia('(min-width: 1151px)').matches) {
          $('.header').addClass('fixed');
          $('.page').addClass('active');
          $('.bottom-header__menu').addClass('active');
        }
      } else if (scrolled < 10) {
        $('.header').removeClass('fixed');
        $('.page').removeClass('active');
        $('.bottom-header__menu').removeClass('active');
      }
  });

  //menuHamburger
  $('.menu-toggle').click(function(){
    $(this).toggleClass('open');
    $('.header__navigation').toggleClass('_active');
    $('body').toggleClass('_no-scroll');
    $('.top-btn').toggleClass('_disabled');
    $('.header').toggleClass('_active');
  })

  //jquery-form-styler
  $('.form-style').styler();

  /* Анимация чисел */
  if ($('body').hasClass('home')) {
    var show = true;
    var countbox = ".home .main-page__list";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 850 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.home .main-page__list b').css('opacity', '1');
            $('.home .main-page__list b').spincrement({
                thousandSeparator: " ",
                duration: 2400
            });           
            show = false;
        }
    });
  }

/*
  $('.brand-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1500,
    prevArrow: '<button class="brand-slider__btn  brand-slider__btn-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="brand-slider__btn brand-slider__btn-next"><img src="img/arrow-right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          arrows: true,
        }
      },
    ]
  });
*/
  var $slider = $('.brand-slider');

  if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');
    
    var updateSliderCounter = function(slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + '/' +slidesCount)
    };
  
    $slider.on('init', function(event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });
  
    $slider.on('afterChange', function(event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });
  
    $slider.slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 1500,
      prevArrow: '<button class="brand-slider__btn  brand-slider__btn-prev"><img src="img/arrow-left.png" alt=""></button>',
      nextArrow: '<button class="brand-slider__btn brand-slider__btn-next"><img src="img/arrow-right.png" alt=""></button>',
      responsive: [
        {
          breakpoint: 951,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: true,
          }
        },
      ]
    });
  }




  //Скроллбар
  $(window).on("load",function() {
    $(".brand-slider__item-box").mCustomScrollbar({
      theme: "dark"
    });
  });

  
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