// controllers.js
class TodoController {
  constructor() {
    this.view = new TodoView(this);  // 先初始化 TodoView
    this.model = new TodoModel();     // 再初始化 TodoModel
  }

  addTodo() {
    const todoText = this.view.todoInput.value;
    this.model.addTodo(todoText);
    this.updateTodoList();
    this.view.todoInput.value = '';
  }

  updateTodoList() {
    const todos = this.model.getTodos();
    this.view.todoList.innerHTML = '';
    todos.forEach(todo => {
      const listItem = document.createElement('li');
      listItem.textContent = todo.text;
      this.view.todoList.appendChild(listItem);
    });
  }
}