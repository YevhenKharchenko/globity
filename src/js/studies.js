import Swiper from 'swiper';
import 'swiper/css/bundle';

const studiesLeftArrow = document.getElementById('studiesLeftArrow');
const studiesRightArrow = document.getElementById('studiesRightArrow');

let studiesSwiper;

studiesSwiper = new Swiper('.studies-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 20,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      spaceBetween: 0,
      slidesPerView: 4,
      grabCursor: false,
      allowTouchMove: false,
    },
  },
  on: {
    init: () => {
      document.querySelector('.studies-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateStudiesArrows(this);
    },
  },
});

updateStudiesArrows(studiesSwiper);

function updateStudiesArrows(swiper) {
  studiesLeftArrow.disabled = swiper.isBeginning;
  studiesRightArrow.disabled = swiper.isEnd;
}

studiesLeftArrow.addEventListener('click', () => {
  studiesSwiper.slidePrev();
});

studiesRightArrow.addEventListener('click', () => {
  studiesSwiper.slideNext();
});
