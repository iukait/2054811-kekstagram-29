import { validateForm } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { postPhoto } from './api.js';
import { showError, showSuccess } from './pop-up.js';

const modal = document.querySelector('.img-upload__overlay');
const inputUpload = document.querySelector('.img-upload__input');
const imagePreview = modal.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const closeBtn = document.querySelector('.img-upload__cancel');

const renderImg = () => {
  const fileImage = inputUpload.files[0];
  console.log(fileImage);
  imagePreview.src = URL.createObjectURL(fileImage);
};

const showModal = () => {
  modal.classList.remove('hidden');
  renderImg();
  resetScale();
  resetEffects();
};

const closeModal = () => {
  modal.classList.add('hidden');
};

inputUpload.addEventListener('change', () => {
  showModal();
});


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    postPhoto(new FormData(evt.target))
      .then((response) => {
        if (response.ok) {
          //close form
          closeModal();
          form.reset();
          //open success pop up
          showSuccess();
        } else {
          // open error pop up
          showError();
        }

      })
      .catch(() => {
        // open error pop up
        showError();
      })
  }
});


closeBtn.addEventListener('click', () => {
  closeModal();
});



