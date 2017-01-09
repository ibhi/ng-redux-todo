import { createStore } from 'redux';
import { todosReducer } from './../reducers/todos.reducers';

export let todoStore = createStore(todosReducer);
