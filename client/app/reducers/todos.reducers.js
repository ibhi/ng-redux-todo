/* jshint -W138 */
import { combineReducers } from 'redux';
import { TODOS } from './../constants/todos.constants';

const initialState = {
  todos: [
    {
      text: 'Buy Milk',
      completed: false
    }, {
      text: 'Go Shopping',
      completed: true
    }, {
      text: 'Read about redux',
      completed: false
    }
  ],
  visibilityFilter: 'show_all'
}

function todos(state = initialState.todos, action) {
  switch (action.type) {
    case TODOS.ADD_TODO:
      return [...state, { text: action.text, completed: false }];
    case TODOS.TOGGLE_TODO:
      return state.map((todo, index) => {
        if (action.index === index) {
          return (Object.assign({}, todo, { completed: !todo.completed }));
        }
        return todo;
      });
    default:
      return state;
  }
}

function visibilityFilter(state = initialState.visibilityFilter, action) {
  switch (action.type) {
    case TODOS.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
