import { getPhotos } from './api.js';
import './form.js';
import { showAlert } from './utils.js';
import { showFilters } from './filters.js';

getPhotos()
  .then((response) => {
    if (!response.ok) {
      showAlert('Проверьте адрес');
    }
    return response.json();
  })
  .then((data) => {
    showFilters(data);
  })
  .catch(() => {
    showAlert('Сервер временно недоступен');
  });

