$(document).ready(function() {

  $('.bottom-header__open-btn').on('click', function() {
    $('.bottom-header').addClass('_active');
  });
  $('.bottom-header__close-btn').on('click', function() {
    $('.bottom-header').removeClass('_active');
  });

  $('.top-header__open-btn').on('click', function() {
    $('.top-header').addClass('_active');
  });
  $('.top-header__close-btn').on('click', function() {
    $('.top-header').removeClass('_active');
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

    //ТЕЛЕФОН МАСКА
    $(function() {
      $("[type=tel]").mask("+7 (999) 999-99-99");
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

  //Слайдер
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

});


/*
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

*/