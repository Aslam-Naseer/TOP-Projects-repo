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

function footer() {
  const foot = document.createElement("header");
  foot.classList.add("footer");

  function newDiv(text) {
    const textDiv = document.createElement("a");
    textDiv.innerText = text;
    return textDiv;
  }

  foot.appendChild(newDiv("Hive icon made by Freepik - www.flaticon.com"));
  foot.appendChild(newDiv("Bee icons made by Smashicons - www.flaticon.com"));
  foot.appendChild(
    newDiv("Background image created by dgim-studio - www.freepik.com")
  );

  return foot;
}

content.appendChild(header());
content.appendChild(footer());
