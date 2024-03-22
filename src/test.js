import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'modern-normalize';
const mySwiper1 = document.querySelector('.img-swiper');
const mySwiper2 = document.querySelector('.text-swiper');
const swiper1 = new Swiper(mySwiper1, {
  // direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.next-button',
    prevEl: '.prev-button',
  },
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 1,
  speed: 1800,
  loopedSlice: 1,
  parallax: true,
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
  // },
  spaceBetween: 20,
});

const swiper2 = new Swiper(mySwiper2, {
  // direction: 'horizontal',
  loop: true,
  parallax: true,

  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 1,
  speed: 1800,
  loopedSlice: 1,
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
  // },
  spaceBetween: 20,
});
swiper1.controller.control = swiper2;
swiper2.controller.control = swiper1;
