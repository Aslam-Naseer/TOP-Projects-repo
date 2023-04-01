function createTodo(state) {
  return { ...state };
}

function newProjects(name) {
  const projects = [];

  const addTodo = (state) => {
    projects.push(createTodo(state));
  };

  const getTodo = (val = 0) => {
    const pos =
      val >= projects.length ? projects.length - 1 : val < 0 ? 0 : val;
    return projects[pos];
  };

  const removeTodo = (id) => {
    projects.filter((todo) => todo.id !== id);
  };

  const todoCount = () => {
    return projects.length;
  };

  return { name, projects, addTodo, getTodo, todoCount, removeTodo };
}

export default newProjects;
