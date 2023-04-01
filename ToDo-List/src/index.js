import newProject from "./todoModule";
import fun from "./DomModule";
import storageFun from "./storage";

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
  storageFun.storeProjects(projectsArray);
};

const initProjects = (proj, projName) => {
  projectsArray[projName] = proj;
  const projNode = fun.displayProject(proj);
  projNode.dataset.name = projName;
  projNode.addEventListener("click", selectProject, false);
};

const addNewTodo = () => {
  const todoObj = fun.fetchTodoDetails();
  if (todoObj.title === "") return;
  const selectedProject = fun.fetchSelectedProject();
  projectsArray[selectedProject].addTodo(todoObj);
  fun.displayTodo(todoObj);
  storageFun.storeProjects(projectsArray);
};

const loadDefault = () => {
  // content.querySelector(".project-div:first-child").click();
};

const initializePage = () => {
  console.log(storageFun.loadProjects());
  loadDefault();
};

initializePage();

fun.emitter.on("rem-todo", removeTodo);
fun.emitter.on("rem-proj", removeProject);

function removeTodo(e) {
  const name = e.target.dataset.name;
  const projectName = fun.fetchSelectedProject();

  projectsArray[projectName].removeTodo(name);
  displayAllTodos(projectsArray[projectName]);
}

function removeProject(e) {
  const name = e.target.dataset.projectName;
  e.stopPropagation();

  fun.removeProject(name);
  delete projectsArray[name];
  loadDefault();
}

const addProjectAdd = content.querySelector(".add-project .new-add");
addProjectAdd.addEventListener("click", addProject);

const addTodoAdd = content.querySelector(".new-todo-div .new-add");
addTodoAdd.addEventListener("click", addNewTodo);
