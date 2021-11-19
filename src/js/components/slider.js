import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

const mediaQuery = window.matchMedia('(max-width: 1024px)');

function handleTabletChange(e) {
  if (e.matches) {
    const mySwiper = new Swiper('.catalog-slider', {
      direction: 'horizontal',
      effect: 'slide',
      

      breakpoints: {
        767: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 28,
        },
      },

      pagination: {
        el: '.catalog-slider__pagination',
        clickable: true,
      },
  
    });
  }
};

mediaQuery.addEventListener('change', handleTabletChange);
handleTabletChange(mediaQuery);
