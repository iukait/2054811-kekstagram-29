import {
  MAX_SCALE_VALUE,
  MIN_SCALE_VALUE,
  STEP_SCALE
} from './constants.js';

const minusBtn = document.querySelector('.scale__control--smaller');
const plusBtn = document.querySelector('.scale__control--bigger');
const valueField = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

let scale = 100;


const resetScale = () => {
  scale = 100;
  renderValue();
  renderImg();
};
const renderValue = () => {
  valueField.value = `${scale}%`
}

const renderImg = () => {
  imagePreview.style.transform = `scale(${scale * 0.01})`;
}

minusBtn.addEventListener('click', () => {
  scale = scale - STEP_SCALE >= MIN_SCALE_VALUE ? scale - STEP_SCALE : MIN_SCALE_VALUE;
  renderValue();
  renderImg();
});

plusBtn.addEventListener('click', () => {
  scale = scale + STEP_SCALE <= MAX_SCALE_VALUE ? scale + STEP_SCALE : MAX_SCALE_VALUE;
  renderValue();
  renderImg();
});
export { resetScale }
