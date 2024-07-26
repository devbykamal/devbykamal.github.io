function id(id) {
  return document.getElementById(id);
}

function getTodos() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  return todos ? todos.reverse() : [];
}

function addTodo() {
  const todoContent = quill.getSemanticHTML();

  if (quill.getText().trim().length > 5) {
    const todos = getTodos();
    todos.push(todoContent);
    localStorage.setItem("todos", JSON.stringify(todos));
    quill.setText("");
    updateTodosList();
  } else {
    alert("Too short!");
  }
}

function updateTodosList() {
  try {
    id("todoList").innerHTML = "";
    const todos = getTodos();
    if (todos && todos.length > 0) {
      todos.forEach((todo, index) => {
        id("todoList").innerHTML += `
        <div class="todo">
            <span>${todo}</span>
            <span class="todo-close" onclick="deleteTodo(${index})">⤫</span>
        </div>`;
      });
    } else {
      id("todoList").innerHTML = "No todos yet!";
    }
  } catch (error) {}
}

function clearTodos() {
  if (confirm("Are you sure?")) {
    localStorage.removeItem("todos");
    updateTodosList();
  }
}

function deleteTodo(index) {
  if (confirm("Are you sure?")) {
    const todos = getTodos();
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    updateTodosList();
  }
}

window.onload = function () {
  updateTodosList();
};
