import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'modern-normalize';

const mySwiper1 = document.querySelector('.img-swiper');
const swiper1 = new Swiper(mySwiper1, {
  speed: 1800,
  loop: true,
  navigation: {
    nextEl: '.next-button',
    prevEl: '.prev-button',
  },
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0,
  spaceBetween: 20,

  // effect: 'creative',
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
      centeredSlides: false,
      speed: 1800,
      // effect: 'creative',
      // creativeEffect: {
      //   prev: {
      //     translate: ['-495px', 0, 100],
      //   },
      //   next: {
      //     translate: ['623px', '0px', 0],
      //   },
      //   limitProgress: 2,
      // },
    },
    1440: {
      initialSlide: 1,
      slidesPerView: 3,
      spaceBetween: 32,
      centeredSlides: true,
      speed: 1800,
      effect: 'slider',
      creativeEffect: {
        // prev: {
        //   translate: ['-495px', 0, 100
        // ],
        //   scale: 0.35,
        //   opacity: 1,
        // },
        // next: {
        //   translate: ['495px', '-168px', 0],
        //   scale: 0.5,
        //   opacity: 1,
        // },
        // limitProgress: 2,
      },
    },
  },
  on: {
    beforeInit: function () {
      const imgWrapper = document.querySelectorAll('.img-wrapper');
      imgWrapper.forEach((item, index) => {
        // item.classList.remove(
        //   'img-wrapper-swiper-prev',
        //   'img-wrapper-swiper-next'
        // );
        // if (index > this.activeIndex) {
        //   item.classList.add('img-wrapper-swiper-next');
        // } else if (index < this.activeIndex) {
        //   item.classList.add('img-wrapper-swiper-prev');
        // }
      });
    },
    slideChange: function () {
      // const imgWrapper = document.querySelectorAll('.img-wrapper');
      // imgWrapper.forEach((item, index) => {
      //   // item.classList.remove(
      //   //   'img-wrapper-swiper-prev',
      //   //   'img-wrapper-swiper-next'
      //   // );
      //   if (index > this.activeIndex) {
      //     item.classList.add('img-wrapper-swiper-next');
      //   } else if (index < this.activeIndex) {
      //     item.classList.add('img-wrapper-swiper-prev');
      //   }
      // });
    },
  },
});
