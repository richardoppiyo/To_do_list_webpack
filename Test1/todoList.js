class TODO {
  constructor() {
    this.index = 0;
    this.completed = false;
    this.description = '';
    this.todos = [];
  }

  addTodo() {
    this.description = 0;
    this.index = this.todos.length;
    this.todos.push({
      index: this.index,
      description: this.description,
      completed: this.completed,
    });
    this.storeTodo();
  }

  readTodo() {
    const TODOS = JSON.parse(localStorage.getItem('todos'));
    if (TODOS) {
      this.todos = TODOS;
    } else {
      this.todos = [];
    }
    return this.todos;
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.index !== Number(id));
    const removeTask = document.getElementById(id);
    const parentTask = removeTask.parentElement.parentElement;
    parentTask.remove();
    this.arrangeIndex();
    this.storeTodo();
    return this.todos;
  }

  storeTodo() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  arrangeIndex() {
    this.todos.forEach((todo, index) => {
      todo.index = index;
    });
  }

  updateDescription(val, id) {
    this.todos = this.readTodo();
    this.todos[Number(id)].description = val;
    this.storeTodo();
    const updateDesc = document.getElementById(id);
    const nextSibling = updateDesc.nextSibling;
    nextSibling.value = val;
  }

  changeStatus(id, status) {
    this.todos = this.readTodo();
    this.todos[Number(id)].completed = status;
    this.storeTodo();
    const changeCompleted = document.getElementById(id);
    if (status) {
      changeCompleted.setAttribute('checked', true);
    } else {
      changeCompleted.setAttribute('checked', false);
    }
  }
}

module.exports = TODO;
