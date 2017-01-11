import './app.component.scss';
import todoActions from './actions/todos.actions';
import { getVisibleTodos } from './selectors/todos.selectors';

export class AppComponent {
  // static $inject = ['$ngRedux'];
  constructor($ngRedux) {
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, todoActions)(this);
  }

  mapStateToThis(state) {
    console.log('State ', state);
    return {
      todos: getVisibleTodos(state),
      visibilityFilter: state.visibilityFilter
    };
  }

  $onDestroy() {
    this.unsubscribe();
  }

}
