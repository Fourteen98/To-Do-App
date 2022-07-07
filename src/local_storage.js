class LocalStorage {
  // eslint-disable-next-line class-methods-use-this
  getLocalStorage() {
    let todo;
    if (localStorage.getItem('todo') === null) {
      todo = [];
    } else {
      todo = JSON.parse(localStorage.getItem('todo'));
    }

    return todo;
  }

  setStorage(singleTodo) {
    const todo = this.getLocalStorage();
    todo.push(singleTodo);
    localStorage.setItem('todo', JSON.stringify(todo));
  }

  removeLocalStorage(id) {
    const todo = this.getLocalStorage();
    todo.forEach((singleBook, index) => {
      if (singleBook.id === Number(id)) {
        singleBook.splice(index, 1);
      }
    });
    localStorage.setItem('todo', JSON.stringify(todo));
  }
}

export default LocalStorage;
