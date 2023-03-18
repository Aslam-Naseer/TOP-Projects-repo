// const gameBoard = document.querySelector("#game-board");
const gameTiles = document.querySelectorAll(".game-tile");

function player(token) {
  const name = `Player ${token === "X" ? 1 : 2}`;

  const getToken = () => token;

  return { name, token, getToken };
}

const gameGrid = (() => {
  const isEmptyTile = (tileNum) => gameTiles[tileNum].textContent === "";
  const writeTile = (tileNum, token) => {
    gameTiles[tileNum].textContent = token;
  };

  return { isEmptyTile, writeTile };
})();

const gameControl = (() => {
  const player1 = player("X");
  const player2 = player("O");

  let currentPlayer = player1;

  const playGame = (e) => {
    const tileNum = e.target.dataset.tile;

    if (gameGrid.isEmptyTile(tileNum)) {
      gameGrid.writeTile(tileNum, currentPlayer.getToken());
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
  };

  return { playGame };
})();

gameTiles.forEach((tile) =>
  tile.addEventListener("click", gameControl.playGame)
);
