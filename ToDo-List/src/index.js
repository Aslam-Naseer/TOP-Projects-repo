import newProject from "./todoModule";
import fun from "./DomModule";

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

fun.displayProject(prj1);
fun.displayProject(prj21);
fun.displayProject(prj31);

const addProject = () => {
  const projName = fun.fetchProjectName();
  if (projName === "") return;
  const proj = newProject(projName);
  fun.displayProject(proj);
};

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
