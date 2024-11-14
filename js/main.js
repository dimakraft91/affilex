// получаем массив всех вкладок
const tabs = document.querySelectorAll(".tab");
// получаем массив всех блоков с содержимым вкладок
const contents = document.querySelectorAll(".content");
 
// запускаем цикл для каждой вкладки и добавляем на неё событие
for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", ( event ) => {
 
		// сначала нам нужно удалить активный класс именно с вкладок
		let tabsChildren = event.target.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("tab--active");
		}
		// добавляем активный класс
		tabs[i].classList.add("tab--active");
		// теперь нужно удалить активный класс с блоков содержимого вкладок
		let tabContentChildren = event.target.parentElement.nextElementSibling.children;
		for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("content--active");
		}
		// добавляем активный класс
		contents[i].classList.add("content--active");
 
	});
}

// Плавный скролл

function scrollLink() {
	$(document).ready(function () {
		$("a[href^='#']").on("click", function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 777);
			e.preventDefault();
			return false;
		});
	});
}
scrollLink();

// Аккордеон

class ItcAccordion {
      constructor(target, config) {
        this._el = typeof target === 'string' ? document.querySelector(target) : target;
        const defaultConfig = {
          alwaysOpen: true
        };
        this._config = Object.assign(defaultConfig, config);
        this.addEventListener();
      }
      addEventListener() {
        this._el.addEventListener('click', (e) => {
          const elHeader = e.target.closest('.accordion__header');
          if (!elHeader) {
            return;
          }
          if (!this._config.alwaysOpen) {
            const elOpenItem = this._el.querySelector('.accordion__item_show');
            if (elOpenItem) {
              elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
            }
          }
          elHeader.parentElement.classList.toggle('accordion__item_show');
        });
      }
    }

    new ItcAccordion('#accordion-1');
    new ItcAccordion('#accordion-2');
    new ItcAccordion('#accordion-3');
    new ItcAccordion('#accordion-4');
    new ItcAccordion('#accordion-5');





document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.popup').classList.toggle('open');
    document.documentElement.classList.toggle('no-scroll'); // Добавляем/удаляем класс к <html>
});


document.querySelectorAll('.header__nav-link').forEach(item => item.addEventListener('click', function(e) {
    e.target.classList.toggle('active');
    document.querySelector('.popup').classList.remove('open');
    document.documentElement.classList.remove('no-scroll');
}))

document.querySelectorAll('.header__nav-link').forEach(item => item.addEventListener('click', function(e) {
    e.target.classList.toggle('active');
    document.querySelector('.burger').classList.remove('active');
}))


// Popup
$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});

// Зацикленный круг

var Emblem = {
  init: function(el, str) {
    var element = document.querySelector(el);
    var text = str ? str : element.innerHTML;
    element.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      var letter = text[i];
      var span = document.createElement('span');
      var node = document.createTextNode(letter);
      var r = (360/text.length) * (i);
      var x = (Math.PI/text.length).toFixed(0) * (i);

      // Условие для второй буквы "M" в слове "COMISSIONS"
      if (i === 2) { // Индекс 10 соответствует второй "M"
        x -= 6; // Добавляем 10px смещения по оси X
      }
      if (i === 7) { // Индекс 10 соответствует второй "M"
        x += 5; // Добавляем 10px смещения по оси X
      }
      if (i === 8) { // Индекс 10 соответствует второй "M"
        x += 9; // Добавляем 10px смещения по оси X
      }
      if (i === 20) { // Индекс 10 соответствует второй "M"
        x -= 6; // Добавляем 10px смещения по оси X
      }

      // Условие для второй буквы "M" в слове "COMISSIONS"
      if (i === 25) { // Индекс 10 соответствует второй "M"
        x += 5; // Добавляем 10px смещения по оси X
      }
      if (i === 26) { // Индекс 10 соответствует второй "M"
        x += 9; // Добавляем 10px смещения по оси X
      }

      if (i === 9) { // Индекс 10 соответствует второй "M"
        x += 7; // Добавляем 10px смещения по оси X
      }

      if (i === 27) { // Индекс 10 соответствует второй "M"
        x += 7; // Добавляем 10px смещения по оси X
      }

      var y = (Math.PI/text.length).toFixed(0) * (i);
      span.appendChild(node);
      span.style.webkitTransform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
      span.style.transform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
      element.appendChild(span);
    }
  }
};

Emblem.init('.emblem');

// Зацикленный круг

    // Бегущая строка

    let previousPoints = []; // Храним предыдущие точки для интерполяции

function initAnimation() {
    const isMobile = window.innerWidth <= 480;
    const path = document.getElementById(isMobile ? 'wavePath__mob' : 'wavePath');
    
    // Изменяем текст в зависимости от разрешения экрана
    const text = isMobile ? "HIGH COMISSIONS! HIGH COMISSIONS! HIGH COMISSIONS!" : "HIGH COMISSIONS! HIGH COMISSIONS! HIGH COMISSIONS!";
    
    const letters = text.split('');
    const pathLength = path.getTotalLength();
    const speed = 6; // Скорость анимации
    const offset = 26; // Смещение для каждого символа

    // Храним элементы <text> и <image> для каждой буквы
    const lettersGroup = [];

    // Создаем элементы <text> для каждой буквы
    letters.forEach((letter, index) => {
        const letterText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        letterText.textContent = letter;
        letterText.setAttribute('font-size', '26.8016');
        letterText.setAttribute('fill', '#ffffff');
        letterText.setAttribute('font-weight', 'bold');
        letterText.setAttribute('font-family', '"Halvar Breit", sans-serif');

        // Установка начальных координат
        letterText.setAttribute('x', 0);
        letterText.setAttribute('y', 0);
        lettersGroup.push(letterText);
        const svgContainer = document.getElementById(isMobile ? 'run__text-mob' : 'run_text');
        svgContainer.appendChild(letterText);

        // Если текущий символ - восклицательный знак, добавляем изображение
        if (letter === '!') {
            const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
            img.setAttribute('href', 'img/transactions/star.svg'); // Замените на путь к вашей картинке
            img.setAttribute('width', '32'); // Ширина изображения
            img.setAttribute('height', '33'); // Высота изображения
            lettersGroup.push(img); // Храним изображение в lettersGroup
            svgContainer.appendChild(img); // Добавляем в SVG контейнер
        }
    });

    function animate() {
        lettersGroup.forEach((element, index) => {
            // Прогресс для каждой буквы с учетом её позиции, изменен для движения справа налево
            const progress = (pathLength - (performance.now() / speed - index * offset) % pathLength) % pathLength; 
            const point = path.getPointAtLength(progress);

            // Установка координат для каждой буквы
            if (element.tagName === 'text') {
                element.setAttribute('x', point.x);
                element.setAttribute('y', point.y); // Используем фиксированную y

                // Сдвиг для буквы 'I'
                if (element.textContent === 'I') {
                    element.setAttribute('x', point.x + 7); // Добавляем смещение для буквы 'I'
                }
            } 
            // Установка координат для изображений (восклицательных знаков)
            else if (element.tagName === 'image') {
                element.setAttribute('x', point.x); // Применяем ту же координату x
                element.setAttribute('y', point.y - 25); // Устанавливаем смещение для изображения, чтобы оно совпадало по вертикали
            }
        });

        requestAnimationFrame(animate);
    }

    // Запускаем анимацию
    animate();
}

// Запускаем анимацию в зависимости от текущей ширины экрана
initAnimation();

// Добавляем слушатель на изменение размера окна
window.addEventListener('resize', initAnimation);

