$(document).ready(function() {
  
  //ТЕЛЕФОН МАСКА
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

  //Выезжающее меню
  $(window).scroll(function() {
    const scrollMenu = $('.bottom-header').offset().top;
    const scrolled = $(this).scrollTop();
      if (scrolled > 84) {
        if (window.matchMedia('(min-width: 1130px)').matches) {
          $('.bottom-header').addClass('_active');
          $('.page').addClass('_scroll');
          $('.bottom-header__menu-list').addClass('_active');
        }
      } else if (scrolled < 84) {
        $('.bottom-header').removeClass('_active');
        $('.page').removeClass('_scroll');
        $('.bottom-header__menu-list').removeClass('_active');
      }
  });

  //menuHamburger
  $('.menu-toggle').click(function(){
    $(this).toggleClass('open');
    $('.bottom-header').toggleClass('_active');
    $('body').toggleClass('_no-scroll');
    $('.top-btn').toggleClass('_disabled');
  })

  $('.bottom-header__navigation-list li a').on('click', function() {
    $('.menu-toggle').removeClass('open');
    $('.bottom-header').removeClass('_active');
    $('body').removeClass('_no-scroll');
    $('.top-btn').removeClass('_disabled');
  });

  //FancyBox
  $('.fancybox').fancybox();

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

  //Слайдер - главная
  $('.partners-page__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    variableWidth: true,
    prevArrow: '<button class="partners-page__slider-btn partners-page__slider-btnprev"><img src="img/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="partners-page__slider-btn partners-page__slider-btnnext"><img src="img/icons/arrow-right.svg" alt=""></button>',
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