import { TODOS } from './../constants/todos.constants';

function addTodo(text) {
  return {
    type: TODOS.ADD_TODO,
    text
  };
}

function toggleTodo(index) {
  return {
    type: TODOS.TOGGLE_TODO,
    index
  };
}

export default { addTodo, toggleTodo };
