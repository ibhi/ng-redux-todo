import './app.component.scss';
import { todoStore } from './store/todos.store';
import todoActions from './actions/todos.actions';
console.log(todoActions);

export class AppComponent {
  
  unsubscribe;
  constructor($ngRedux) {
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, todoActions)(this);
  }

  mapStateToThis(state) {
    console.log('State ', state);
    return {
      todos: state
    };
  }

  $onInit() {
    console.log(this.addTodo);
  }

  // addTodo(todo) {
  //   this.todos.push(todo);
  // }

  $onDestroy() {
    this.unsubscribe();
  }
}