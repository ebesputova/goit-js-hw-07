const categories = document.querySelectorAll('ul#categories>li.item');
console.log(`В списке ${categories.length} категории`);
categories.forEach(({ children }) => {
  for (const childCategory of children) {
    if (childCategory.matches('h2')) {
      console.log(`Категория:${childCategory.textContent}`);
    }
    if (childCategory.matches('ul')) {
      const categoryNumbers = [...childCategory.children].filter(element =>
        element.matches('li'),
      ).length;
      console.log(`Количество элементов: ${categoryNumbers}`);
    }
  }
});
