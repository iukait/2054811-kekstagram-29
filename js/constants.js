const AMOUNT = 25;
const DESCTRIPTIONS = [
  'Morning',
  'Good',
  'Cat'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Lena',
  'Cate',
  'Anna'
];
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
const POST_DATA_URL = 'https://28.javascript.pages.academy/kekstagram';

const MAX_HASTAG_COUNT = 5;
const MAX_HASTAG_LENGTH = 20;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const MAX_RANDOM_PHOTOS = 10;

export {
  AMOUNT,
  DESCTRIPTIONS,
  MESSAGES,
  NAMES,
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
  MAX_RANDOM_PHOTOS
};
