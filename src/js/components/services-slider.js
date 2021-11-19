import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);

const mySwiper = new Swiper('.services-slider .swiper-container', {
  direction: 'horizontal',
  effect: 'slide',
  slidesPerView: 4,
  spaceBetween: 20,

  breakpoints: {
    768: {
      spaceBetween: 27,
    },

    320: {
      slidesPerView: 'auto',
      spaceBetween: 15,
      slidesPerGroup: 1,
    }
  },

  navigation: {
    prevEl: '.services-slider__btn--prev',
    nextEl: '.services-slider__btn--next',
  },

});


const servicesSlider = document.querySelector('.services-slider');


if (servicesSlider) {
  const servicesSliderBtns = document.querySelectorAll('.services-slider__btn');
  let sliderWidth = servicesSlider.offsetWidth;
  const sliderMaxWidth = 352;

  if (sliderWidth < sliderMaxWidth) {
    servicesSlider.style.width = '108%';
    servicesSliderBtns.forEach(elem => {
      elem.style.opacity = 0;
    });
  }
}



