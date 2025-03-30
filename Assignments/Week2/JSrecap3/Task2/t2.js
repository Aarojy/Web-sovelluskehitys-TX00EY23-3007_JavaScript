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
const todoListElement = document.querySelector('ul');

todoList.forEach((todo) => {
  const newLi = document.createElement('li');

  const newInput = document.createElement('input');
  newInput.type = 'checkbox';
  newInput.id = todo.id;
  if (todo.completed) {
    newInput.setAttribute('checked', 'checked');
  }

  const newLabel = document.createElement('label');
  newLabel.htmlFor = todo.id;
  newLabel.innerText = todo.task;

  newLi.appendChild(newInput);
  newLi.appendChild(newLabel);

  todoListElement.appendChild(newLi);
});
