import { checkLength } from './utils.js';
import { MAX_MESSAGE_LENGTH, MAX_HASTAG_COUNT, VALID_SYMBOLS, MAX_HASTAG_LENGTH } from './constants.js';

const form = document.querySelector('.img-upload__form');
const messageField = document.querySelector('.text__description');
const hashTagField = document.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'form__error'
});

const normalizeTags = (tagString) => tagString
  .toLowerCase()
  .trim()
  .split(' ')
  .filter((tag) => tag.length > 0);

const validateMessage = value =>
  checkLength(value, MAX_MESSAGE_LENGTH);

const hasValidTag = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));


const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASTAG_COUNT;
const hasUniqTag = (value) => normalizeTags(value).length === new Set(normalizeTags(value)).size;


pristine.addValidator(
  hashTagField,
  hasValidTag,
  `строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д`,
  1,
  true
);

pristine.addValidator(
  hashTagField,
  hasValidCount,
  `нельзя указать больше ${MAX_HASTAG_COUNT} хэш-тегов`,
  2,
  true
);


pristine.addValidator(
  hashTagField,
  hasUniqTag,
  `один и тот же хэш-тег не может быть использован дважды`,
  3,
  true
);

pristine.addValidator(
  messageField,
  validateMessage,
  `Длина комментария не должна превышать ${MAX_MESSAGE_LENGTH} символов.`
);

const validateForm = () => pristine.validate();

export { validateForm }
