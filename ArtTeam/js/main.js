$(function(){
  $('.project-slider').slick({
    speed: 1500,
    prevArrow: '<button class="project-slider__btn project-slider__btnprev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="project-slider__btn project-slider__btnnext"><img src="images/arrow-next.svg" alt=""></button>'
  });
  
  $('.comparison-slider').slick({
    speed: 1500,
    prevArrow: '<button class="comparison-slider__btn comparison-slider__btnprev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="comparison-slider__btn comparison-slider__btnnext"><img src="images/arrow-next.svg" alt=""></button>',
  });

  $('.news-slider').slick({
    speed: 1500,
    prevArrow: '<button class="news-slider__btn news-slider__btnprev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="news-slider__btn news-slider__btnnext"><img src="images/arrow-next.svg" alt=""></button>',
    //adaptiveHeight: true адаптивная высота слайдов
  });

  //Выезжающее меню
    $(window).scroll(function() {
      const scrollMenu = $('.header__bottom, .header__bottom-scroll').offset().top;
      const scrolled = $(this).scrollTop();
        if (scrolled > 150) {
          $('.header__bottom, .header__bottom-scroll').addClass('active');
        } else if(scrolled < 150) {
          $('.header__bottom, .header__bottom-scroll').removeClass('active');
        }
    });

  //Анимация
  new WOW().init();

  //Стилизация фильтров jquery-form-styler
  $('.form-style').styler();

  $('.tab').on('click', function(e){ 
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active'); //При клике на активный таб, убирает у соседних элементов класс tab--active
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active'); //У активного таба(tab) находим (tabs-wrapper) у него ищем соседний элемент (tabs-container) и внутри соседнего элемента с помощью поиска find ищем по div(tabs-content) и убираем класс

    $(this).addClass('tab--active'); //Тот класс на который нажали, добавляем класс
    $($(this).attr('href')).addClass('tabs-content--active'); //Забираем значение атрибута и добавляем класс
  });


  $('.tab-form__input').on('click', function() {
    $(this).siblings().toggleClass('checkbox-btn--active'); 
  });
  //При клике на активный инпут, ищем соседа и переключаем ему класс

  
  $('.authorship-slider').slick({
    speed: 1500,
    prevArrow: '<button class="authorship-slider__btn authorship-slider__btnprev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="authorship-slider__btn authorship-slider__btnnext"><img src="images/arrow-next.svg" alt=""></button>'
  });

  $('.experience-slider').slick({
    speed: 1500,
    prevArrow: '<button class="experience-slider__btn experience-slider__btnprev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="experience-slider__btn experience-slider__btnnext"><img src="images/arrow-next.svg" alt=""></button>'
  });

  $('.menu-mobile__btn').on('click', function() {
    $('.menu-mobile__btn').toggleClass('show-main-nav');
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
    $('body').toggleClass('no-scroll');
  })
});
