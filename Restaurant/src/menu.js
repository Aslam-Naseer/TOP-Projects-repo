import "./styles/menu.css";

function createDiv(name, price) {
  const div = document.createElement("div");

  const nameDiv = document.createElement("div");
  const priceDiv = document.createElement("div");
  nameDiv.textContent = name;
  priceDiv.textContent = `$${price}`;

  div.appendChild(nameDiv);
  div.appendChild(priceDiv);
  return div;
}

function foodObject(name, description, price) {
  const div = document.createElement("div");
  div.classList.add("food-item");

  div.appendChild(createDiv(name, price));
  const descDiv = document.createElement("div");
  descDiv.textContent = description;
  div.appendChild(descDiv);
  return div;
}

function createMenu() {
  const menu = document.createElement("div");

  return menu;
}

export default function () {
  const main = document.querySelector("#main");
  main.innerText = "";
  main.appendChild(createMenu());
}
