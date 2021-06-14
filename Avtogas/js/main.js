$(document).ready(function() {

  //MENU
  $('.header__btn').on('click', function(e) { 
    $('.header__btn').toggleClass('header__btn_active');
    $('.header__menu').toggleClass('header__menu_active');
    $('body').toggleClass('no-scroll');
  });

  //ТЕЛЕФОН МАСКА
  $(function() {
    $("#formPageTel").mask("+7 (999) 999-99-99");
  });
  $(function() {
    $("#formAdvTel").mask("+7 (999) 999-99-99");
  });
  $(function() {
    $("#formBanTel").mask("+7 (999) 999-99-99");
  });

  //ТАБЫ
  $('.tab').on('click', function(e) { 
    e.preventDefault();

    $($(this).siblings()).removeClass('tab_active'); 
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content_active');

    $(this).addClass('tab_active'); 
    $($(this).attr('href')).addClass('tabs-content_active'); 
  });

});
