$(function(){
  $('.banner-section__slider').slick({
    dots: true, // Кружки
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false
        }
      }
    ]
  });

  //Реализация табов поиска
  $('.tab').on('click', function(e){ 
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active'); //При клике на активный таб, убирает у соседних элементов класс tab--active
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active'); //У активного таба(tab) находим (tabs-wrapper) у него ищем соседний элемент (tabs-container) и внутри соседнего элемента с помощью поиска find ищем по div(tabs-content) и убираем класс

    $(this).addClass('tab--active'); //Тот класс на который нажали, добавляем класс
    $($(this).attr('href')).addClass('tabs-content--active'); //Забираем значение атрибута и добавляем класс

    $('.product-slider').slick('setPosition') //Инициализация табов
  });

  $('.product-item__favorite').on('click', function(){ // нажатие на сердечко
    $(this).toggleClass('product-item__favorite--active')
  });

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 871,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      },
    ]
  });

  //Стилизация фильтров jquery-form-styler
  $('.filter-style').styler();

  $('.filter__item-drop, .filter-extra').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle('fast'); //При нажатии на следующий элемент он будет скрываться и появляться
  });

  //Стилизация цены RangeSlider
  //$(".js-range-slider").ionRangeSlider({
   // type: "double",
  //});
  var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 2000000,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    skin: "round",
      type: "double",
      min: min,
      max: max,
      from: 0,
      to: 0,
      onStart: updateInputs,
      onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs (data) {
    from = data.from;
      to = data.to;
      
      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);	
  }

  $inputFrom.on("input", function () {
      var val = $(this).prop("value");
      
      // validate
      if (val < min) {
          val = min;
      } else if (val > to) {
          val = to;
      }
      
      instance.update({
          from: val
      });
  });

  $inputTo.on("input", function () {
      var val = $(this).prop("value");
      
      // validate
      if (val < from) {
          val = from;
      } else if (val > max) {
          val = max;
      }
      
      instance.update({
          to: val
      });
  });

  $('.catalog__filter-btngrid').on('click', function() {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  $('.catalog__filter-btnline').on('click', function() {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });

  //Звездный рейтинг 
  $(".rate-yo").rateYo({
    ratedFill: "#1C62CD",
    spacing: "7px",
    normalFill: "#C4C4C4"
  });

  $('.menu__btn').on('click', function(){
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
  });

  
  $('.footer__topdrop').on('click', function(){
    $(this).next().slideToggle('fast'),
    $(this).toggleClass('footer__topdrop--active')
  });

  $('.aside__btn').on('click', function(){
    $(this).next().slideToggle()
  });

});

/*
let searchTabsItem = document.querySelectorAll('.search__tabs-item');
let searchTabsItemActive = document.querySelector('.search__tabs-item--active');
let searchContentItem = document.querySelectorAll('.search__content-item');
let searchContentItemActive = document.querySelector('.search__content-item--active');

for(let i = 0; i < searchTabsItem.length; i++) {
  let searchTabs = searchTabsItem[i];
  searchTabs.onclick = function (evt) {  
    evt.preventDefault();
    searchTabs.classList.remove('search__tabs-item--active');
    for(let j = 0; j < searchContentItem.length; j++) {
      let searchContent = searchContentItem[j];
        searchContent.classList.remove('search__content-item--active');
    };
  }
}
*/