import newProjects from "./todoModule";

function loadProjects() {
  // const projects = {};
  // let savedProjects = JSON.parse(localStorage.getItem("stored-projects"));
  // if (savedProjects === null || savedProjects === undefined) return;
  // const projectNames = Object.keys(savedProjects);
  // projectNames.forEach((prj) => addProject(prj));
  // function addProject(projectKey) {
  //   const projectObject = newProjects(`${projectKey}`);
  //   projectKey.forEach((todo) => projectObject.addTodo(todo));
  // }
}

function storeProjects(savedProjects) {
  const projectsArray = {};

  console.log(savedProjects);

  const projectNames = Object.keys(savedProjects);
  projectNames.forEach((key) => addProjects(key));

  function addProjects(projectKey) {
    projectsArray[projectKey] = savedProjects[projectKey].projects;
  }

  console.log(JSON.stringify(projectsArray));
  console.log(JSON.parse(JSON.stringify(projectsArray)));
  //localStorage.setItem("stored-projects", projects);
}

// function loadProjects() {
//   return JSON.parse(localStorage.getItem("stored-projects"));
// }

// function storeProjects(projects) {
//   console.log(projects);
//   localStorage.setItem("todo-items", JSON.stringify(projects));
//   console.log(JSON.parse(localStorage.getItem("stored-projects")));
// }

export default { loadProjects, storeProjects };
