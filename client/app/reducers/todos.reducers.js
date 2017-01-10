/* jshint -W138 */
import { TODOS } from './../constants/todos.constants';

const initialState = [{
  text: 'Buy Milk',
  completed: false
}, {
  text: 'Go Shopping',
  completed: true
}, {
  text: 'Buy Groceris',
  completed: false
}];

export function todosReducer(state = initialState, action) {
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
