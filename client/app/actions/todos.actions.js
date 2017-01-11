import { TODOS } from './../constants/todos.constants';
import axios from 'axios';

export const addTodo = title => ({
  type: TODOS.ADD_TODO,
  title
});

export const toggleTodo = index => ({
  type: TODOS.TOGGLE_TODO,
  index
});

export const setVisibilityFilter = filter => ({
  type: TODOS.SET_VISIBILITY_FILTER,
  filter
});

const requestTodos = () => ({
  type: TODOS.REQUEST_TODOS
});

const recieveTodos = (todos) => ({
  type: TODOS.RECIEVE_TODOS,
  todos
});

const recieveError = (error) => ({
  type: TODOS.RECIEVE_ERROR,
  error
});

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(requestTodos());
    axios.get('https://jsonplaceholder.typicode.com/todos').then(
      (response) => {
        console.log(response);
        dispatch(recieveTodos(response.data));
      }
    ).catch(
      (error) => {
        console.error(error);
        dispatch(recieveError(error));
      }
    );
  };
}
