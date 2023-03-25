import "./style.css";

const content = document.querySelector("#content");

function component() {
  const element = document.createElement("div");

  element.textContent = "Hello WebPack";

  return element;
}

document.body.appendChild(component());
