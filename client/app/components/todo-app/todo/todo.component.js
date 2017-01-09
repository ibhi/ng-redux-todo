import { todoStore } from './../../../store/todos.store';
import actions from './../../../actions/todos.actions'; 

export class Todo {
  toggleTodo(index) {
    console.log('Index ', index);
    todoStore.dispatch(actions.toggleTodo(parseInt(index)));
  }
}
  