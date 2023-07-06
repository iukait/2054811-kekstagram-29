const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');//!инфо с шаблона
const picturesList = document.querySelector('.pictures');

const createPicture = ({ url, description, comments, likes }) => {

  const onePicture = pictureTemplate.cloneNode(true);
  onePicture.querySelector('.picture__img').src = url;
  onePicture.querySelector('.picture__img').alt = description;
  onePicture.querySelector('.picture__comments').textContent = comments.length;
  onePicture.querySelector('.picture__likes').textContent = likes;

  return onePicture;
};

const createPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((pic) => {
    const picture = createPicture(pic);
    fragment.append(picture);
    console.log(pic);
  });
  picturesList.appendChild(fragment);
};

export { createPictures };

