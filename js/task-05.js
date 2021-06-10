const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');
const handleInputChange = () => {
  const newValue = inputRef.value.trim();
  nameOutputRef.textContent = newValue ? newValue : 'незнакомец';
};
inputRef.addEventListener('input', handleInputChange);
