import Swiper from 'swiper';
import 'swiper/css/bundle';

const testimonialsLeftArrow = document.getElementById('testimonialsLeftArrow');
const testimonialsRightArrow = document.getElementById(
  'testimonialsRightArrow'
);

let testimonialsSwiper;

testimonialsSwiper = new Swiper('.testimonials-swiper-container', {
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
        .querySelector('.testimonials-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateTestimonialsArrows(this);
    },
  },
});

updateTestimonialsArrows(testimonialsSwiper);

function updateTestimonialsArrows(swiper) {
  testimonialsLeftArrow.disabled = swiper.isBeginning;
  testimonialsRightArrow.disabled = swiper.isEnd;
}

testimonialsLeftArrow.addEventListener('click', () => {
  testimonialsSwiper.slidePrev();
});

testimonialsRightArrow.addEventListener('click', () => {
  testimonialsSwiper.slideNext();
});
