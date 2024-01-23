const taskInput = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

const addTask = (title) => {
  if (taskInput.value === '') return;

  const task = document.createElement('div');
  task.classList.add('task');

  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task__title');
  taskTitle.innerText = title;
  task.appendChild(taskTitle);

  const taskRemove = document.createElement('a');
  const taskRemoveAttr = document.createAttribute('href');
  taskRemoveAttr.value = '#';
  taskRemove.setAttributeNode(taskRemoveAttr);
  taskRemove.innerHTML = '&times;';
  taskRemove.classList.add('task__remove');
  task.appendChild(taskRemove);

  taskList.appendChild(task);

  taskRemove.addEventListener('click', () => {
    task.remove();
  })
}

const clearInput = (event) => {
  taskInput.value = '';
}

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTask(event.target.value);
    event.target.value = '';
  }
})

btn.addEventListener('click', (event) => {
  event.preventDefault();
  addTask(taskInput.value);
  clearInput();
})



