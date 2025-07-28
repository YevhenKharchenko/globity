import Swiper from 'swiper';
import 'swiper/css/bundle';

const differenceLeftArrow = document.getElementById('differenceLeftArrow');
const differenceRightArrow = document.getElementById('differenceRightArrow');

let differenceSwiper;

differenceSwiper = new Swiper('.difference-swiper-container', {
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
      slidesPerView: 6,
      grabCursor: false,
      allowTouchMove: false,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.difference-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateDifferenceArrows(this);
    },
  },
});

updateDifferenceArrows(differenceSwiper);

function updateDifferenceArrows(swiper) {
  differenceLeftArrow.disabled = swiper.isBeginning;
  differenceRightArrow.disabled = swiper.isEnd;
}

differenceLeftArrow.addEventListener('click', () => {
  differenceSwiper.slidePrev();
});

differenceRightArrow.addEventListener('click', () => {
  differenceSwiper.slideNext();
});
