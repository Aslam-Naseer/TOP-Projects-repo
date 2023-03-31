import newProject from "./todoModule";
import display from "./DomModule";

const prj1 = newProject();

prj1.addTodo("todo1");
prj1.addTodo("todo4");
prj1.addTodo("todofsdfs sdfg d2");
prj1.addTodo("todo15");

display(prj1.getTodo(0));
display(prj1.getTodo(3));
display(prj1.getTodo(2));
