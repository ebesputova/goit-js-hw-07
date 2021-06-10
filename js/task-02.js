const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector('ul#ingredients');
const listItems = ingredients.map(element => {
  const newItem = document.createElement('li');
  newItem.textContent = element;
  return newItem;
});
list.append(...listItems);
