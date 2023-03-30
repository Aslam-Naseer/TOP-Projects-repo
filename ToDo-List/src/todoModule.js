function createTodo(state) {
  return { ...state };
}

function newProjects() {
  const projects = [];

  const addTodo = (title, descr, dueDate, priority = 5) => {
    const state = { title, descr, dueDate, priority };
    projects.push(createTodo(state));
  };

  const getTodo = (val = 0) => {
    const pos =
      val >= projects.length ? projects.length - 1 : val < 0 ? 0 : val;
    return projects[pos];
  };

  const todoCount = () => projects.length();

  return { addTodo, getTodo, todoCount };
}

export default newProjects;
