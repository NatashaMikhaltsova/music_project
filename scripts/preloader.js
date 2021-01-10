const preloader = document.querySelector('#main-preloader');
const rootElement = document.querySelector('#root');
/* document.addEventListener('DOMContentLoaded', function () {
  preloader.classList.remove('active');
}) */

setTimeout(() => {
  preloader.classList.remove('active');
  rootElement.style.opacity = 1;
}, 2000);