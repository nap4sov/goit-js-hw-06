function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  documentBody: document.querySelector('body'),
  widgetButton: document.querySelector('.change-color'),
  colorValueDisplay: document.querySelector('.color')
}

refs.widgetButton.addEventListener('click', onButtonClick);

function onButtonClick() {
  const currentColor = getRandomHexColor();
  refs.documentBody.style.backgroundColor = currentColor;
  refs.colorValueDisplay.textContent = currentColor;
}
