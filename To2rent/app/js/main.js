$(function(){
$('.slider').slick({
  prevArrow: '<button class="slider__btn slider__btnprev"><img src="images/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button class="slider__btn slider__btnnext"><img src="images/arrow-next.svg" alt=""></button>',
  fade: true,
  responsive: [
    {
      breakpoint: 541,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});


  
});