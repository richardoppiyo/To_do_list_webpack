import { todoList } from './elements.js';

const createTodoListRow = (Item) => {
  const rowHTML = `
  <div class="todo-left">
    <input type="checkbox" class="status" id = ${Item.index}  ${
  Item.completed ? 'checked' : ''
} />
    <p class="description ${Item.completed ? 'strike-through' : ''}">${
  Item.description
}</p>
  </div>
  <button class="btn btn-edit">
    <i class="bi bi-three-dots-vertical"></i>
  </button>  
  <button class="btn btn-delete">  
    <i class="bi bi-trash"></i>
  </button>`;
  return rowHTML;
};

const appendTodoList = (Item) => {
  const todoListRow = document.createElement('div');
  todoListRow.classList.add('todo-list-row');
  const rowHTML = createTodoListRow(Item);
  todoListRow.innerHTML = rowHTML;
  todoList.appendChild(todoListRow);
};

export default appendTodoList;