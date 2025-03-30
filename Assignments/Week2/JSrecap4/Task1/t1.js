// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const modal = document.querySelector('dialog');
const newItemForm = document.querySelector('form');

const addButton = document.querySelector('.add-btn');
addButton.addEventListener('click', () => {
  modal.showModal();
});

newItemForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTask = event.target.task.value;
  const newTodo = {
    id: todoList.length + 1,
    task: newTask,
    completed: false,
  };

  const newLi = document.createElement('li');

  const newInput = document.createElement('input');
  newInput.type = 'checkbox';
  newInput.id = newTodo.id;
  if (newTodo.completed) {
    newInput.setAttribute('checked', 'checked');
  }

  newInput.addEventListener('change', () => {
    newTodo.completed = newInput.checked;
    console.log(todoList);
  });

  const newLabel = document.createElement('label');
  newLabel.htmlFor = newTodo.id;
  newLabel.innerText = newTodo.task;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Del';
  deleteButton.addEventListener('click', () => {
    todoListElement.removeChild(newLi);
    todoList.splice(todoList.indexOf(newTodo), 1);
    console.log(todoList);
  });

  newLi.appendChild(deleteButton);
  newLi.appendChild(newInput);
  newLi.appendChild(newLabel);

  todoListElement.appendChild(newLi);

  todoList.push(newTodo);
  console.log(todoList);
  modal.close();
});

const todoListElement = document.querySelector('ul');

todoList.forEach((todo) => {
  const newLi = document.createElement('li');

  const newInput = document.createElement('input');
  newInput.type = 'checkbox';
  newInput.id = todo.id;
  if (todo.completed) {
    newInput.setAttribute('checked', 'checked');
  }

  newInput.addEventListener('change', () => {
    todo.completed = newInput.checked;
    console.log(todoList);
  });

  const newLabel = document.createElement('label');
  newLabel.htmlFor = todo.id;
  newLabel.innerText = todo.task;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Del';
  deleteButton.addEventListener('click', () => {
    todoListElement.removeChild(newLi);
    todoList.splice(todoList.indexOf(todo), 1);
    console.log(todoList);
  });

  newLi.appendChild(deleteButton);
  newLi.appendChild(newInput);
  newLi.appendChild(newLabel);

  todoListElement.appendChild(newLi);
});
