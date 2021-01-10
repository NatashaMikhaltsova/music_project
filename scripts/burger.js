const burger = document.querySelector('#menu-toggle');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  headerMenu.classList.toggle('menu__show');
  burger.classList.toggle('active');
})