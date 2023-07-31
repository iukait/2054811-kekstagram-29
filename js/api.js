import { POST_DATA_URL, GET_DATA_URL } from './constants.js';

const getPhotos = () => fetch(GET_DATA_URL);

const postPhoto = (body) => fetch(POST_DATA_URL, {
  method: 'POST',
  body
});


export { getPhotos, postPhoto };
