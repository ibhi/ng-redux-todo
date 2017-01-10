// import angular from 'angular';

export class TodoList {
  $onInit() {
    console.log('Todos ', this.todos);
  }

  toggleTodo(index) {
    console.log('Index in TodoList is ', index);
    this.onToggleTodo({index: index});
  }
}
