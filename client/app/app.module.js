import angular from 'angular';
import todoModule from './components/todo/todo.module';
import { AppComponent } from './app.component';
// import 'bootstrap/dist/css/bootstrap.css';

angular.module('app', [todoModule])
  .component('app', {
    template: require('./app.component.html'),
    controller: AppComponent
  });
