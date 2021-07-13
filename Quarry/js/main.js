$(document).ready(function() {

  //Выезжающее меню
  $(window).scroll(function() {
    const scrollMenu = $('.bottom-header').offset().top;
    const scrolled = $(this).scrollTop();
      if (scrolled > 32) {
        if (window.matchMedia('(min-width: 1091px)').matches) {
          $('.bottom-header').addClass('active');
          $('.page').addClass('scroll');
          $('.bottom-header__menu-list').addClass('active');
        }
      } else if (scrolled < 32) {
        $('.bottom-header').removeClass('active');
        $('.page').removeClass('scroll');
        $('.bottom-header__menu-list').removeClass('active');
      }
  });

  //Мобильное меню
  $('.bottom-header__menu-btn').on('click', function() {
    $(this).toggleClass('show-main-nav');
    $('body').toggleClass('_no-scroll');
    $('.bottom-header__menu-list').toggleClass('open');
  })
  
  //Слайдер-баннер
  $('.banner-page__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 1500,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  //Слайдер - главная
  $('.brand-page__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    //dots: true,
    speed: 500,
    infinite: false,
    variableWidth: true,
    prevArrow: '<button class="brand-page__slider-btn brand-page__slider-btnprev"><img src="img/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="brand-page__slider-btn brand-page__slider-btnnext"><img src="img/icons/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1421,
        settings: {
          variableWidth: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1146,
        settings: {
          speed: 500,
          variableWidth: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 875,
        settings: {
          speed: 500,
          variableWidth: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 616,
        settings: {
          speed: 300,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  //ТЕЛЕФОН МАСКА
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

  //FancyBox
     $('.fancybox').fancybox();



  /* Анимация чисел */
  if ($('body').hasClass('home')) {
    var show = true;
    var countbox = ".home .advantages-page__list";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 850 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.home .advantages-page__list li .advantages-page__number').css('opacity', '1');
            $('.home .advantages-page__list li .advantages-page__number').spincrement({
                thousandSeparator: " ",
                duration: 2400
            });           
            show = false;
        }
    });
  }

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



  $(window).load(function() {
    //Слайдер - галерея
    $('.big-slider').slick ({
      asNavFor: '.small-slider',
      slidesToShow: 1,
      sliderToScroll: 1,
      fade: true,
      arrows: false,
      dots: false,
      //adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 561,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });

    $('.small-slider').slick ({
      asNavFor: '.big-slider',
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      //centerMode: true,
      arrows: true,
      dots: false,
      focusOnSelect: true,
      prevArrow: '<button class="small-slider-btn small-slider-btnprev"><img src="img/icons/arrow-top.svg" alt=""></button>',
      nextArrow: '<button class="small-slider-btn small-slider-btnnext"><img src="img/icons/arrow-bottom.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 1171,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            //centerMode: false,
            //variableWidth: false,
          }
        },
        {
          breakpoint: 951,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            //centerMode: false,
            //variableWidth: false,
          }
        },
        {
          breakpoint: 701,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            //centerMode: false,
            //variableWidth: false,
          }
        },
      ]
    });
    
  });





});



/*
document.querySelector('.banner-page__slider-img img').style.height = 'calc(100vh - ' +  document.querySelector('.header').offsetHeight + 'px)';

$(document).ready(function() {

  $('.bottom-header__open-btn').on('click', function() {
    $('.bottom-header').addClass('_active');
    $('body').addClass('_no-scroll');
  });
  $('.bottom-header__close-btn').on('click', function() {
    $('.bottom-header').removeClass('_active');
    $('body').removeClass('_no-scroll');
  });

  $('.top-header__open-btn').on('click', function() {
    $('.top-header').addClass('_active');
    $('body').addClass('_no-scroll');
  });
  $('.top-header__close-btn').on('click', function() {
    $('.top-header').removeClass('_active');
    $('body').removeClass('_no-scroll');
  });

  //Выезжающее меню
  $(window).scroll(function() {
    const scrollMenu = $('.bottom-header').offset().top;
    const scrolled = $(this).scrollTop();
      if (scrolled > 128) {
        $('.bottom-header').addClass('active');
        if (window.matchMedia('(min-width: 1201px)').matches) {
          $('.page').addClass('scroll');
        }
      } else if (scrolled < 128) {
        $('.bottom-header').removeClass('active');
        $('.page').removeClass('scroll');
      }
  });


  //Выпадания списка в меню
  $('.menu-item-has-children > a').on('click', function() {
    if (window.matchMedia('(max-width: 1200px)').matches) {
      $(this).next().slideToggle('slow');
      $(this).toggleClass('active');
    }
  });

  //Выпадания списка в каталоге
  $('.products-page__sidebar-category').on('click', function() {
    $(this).next().slideToggle('slow');
    $(this).toggleClass('_active');
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

  //FancyBox
  $('.fancybox').fancybox();

  //Слайдер - главная
  $('.brand-page__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    //dots: true,
    speed: 1500,
    infinite: false,
    variableWidth: true,
    prevArrow: '<button class="brand-page__slider-btn brand-page__slider-btnprev"><img src="img/arrow-prev.png" alt=""></button>',
    nextArrow: '<button class="brand-page__slider-btn brand-page__slider-btnnext"><img src="img/arrow-next.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 1421,
        settings: {
          variableWidth: false,
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1146,
        settings: {
          speed: 500,
          variableWidth: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 875,
        settings: {
          speed: 500,
          variableWidth: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 616,
        settings: {
          speed: 300,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  //Слайдер - карточка товара
  $('.big-slider').slick ({
    asNavFor: '.small-slider',
    slidesToShow: 1,
    sliderToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
    //adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.small-slider').slick ({
    asNavFor: '.big-slider',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<button class="small-slider-btn small-slider-btnprev"><img src="img/icons/arrows-slider-left.svg" alt=""></button>',
    nextArrow: '<button class="small-slider-btn small-slider-btnnext"><img src="img/icons/arrows-slider-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 446,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          //centerMode: false,
          //variableWidth: false,
        }
      },
    ]
  });

  //Переключение цветов
  $('.information-card__color-list li').click(function() {
    $('.information-card__color-list li').removeClass('_active');
    $(this).addClass('_active');
  });
  //Переключение объема
  $('.information-card__size-list li').click(function() {
    $('.information-card__size-list li').removeClass('_active');
    $(this).addClass('_active');
  });

  //ТАБЫ
  $('.tab').on('click', function(e) { 
    e.preventDefault();
  
    $($(this).siblings()).removeClass('tab_active'); 
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content_active');
  
    $(this).addClass('tab_active'); 
    $($(this).attr('href')).addClass('tabs-content_active');
  
    if (window.matchMedia('(max-width: 580px)').matches) {
      $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 85 +'px'});
    }
  });

});

*/