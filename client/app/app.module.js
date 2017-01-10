import angular from 'angular';
import ngRedux from 'ng-redux';
import createLogger from 'redux-logger';
import todoModule from './components/todo-app/todo.module';
import { AppComponent } from './app.component';
import { todosReducer } from './reducers/todos.reducers';

angular.module('app', [todoModule, ngRedux])
  .config(($ngReduxProvider) => {
    const logger = createLogger();
    $ngReduxProvider.createStoreWith(todosReducer, [logger]);
  })
  .component('app', {
    template: require('./app.component.html'),
    controller: AppComponent
  });
