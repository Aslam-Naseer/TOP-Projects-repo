import newProject from "./todoModule";
import fun from "./DomModule";

const projectsArray = {};

const displayAllTodos = (e) => {
  console.log(projectsArray);
  const proj = projectsArray[e.target.dataset.name];
  fun.activateProject(e);
  for (let i = 0; i < proj.todoCount(); i++) fun.displayTodo(proj.getTodo(i));
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
  projNode.addEventListener("click", displayAllTodos);
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
  const prj21 = newProject("Specl");
  const prj31 = newProject("someone");

  initProjects(prj1, "Default");
  initProjects(prj21, "Specl");
  initProjects(prj31, "someone");

  document.querySelector(".project-div:first-child").click();
};

initializePage();

const addProjectAdd = content.querySelector(".add-project .new-add");
addProjectAdd.addEventListener("click", addProject);

const addTodoAdd = content.querySelector(".new-todo-div .new-add");
addTodoAdd.addEventListener("click", addNewTodo);

const projects = content.querySelector(".projects-list>li");
projects.addEventListener("click", displayAllTodos);
