// import _ from 'lodash';
import LocalStorage from './local_storage.js';
import TodoTask from './todoTask.js';
import Task from './task.js';
import './style.css';

const inputTodo = document.getElementById('input-todo');
const addTodo = document.querySelector('.add-todo');
const error = document.querySelector('.error-msg');
const reload = document.querySelector('.reload');

// create a todo task object
const todo = (index, description, completed) => new TodoTask(index, description, completed);

const localS = new LocalStorage();
const task = new Task();
// keeps track of id from local storage
let idFromStorage = 0;

const getTodoLastIndex = () => localS.getLocalStorage().length;

addTodo.addEventListener('click', (e) => {
  e.preventDefault();
  const msg = [];

  if (inputTodo.value === '') {
    msg.push('Empty field!');
    error.innerText = msg.join(', ');
  } else {
    localS.setStorage(todo(idFromStorage, inputTodo.value, 0));
    task.createTask(todo(idFromStorage, inputTodo.value, 0));
  }
  inputTodo.value = '';
  idFromStorage += 1;
});

const handleChange = () => {
  const tempDescription = inputTodo.value;
  localStorage.setItem('tempDescription', JSON.stringify(tempDescription));
};

inputTodo.onkeyup = handleChange;

const getChange = () => {
  const tempDescription = localStorage.getItem('tempDescription');
  if (tempDescription) {
    inputTodo.value = JSON.parse(tempDescription);
  }
};

window.addEventListener('load', () => {
  idFromStorage = getTodoLastIndex();
  console.log(getTodoLastIndex());
  task.generateTodo();
  getChange();
});

reload.addEventListener('click', () => {
  task.generateTodo();
});