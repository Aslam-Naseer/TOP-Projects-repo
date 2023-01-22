const container = document.querySelector("#container");
const resolution = document.querySelector("#resolution");
const resText = document.querySelector("#res-text");
const appButtons = document.querySelectorAll(".buttons>button");
const colorPicker = document.querySelector("#color-picker");

let gridOrder = 32;
let tileColor = colorPicker.value;
let splashMode = [false, 0, 0, 0];

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

const updateColor = () => {
  return colorPicker.value;
};

const setRandom = () => {
  for (i = 1; i < 4; i++) splashMode[i] = Math.floor(Math.random() * 256);
  tileColor = `rgb(${splashMode[1]},${splashMode[2]},${splashMode[3]})`;
};

const paint = (e) => {
  if (e.buttons !== 1) return;
  if (splashMode[0]) setRandom();
  e.target.style.backgroundColor = tileColor;
};

const getRes = (e) => {
  gridOrder = e.target.value;
  resText.innerText = gridOrder + " x " + gridOrder;
};

const toggleButtons = (node) => {
  splashMode[0] = false;
  appButtons.forEach((node) => node.classList.remove("selected"));
  appButtons[node].classList.add("selected");
};

const startSketch = () => {
  toggleButtons(0);
  tileColor = updateColor();
};

const splash = () => {
  toggleButtons(1);
  splashMode[0] = true;
};

const useEraser = () => {
  toggleButtons(2);
  tileColor = "transparent";
};

colorPicker.addEventListener("change", startSketch);
resolution.addEventListener("input", getRes);
resolution.addEventListener("change", createGrid);

createGrid();
