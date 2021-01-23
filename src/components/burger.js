const burgerHandle = () => {
  const burger = document.querySelector('#menu-toggle');
  const headerMenu = document.querySelector('.header__menu');
  headerMenu.classList.toggle('menu__show');
  burger.classList.toggle('active');
}

export default burgerHandle;