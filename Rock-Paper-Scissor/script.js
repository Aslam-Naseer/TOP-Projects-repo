const allTiles = ["rock", "paper", "scissor"];
const result = document.querySelector("#result");

let playerPoints = 0;
let playerTile;
const playerScore = document.querySelector("#playerScore");
const player = document.querySelector(".player");
const playerTiles = player.querySelectorAll(".tile");

let computerPoints = 0;
let computerTile;
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

const compare = () => {
  if (isDraw()) {
    result.innerText = "Its a tie!";
  } else if (won()) {
    result.innerText = playerTile + " >> " + computerTile;
    playerPoints += 1;
    playerScore.innerText = "Score: " + playerPoints;
  } else if (lost()) {
    result.innerText = playerTile + " << " + computerTile;
    computerPoints += 1;
    computerScore.innerText = "Score: " + computerPoints;
  }
};

const play = (event) => {
  clearSelections();
  playerTile = event.target.dataset.type;
  computerTile = randomGenerator();
  showSelections();
  compare();
};

playerTiles.forEach((tile) => {
  tile.addEventListener("click", play);
});

function isDraw() {
  return playerTile === computerTile;
}

function won() {
  return (
    (playerTile === "rock" && computerTile === "scissor") ||
    (playerTile === "paper" && computerTile === "rock") ||
    (playerTile === "scissor" && computerTile === "paper")
  );
}

function lost() {
  return (
    (playerTile === "rock" && computerTile === "paper") ||
    (playerTile === "paper" && computerTile === "scissor") ||
    (playerTile === "scissor" && computerTile === "rock")
  );
}
