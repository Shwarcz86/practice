$(function(){
  $('.page-section__slider').slick({
    prevArrow: '<button class="page-section__slider-btn page-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="page-section__slider-btn page-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 621,
        settings: {
          arrows: false
        }
      }
    ]
  });

  //Подсчет слайдов
  var slider = $('.page-section__slider');
  
  $('.sl-count__total').text(slider.slick("getSlick").slideCount);
  $(".page-section__slider").on('afterChange', function(event, slick, currentSlide){
  $(".sl-count__current").text(currentSlide<9?`0${currentSlide+1}`:currentSlide+1);
  });

  $('.menu__btn').on('click', function() {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list-active');
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  });

  $(document).ready(function() {
    $(window).resize();
  });

  $(window).resize(function() {
    if ($(window).width() < 801 ) {
      $('.menu__btn').on('click', function() {
        $('body').toggleClass('noscroll');
      });
    }
    else {
      $('body').removeClass('noscroll');
    }
  });

  $(".js-range-slider").ionRangeSlider({

  });

  //Стилизация фильтров jquery-form-styler
  $('.filter-style').styler();

  $('.filter__item-drop').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle('fast'); //При нажатии на следующий элемент он будет скрываться и появляться
  });
    
      //Нажатие на сердечко
  $('.product-item__favorite').on('click', function(){
    $(this).toggleClass('product-item__favorite--active')
  });

  $('.product__slider-items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="product__slider-section-btn product__slider-section-btnprev"><img src="images/arrow-left-big.svg" alt=""></button>',
    nextArrow: '<button class="product__slider-section-btn product__slider-section-btnnext"><img src="images/arrow-right-big.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1181,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      },
    ]
  })

  $('.product-card__slider1').slick ({
    slidesToShow: 1,
    sliderToScroll: 1,
    fade: true,
    asNavFor: '.product-card__slider2',
    prevArrow: '<button class="product__slider-section-btn product__slider-section-btnprev"><img src="images/arrow-left-big.svg" alt=""></button>',
    nextArrow: '<button class="product__slider-section-btn product__slider-section-btnnext product-card__slider1-btnnext"><img src="images/arrow-right-big.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 592,
        settings: {
          arrows: false
        }
      }
    ]
  })

  $('.product-card__slider2').slick ({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.product-card__slider1',
    responsive: [
      {
        breakpoint: 592,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
    ]
  })

    //Реализация табов поиска
    $('.tab').on('click', function(e){ 
      e.preventDefault();
  
      $($(this).siblings()).removeClass('tab--active'); //При клике на активный таб, убирает у соседних элементов класс tab--active
      $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active'); //У активного таба(tab) находим (tabs-wrapper) у него ищем соседний элемент (tabs-container) и внутри соседнего элемента с помощью поиска find ищем по div(tabs-content) и убираем класс
  
      $(this).addClass('tab--active'); //Тот класс на который нажали, добавляем класс
      $($(this).attr('href')).addClass('tabs-content--active'); //Забираем значение атрибута и добавляем класс
  
      //$('.product-slider').slick('setPosition') //Инициализация табов
    });
  
    //Выпадания списка в футере
    $('.footer__drop').on('click', function(){
      $(this).next().slideToggle('fast'),
      $(this).toggleClass('footer__drop--active')
    });

    $('.aside__btn').on('click', function () {  
      $('.catalog__aside').slideToggle('slow'),
      $('.catalog__aside').toggleClass('catalog__aside--active')
    });
});
