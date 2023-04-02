function createTodo(state) {
  return { ...state };
}

function newProjects(name) {
  let projects = [];

  const addTodo = (state) => {
    projects.push(createTodo(state));
  };

  const getTodo = (val = 0) => {
    const pos =
      val >= projects.length ? projects.length - 1 : val < 0 ? 0 : val;
    return projects[pos];
  };

  function removeTodo(id) {
    let i = 0;
    while (
      i < todoCount() &&
      id !== `${getTodo(i).title}::${getTodo(i).dueDate}`
    )
      i++;

    projects.splice(i, 1);
  }

  const todoCount = () => {
    return projects.length;
  };

  return { name, projects, addTodo, getTodo, todoCount, removeTodo };
}

export default newProjects;
