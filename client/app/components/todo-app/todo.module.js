import angular from 'angular';
import { TodoList } from './todo-list/todo-list.component';
import { Todo } from './todo/todo.component';
import { AddTodo } from './add-todo/add-todo.component';
import { Visibility } from './visibility-filter/visibility-filter.component';

export default angular.module('app.todo', [])
  .component('todoList', {
    template: require('./todo-list/todo-list.component.html'),
    controller: TodoList,
    bindings: {
      todos: '<',
      onToggleTodo: '='
    }
  })
  .component('todo', {
    template: require('./todo/todo.component.html'),
    controller: Todo,
    bindings: {
      todo: '<',
      index: '@',
      onToggleTodo: '='
    }
  })
  .component('addTodo', {
    template: require('./add-todo/add-todo.component.html'),
    controller: AddTodo,
    bindings: {
      onAddTodo: '&'
    }
  })
  .component('visibilityFilter', {
    template: require('./visibility-filter/visibility-filter.component.html'),
    controller: Visibility,
    bindings: {
      onSelectFilter: '&'
    }
  })
  .name;
