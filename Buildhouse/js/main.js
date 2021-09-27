$(document).ready(function() {

  //Выезжающее меню
  $(window).scroll(function() {
    const scrollMenu = $('.bottom-header').offset().top;
    const scrolled = $(this).scrollTop();
      if (scrolled > 84) {
        if (window.matchMedia('(min-width: 971px)').matches) {
          $('.bottom-header').addClass('active');

          $('.bottom-header__menu-list').addClass('active');
        }
      } else if (scrolled < 84) {
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

  //FancyBox
  $(".fancybox").fancybox();

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

  $('.social-page__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    /*
    variableWidth: true,
    */
    speed: 1500,
    prevArrow: '<button class="social-slider__btn social-slider__btnprev"><img src="img/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="social-slider__btn social-slider__btnnext"><img src="img/icons/arrow-right.svg" alt=""></button>',
    responsive: [

      {
        breakpoint: 631,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: true,
          speed: 500,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: true,
          speed: 500,
        }
      },
      {
        breakpoint: 401,
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

  /* Анимация чисел */
  if ($('body').hasClass('home')) {
    var show = true;
    var countbox = ".home .about-page__numbers";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 850 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.home .about-page__numbers .about-page__item-number').css('opacity', '1');
            $('.home .about-page__numbers .about-page__item-number').spincrement({
                thousandSeparator: " ",
                duration: 2400
            });           
            show = false;
        }
    });
  }

  $('.team-page__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    prevArrow: '<button class="team-page__slider-btn team-page__slider-btnprev"><img src="img/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="team-page__slider-btn team-page__slider-btnnext"><img src="img/icons/arrow-right.svg" alt=""></button>',
    responsive: [

      {
        breakpoint: 971,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: true,
          speed: 500,
        }
      },
      {
        breakpoint: 501,
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

  if (window.matchMedia('(max-width: 500px)').matches) {
    //Обвертка для таблицы в article
      $('.articles-page article table').wrap('<div class="some-class"></div>');
    }



  $('.big-slider').slick ({
    asNavFor: '.small-slider',
    slidesToShow: 1,
    sliderToScroll: 1,
    fade: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button class="big-slider__btn big-slider__btn-prev"><img src="img/portfolio/arrow-prev.png" alt=""></button>',
    nextArrow: '<button class="big-slider__btn big-slider__btn-next"><img src="img/portfolio/arrow-next.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
        }
      },
    ]
  })
  $('.small-slider').slick ({
    asNavFor: '.big-slider',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  })

  $('.video-slider').slick ({
    asNavFor: '.small-slider',
    slidesToShow: 2,
    sliderToScroll: 1,
    arrows: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button class="video-slider__btn video-slider__btn-prev"><img src="img/portfolio/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="video-slider__btn video-slider__btn-next"><img src="img/portfolio/arrow-right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
        }
      },
    ]
  })


});


/*

  //Выпадания списка в меню
  $('.header__menu-link').on('click', function() {
    if (window.matchMedia('(max-width: 940px)').matches) {
      $(this).next().slideToggle('slow');
      $(this).toggleClass('active');
    }
  });

*/