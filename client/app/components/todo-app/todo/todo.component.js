import { todoStore } from './../../../store/todos.store';
import actions from './../../../actions/todos.actions'; 

export class Todo {
  toggleTodo(index) {
    console.log('Index in todo is ', index);
    // todoStore.dispatch(actions.toggleTodo(parseInt(index)));
    this.onToggleTodo({index: parseInt(index)});
  }
}
  