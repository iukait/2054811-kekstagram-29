import { createPictures } from './render-picture.js';
import { MAX_RANDOM_PHOTOS, TIME } from './constants.js';
import { debounce } from './utils.js';

const imgFilters = document.querySelector('.img-filters');
const pictures = [];

const showFilters = (photos) => {
  imgFilters.classList.remove('img-filters--inactive');
  createPictures(photos);
  pictures.length = 0;
  pictures.push(...photos.slice());
};

const filterPhotos = (filter) => {
  switch (filter) {
    case 'filter-default':
      return pictures;
    case 'filter-random':
      return [...pictures]
        .sort(() => Math.random() - 0.5)
        .slice(0, MAX_RANDOM_PHOTOS);
    case 'filter-discussed':
      return [...pictures]
        .sort((a, b) => b.comments.length - a.comments.length);
  }
};

const setActiveButton = (button) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

imgFilters.addEventListener('click', debounce((evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    createPictures(filterPhotos(evt.target.id));
    setActiveButton(evt.target);
  }
}, TIME));

export { showFilters };
