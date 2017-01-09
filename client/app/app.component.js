import './app.component.scss';

export class AppComponent {
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

  addTodo(todo) {
    this.todos.push(todo);
  }
}