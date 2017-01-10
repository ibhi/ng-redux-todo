import { todoStore } from './../../../store/todos.store';
import actions from './../../../actions/todos.actions';

export class AddTodo {
  newTodo = {
    text: '',
    completed: false
  };

  addTodo() {
    console.log('add-todo-comp');
    this.onAddTodo({text: this.newTodo.text});
    // todoStore.dispatch(actions.addTodo(this.newTodo.text));
    this.newTodo.text = '';
  }
}

  