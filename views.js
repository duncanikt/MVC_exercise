
// views.js
class TodoView {
  constructor(controller) {
    this.controller = controller;
    this.todoList = document.getElementById('app');
    this.todoList02 = document.getElementById('app02');
    this.todoList03 = document.getElementById('app03');
    this.todoInput = document.createElement('input');
    this.addButton = document.createElement('button');
    this.addButton.textContent = 'Add Todo';
    this.addButton.onclick = () => this.controller.addTodo();

    this.render();
  }

  render() {
    this.todoList.innerHTML = '';
    this.todoInput.placeholder = 'Add a new todo';
    this.todoList03.appendChild(this.todoInput);
    this.todoList02.appendChild(this.addButton);
  }
}
