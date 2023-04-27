import { play, newGame } from "./game";

const player = document.querySelector("#player");
const bot = document.querySelector("#bot");

const clearPopups = () => {
  const popups = document.querySelector(".popups");
  popups.classList.remove("active-popup");
};

const clearBoards = () => {
  clearPopups();
  player.textContent = "";
  bot.textContent = "";
};

const attack = (isPlayer, x, y, isHit) => {
  const board = isPlayer ? bot : player;
  const cell = board
    .querySelector(`[data-row='${x}']`)
    .querySelector(`[data-y='${y}']`);

  if (isHit) {
    cell.classList.add("hit");
    return true;
  } else {
    cell.classList.add("miss");
    return false;
  }
};

const isAttacked = (x, y, isPlayer) => {
  const board = isPlayer ? player : bot;
  const cell = board
    .querySelector(`[data-row='${x}']`)
    .querySelector(`[data-y='${y}']`);

  return cell.classList.contains("miss") || cell.classList.contains("hit");
};

const placeShipOnMap = (arr, classname) => {
  const board = classname === "ship" ? player : bot;

  if (Array.isArray(arr) === false) return null;
  arr.forEach((cellData) => {
    const cell = board
      .querySelector(`[data-row='${cellData[0]}']`)
      .querySelector(`[data-y='${cellData[1]}']`);
    cell.classList.add(classname);
  });
};

const shipCells = (userText) => {
  let val = 0;
  const board = userText === "player" ? player : bot;
  const rows = board.querySelectorAll(".row");

  rows.forEach((row) => {
    const cells = row.querySelectorAll(".cell");
    cells.forEach((cell) => {
      if (
        cell.classList.contains("opp-ship") ||
        cell.classList.contains("ship")
      )
        val += 1;
    });
  });

  return val;
};

const resetBoard = (toChange) => {
  const board = toChange === "player" ? player : bot;

  board.textContent = "";
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.dataset.row = i;

    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = i;
      cell.dataset.y = j;
      if (board === bot) {
        cell.classList.add("attacking-cell");
        cell.addEventListener("click", play);
      }

      row.appendChild(cell);
    }
    board.appendChild(row);
  }
};

const showWinner = (text = "") => {
  const popups = document.querySelector(".popups");
  const winnerTitle = popups.querySelector("#winner");

  winnerTitle.textContent = text;
  popups.classList.add("active-popup");
};

document
  .querySelectorAll(".new-game")
  .forEach((node) => node.addEventListener("click", newGame));

export default {
  attack,
  isAttacked,
  placeShipOnMap,
  clearBoards,
  shipCells,
  resetBoard,
  showWinner,
};
