//==== Модуь работы с меню (бургер)

let iconMenu = document.querySelector('.icon-menu');
let navMain = document.querySelector('.menu');

navMain.classList.remove('menu--nojs');

iconMenu.addEventListener('click', function () {
  if (navMain.classList.contains('menu--closed')) {
    navMain.classList.remove('menu--closed');
    navMain.classList.add('menu--opened');
  } else {
    navMain.classList.remove('menu--opened');
    navMain.classList.add('menu--closed');
  }
});
