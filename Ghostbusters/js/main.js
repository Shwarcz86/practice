//jQuery
$(document).ready(function () {
  const mMenuBtn = $('.m-menu-button'); // Находим m-menu-button и сохраняем в переменную-константу
  const mMenu = $('.m-menu');
  const tab = $('.tab');

  mMenuBtn.on('click', function() {
    mMenu.toggleClass('active'); // Присваиваем mMenu класс active
    $('body').toggleClass('no-scroll'); // Для тега body добавляем класс с отключением прокрутки страницы
  });

  tab.on('click', function() { // Переключение классов по нажатию
    tab.removeClass('active'); // Удаляем у табов класс active
    $(this).toggleClass('active'); // Добавляем класс active активному табу
    let = activeTabContent = $(this).attr('data-target'); // Помещаем атрибут data-target в переменную activeTabContent
    $('.tabs-content').removeClass('visible'); // У элементов с классом tabs-content удаляем класс visible
    $(activeTabContent).toggleClass('visible'); // Добавляем к переменной activeTabContent класс visible
  });

  var mySwiper = new Swiper('.swiper-container', { // Инициализируем слайдер
    // Optional parameters
    slidesPerView: 4, // Количество отображаемых слайдов
    spaceBetween: 25, // Расстояние между слайдами
    loop: true,
    breakpoints: { // Количество слайдов на разных разрешениях экрана
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50, // Ширина слайдов
        navigation: { // Активировать кнопку
          nextEl: '.button-next',
        }
      },
    },
  });
});
