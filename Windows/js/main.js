$(document).ready(function() {

  //Выезжающее меню
  $(window).scroll(function() {
    const scrollMenu = $('.bottom-header').offset().top;
    const scrolled = $(this).scrollTop();
      if (scrolled > 84) {
        if (window.matchMedia('(min-width: 1151px)').matches) {
          $('.bottom-header').addClass('active');
          $('.bottom-header__menu').addClass('active');
        }
      } else if (scrolled < 84) {
        $('.bottom-header').removeClass('active');
        $('.bottom-header__menu').removeClass('active');
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

    //Выпадания списка в моб. меню
    $('.menu-item-has-children > a').on('click', function() {
      if (window.matchMedia('(max-width: 1150px)').matches) {
        $(this).next().slideToggle('slow');
        $(this).toggleClass('_active');
      }
    });

    //Выпадания списка в футере
    $('.top-footer__column-title').on('click', function() {
      if (window.matchMedia('(max-width: 630px)').matches) {
        $(this).next().slideToggle('slow');
        $(this).toggleClass('_active');
      }
    });

    if (window.matchMedia('(max-width: 630px)').matches) {
      $('.catalog-page__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        /*
        variableWidth: true,
        */
        speed: 1500,
        prevArrow: '<button class="catalog-page__items__btn catalog-page__items__btnprev"><img src="img/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="catalog-page__items__btn catalog-page__items__btnnext"><img src="img/icons/arrow-right.svg" alt=""></button>',
      });

    //Скроллбар
    $(window).on("load",function() {
      $(".catalog-page__item").mCustomScrollbar({
        theme: "dark"
      });
    });
  }

});


/*

  //MENU
  $('.header__btn').on('click', function(e) { 
    $('.header__btn').toggleClass('header__btn_active');
    $('.header__menu').toggleClass('header__menu_active');
    $('body').toggleClass('no-scroll');
    $('.top-btn').toggleClass('top-btn_disabled');
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