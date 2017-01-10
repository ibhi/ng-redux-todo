export class AddTodo {
  constructor() {
    this.newTodo = {
      text: '',
      completed: false
    };
  }

  addTodo() {
    console.log('add-todo-comp');
    this.onAddTodo({text: this.newTodo.text});
    // todoStore.dispatch(actions.addTodo(this.newTodo.text));
    this.newTodo.text = '';
  }
}
