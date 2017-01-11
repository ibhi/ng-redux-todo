import { combineReducers } from 'redux';
import { TODOS } from './../constants/todos.constants';

const initialState = {
  isFetching: false,
  error: null,
  todos: [],
  visibilityFilter: 'show_all'
}

function isFetching(state = initialState.isFetching, action) {
  if (action.type === TODOS.REQUEST_TODOS) {
    return true;
  }
  return false;
}

function error(state = initialState.error, action) {
  if (action.type === TODOS.RECIEVE_ERROR) {
    return action.error;
  }
  return null;
}

function todos(state = initialState.todos, action) {
  switch (action.type) {
    case TODOS.ADD_TODO:
      return [...state, { title: action.title, completed: false }];
    case TODOS.TOGGLE_TODO:
      return state.map((todo, index) => {
        if (action.index === index) {
          return (Object.assign({}, todo, { completed: !todo.completed }));
        }
        return todo;
      });
    case TODOS.RECIEVE_TODOS:
      return action.todos;
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
  isFetching,
  error,
  todos,
  visibilityFilter
});

export default todoApp;
