function addTask(){
  const inputElement = document.querySelector('.js-input');
  let divTextElement = document.querySelector('.js-todo');

  const textInInput = inputElement.value;

  divTextElement.innerHTML += `<p>${textInInput}</p>`;

  inputElement.value = '';

}

function priorityChangement(){
  const buttonElement = document.querySelector('.js-priority-button');
  const tabDecoCircle = [];

  for (let i = 1; i < 7; i++){
    tabDecoCircle[i - 1] = document.querySelector(`.js-around-button-${i}`);
  }

  if (buttonElement.innerText === 'Low') {
    buttonElement.innerText = 'Medium';
    buttonElement.classList.remove('green-low-priority-button');
    buttonElement.classList.add('orange-medium-priority-button');
    
    for (let i = 1; i<7; i++){
      tabDecoCircle[i - 1].classList.remove('color-circle-green');
      tabDecoCircle[i - 1].classList.add('color-circle-orange');
    }
  } else if (buttonElement.innerText === 'Medium') {
    buttonElement.innerText = 'High';
    buttonElement.classList.remove('orange-medium-priority-button');
    buttonElement.classList.add('red-hight-priority-button');

    for (let i = 1; i<7; i++){
      tabDecoCircle[i - 1].classList.remove('color-circle-orange');
      tabDecoCircle[i - 1].classList.add('color-circle-red');
    }
  } else {
    buttonElement.innerText = 'Low';
    buttonElement.classList.remove('red-hight-priority-button');
    buttonElement.classList.add('green-low-priority-button');

    for (let i = 1; i<7; i++){
      tabDecoCircle[i - 1].classList.remove('color-circle-red');
      tabDecoCircle[i - 1].classList.add('color-circle-green');
    }
  }

  console.log(tabDecoCircle);
}