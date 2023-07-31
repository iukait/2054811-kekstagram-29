const imagePreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const originalEffect = document.querySelector('#effect-none');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower'
});

const updateSliderOption = (effect) => {
  switch (effect) {
    case 'chrome':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      break;
    case 'sepia':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
        start: 1,
      });
      break;
    case 'marvin':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
        start: 100,
      });
      break;
    case 'phobos':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;
    case 'heat':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;
  }
};
const renderEffect = (effect) => {
  let filterStyle = '';
  switch (effect) {
    case 'chrome':
      filterStyle = `grayscale(${valueElement.value})`;
      break;
    case 'sepia':
      filterStyle = `sepia(${valueElement.value})`;
      break;
    case 'marvin':
      filterStyle = `invert(${valueElement.value}%)`;
      break;
    case 'phobos':
      filterStyle = `blur(${valueElement.value}px)`;
      break;
    case 'heat':
      filterStyle = `brightness(${valueElement.value})`;
      break;
    case 'none':
      filterStyle = '';
      break;
  }
  imagePreview.style.filter = filterStyle;
};

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};
const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};
const setOriginalFilter = () => {
  originalEffect.checked = true;
};

effectsList.addEventListener('change', (evt) => {
  console.log(evt.target);
  if (evt.target.name === 'effect') {
    updateSliderOption(evt.target.value);
    renderEffect(evt.target.value);
    if (evt.target.value === 'none') {
      hideSlider();
    } else {
      showSlider();
    }
  }

});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  renderEffect(document.querySelector('.effects__radio:checked').value);
});

const resetVisualEffect = () => {
  imagePreview.style.filter = ''
};

const resetEffects = () => {
  hideSlider();
  setOriginalFilter();
  resetVisualEffect();
};


export { resetEffects }

