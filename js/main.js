$(document).ready(function () {
   //подключаем бургер с jquery вешаем событие клик
   $('.header-burger').click(function (event) {
      //вешаем класс active для бургера
      $('.header-burger,.header-menu').toggleClass('active');
      //ставим для body класс lock - как запрет на скролл при открытом меню-бургер
      $('body').toggleClass('lock');
      // присваиваем класс active1 для строки меню
      $('.menu-link').toggleClass('active1');
   });
});


$(document).ready(function () {
   // при событии клик на меню
   $('.menu-link').click(function (event) {
   //если у меню класс active1 то
      if  ( $('.menu-link')==(".active1")){
         // бургер и хедер удалить класс актив
      $('.header-menu,.header-menu').removeClass('active');
// отключаем блокировку
      $('body').removeClass('lock');}
// иначе 
      else {
         // обратно присваиваем класс актив и блочим боди
         $('.header-burger,.header-menu').toggleClass('active');
         $('body').toggleClass('lock');
      }
   
   });
});


// Слайдер

$(document).ready(function () {
// подключаем slick-слайдер
$('.slider').slick({ //сюда пишем свойства и значения для слайдера
arrows: true, // по умолчанию стрелки вкл-true - выкл-false
dots:true, // по умолчанию точки выкл-false - вкл-true 
//точки отображаются по кол-ву элементов в html как список ul

//автоматич высота слайдера  - адаптив
adaptiveHeight: true, //по умолчанию выкл-false - вкл-true 
//кол-во слайдов которое хотим отобразить сразу
slidesToShow: 3, // по умолчанию 1
//сколько слайдов листается
slidesToScroll: 3, // по умолчанию 1

speed: 700, // по умолчанию 300ms 1s=1000ms
easing: 'linear',//тип анимации по умолчан 'linear'
infinite: false,// будет слайдер бесконечным  по умолчанию вкл-true - выкл-false
intialSlide: 0, //стартовый слайд. по умолчан 0
autoplay: false,// автопроигрывание слайдов - по умолчанию выкл-false - вкл-true 
autoplaySpeed: 0,// по умолчанию 3000ms = 3s

// ставим на паузу автопроигрывание когда наводим мышкой на слайд
//по умолчанию true
pauseOnFocus: false, //на клик
pauseOnHover: false, // при наведении
pauseOnDotsHover: false, //при наведении на точки

// на ПК управлять скроллом зажатой мышкой
draggable: true, //откл false
// для тачскринов
swipe: true, //откл false

//отвечает за момент срабатывания слайда по умолчан 5
// т.е. 5 раз свайпнуть чтобы дойти до конца
//если 10 - то меньше усилий если <5 то больше усилий
touchThreshold: 10,
// по умолчан  true - если false то не сможем плавно 
//передвигать и тянуть слайдер
touchMove: true,
// по умолчан  true - при множестве кликов 
// анимация пока не закончится другая не начнется
// если поставить false то будет быстро все двигаться по кликам
waitForAnimate: true,
//по умолчан false
// первый (главн) слайд становиться по центру 
//появл-ся нов класс в css slick-center
centerMode: false,
//по умолчан выкл false
//ширина пропадает и сам слайд остается со своей шириной
variableWidth: false,


// АДАПТИВНОСТЬ 
responsive: [
   {
      breakpoint: 776.98,
      settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
      }
   },
   {
      breakpoint: 575.98,
      settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
      }
   }
]



}); 
// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
   let matches = document.cookie.match(new RegExp(
   "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
let cookiecook = getCookie("cookiecook"),
cookiewin = document.getElementsByClassName('cookie_notice')[0];    
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
if (cookiecook != "no") {
   // показываем    
   cookiewin.style.display="block"; 
   // закрываем по клику
   document.getElementById("cookie_close").addEventListener("click", function(){
       cookiewin.style.display="none";    
       // записываем cookie на 1 день, с которой мы не показываем окно
       let date = new Date;
       date.setDate(date.getDate() + 1);    
       document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();               
   });
}
});
$(function(){

   // скопир  с сайта  https://dimsemenov.com/plugins/magnific-popup/
   //внутренности  Lightbox gallery

   $('.gallery__inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
         //убираем эти строки чтобы убрать подпись картинки
			//tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			//titleSrc: function(item) {
			//	return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			//}
		}
	});
});
