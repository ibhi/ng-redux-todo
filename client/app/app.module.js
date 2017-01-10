import angular from 'angular';
import ngRedux from 'ng-redux';
import createLogger from 'redux-logger';
import todoModule from './components/todo-app/todo.module';
import { AppComponent } from './app.component';
import { todosReducer } from './reducers/todos.reducers';

angular.module('app', [todoModule, ngRedux])
  .config(($ngReduxProvider) => {
    const logger = createLogger();
    $ngReduxProvider.createStoreWith(todosReducer, [logger], [window.__REDUX_DEVTOOLS_EXTENSION__()]);
  })
  .run(($ngRedux, $rootScope, $timeout) => {
    // To reflect state changes when disabling/enabling actions via the monitor
    // there is probably a smarter way to achieve that
    $ngRedux.subscribe(() => {
      $timeout(() => { $rootScope.$apply(() => {}) }, 100);
    });
  })
  .component('app', {
    template: require('./app.component.html'),
    controller: AppComponent
  });
