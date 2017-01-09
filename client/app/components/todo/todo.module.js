import angular from 'angular';
import { TodoComponent } from './todo.component';

export default angular.module('app.todo', [])
  .component('todoApp', {
    controller: TodoComponent,
    template: require('./todo.component.html')
  })
  .name;