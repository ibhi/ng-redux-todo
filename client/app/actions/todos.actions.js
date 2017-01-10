import { TODOS } from './../constants/todos.constants';

const addTodo = text => ({
  type: TODOS.ADD_TODO,
  text
});

const toggleTodo = index => ({
  type: TODOS.TOGGLE_TODO,
  index
});

const setVisibilityFilter = filter => ({
  type: TODOS.SET_VISIBILITY_FILTER,
  filter
});

export default { addTodo, toggleTodo, setVisibilityFilter };
