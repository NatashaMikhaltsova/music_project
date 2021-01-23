import {getAllRadio, getSomeRadio, getAllGenre} from "../utils/getDataMusic";

const createRadioList = async (e) => {
  let listRadio = document.querySelector('.icons__play');
  const dataItems = await getSomeRadio();

  listRadio.innerHTML = '';
  dataItems.forEach(item => {
    listRadio.innerHTML += `
    <li>
          <div class="item__playing">
            <div>
              <i class="material-icons large item__play">library_music</i>
              <div class="play__tumbler">
                <i class="material-icons large item__play__music">play_arrow</i>
              </div>
            </div>
          </div>

          <p>${item.title}</p>
        </li>
    `
  })
}

  const createGenreList = async (e) => {
  const dataItems = await getAllGenre();
  let listGenre = document.querySelector('.play__items');

  listGenre.innerHTML = '';
  dataItems.forEach(item => {
    listGenre.innerHTML += `
    <div class="item">
              <div class="content__item">
                <a class="current__playlist" href="#">
                  <div>
                    <img src="${item.picture}" />
                  </div>
                  <span>${item.name}</span>
                </a>
              </div>
            </div>
    `
  })
}

const showRadio = async (e) => {
  e.preventDefault();
  if (e.target.tagName === 'IMG' || e.target.tagName === 'SPAN') {
    const allRadioItems = await getAllRadio();
    let targetGenre = e.target.closest('div .content__item').textContent.trim().toLowerCase()
    let regex = RegExp(targetGenre.replace('/', '|'));
    let listRadio = document.querySelector('.icons__play');

    listRadio.innerHTML = '';
    if (targetGenre === 'все') {
      createRadioList();
    } else {
      allRadioItems.forEach(item => {
        if (regex.test(item.title.toLowerCase())) {

          listRadio.innerHTML += `
      <li>
            <div class="item__playing">
              <div>
                <i class="material-icons large item__play">library_music</i>
                <div class="play__tumbler">
                  <i class="material-icons large item__play__music">play_arrow</i>
                </div>
              </div>
            </div>
  
            <p>${item.title}</p>
          </li>
      `
        }
      })
    }
  }
}

export {createRadioList, createGenreList, showRadio};