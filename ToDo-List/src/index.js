import newProject from "./todoModule";
import fun from "./DomModule";

const projectsArray = {};

const prj1 = newProject("Default");
const prj21 = newProject("Special");
const prj31 = newProject("someOther");

prj1.addTodo("todo1");
prj1.addTodo("todo4");
prj1.addTodo("todofsdfs sdfg d2");
prj1.addTodo("todo15");

fun.displayTodo(prj1.getTodo(0));
fun.displayTodo(prj1.getTodo(3));
fun.displayTodo(prj1.getTodo(2));

const displayAllTodos = (e) => {
  console.log(e.target);
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

initProjects(prj1, "Default");
initProjects(prj21, "Specl");
initProjects(prj31, "someone");

const addNewTodo = () => {
  const todoObj = fun.fetchTodoDetails();
  if (todoObj.title === "") return;
  prj1.addTodo(todoObj.title, todoObj.dueDate);
  fun.displayTodo(todoObj);
};

const addProjectAdd = content.querySelector(".add-project .new-add");
addProjectAdd.addEventListener("click", addProject);

const addTodoAdd = content.querySelector(".new-todo-div .new-add");
addTodoAdd.addEventListener("click", addNewTodo);

const projects = content.querySelector(".projects-list>li");
projects.addEventListener("click", displayAllTodos);
