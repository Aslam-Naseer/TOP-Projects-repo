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
