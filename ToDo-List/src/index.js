import newProject from "./todoModule";
import fun from "./DomModule";
import storageFun from "./storage";

const projectsArray = {};

const displayAllTodos = (proj) => {
  console.log(proj);
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
  content.querySelector(".project-div:first-child").click();
};

const initializePage = () => {
  const savedProjects = storageFun.loadProjects();

  const projectList = Object.keys(savedProjects);
  projectList.forEach((key) => {
    const proj = newProject(key);
    initProjects(proj, key);
    savedProjects[key].forEach((todo) => {
      proj.addTodo(todo);
    });
  });

  loadDefault();
};

initializePage();

fun.emitter.on("rem-todo", removeTodo);
fun.emitter.on("rem-proj", removeProject);

function removeTodo(e) {
  const name = e.target.dataset.name;
  const projectName = fun.fetchSelectedProject();

  projectsArray[projectName].removeTodo(name);
  console.log(projectsArray);
  console.log(projectsArray[projectName]);
  displayAllTodos(projectsArray[projectName]);

  storageFun.storeProjects(projectsArray);
}

function removeProject(e) {
  const name = e.target.dataset.projectName;
  e.stopPropagation();

  fun.removeProject(name);
  delete projectsArray[name];
  loadDefault();

  storageFun.storeProjects(projectsArray);
}

const addProjectAdd = content.querySelector(".add-project .new-add");
addProjectAdd.addEventListener("click", addProject);

const addTodoAdd = content.querySelector(".new-todo-div .new-add");
addTodoAdd.addEventListener("click", addNewTodo);
