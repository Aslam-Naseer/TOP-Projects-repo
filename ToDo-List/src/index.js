import newProject from "./todoModule";
import fun from "./DomModule";

const projectsArray = {};

const displayAllTodos = (proj) => {
  fun.clearTodoList();
  for (let i = 0; i < proj.todoCount(); i++) fun.displayTodo(proj.getTodo(i));
};

const selectProject = (e) => {
  const proj = projectsArray[e.target.dataset.name];
  fun.activateProject(e);
  displayAllTodos(proj);
};

const addProject = () => {
  const projName = fun.fetchProjectName();
  if (projName === "") return;
  const proj = newProject(projName);
  initProjects(proj, projName);
};

const initProjects = (proj, projName) => {
  projectsArray[projName] = proj;
  const projNode = fun.displayProject(proj);
  projNode.dataset.name = projName;
  projNode.addEventListener("click", selectProject);
};

const addNewTodo = () => {
  const todoObj = fun.fetchTodoDetails();
  if (todoObj.title === "") return;
  const selectedProject = fun.fetchSelectedProject();
  projectsArray[selectedProject].addTodo(todoObj);
  fun.displayTodo(todoObj);
};

const initializePage = () => {
  const prj1 = newProject("Default");
  initProjects(prj1, "Default");
  content.querySelector(".project-div:first-child").click();
};

initializePage();

fun.emitter.on("func", removeTodo);

function removeTodo(e) {
  const name = e.target.dataset.name;
  const projectName = fun.fetchSelectedProject();

  projectsArray[projectName].removeTodo(name);
  displayAllTodos(projectsArray[projectName]);
}

const addProjectAdd = content.querySelector(".add-project .new-add");
addProjectAdd.addEventListener("click", addProject);

const addTodoAdd = content.querySelector(".new-todo-div .new-add");
addTodoAdd.addEventListener("click", addNewTodo);
