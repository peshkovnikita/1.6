import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
  },
});

const text = document.getElementById('text');
const arrow = document.getElementById('arrowImg');
const brandsContainer = document.getElementById('swiper-wrapper');
let isHidden = true;

function expandAndHide() {
  if (isHidden === true) {
    text.innerHTML = 'Скрыть';
    arrow.classList.add('show-more__btn--img-rotated');
    brandsContainer.classList.add('brands--expand');
    isHidden = false;
  } else {
    text.innerHTML = 'Показать все';
    arrow.classList.remove('show-more__btn--img-rotated');
    brandsContainer.classList.remove('brands--expand');
    isHidden = true;
  }
}
