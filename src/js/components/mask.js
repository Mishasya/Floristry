import Inputmask from '../vendor/inputmask.min';

let selector = document.querySelector('input[type="tel"]');

if (selector) {
  let im = new Inputmask('9-999-999-99-99');
  im.mask(selector);
}
