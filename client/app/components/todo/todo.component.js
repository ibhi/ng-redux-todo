export class TodoComponent {
  todos = [{
    text: 'Buy Milk',
    completed: false
  },  {
    text: 'Go Shopping',
    completed: true
  }, {
    text: 'Buy Groceris',
    completed: false
  }];

  newTodo = {
    text: '',
    completed: false
  }

  addTodo() {
    this.todos.push(Object.assign({}, this.newTodo));
    this.newTodo.text = '';
  }
}