import './app.component.scss';
import * as todoActions from './actions/todos.actions';
import { getVisibleTodos } from './selectors/todos.selectors';

export class AppComponent {
  // static $inject = ['$ngRedux'];
  constructor($ngRedux) {
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, todoActions)(this);
  }

  $onInit() {
    this.fetchTodos();
  }

  mapStateToThis(state) {
    return {
      isFetching: state.isFetching,
      error: state.error,
      todos: getVisibleTodos(state),
      visibilityFilter: state.visibilityFilter
    };
  }

  $onDestroy() {
    this.unsubscribe();
  }

}
