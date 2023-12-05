// models.js
class TodoModel {
  constructor() {
    this.todos = [];
  }

  addTodo(todoText) {
    this.todos.push({ text: todoText, completed: false });
  }

  getTodos() {
    return this.todos;
  }
}