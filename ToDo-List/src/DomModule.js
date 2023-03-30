import "./style.css";

const content = document.querySelector("#content");

const component = (type, className, text) => {
  const comp = document.createElement(type);
  if (!!text) comp.textContent = text;
  if (!!className) {
    comp.classList.add(className);
  }
  return comp;
};

const loadPage = () => {
  content.appendChild(component("div", "projects"));
  content.appendChild(component("div", "todos"));
};
