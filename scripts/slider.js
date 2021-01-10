const dots = document.querySelector('.items__button');

const moveSlide = (indexItem = 0, triggerBlock, widthItem = 0) => {
  const slideStyle = document.querySelector(triggerBlock).style;
  if (allWidth <= 375) slideStyle.transform = `translate3d(${widthItem - (allWidth * indexItem + 10)}px, 0px, 0px)`;
  if (allWidth > 375 && allWidth <= 1200) slideStyle.transform = `translate3d(${widthItem - (allWidth / 2 * indexItem + 10)}px, 0px, 0px)`;
  if (allWidth > 1200) slideStyle.transform = `translate3d(${widthItem - (allWidth / 3 * indexItem + 10)}px, 0px, 0px)`;
}

const putActiveDot = () => {
  let activeIndex = 0;
  const items = document.querySelectorAll('.items__button li');
  items.forEach((item, index) => {
    if (item.classList.contains('dot__active')) {
      activeIndex = index;
    }
  })
  return activeIndex ;
}

const getActiveSlide = () => {
  allWidth = document.body.clientWidth;
  const activeItems = document.querySelectorAll('.all__items .item__photo');
  const activeDot = putActiveDot();
  let result = 0;
  adaptSlider(activeItems, allWidth);
  moveSlide(activeDot, '.all__items', result);
}


const putActiveSlide = (nextActive) => {
  //let indexActive = 0;
  const imageItems = document.querySelectorAll('.all__items .item__photo');

  imageItems.forEach((image, index) => {
    if (image.classList.contains('active__item')) {
      image.classList.remove('active__item')
    }
    /* if (image.classList.contains('prev__item')) {
      image.classList.remove('prev__item')
    }
    if (image.classList.contains('next__item')) {
      image.classList.remove('next__item')
    } */
  })
  imageItems[nextActive].classList.add('active__item');
  imageItems[nextActive + 1].classList.add('active__item');
  imageItems[nextActive + 2].classList.add('active__item');
}

const adaptSlider = (activeItems, allWidth) => {

  if (allWidth <= 375) {
    activeItems.forEach(elem => elem.style.width = `${allWidth}px`);
    result = 0;
  }
  if (allWidth > 375 && allWidth <= 1200) {
    activeItems.forEach(elem => elem.style.width = `${allWidth / 2}px`);
    result = (allWidth - allWidth / 2) / 2;
  }
  if (allWidth > 1200) {
    activeItems.forEach(elem => elem.style.width = `${allWidth / 3}px`);
    result = (allWidth - allWidth / 3) / 2;
  }
  return result;
}

dots.addEventListener('click', (e) => {
  //console.log(e.target.tagName);
  if (e.target.tagName === 'BUTTON' || e.target.tagName === 'LI') {
    const prevActive = document.querySelector('.dot__active');
    prevActive.classList.remove('dot__active');
    e.target.closest('li').classList.add('dot__active');
  }
  const activeIndex = putActiveDot();
  getActiveSlide();
  putActiveDot();
  putActiveSlide(activeIndex)

})

window.addEventListener('resize', getActiveSlide);
window.addEventListener('load', getActiveSlide);