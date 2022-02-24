const appendTodoList = (todoItem) => {
  const task = `
  
  <div class="todo-left">
    <input type="checkbox" class="status" id = ${todoItem.index}  ${
  todoItem.completed ? 'checked' : ''
} />
    <p class="description ${todoItem.completed ? 'strike-through' : ''}">${
  todoItem.description
}</p>
  </div>
  <button class="btn btn-edit">
    <i class="bi bi-three-dots-vertical"></i>
  </button>  
  <button class="btn btn-delete">  
    <i class="bi bi-trash"></i>
  </button>
`;

  const div = document.createElement('div');
  div.classList.add('todo-list-row');
  div.innerHTML = task;
  const container = document.querySelector('.todo-lists-holder');
  container.appendChild(div);
};

module.exports = appendTodoList;
