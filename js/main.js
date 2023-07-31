import { getPhotos } from './api.js';
//import { AMOUNT } from './constants.js';
import { createPictures } from './render-picture.js';
import './form.js';
import { showAlert } from './utils.js';
import { showFilters } from './filters.js';

getPhotos()
  .then((response) => {
    if (!response.ok) {
      showAlert('Проверьте адрес')
    }
    return response.json();


  })
  .then((data) => {
    showFilters(data);

  })
  .catch(() => {
    showAlert('Сервер временно недоступен')
  });

