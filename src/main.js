import { Login } from "./login.js";
import { Todo } from "./todo.js";

const login = new Login();
const todo = new Todo();

// Login
document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = login.authenticate(username, password);
  document.getElementById("loginMsg").innerText = msg;
});

// Todo
document.getElementById("addTodoBtn").addEventListener("click", () => {
  const task = document.getElementById("todoInput").value;
  try {
    todo.add(task);
    renderTodos();
    document.getElementById("todoInput").value = "";
  } catch (err) {
    alert(err.message);
  }
});

function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  todo.items.forEach(t => {
    const li = document.createElement("li");
    li.innerText = t;
    li.addEventListener("click", () => {
      todo.remove(t);
      renderTodos();
    });
    list.appendChild(li);
  });
}
