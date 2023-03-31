import "./style.css";

const content = document.querySelector("#content");

const component = (type, className, text) => {
  const comp = document.createElement(type);
  if (!!text) comp.textContent = text;
  if (!!className) {
    comp.classList.add(className);
  }
  return comp;
};

const displayTodo = (todo) => {
  const todoDiv = component("li", "todo-div");
  todoDiv.setAttribute("id", `todo-${todo.title}`);

  const checkBox = component("input", "todo-done");
  checkBox.setAttribute("type", "checkbox");

  const todoTitle = component("div", "", `${todo.title}`);

  const calander = component("input", "todo-date");
  calander.setAttribute("type", "date");

  todoDiv.appendChild(checkBox);
  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(calander);

  todos.appendChild(todoDiv);
};

const loadPage = () => {
  const projectSide = component("div", "projects");
  const todosSide = component("div", "todos");

  projectSide.appendChild(component("div", "", "Projects"));
  projectSide.appendChild(component("ul", "projects-list"));
  projectSide.appendChild(component("button", "add-btn", "Add Project"));

  todosSide.appendChild(component("div", "project-title"));
  todosSide.appendChild(component("ul", "todos-list"));
  todosSide.appendChild(component("button", "add-btn", "Add Task"));

  content.appendChild(projectSide);
  content.appendChild(todosSide);
};

loadPage();

const todos = content.querySelector(".todos-list");

export default displayTodo;
