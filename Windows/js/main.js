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

  if (window.matchMedia('(max-width: 630px)').matches) {
    //Скроллбар
    $(window).on("load",function() {
      $(".catalog-page__item").mCustomScrollbar({
        theme: "dark"
      });
    });
  }

  //Обвертка для таблицы в article
  $('.selection-item__info article table, .article-page article table').wrap('<div class="some-class"></div>');

  if (window.matchMedia('(max-width: 465px)').matches) {
    $('.info-product__content-tab article table').wrap('<div class="some-class"></div>');
  }

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

  $('.service-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button class="service-slider__btn service-slider__btn-prev"><img src="img/pag-left.png" alt=""></button>',
    nextArrow: '<button class="service-slider__btn service-slider__btn-next"><img src="img/pag-right.png" alt=""></button>',
    responsive: [
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

  $('.portfolio-page__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.big-slider').slick ({
    asNavFor: '.small-slider',
    slidesToShow: 1,
    sliderToScroll: 1,
    fade: true,
    arrows: true,
    dots: true,
    prevArrow: '<button class="big-slider__btn big-slider__btn-prev"><img src="img/pag-left.png" alt=""></button>',
    nextArrow: '<button class="big-slider__btn big-slider__btn-next"><img src="img/pag-right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  })
  $('.small-slider').slick ({
    asNavFor: '.big-slider',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 446,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  })

  $('.work-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button class="work-slider__btn work-slider__btn-prev"><img src="img/pag-left.png" alt=""></button>',
    nextArrow: '<button class="work-slider__btn work-slider__btn-next"><img src="img/pag-right.png" alt=""></button>',
    responsive: [
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
      $(".doors-page .tabs-wrapper").mCustomScrollbar({
        theme: "dark",
        axis:"x"
      });
    });

    $('.similar-page__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 1500,
      prevArrow: '<button class="similar-page__btn similar-page__btn-prev"><img src="img/pag-left.png" alt=""></button>',
      nextArrow: '<button class="similar-page__btn similar-page__btn-next"><img src="img/pag-right.png" alt=""></button>',
      responsive: [
        {
          breakpoint: 1301,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: false,
            speed: 500,
            arrows: true,
          }
        },
        {
          breakpoint: 901,
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

    $(window).on("load",function() {
      $(".catalog-page._installment .catalog-page__item").mCustomScrollbar({
        theme: "dark"
      });
    });

    $('.slider-catalog').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 1500,
      prevArrow: '<button class="slider-catalog__btn  slider-catalog__btn-prev"><img src="img/pag-left.png" alt=""></button>',
      nextArrow: '<button class=" slider-catalog__btn  slider-catalog__btn-next"><img src="img/pag-right.png" alt=""></button>',
      responsive: [
        {
          breakpoint: 1301,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: false,
            speed: 500,
            arrows: true,
          }
        },
        {
          breakpoint: 901,
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
    
    function sliderAdapt() {
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
    $(document).ready(function(){
      sliderAdapt();
    });
    
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
*/