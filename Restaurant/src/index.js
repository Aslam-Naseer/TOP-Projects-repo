import "./style.css";

const content = document.querySelector("#content");

function header() {
  const head = document.createElement("header");
  head.classList.add("header");

  function newButton(text) {
    const button = document.createElement("button");
    button.innerText = text;
    return button;
  }

  head.appendChild(newButton("Home"));
  head.appendChild(newButton("Menu"));
  head.appendChild(newButton("Contact"));

  return head;
}

content.appendChild(header());
