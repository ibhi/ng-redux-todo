export class AddTodo {
  constructor() {
    this.newTodo = {
      title: '',
      completed: false
    };
  }

  addTodo() {
    console.log('add-todo-comp');
    this.onAddTodo({title: this.newTodo.title});
    // todoStore.dispatch(actions.addTodo(this.newTodo.text));
    this.newTodo.title = '';
  }
}
