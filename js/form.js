import { validateForm } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { postPhoto } from './api.js';
import { showPopUp } from './pop-up.js';
import { SubmitButtonText } from './constants.js';

const modal = document.querySelector('.img-upload__overlay');
const inputUpload = document.querySelector('.img-upload__input');
const imagePreview = modal.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const closeBtn = document.querySelector('.img-upload__cancel');
const submitBtn = document.querySelector('.img-upload__submit');

const renderImg = () => {
  const fileImage = inputUpload.files[0];
  imagePreview.src = URL.createObjectURL(fileImage);
};

const showModal = () => {
  modal.classList.remove('hidden');
  renderImg();
  resetScale();
  resetEffects();
  document.addEventListener('keydown', onEscapeForm);
};

const closeModal = () => {
  modal.classList.add('hidden');
  document.removeEventListener('keydown', onEscapeForm);
  form.reset();
};

inputUpload.addEventListener('change', () => {
  showModal();
});

const disableSubmitBtn = (isDisabled = true) => {
  submitBtn.disabled = isDisabled;
  submitBtn.textContent = isDisabled ? SubmitButtonText.SENDING : SubmitButtonText.IDLE;
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    disableSubmitBtn();
    postPhoto(new FormData(evt.target))
      .then((response) => {
        if (response.ok) {
          closeModal();
          form.reset();
          showPopUp('success');
        } else {
          showPopUp('error');
        }
      })
      .catch(() => {
        showPopUp('error');
      })
      .finally(() => {
        disableSubmitBtn(false);
      });
  }
});

closeBtn.addEventListener('click', () => {
  closeModal();
});

function onEscapeForm(evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

export { onEscapeForm };
