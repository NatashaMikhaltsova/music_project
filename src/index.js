import router from "./routes";
import burgerHandle from "../src/components/burger";
import getPreloader from "../src/components/preloader";
import {moveSlide, putActiveDot, getActiveSlide, putActiveSlide, getTemplateSlides} from "../src/components/slider";
import {createRadioList , createGenreList, showRadio}  from "../src/components/music";

document.body.innerHTML = `
  <main>
    <div class="header" id="header"></div>
    <div id="content">test</div>
  </main>
`;

window.addEventListener('load', () => {
  //Load page
  router();
  //Burger click
  const burger = document.querySelector('#menu-toggle');
  burger.addEventListener('click', burgerHandle);
  //Preloader
  setTimeout(getPreloader, 2000);
  //Slider
  getActiveSlide();
  let dots = document.querySelector('.items__button');
  dots.addEventListener('click', getTemplateSlides);
  //List radio
  let listGenre = document.querySelector('.play__items');
  createRadioList();
  createGenreList();
  listGenre.addEventListener('click', showRadio);
});


window.addEventListener('hashchange', () => {
  //Loading page
  router();
  //Burger click
  const burger = document.querySelector('#menu-toggle');
  burger.addEventListener('click', burgerHandle);
  //Preloader
  setTimeout(getPreloader, 1000);
  //Slider
  getActiveSlide();
  let dots = document.querySelector('.items__button');
  dots.addEventListener('click', getTemplateSlides);
  //List radio
  let listGenre = document.querySelector('.play__items');
  createRadioList();
  createGenreList();
  listGenre.addEventListener('click', showRadio);
});