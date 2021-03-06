import LocalStorage from './local_storage.js';

const localS = new LocalStorage();

class Status {
    updateTaskCompletedStatus = (index, status) => {
      if (index >= localS.getLocalStorage().length) {
        index -= 1;
      }
      const todo = localS.getLocalStorage();
      todo[index].completed = status;
      // console.log(todo[index].completed);
      console.log(todo);
      localStorage.setItem('todo', JSON.stringify(todo));
    }

    clearTaskCompleted = () => {
      const todo = localS.getLocalStorage();
      const newTodo = todo.filter((task) => task.completed === 0);
      localStorage.setItem('todo', JSON.stringify(newTodo));
    }
}

export default Status;