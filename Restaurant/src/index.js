import "./styles/style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const content = document.querySelector("#content");

function header() {
  const head = document.createElement("header");
  head.classList.add("header");

  const home = document.createElement("button");
  home.innerText = "Home";
  home.addEventListener("click", () => {
    setActiveBtn(home);
    loadHome();
  });

  const menu = document.createElement("button");
  menu.innerText = "Menu";
  menu.addEventListener("click", () => {
    setActiveBtn(menu);
    loadMenu();
  });

  const contact = document.createElement("button");
  contact.innerText = "Contact";
  contact.addEventListener("click", () => {
    setActiveBtn(contact);
    loadContact();
  });

  head.appendChild(home);
  head.appendChild(menu);
  head.appendChild(contact);

  return head;
}

function mainDiv() {
  const main = document.createElement("div");
  main.setAttribute("id", "main");
  return main;
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

function setActiveBtn(btn) {
  const buttons = content.querySelectorAll(".header>button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  btn.classList.add("active");
}

content.appendChild(header());
content.appendChild(mainDiv());
content.appendChild(footer());
setActiveBtn(document.querySelector(".header>button"));
loadHome();
