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
