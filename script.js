const input = document.querySelector("[data-text-field]");
const addTodoBtn = document.querySelector("[data-add-todo-btn]");
const container = document.querySelector("[data-todo-container]");
const todoList = JSON.parse(localStorage.getItem("todos")) || [];

const toLocalStorage = (key = "todos") => {
  localStorage.setItem(key, JSON.stringify(todoList));
};

addTodoBtn.addEventListener("click", () => {
  if (input.value.trim()) {
    todoList.push(input.value);
    input.value = "";
    toLocalStorage();
    render();
  }
});

const render = () => {
  container.innerHTML = "";
  todoList.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.textContent = todo;
    container.append(todoElement);
  });
};
render();
