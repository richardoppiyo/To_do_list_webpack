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
    todo.updateDescription('New description', 0)
    
    expect(todo.todos[0].description).toMatch('New description')
  })
  test('Edit on the DOM', () => {
    const updateDesc = document.getElementById('0');
    const nextSibling = updateDesc.nextSibling;

    expect(nextSibling.value).toMatch('New description')
  })

  test('Change completed status', () => {

    todo.changeStatus(0, true);
    expect(todo.todos[0].completed).toBeTruthy();
  })

  test('Change on the DOM', () => {
    const changeCompleted = document.getElementById(0);
    expect(changeCompleted).toHaveProperty('checked', true);
  })
 })