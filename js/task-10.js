function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  numberInput: document.querySelector('#controls').firstElementChild,
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes')
}

refs.createButton.addEventListener('click', onCreateButtonClick) 
refs.destroyButton.addEventListener('click', onDestroyButtonClick) 

function onCreateButtonClick() {
  createBoxes(refs.numberInput.value)
  refs.numberInput.value = 0;
}

function onDestroyButtonClick() { 
  refs.boxesContainer.innerHTML = ''
}

function createBoxes(amount) {
  const boxesArr = [];
  let initialDimensions = refs.boxesContainer.hasChildNodes()
    ? parseInt(refs.boxesContainer.lastElementChild.style.width) + 10
    :30;

  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${initialDimensions}px`;
    newBox.style.height = `${initialDimensions}px`;
    newBox.style.backgroundColor = `${getRandomHexColor()}`
    boxesArr.push(newBox)
    initialDimensions += 10;
  }
  
  refs.boxesContainer.append(...boxesArr)
}

