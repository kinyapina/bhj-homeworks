const taskInput = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

const addTask = (title) => {
  if (taskInput.value.trim() === '') {
    return;
  }

  taskList.insertAdjacentHTML('afterbegin', ` <div class="task"> <div class="task__title"> ${title} </div> <a href="#" class="task__remove">&times;</a> </div> `);

  const task = document.querySelector('.task');
  const taskRemove = document.querySelector('.task__remove');

  taskRemove.addEventListener('click', () => {
    task.remove();
  })
}

const clearInput = (event) => {
  taskInput.value = '';
}

btn.addEventListener('click', (event) => {
  event.preventDefault();
  addTask(taskInput.value);
  clearInput();
})



