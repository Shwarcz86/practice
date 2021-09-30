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

  //ТЕЛЕФОН МАСКА
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

  $('.main-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    /*
    variableWidth: true,
    */
    speed: 1500,
    /*
    autoplay: true,
    autoplaySpeed: 5000,
    */
    prevArrow: '<button class="main-slider__btn main-slider__btn-prev"><img src="img/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="main-slider__btn main-slider__btn-next"><img src="img/icons/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
          speed: 500,
          arrows: true,
        }
      },
      {
        breakpoint: 831,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          speed: 500,
          arrows: true,
        }
      },
      {
        breakpoint: 576,
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

    //ТАБЫ
    $('.tab').on('click', function(e) { 
      e.preventDefault();
    
      $($(this).siblings()).removeClass('tab_active'); 
      $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content_active');
    
      $(this).addClass('tab_active'); 
      $($(this).attr('href')).addClass('tabs-content_active');
    
      if (window.matchMedia('(max-width: 560px)').matches) { // аналог media-queries
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 85 +'px'});
      }
      $('.services-slider').slick('setPosition') //Инициализация табов
    });

  $('.services-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    /*
    variableWidth: true,
    */
    dots: true,
    speed: 1500,
    /*
    autoplay: true,
    autoplaySpeed: 5000,
    */
    prevArrow: '<button class="services-slider__btn services-slider__btn-prev"><img src="img/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="services-slider__btn services-slider__btn-next"><img src="img/icons/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
          speed: 500,
          arrows: true,
        }
      },
      {
        breakpoint: 831,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          speed: 500,
          arrows: true,
        }
      },
      {
        breakpoint: 576,
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

  //Скроллбар
  $(window).on("load",function() {
    $(".main-slider__item-wrapper, .services-slider__item-wrapper").mCustomScrollbar({
      theme: "dark"
    });
  });


  $('.slider-programs').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    prevArrow: '<button class="slider-programs__btn slider-programs__btn-prev"><img src="img/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slider-programs__btn slider-programs__btn-next"><img src="img/icons/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1421,
        settings: {
          variableWidth: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1146,
        settings: {
          speed: 500,
          variableWidth: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 701,
        settings: {
          speed: 500,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  })
  
  //Выпадания
  $('.questions-page__item-title').on('click', function() {
    $(this).parents().toggleClass('_active'); 
    $(this).toggleClass('_enable'); 
    $(this).next().slideToggle('fast');
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

  /*
  if (window.matchMedia('(max-width: 870px)').matches) {
    $('.main-page__img').wrap('<div class="container"></div>');
  }
*/
    /*
      $(window).on("scroll", function() {
        var fromTop = $(document).scrollTop();
        $(".header").toggleClass("fixed", (fromTop > 10));
      });
    */

});