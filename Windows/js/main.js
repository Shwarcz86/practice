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

  /*
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
*/


  var screenWidth = $(window).width();
  $(window).resize(function() {
    var currScreeWidth = $(window).width();
    if (currScreeWidth != screenWidth) {
      if (window.matchMedia('(max-width: 630px)').matches) {
        $('.catalog-page__items').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
          speed: 1500,
          prevArrow: '<button class="catalog-page__items__btn catalog-page__items__btnprev"><img src="img/icons/arrow-left.svg" alt=""></button>',
          nextArrow: '<button class="catalog-page__items__btn catalog-page__items__btnnext"><img src="img/icons/arrow-right.svg" alt=""></button>',
          responsive: [
              {
               breakpoint: 631,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed: 500
              }
            },
          ]
        });
      } else if (window.matchMedia('(min-width: 630px)').matches) {
        $('.catalog-page__items').slick('unslick');
      }
    }
    screenWidth = $(window).width();
  }); 

  if (window.matchMedia('(max-width: 630px)').matches) {
    //Скроллбар
    $(window).on("load",function() {
      $(".catalog-page__item").mCustomScrollbar({
        theme: "dark"
      });
    });
  }

  //Обвертка для таблицы в article
  $('.selection-item__info article table').wrap('<div class="some-class"></div>');

});
