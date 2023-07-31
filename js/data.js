import { createRandomIdFromRangeGenerator, getRandomInteger } from './utils.js';
import {
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
  MAX_AVATAR
} from './constants.js';

const getUnicId = createRandomIdFromRangeGenerator(1, AMOUNT);
const getUnicUrl = createRandomIdFromRangeGenerator(1, AMOUNT);
const getUnicComment = createRandomIdFromRangeGenerator(1, MAX_COMMENTS_ID);

const getComment = () => ({
  id: getUnicComment(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const getComments = (amount) => {
  const commentsArray = [];
  for (let i = 0; i < amount; i++) {
    commentsArray.push(getComment());
  }
  return commentsArray;
}

const getPhoto = () => ({
  id: getUnicId(),
  url: `photos/${getUnicUrl()}.jpg`,
  description: DESCTRIPTIONS[getRandomInteger(0, DESCTRIPTIONS.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS))
});

const getPhotos = (n) => Array.from({ length: n }, getPhoto);

export { getPhotos };


