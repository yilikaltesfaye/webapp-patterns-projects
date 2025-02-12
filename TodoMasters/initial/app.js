globalThis.DOM = {};
const DOM = globalThis.DOM;
document.addEventListener("DOMContentLoaded", () => {
  DOM.todoList = document.getElementById("todo-list");
  DOM.addButton = document.getElementById("add-btn");
  DOM.todoInput = document.getElementById("todo-input");

  DOM.addButton.addEventListener("click", (event) => {
    // TODO
  });
  DOM.todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      // TODO
    }
  });
});
