import angular from 'angular';
import todoModule from './components/todo-app/todo.module';
import { AppComponent } from './app.component';

angular.module('app', [todoModule])
  .component('app', {
    template: require('./app.component.html'),
    controller: AppComponent
  });
