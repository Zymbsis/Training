import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const mySwiper = document.querySelector('.swiper');

const swiper = new Swiper(mySwiper, {
  // a11y: false,
  //TODO allowSlideNext: false,
  //TODO allowSlidePrev: false,
  //TODO allowTouchMove: false,
  //TODO autoHeight: true,
  //TODO autoplay: {delay: 5000,},
  //TODO breakpoints: {},
  //TODO breakpointsBase: 'container',
  //TODO effect: 'cards',
  //TODO effect: 'cube',
  //TODO effect: 'coverflow',
  //TODO effect: 'flip',
  // effect: 'creative',
  // effect: 'fade',
  //TODO effect: 'cards',
  //TODO cardsEffect: {
  // ...
  //TODO },
  // spaceBetween: 50,

  // centerInsufficientSlides: true,
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  //TODO containerModifierClass: 'swiper-',
  // createElements: true,
  // onAny(slideChange, ...args) {
  //   console.log(slideChange);
  //   console.log('Event data: ', args);
  // },
  // effect: 'fade',
  initialSlide: 1,
  // centeredSlides: true,
  slidesPerView: 3,
  centeredSlides: true,

  speed: 1800,
  // parallax: true,
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.next-button',
    prevEl: '.prev-button',
  },
  on: {
    slideChangeTransitionStart: function () {
      // Код для анімації, яка відбувається при зміні слайда
      this.slides.forEach(function (slide) {
        slide.style.transition = 'transform 1800ms ease-in-out';
        slide.style.transform = 'scale(1)';
        slide.querySelector('.text-wrapper').classList.remove('test');
      });
      this.slides[this.activeIndex - 1].style.transform = 'scale(0.5)';
      // console.log(this.slides[this.activeIndex - 1]);

      this.slides[this.activeIndex - 1].querySelector(
        '.text-wrapper'
      ).style.opacity = 0;
      this.slides[this.activeIndex - 1].querySelector(
        '.text-wrapper'
      ).style.transform = 'translate(260px, 260px)';
      this.slides[this.activeIndex - 1].querySelector(
        '.text-wrapper'
      ).style.transition =
        'opacity 1800ms ease-in-out, transform 1800ms ease-in-out';
      // this.slides[this.activeIndex - 1].querySelector(
      //   '.text-wrapper'
      // ).style.transform = 'tran';
      // this.slides[this.activeIndex - 1]
      //   .querySelector('.text-wrapper')
      //   .classList.add('test');
      this.slides[this.activeIndex + 1].style.transform = 'scale(0.3)';
    },
  },
});
