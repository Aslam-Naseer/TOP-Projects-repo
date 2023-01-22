const container = document.querySelector("#container");
let gridOrder = 12;
let tileColor = "#FFFFFF";

let gridPieces = [];

const createGrid = () => {
  container.style.gridTemplateColumns = `repeat(${gridOrder}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridOrder}, 1fr)`;
  container.innerHTML = "";
  for (i = 0; i < gridOrder * gridOrder; i++) {
    gridPieces[i] = document.createElement("div");
    container.appendChild(gridPieces[i]);
  }
};

createGrid();
