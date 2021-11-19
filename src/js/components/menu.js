import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

let menuToggle = document.querySelector('.menu__toggle');
let menuWrapper = document.querySelector('.menu__inner');
let menuCloseBtn = document.querySelector('.menu__close-btn');

const onEscPress = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && menuWrapper.classList.contains('menu__inner--open')) {
    evt.preventDefault();
    hideMenu(menuToggle, menuWrapper);
  };
};

const showMenu = (btn, container) => {
  btn.classList.add('menu__toggle--hidden');
  container.classList.add('menu__inner--open');
  disableScrolling();
};

const hideMenu = (btn, container) => {
  btn.classList.remove('menu__toggle--hidden');
  container.classList.remove('menu__inner--open');
  enableScrolling();
};

menuToggle.addEventListener('click', function() {
  showMenu(menuToggle, menuWrapper);
});

menuCloseBtn.addEventListener('click', function() {
  hideMenu(menuToggle, menuWrapper);
});

document.addEventListener('keydown', (evt) => {
  onEscPress(evt);
});