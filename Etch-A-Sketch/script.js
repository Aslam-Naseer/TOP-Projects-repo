const container = document.querySelector("#container");
let gridOrder = 64;
let tileColor = "#FFFFFF";

let gridPieces = [];

const createGrid = () => {
  container.style.gridTemplateColumns = `repeat(${gridOrder}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridOrder}, 1fr)`;
  container.innerHTML = "";
  for (i = 0; i < gridOrder * gridOrder; i++) {
    gridPieces[i] = document.createElement("div");
    gridPieces[i].onmouseover = paint;
    container.appendChild(gridPieces[i]);
  }
};

const paint = (e) => {
  if (e.buttons === 1) e.target.style.backgroundColor = tileColor;
};

createGrid();
