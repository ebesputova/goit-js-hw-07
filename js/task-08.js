const boxesWrapperRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls input');
const createBoxesButton = document.querySelector(
  '#controls [data-action="render"]',
);
const destroyBoxesButton = document.querySelector(
  '#controls [data-action="destroy"]',
);
const createBoxes = amount => {
  const boxesElements = [];
  for (let i = 0, size = 10; i < amount; i++, size++) {
    const newElement = document.createElement('div');
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    newElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    newElement.style.width = `${size}px`;
    newElement.style.height = `${size}px`;
    boxesElements.push(newElement);
  }
  boxesWrapperRef.append(...boxesElements);
};

const destroyBoxes = () => {
  boxesWrapperRef.innerHTML = '';
};

const onCreateButtonClick = function () {
  createBoxes(inputRef.value);
};

createBoxesButton.addEventListener('click', onCreateButtonClick);
destroyBoxesButton.addEventListener('click', destroyBoxes);
