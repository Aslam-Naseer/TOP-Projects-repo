const container = document.querySelector("#container");
let gridOrder = 32;
let tileColor = "#FFFFFF";

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

createGrid();
