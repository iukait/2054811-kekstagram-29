
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
const MAX_COMMENTS = 30;
const MAX_COMMENTS_ID = 5000;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

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

const getPhotos = (amount) => {

  const arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push(getPhoto())
  }
  return arr;
}
console.log(getPhotos(AMOUNT));

