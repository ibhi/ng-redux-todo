import { createSelector } from 'reselect';
const getTodos = (state) => state.todos;
const getVisibilityFilter = (state) => state.visibilityFilter;

export const getVisibleTodos = createSelector(
  [getTodos, getVisibilityFilter], // First argument is the normal selectors
  (todos, filter) => { // Second argument is the result function which will be memoized
    switch (filter) {
      case 'show_all':
        return todos;
      case 'show_completed':
        return todos.filter(todo => todo.completed);
      case 'show_active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
)

