const getPreloader = () => {
  const preloader = document.querySelector('#main-preloader');
  const rootElement = document.querySelector('#root');
  preloader.classList.remove('active');
  rootElement.style.opacity = 1;
}


export default getPreloader;
