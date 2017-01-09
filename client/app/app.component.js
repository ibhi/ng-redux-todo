import './app.component.scss';
import { todoStore } from './store/todos.store';

export class AppComponent {
  // todos = [{
  //   text: 'Buy Milk',
  //   completed: false
  // },  {
  //   text: 'Go Shopping',
  //   completed: true
  // }, {
  //   text: 'Buy Groceris',
  //   completed: false
  // }];
  unsubscribe;

  $onInit() {
    this.todos = todoStore.getState();

    this.unsubscribe = todoStore.subscribe(() => {
      this.todos = todoStore.getState();
      console.log(this.todos);
    });
  }

  // addTodo(todo) {
  //   this.todos.push(todo);
  // }

  $onDestroy() {
    this.unsubscribe();
  }
}