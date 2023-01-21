const allTiles = ["rock", "paper", "scissor"];

let playerPoints = 0;
let playerTile;
const playerScore = document.querySelector("#playerScore");
const player = document.querySelector(".player");
const playerTiles = player.querySelectorAll(".tile");

let computerPoints = 0;
const computerScore = document.querySelector("#computerScore");
const computer = document.querySelector(".computer");
const computerTiles = computer.querySelectorAll(".tile");

const clearSelections = () => {
  playerTiles.forEach((tile) => tile.classList.remove("selected"));
  computerTiles.forEach((tile) => tile.classList.remove("selected"));
};

const randomGenerator = () => {
  let randomNum = Math.floor(Math.random() * 30) + 1;
  return allTiles[randomNum % 3];
};

const showSelections = () => {
  player.querySelector(`[data-type="${playerTile}"]`).classList.add("selected");
  computer
    .querySelector(`[data-type="${computerTile}"]`)
    .classList.add("selected");
};

const play = (event) => {
  clearSelections();
  playerTile = event.target.dataset.type;
  computerTile = randomGenerator();
  showSelections();
};

playerTiles.forEach((tile) => {
  tile.addEventListener("click", play);
});
