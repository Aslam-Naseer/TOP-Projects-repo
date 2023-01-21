const allTiles = ["rock", "paper", "scissor"];

const playerPoints = 0;
const playerScore = document.querySelector("#playerScore");
const player = document.querySelector(".player");
const playerTiles = player.querySelectorAll(".tile");

const computerPoints = 0;
const computerScore = document.querySelector("#computerScore");
const computer = document.querySelector(".computer");
const computerTiles = computer.querySelectorAll(".tile");

let selectedTile;
let currentTiles;
let randomTile;

const randomGenerator = () => {
  let randomNum = Math.floor(Math.random() * 3);
  return allTiles[randomNum];
};

const play = (event) => {
  selectedTile = event.target.dataset.type;
  randomTile = randomGenerator();
  console.log(selectedTile + "  " + randomTile);
};

playerTiles.forEach((tile) => {
  tile.addEventListener("click", play);
});
