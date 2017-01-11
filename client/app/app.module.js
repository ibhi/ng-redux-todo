import angular from 'angular';
// import { applyMiddleware } from 'redux';
import ngRedux from 'ng-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import todoModule from './components/todo-app/todo.module';
import { AppComponent } from './app.component';
import todoApp from './reducers/todos.reducers';

angular.module('app', [todoModule, ngRedux])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(todoApp, [createLogger(), thunkMiddleware], [window.__REDUX_DEVTOOLS_EXTENSION__()]);
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
