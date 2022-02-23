/**
 * @jest-environment jsdom
 */

import { TestWatcher } from "jest";
import TODO from "./src/modules/todo.js"
import { todoList } from './src/modules/elements.js';
jest.mock('./src/modules/elements.js');
jest.mock('./src/modules/appendToDo.js');
jest.mock('./src/modules/todo.js');

const newTodo = new TODO();

describe('Add and Remove tasks', () => {
  test('Add tasks', () => {
    document.body.innerHTML =`<div>
    <input type="text" id="todo-input" />
    <div id="todo-lists-holder" class="todo-lists-holder"></div>
    </div>
    `;
    const descInput =  document.querySelector('#todo-input');
    descInput.value = 'somevalue';
    newTodo.addTodo();
    const tasks = document.querySelectorAll('.todo-lists-holder');
    console.log(tasks.childNodes);
    expect(tasks).toHaveLength(1);
  })
}) 