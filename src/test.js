import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'modern-normalize';
const mySwiper1 = document.querySelector('.img-swiper');
const mySwiper2 = document.querySelector('.text-swiper');

const swiper1 = new Swiper(mySwiper1, {
  speed: 1800,
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0,
  spaceBetween: 20,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
      centeredSlides: false,
      speed: 1800,
    },
    1440: {
      initialSlide: 1,
      slidesPerView: 3,
      spaceBetween: 32,
      centeredSlides: true,
      speed: 1800,
    },
  },
  on: {
    afterInit: function () {
      setTimeout(() => {
        document.querySelector('.img-swiper').classList.add('my-transition');
      }, 1800);
    },
    slideChange: function () {},
    slideChangeTransitionEnd: function () {},
  },
});

const swiper2 = new Swiper(mySwiper2, {
  navigation: {
    nextEl: '.next-button',
    prevEl: '.prev-button',
  },
  loop: true,
  speed: 1800,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0,
  spaceBetween: 20,
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: [0, '260px', 0],
      opacity: 0,
    },
    next: {
      translate: ['384px', 0, 0],
      opacity: 0,
    },
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
      centeredSlides: false,
      speed: 1800,
      effect: 'creative',
      creativeEffect: {
        prev: {
          translate: [0, '260px', 0],
          opacity: 0,
        },
        next: {
          translate: ['384px', 0, 0],
          opacity: 0,
        },
      },
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 40,
      initialSlide: 1,
      centeredSlides: true,
      speed: 1800,
    },
  },
});
swiper1.controller.control = swiper2;
swiper2.controller.control = swiper1;
