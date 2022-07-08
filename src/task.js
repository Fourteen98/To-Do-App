import LocalStorage from './local_storage.js';

const mainListCard = document.querySelector('.main-list-card');

// create object from  localStorage
const localS = new LocalStorage();

class Task {
  // eslint-disable-next-line class-methods-use-this
  createTask(task) {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todo');

    // add element to todo
    todoCard.innerHTML = `<div class="class-sep">
            <button class="check-task">
                <i class="fa-regular fa-square"></i> 
                <i class="fa-solid fa-check"></i>
            </button> 
            <input class="input-type" size="50"  type="text" id="${task.index}"  value="${task.description}">
        </div>
        <button class="remove-task" id="${task.index}">
            <i class="fa-solid fa-trash-can"></i>
        </button>`;

    todoCard.addEventListener('click', (e) => {
      this.removeTask(e.target);
    });

    todoCard.addEventListener('keypress', (e) => {
      this.updateTask(e.target.value, Number(e.target.id));
    });

    mainListCard.appendChild(todoCard);
  }

  generateTodo() {
    const todo = localS.getLocalStorage();
    let counter = 0;
    mainListCard.innerHTML = '';
    while (counter < todo.length) {
      this.createTask(todo[counter]);
      counter += 1;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  removeTask(t) {
    if (t.classList.contains('fa-trash-can')) {
      t.parentElement.parentElement.remove();
      localS.removeLocalStorage((t.parentElement.id));
    }
  }

  updateTask = (val, index) => {
    const todo = localS.getLocalStorage();
    todo[index].description = val;
    localStorage.setItem('todo', JSON.stringify(todo));
  }
}

export default Task;