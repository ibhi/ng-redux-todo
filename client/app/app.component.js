import './app.component.scss';
import todoActions from './actions/todos.actions';

const getVisibleTodos = (state) => {
  switch (state.visibilityFilter) {
    case 'show_all':
      return state.todos;
    case 'show_completed':
      return state.todos.filter(todo => todo.completed);
    case 'show_active':
      return state.todos.filter(todo => !todo.completed);
    default:
      return state.todos;
  }
};

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
