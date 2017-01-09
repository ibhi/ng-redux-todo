import angular from 'angular';
import { TodoComponent } from './todo.component';
import { TodoList } from './todo-list/todo-list.component';
import { Todo } from './todo/todo.component';
import { AddTodo } from './add-todo/add-todo.component';

export default angular.module('app.todo', [])
  .component('todoList', {
    template: require('./todo-list/todo-list.component.html'),
    controller: TodoList,
    bindings: {
      todos: '<'
    }
  })
  .component('todo', {
    template: require('./todo/todo.component.html'),
    controller: Todo,
    bindings: {
      todo: '<'
    }
  })
  .component('addTodo', {
    template: require('./add-todo/add-todo.component.html'),
    controller: AddTodo,
    bindings: {
      onAddTodo: '&'
    }
  })
  .name;