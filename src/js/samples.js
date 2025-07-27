import Swiper from 'swiper';
import 'swiper/css/bundle';

const samplesDots = document.querySelectorAll('.samples-dot');

let samplesSwiper;

samplesSwiper = new Swiper('.samples-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 16,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  on: {
    init: () => {
      document.querySelector('.samples-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateSamplesDots(this.realIndex);
    },
  },
});

function updateSamplesDots(index) {
  samplesDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

samplesDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    samplesSwiper.slideTo(index);
  });
});
