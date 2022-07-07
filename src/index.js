// import _ from 'lodash';
import './style.css';

const mainListCard = document.querySelector('.main-list-card');

const todoTask = [
  {
    description: 'Typing',
    isCompleted: false,
    index: 3,
  },
  {
    description: 'Listening',
    isCompleted: false,
    index: 2,
  },
  {
    description: 'Take Nap',
    isCompleted: false,
    index: 1,
  },
  {
    description: 'Gaming',
    isCompleted: false,
    index: 0,
  },
];

const createTask = (task) => {
  const todoCard = document.createElement('div');
  todoCard.classList.add('todo');

  const divide = document.createElement('div');
  divide.classList.add('divide');

  const inputType = document.createElement('input');
  inputType.setAttribute('type', 'checkbox');
  inputType.id = task.index;
  divide.appendChild(inputType);

  const label = document.createElement('label');
  label.setAttribute('for', task.index);
  label.innerText = ` ${task.description}`;
  divide.appendChild(label);

  const ellipsis = document.createElement('i');
  ellipsis.classList.add('fas');
  ellipsis.classList.add('fa-ellipsis-v');

  todoCard.appendChild(divide);
  todoCard.appendChild(ellipsis);

  mainListCard.appendChild(todoCard);
};

todoTask.forEach((task) => {
  createTask(task);
});