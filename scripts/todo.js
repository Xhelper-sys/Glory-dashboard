function addTask(){
  const inputElement = document.querySelector('.js-input');
  let divTextElement = document.querySelector('.js-todo');

  const textInInput = inputElement.value;

  divTextElement.innerHTML += `<p>${textInInput}</p>`;

  inputElement.value = '';

}