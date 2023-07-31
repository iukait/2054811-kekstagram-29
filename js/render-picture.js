import { openModal } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const photos = [];

const createPicture = ({ url, description, comments, likes, id }) => {

  const onePicture = pictureTemplate.cloneNode(true);
  onePicture.querySelector('.picture__img').src = url;
  onePicture.querySelector('.picture__img').alt = description;
  onePicture.querySelector('.picture__comments').textContent = comments.length;
  onePicture.querySelector('.picture__likes').textContent = likes;
  onePicture.dataset.id = id;
  return onePicture;
};

const removePictures = () => {
  document.querySelectorAll('.picture').forEach((card) => {
    card.remove();
  });
};

const createPictures = (pictures) => {
  removePictures();
  photos.length = 0;
  photos.push(...pictures.slice());
  const fragment = document.createDocumentFragment();
  pictures.forEach((pic) => {
    const picture = createPicture(pic);
    fragment.append(picture);
  });
  picturesList.appendChild(fragment);
};

picturesList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('picture__img')) {
    const id = evt.target.closest('.picture').dataset.id * 1;
    const photo = photos.find((el) => el.id === id);
    openModal(photo);
  }
});

export { createPictures };

