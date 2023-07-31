import { onEscapeForm } from './form.js';

const popUpTemplates = {
  success: document.querySelector('#success').content.querySelector('.success'),
  error: document.querySelector('#error').content.querySelector('.error')
};

const closePopUp = () => {
  if (document.querySelector('.pop-up').classList.contains('error')) {
    document.addEventListener('keydown', onEscapeForm);
  }

  document.querySelector('.pop-up').remove();
  document.removeEventListener('keydown', onEscPopUp);
};

const showPopUp = (popUp) => {
  const popUpElement = popUpTemplates[popUp].cloneNode(true);
  popUpElement.classList.add('pop-up');
  popUpElement.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('pop-up')) {
      closePopUp();
    }
  });

  const popUpBtn = popUpElement.querySelector(`.${popUp}__button`);

  popUpBtn.addEventListener('click', () => {
    closePopUp();
  });

  document.addEventListener('keydown', onEscPopUp);

  document.body.append(popUpElement);
  if (popUp === 'error') {
    document.removeEventListener('keydown', onEscapeForm);
  }
};

function onEscPopUp(evt) {
  if (evt.key === 'Escape') {
    closePopUp();
  }
}

export { showPopUp };
