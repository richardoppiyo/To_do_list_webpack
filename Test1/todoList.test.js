/**
 * @jest-environment jsdom
 */

const TODO = require('./todoList.js');
const appendTodoList = require('./__mock__/appendToDOList.js');

describe('Test for add function and remove function', () => {
  const todoItem = { index: 0, description: 'New Task', completed: false };
  const todo = new TODO(todoItem);
  test('Add tasks', () => {
  
    todo.addTodo();
    todo.addTodo();
    expect(todo.todos).toHaveLength(2);
  });
  
  test('Remove a task', () => {
    expect(todo.removeTodo(0)).toHaveLength(1);
  });
});

describe('DOM Manipulation', () => {
  const todoItem = { index: 0, description: 'New Task', completed: false };
  const todo = new TODO(todoItem);

  test('Add tasks', () => {
    document.body.innerHTML = `
    <div class="todo-lists-holder"></div>
    `;

    appendTodoList(todoItem);
    todo.addTodo();
    appendTodoList(todoItem);
    todo.addTodo();
    const list = document.querySelectorAll('.todo-list-row');
    expect(list).toHaveLength(2);
  })

  test('Remove task', () => {
    todo.removeTodo(0);
    const list = document.querySelectorAll('.todo-list-row');
    expect(list).toHaveLength(1);
  })
})