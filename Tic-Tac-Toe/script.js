const info = document.querySelector("#info");
const gameTiles = document.querySelectorAll(".game-tile");
const restart = document.querySelector("#restart");

function player(token) {
  const name = `Player ${token === "X" ? 1 : 2}`;

  const getToken = () => token;
  const getName = () => name;

  return { getName, getToken };
}

const gameGrid = (() => {
  const isEmptyTile = (tileNum) => gameTiles[tileNum].textContent === "";
  const writeTile = (tileNum, token) => {
    gameTiles[tileNum].textContent = token;
  };

  const resetGrid = () => {
    gameTiles.forEach((tile) => {
      const currTile = tile;
      currTile.textContent = "";
    });
  };

  const checkTiles = (a, b, c) => {
    if (gameTiles[a].textContent === "") return false;

    return (
      gameTiles[a].textContent === gameTiles[b].textContent &&
      gameTiles[a].textContent === gameTiles[c].textContent
    );
  };

  const isWinner = () => {
    if (checkTiles(0, 1, 2) || checkTiles(3, 4, 5) || checkTiles(6, 7, 8))
      return true;
    if (checkTiles(0, 3, 6) || checkTiles(1, 4, 7) || checkTiles(2, 5, 8))
      return true;
    if (checkTiles(0, 4, 8) || checkTiles(2, 4, 6)) return true;
    return false;
  };

  return { isEmptyTile, writeTile, resetGrid, isWinner };
})();

const gameControl = (() => {
  const player1 = player("X");
  const player2 = player("O");

  let gameOver = false;
  let currentPlayer = player1;
  let turnsPlayed = 0;

  const rewriteInfo = (string) => {
    info.textContent = string;
  };

  const isGameOver = () => {
    if (gameGrid.isWinner()) {
      gameOver = true;
      rewriteInfo(`${currentPlayer.getName()} wins!`);
    } else if (turnsPlayed >= 9) {
      gameOver = true;
      rewriteInfo("It's Draw");
    }

    return gameOver;
  };

  const playGame = (e) => {
    const tileNum = e.target.dataset.tile;

    if (gameOver) return;

    if (gameGrid.isEmptyTile(tileNum)) {
      gameGrid.writeTile(tileNum, currentPlayer.getToken());
      turnsPlayed += 1;
      if (isGameOver() === false) {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        rewriteInfo(`${currentPlayer.getName()}'s turn`);
      }
    }
  };

  const restartGame = () => {
    gameGrid.resetGrid();
    gameOver = false;
    turnsPlayed = 0;
    currentPlayer = player1;
    rewriteInfo("Player 1's turn");
  };

  return { playGame, restartGame };
})();

gameTiles.forEach((tile) =>
  tile.addEventListener("click", gameControl.playGame)
);
restart.addEventListener("click", gameControl.restartGame);
