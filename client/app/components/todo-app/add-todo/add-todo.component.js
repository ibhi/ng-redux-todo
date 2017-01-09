export class AddTodo {
  newTodo = {
    text: '',
    completed: false
  };

  addTodo() {
    console.log('add-todo-comp');
    this.onAddTodo({todo: Object.assign({}, this.newTodo)});
    this.newTodo.text = '';
  }
}

  