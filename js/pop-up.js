const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const closeSuccess = () => {
  document.querySelector('.success').remove();

}

const showSuccess = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);

  successElement.querySelector('.success__button').addEventListener('click', () => {
    closeSuccess();
  });
  successElement.addEventListener('click', (evt) => {
    console.log(evt.target);
    if (evt.target.classList.contains('success')) {
      closeSuccess();
    }
  });
  document.addEventListener('keydown', onEscapeSuccess)
}

const showError = () => {

}

function onEscapeSuccess(evt) {
  if (evt.key === 'Escape') {
    closeSuccess();
    document.removeEventListener('keydown', onEscapeSuccess)
  }
}


const closeError = () => {

}

export { showSuccess, showError }
