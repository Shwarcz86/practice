(function() { //Самовызывающая функция
  var canvas = document.createElement('canvas'), //переменной canvas присваиваем элемент canvas
  ctx = canvas.getContext('2d'), // в переменной ctx(context) определяем наш контекст как 2d
  w = canvas.width = innerWidth, // определяем ширину в переменной w, она равно ширине canvas.width, а она в свою очередь равна текущей ширине окна просмотра innerWidth
  h = canvas.height = innerHeight, // высота
  particles = [], //массив для хранения частиц
  properties = { //объект свойств частиц (ассоциативный массив)
    bgColor             : 'rgba(0, 3, 41, 1)', //цвет фона
    particleColor       : 'rgba(175, 188, 240, 1)', //цвет частиц
    particleRadius      : 3, //радиус окружности частицы
    particleCount       : 60, //количество частиц
    particleMaxVelocity : 0.5, //генерация скорости по осям X и Y
    lineLength          : 150, //длина соединения
    particleLife        : 6 //жизненный цикл частиц         
  }
  document.querySelector('body').appendChild(canvas); //добавляем canvas на страницу

  window.onresize = function() { //функция динамического изменения размера canvas от размера окна просмотра
    w = canvas.width = innerWidth,
    h = canvas.height = innerHeight;
  }

  class Particle { // Здесь будем определять скорость частиц, цвет, радиус, положение и т.д.
    constructor() { 
      this.x = Math.random()*w; //положение по X 
      this.y = Math.random()*h; //положение по Y
      this.velocityX = Math.random()*(properties.particleMaxVelocity*2) - properties.particleMaxVelocity;
      this.velocityY = Math.random()*(properties.particleMaxVelocity*2) - properties.particleMaxVelocity;
      this.life = Math.random()*properties.particleLife*60;
    }
    position() { // метод обновляющий позицию
      this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0? this.velocityX *= -1 : this.velocityX // определяем положение на которое переместится частица и если она превысит ширину окна просмотра, то скорость по X умножится на -1, что изменит ее направление
      this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0? this.velocityY *= -1 : this.velocityY
      this.x += this.velocityX; //добавляем к текущим координатам скорость по X
      this.y += this.velocityY; //добавляем к текущим координатам скорость по Y
    }
    reDraw() { // метод reDraw будет отрисовывать частицы на canvas 
      ctx.beginPath();
      ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI*2);
      ctx.closePath(); //закрываем путь
      ctx.fillStyle = properties.particleColor; //цвет
      ctx.fill(); //заливаем
    }
    reCalculateLife() { //метод отнимающий жизнь
      if(this.life < 1) { //если жизнь меньше 1, мы пересчитаем параметры частиц заново 
        this.x = Math.random()*w;
        this.y = Math.random()*h;
        this.velocityX = Math.random()*(properties.particleMaxVelocity*2) - properties.particleMaxVelocity;
        this.velocityY = Math.random()*(properties.particleMaxVelocity*2) - properties.particleMaxVelocity;
        this.life = Math.random()*properties.particleLife*60;
      }
      this.life--;//отнимаем жизнь
    }
  }

  //реализуем обновление canvas
  function reDrawBackground() {
    ctx.fillStyle = properties.bgColor; //цвет заливки
    ctx.fillRect(0, 0, w, h); //заливка прямоугольника
  }

  //Соединения линиями. Проверяем расстояние от одной точки до другой
  function drawLines() {
    var x1, y1, x2, y2, length, opacity;
    for (var i in particles) {
      //переменным объявленным в начале этой функции присваиваем координаты наших частиц
      for (var j in particles) {
        //координаты первой частицы
        x1 = particles[i].x
        y1 = particles[i].y
        //координаты второй частицы
        x2 = particles[j].x
        y2 = particles[j].y
        length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));//расстояние рассчитанное по формуле диагонали
        if (length < properties.lineLength) { //нарисуем линию
          opacity = 1 - length / properties.lineLength; //чем короче расстояние, тем меньше значение opacity
          ctx.lineWidth ='0,5'; //ширина
          ctx.strokeStyle = 'rgba(175, 188, 240, '+opacity+')'; // цвет
          ctx.beginPath() //начнем путь
          ctx.moveTo(x1, y1); //из точки 1
          ctx.lineTo(x2, y2); //в точку 2 
          ctx.closePath(); //закрываем путь
          ctx.stroke(); //отрисуем на Canvas
        }
      }
    }
  }

  function reDrawParticles() {
    for(var i in particles) { //проходимся циклом по всем частицам
      particles[i].reCalculateLife();
      particles[i].position();
      particles[i].reDraw();//для каждой частицы вызываем метод reDraw
    }
  }

  function loop() {
    reDrawBackground();
    reDrawParticles();
    drawLines();
    requestAnimationFrame(loop); //метод requestAnimationFrame будет вызывать функцию loop примерно 60 раз в секунду
  }

  function init() {
    for(var i = 0; i < properties.particleCount; i++) { //цикл для добавления частиц в массив
      particles.push(new Particle);
    }


    loop(); //рекурсивная функция
  }

  init();
}())