const toDoList = JSON.parse(localStorage.getItem('todolist')) || [];

addTask();
/*
{name: 'name of todolist', date: 'date of todolist', priority: 'priority of todolist'};
*/

document.querySelector('.js-add-button').addEventListener('click', () => {addTask()});

function addTask(){
  const inputElementDescription = document.querySelector('.js-task-name-input');
  const inputElementDate = document.querySelector('.js-date-input-add');
  const textElement = document.querySelector('.js-priority-button');

  const newTask = {};
  if (inputElementDescription.value != ''){
    newTask.description = inputElementDescription.value;
    newTask['date to due'] = inputElementDate.value;
    newTask.priority = textElement.innerHTML;

    toDoList.push(newTask);
    localStorage.setItem('todolist', JSON.stringify(toDoList));
  }

  const taskBox = document.querySelector('.js-task-container');
  let innerTaskBoxHtml = '';

  toDoList.forEach(taskObject =>{
    const html = `
                <div class="task">
                  <div class="task-box">
                    <p class="description-text">
                      ${taskObject.description}
                    </p>
                    <p class="date-text">
                      ${taskObject['date to due']}
                    </p>
                    <p class="priority-text">
                      ${taskObject.priority}
                    </p>
                  </div>
                  <button class="remove-button js-remove-button">
                    Remove task
                  </button>
                </div>`
    innerTaskBoxHtml += html;
  });

  taskBox.innerHTML = innerTaskBoxHtml;

  document.querySelectorAll('.js-remove-button').forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', ()=> {
        console.log(document.querySelectorAll('.js-remove-button'));
        toDoList.splice(index, 1);
        addTask();
      })
    })

  inputElementDescription.value = '';
  inputElementDate.value = '';
  textElement.innerHTML = 'Low';
  if (textElement.classList.contains('orange-medium-priority-button')){
    textElement.classList.remove('orange-medium-priority-button');
    textElement.classList.add('green-low-priority-button');

    for (let i = 1; i<7; i++){
      let circle = document.querySelector(`.js-around-button-${i}`);
      circle.classList.remove('color-circle-orange');
      circle.classList.add('color-circle-green');
    }
  } else if (textElement.classList.contains('red-hight-priority-button')){
    textElement.classList.remove('red-hight-priority-button');
    textElement.classList.add('green-low-priority-button');

    for (let i = 1; i<7; i++){
      let circle = document.querySelector(`.js-around-button-${i}`);
      circle.classList.remove('color-circle-red');
      circle.classList.add('color-circle-green');
    }
  }



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