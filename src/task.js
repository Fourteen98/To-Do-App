import LocalStorage from './local_storage.js';

const mainListCard = document.querySelector('.main-list-card');

// create object from  localStorage
const localStorage = new LocalStorage();

class Task {
  // eslint-disable-next-line class-methods-use-this
  createTask(task) {
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
  }

  generateTodo() {
    const todo = localStorage.getLocalStorage();
    let counter = 0;
    while (counter < todo.length) {
      this.createTask(todo[counter]);
      counter += 1;
    }
  }
}

export default Task;