/**
 * @jest-environment jsdom
 */

const TODO = require('./todoList.js');
const appendTodoList = require('./__mock__/appendToDOList.js');

describe('Test for edit, update and clear tasks', () => {
  const todoItem = { index: 0, description: 'New Task', completed: false };
  const todoItem1 = { index: 1, description: 'New Task', completed: false };
  const todo = new TODO();
  test('Edit description', () => {
    document.body.innerHTML = `
    <div class="todo-lists-holder"></div>
    `;
    appendTodoList(todoItem);
    todo.addTodo(todoItem);
    appendTodoList(todoItem1);
    todo.addTodo(todoItem1);
    todo.updateDescription('New description', 0);

    expect(todo.todos[0].description).toMatch('New description');
  });
  test('Edit on the DOM', () => {
    const updateDesc = document.getElementById('0');
    const nextSibling1 = updateDesc.nextSibling;

    expect(nextSibling1.value).toMatch('New description');
  });

  test('Change completed status', () => {
    todo.changeStatus(0, true);
    expect(todo.todos[0].completed).toBeTruthy();
  });

  test('Change on the DOM', () => {
    const changeCompleted = document.getElementById(0);
    expect(changeCompleted).toHaveProperty('checked', true);
  });

  test('clear completed task', () => {
    todo.clearCompleted();
    expect(todo.todos).toHaveLength(1);
  });

  test('clear on the DOM', () => {
    const list = document.querySelectorAll('.todo-list-row');
    expect(list).toHaveLength(1);
  });
});