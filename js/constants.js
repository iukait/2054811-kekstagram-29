const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 10;
const MAX_COMMENTS_ID = 5000;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const MAX_MESSAGE_LENGTH = 140;
const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;
const STEP_SCALE = 25;

const GET_DATA_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const POST_DATA_URL = 'https://28.javascript.pages.academy/kekstagram1';

const MAX_HASTAG_COUNT = 5;
const MAX_HASTAG_LENGTH = 20;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const MAX_RANDOM_PHOTOS = 10;
const TIME = 500;
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...',
};

export {
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS,
  MAX_COMMENTS_ID,
  MIN_AVATAR,
  MAX_AVATAR,
  MAX_MESSAGE_LENGTH,
  MAX_SCALE_VALUE,
  MIN_SCALE_VALUE,
  STEP_SCALE,
  GET_DATA_URL,
  POST_DATA_URL,
  MAX_HASTAG_COUNT,
  VALID_SYMBOLS,
  MAX_HASTAG_LENGTH,
  MAX_RANDOM_PHOTOS,
  TIME,
  SubmitButtonText
};
