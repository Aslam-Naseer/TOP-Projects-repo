function loadProjects() {
  let savedObj = JSON.parse(localStorage.getItem("stored-projects"));
  if (savedObj === null || savedObj === undefined) {
    savedObj = { Default: [] };
  }
  return savedObj;
}

function storeProjects(savedProjects) {
  const projectsArray = {};

  const projectNames = Object.keys(savedProjects);
  projectNames.forEach((key) => addProjects(key));

  function addProjects(projectKey) {
    projectsArray[projectKey] = savedProjects[projectKey].projects;
  }

  localStorage.setItem("stored-projects", JSON.stringify(projectsArray));
}

export default { loadProjects, storeProjects };
