import "./style.css";
import intlFormatDistance from "date-fns/intlFormatDistance";
const EventEmitter = require("events");
const emitter = new EventEmitter();

const content = document.querySelector("#content");

const component = (type, className, text) => {
  const comp = document.createElement(type);
  if (!!text) comp.textContent = text;
  if (!!className) {
    comp.classList.add(className);
  }
  return comp;
};

const dateComponent = (dueDate) => {
  const calanderLabel = component("label", "todo-date-label");
  const calander = component("input", "todo-date");
  calander.setAttribute("type", "date");
  // calander.setAttribute("id", `${dueDate}+${Date.now()}`);
  // calanderLabel.setAttribute("for", calander.getAttribute("id"));

  calander.value = `${dueDate}`;

  calanderLabel.textContent =
    dueDate !== ""
      ? intlFormatDistance(new Date(dueDate), new Date())
      : "No date";

  calanderLabel.appendChild(calander);
  return calanderLabel;
};

const displayTodo = (todo) => {
  const todoDiv = component("li", "todo-div");

  const checkBox = component("input", "todo-done");
  checkBox.setAttribute("type", "checkbox");
  checkBox.dataset.id = `${todo.title}::${todo.dueDate}`;
  checkBox.addEventListener("click", (e) => emitter.emit("rem-todo", e), false);

  const todoTitle = component("div", "", `${todo.title}`);

  const calander = dateComponent(todo.dueDate);

  todoDiv.appendChild(checkBox);
  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(calander);

  todos.appendChild(todoDiv);
};

const addTodoComponent = () => {
  const newTodoDiv = component("div", "new-todo-div");

  const todoTitle = component("input", "new-todo-name");

  const calander = component("input", "new-todo-date");
  calander.setAttribute("type", "date");

  const addTodoButtons = component("div");
  addTodoButtons.appendChild(component("button", "new-add", "Add"));
  addTodoButtons.appendChild(component("button", "new-cancel", "Cancel"));

  newTodoDiv.appendChild(todoTitle);
  newTodoDiv.appendChild(addTodoButtons);
  newTodoDiv.appendChild(calander);

  return newTodoDiv;
};

const loadAddTodo = () => {
  const addTodoDiv = document.querySelector(".new-todo-div");
  const addTodoBtn = content.querySelector(".todos>.add-btn");

  addTodoBtn.style.display = "none";
  addTodoDiv.style.display = "flex";

  unloadAddProject();
};

const unloadAddTodo = () => {
  const addTodoDiv = document.querySelector(".new-todo-div");
  const addTodoBtn = content.querySelector(".todos>.add-btn");

  const textField = document.querySelector(".new-todo-name");
  const dateField = document.querySelector(".new-todo-date");
  textField.value = "";
  dateField.value = "";

  addTodoBtn.style.display = "inline-block";
  addTodoDiv.style.display = "none";
};

const fetchTodoDetails = () => {
  const todoName = content.querySelector(".new-todo-name");
  const todoDate = content.querySelector(".new-todo-date");

  const title = todoName.value;
  const dueDate = todoDate.value;
  const id = Date.now();

  if (title === "") alert("Task needs a title");
  else unloadAddTodo();
  return { title, dueDate, id };
};

const clearTodoList = () => {
  const todosList = content.querySelector(".todos-list");
  todosList.textContent = "";
};

const activateProject = (e) => {
  const projectNodes = content.querySelectorAll(".project-div");
  projectNodes.forEach((node) => node.classList.remove("active-project"));

  const projectTitle = content.querySelector(".project-title");
  projectTitle.textContent = e.target.dataset.name;

  e.target.classList.add("active-project");
};

const displayProject = (project) => {
  const projectDiv = component("li", "project-div", `${project.name}`);
  projects.appendChild(projectDiv);

  const remove = component("span", "rem-proj", "X");
  remove.dataset.projectName = project.name;
  remove.addEventListener("click", (e) => emitter.emit("rem-proj", e), false);
  projectDiv.appendChild(remove);

  return projectDiv;
};

const addProjectComponent = () => {
  const addProjectDiv = component("div", "add-project");

  const newProjectName = component("input", "new-project-name");
  const addProjectButtons = component("div");

  addProjectButtons.appendChild(component("button", "new-add", "Add"));
  addProjectButtons.appendChild(component("button", "new-cancel", "Cancel"));

  addProjectDiv.appendChild(newProjectName);
  addProjectDiv.appendChild(addProjectButtons);

  return addProjectDiv;
};

const loadAddProject = () => {
  const addProjectDiv = document.querySelector(".add-project");
  const addProjectBtn = content.querySelector(".projects>.add-btn");

  addProjectBtn.style.display = "none";
  addProjectDiv.style.display = "flex";

  unloadAddTodo();
};

const unloadAddProject = () => {
  const addProjectDiv = content.querySelector(".add-project");
  const addProjectBtn = content.querySelector(".projects>.add-btn");

  const textField = addProjectDiv.querySelector(".new-project-name");
  textField.value = "";

  addProjectBtn.style.display = "inline-block";
  addProjectDiv.style.display = "none";
};

const fetchProjectName = () => {
  const projectName = content.querySelector(".new-project-name");
  const name = projectName.value;
  if (name === "") alert("Project needs a name");
  else unloadAddProject();
  return name;
};

const fetchSelectedProject = () => {
  const projTitle = content.querySelector(".project-title");
  return projTitle.textContent;
};

const removeProject = (projName) => {
  const projectList = content.querySelectorAll(".project-div");
  let project = 1,
    count = 0;
  projectList.forEach((node) => {
    if (node.dataset.name === projName) project = count;
    count++;
  });
  projects.removeChild(projectList[project]);
};

const loadPage = () => {
  const projectSide = component("div", "projects");
  const todosSide = component("div", "todos");

  projectSide.appendChild(component("div", "", "Projects"));
  projectSide.appendChild(component("ul", "projects-list"));
  projectSide.appendChild(component("button", "add-btn", "Add Project"));
  projectSide.appendChild(addProjectComponent());

  todosSide.appendChild(component("div", "project-title"));
  todosSide.appendChild(component("ul", "todos-list"));
  todosSide.appendChild(component("button", "add-btn", "Add Task"));
  todosSide.appendChild(addTodoComponent());

  content.appendChild(projectSide);
  content.appendChild(todosSide);
};

const loadEventListeners = () => {
  const addProjectBtn = content.querySelector(".projects>.add-btn");
  addProjectBtn.addEventListener("click", loadAddProject);

  const addProjectCancel = content.querySelector(".add-project .new-cancel");
  addProjectCancel.addEventListener("click", unloadAddProject);

  const addTodoBtn = content.querySelector(".todos>.add-btn");
  addTodoBtn.addEventListener("click", loadAddTodo);

  const addTodoCancel = content.querySelector(".new-todo-div .new-cancel");
  addTodoCancel.addEventListener("click", unloadAddTodo);
};

loadPage();
loadEventListeners();

const todos = content.querySelector(".todos-list");
const projects = content.querySelector(".projects-list");

export default {
  emitter,
  displayTodo,
  displayProject,
  fetchProjectName,
  fetchTodoDetails,
  activateProject,
  fetchSelectedProject,
  clearTodoList,
  removeProject,
};
