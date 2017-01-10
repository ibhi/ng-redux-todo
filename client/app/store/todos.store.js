import { createStore } from 'redux';
import todoApp from './../reducers/todos.reducers';

export let todoStore = createStore(todoApp);
