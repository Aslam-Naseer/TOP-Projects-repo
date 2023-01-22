const container = document.querySelector("#container");
const resolution = document.querySelector("#resolution");
const resText = document.querySelector("#res-text");
const appButtons = document.querySelectorAll(".buttons>button");

let gridOrder = 32;
let tileColor = "white";

const createGrid = () => {
  container.style.gridTemplateColumns = `repeat(${gridOrder}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridOrder}, 1fr)`;
  container.innerHTML = "";

  let gridPieces = [];
  for (i = 0; i < gridOrder * gridOrder; i++) {
    gridPieces[i] = document.createElement("div");
    gridPieces[i].onmouseover = paint;
    container.appendChild(gridPieces[i]);
  }
};

const clearTiles = () => {
  const tilesList = document.querySelectorAll("#container>div");
  tilesList.forEach((tile) => (tile.style.backgroundColor = "inherit"));
};

const paint = (e) => {
  if (e.buttons === 1) e.target.style.backgroundColor = tileColor;
};

const getRes = (e) => {
  gridOrder = e.target.value;
  resText.innerText = gridOrder + " x " + gridOrder;
};

const toggleButtons = (node) => {
  appButtons.forEach((node) => node.classList.remove("selected"));
  appButtons[node].classList.add("selected");
};

const startSketch = () => {
  toggleButtons(0);
  tileColor = "white";
};

const useEraser = () => {
  toggleButtons(2);
  tileColor = "transparent";
};

resolution.addEventListener("input", getRes);
resolution.addEventListener("change", createGrid);

createGrid();
