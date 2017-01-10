import './app.component.scss';
import todoActions from './actions/todos.actions';

export class AppComponent {
  // static $inject = ['$ngRedux'];
  constructor($ngRedux) {
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, todoActions)(this);
  }

  mapStateToThis(state) {
    console.log('State ', state);
    return {
      todos: state.todos,
      visibilityFilter: state.visibilityFilter
    };
  }

  $onDestroy() {
    this.unsubscribe();
  }
}
