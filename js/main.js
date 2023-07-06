import { getPhotos } from './data.js';
import { AMOUNT } from './constants.js';
import { createPictures } from './render-picture.js'

createPictures(getPhotos(AMOUNT));
