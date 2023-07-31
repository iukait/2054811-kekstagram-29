
const modal = document.querySelector('.big-picture');
const closeModalBtn = document.querySelector('.big-picture__cancel');
const modalImage = modal.querySelector('.big-picture__img img');
const modalCaption = modal.querySelector('.social__caption');
const modalLikes = modal.querySelector('.likes-count');
const modalCommentTemplate = modal.querySelector('.social__comment');
const modalComents = modal.querySelector('.social__comments');
const modalLoaderBtn = modal.querySelector('.comments-loader');
const modalStatistic = modal.querySelector('.social__comment-count');

const comments = [];
let totalComments = 0;

const showModal = () => {
  modal.classList.remove('hidden');
};

const hideModal = () => {
  modal.classList.add('hidden');
};

const renderComment = ({ avatar, message, name }) => {
  const template = modalCommentTemplate.cloneNode(true);
  template.querySelector('.social__picture').src = avatar;
  template.querySelector('.social__picture').alt = name;
  template.querySelector('.social__text').textContent = message;
  return template;
};

const renderBtn = () => {
  if (comments.length > 0) {
    modalLoaderBtn.classList.remove('hidden');
  } else {
    modalLoaderBtn.classList.add('hidden');
  }
};

const renderStatistic = () => {
  modalStatistic.innerHTML = `${totalComments - comments.length} из <span class="comments-count">${totalComments}</span> комментариев`;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  comments.splice(0, 5).forEach((element) => {
    fragment.append(renderComment(element));
  });
  modalComents.append(fragment);
  renderBtn();
  renderStatistic();
};

const renderModal = ({ url, description, likes }) => {
  modalImage.src = url;
  modalCaption.textContent = description;
  modalLikes.textContent = likes;
  renderComments();
};

const closeModal = () => {
  hideModal();
  document.removeEventListener('keydown', onEscapeModal);
};

const openModal = (photo) => {
  showModal();
  comments.length = 0;
  comments.push(...photo.comments.slice());
  totalComments = photo.comments.length;
  modalComents.innerHTML = '';
  renderModal(photo);
  document.addEventListener('keydown', onEscapeModal);
};

closeModalBtn.addEventListener('click', () => {
  closeModal();
});

function onEscapeModal(evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

modalLoaderBtn.addEventListener('click', () => {
  renderComments();
});

export { openModal };
