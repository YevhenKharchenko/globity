import Swiper from 'swiper';
import 'swiper/css/bundle';

const pricingDots = document.querySelectorAll('.pricing-dot');

let pricingSwiper;

pricingSwiper = new Swiper('.pricing-swiper-container', {
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
  on: {
    init: () => {
      document.querySelector('.pricing-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updatePricingDots(this.realIndex);
    },
  },
});

function updatePricingDots(index) {
  pricingDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

pricingDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    pricingSwiper.slideTo(index);
  });
});
