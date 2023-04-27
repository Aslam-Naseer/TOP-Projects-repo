import { player, bot } from "./player";
import board from "./gameboard";
import domStuff from "./domStuff";
import ship from "./shipFactory";

const playerBoard = board();
const botBoard = board();

const p = player(playerBoard, botBoard);
const b = bot(botBoard, playerBoard);

const sumArray = (arr) => {
  return arr.reduce((prev, curr) => (prev += curr), 0);
};

const botFindCell = (x, y) => botBoard.grid[x][y];

const botAttack = () => {
  let attackObj = null;
  while (attackObj === null) attackObj = b.attack();
  return domStuff.attack(false, attackObj.x, attackObj.y, attackObj.res);
};

const playerAttack = (e) => {
  const x = e.target.dataset.x;
  const y = e.target.dataset.y;

  return domStuff.attack(true, x, y, p.attack(x, y));
};

const play = (e) => {
  let x;
  x = playerAttack(e);
  if (x && b.finished()) {
    domStuff.showWinner("You won");
  }
  x = botAttack();
  if (x && p.finished()) {
    domStuff.showWinner("You lost");
  }
};

const placeShip = (ship, x, y, vert) => {
  const cellsPlaced = p.placeShip(ship, x, y, vert);
  if (Array.isArray(cellsPlaced) === false) throw new Error("Cant place ship");
  domStuff.placeShipOnMap(cellsPlaced, "ship");
};

const randomPlace = (user, ship) => {
  const cellsPlaced = user.placeShipRandom(ship);
  const userText = user === p ? "ship" : "opp-ship";

  if (Array.isArray(cellsPlaced) === false) throw new Error("Cant place ship");
  domStuff.placeShipOnMap(cellsPlaced, userText);
};

const randomAllPlace = (user, arr) => {
  if (Array.isArray(arr) === false) throw new Error("No array");

  const sum = sumArray(arr);
  let res = 0;
  const userText = user === p ? "player" : "bot";

  while (res !== sum) {
    user.reset();
    domStuff.resetBoard(userText);
    arr.forEach((x) => randomPlace(user, ship(x)));
    res = domStuff.shipCells(userText);
  }
};

const newGame = () => {
  domStuff.clearBoards();
  randomAllPlace(p, [2, 3, 3, 4, 5]);
  randomAllPlace(b, [2, 3, 3, 4, 5]);
};

const obj = { p, b, playerBoard, botBoard };

export { play, obj, placeShip, randomPlace, newGame, botFindCell };
