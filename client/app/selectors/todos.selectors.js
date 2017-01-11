import { createSelector } from 'reselect';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from './../constants/todo-filters.constants';

const getTodos = (state) => state.todos;
const getVisibilityFilter = (state) => state.visibilityFilter;

export const getVisibleTodos = createSelector(
  [getTodos, getVisibilityFilter], // First argument is the normal selectors
  (todos, filter) => { // Second argument is the result function which will be memoized
    switch (filter) {
      case SHOW_ALL:
        return todos;
      case SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
)

