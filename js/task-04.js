const counterValueRef = document.querySelector('#value');
let counterValue = Number(counterValueRef.textContent);
const increment = () => {
  counterValueRef.textContent = ++counterValue;
};
const decrement = () => {
  if (counterValue <= 0) return;
  counterValueRef.textContent = --counterValue;
};
const incrementButton = document.querySelector('[data-action = "increment"]');
const decrementButton = document.querySelector('[data-action = "decrement"]');
incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);
