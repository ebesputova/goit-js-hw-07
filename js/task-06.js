const inputRef = document.querySelector('#validation-input');
const valueLength = Number(inputRef.dataset.length);
const handleInputBlur = function () {
  const classToAdd = this.value.length === valueLength ? 'valid' : 'invalid';
  const classToRemove = this.value.length === valueLength ? 'invalid' : 'valid';
  this.classList.remove(classToRemove);
  this.classList.add(classToAdd);
};
const removeValidationClass = element => {
  element.classList.remove('valid', 'invalid');
};
inputRef.addEventListener('blur', handleInputBlur);
inputRef.addEventListener('focus', function () {
  removeValidationClass(this);
});
