import { player, bot } from "./player";
import board from "./gameboard";
import domStuff from "./domStuff";
import ship from "./shipFactory";

const playerGrid = document.querySelector("#player");
const botGrid = document.querySelector("#bot");

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
    domStuff.showWinner("Player won");
  }
  x = botAttack();
  if (x && p.finished()) {
    domStuff.showWinner("Computer won");
  }
};

const placeShip = (ship, x, y, vert) => {
  const cellsPlaced = p.placeShip(ship, x, y, vert);
  if (Array.isArray(cellsPlaced) === false) throw new Error("Cant place ship");
  domStuff.placeShipOnMap(cellsPlaced, "ship");
};

const randomPlace = (ship) => {
  const cellsPlaced = b.placeShip(ship);
  if (Array.isArray(cellsPlaced) === false) throw new Error("Cant place ship");
  domStuff.placeShipOnMap(cellsPlaced, "opp-ship");
  console.log(cellsPlaced);
};

const playerAllPlace = () => {
  p.reset();
  placeShip(ship(2), 2, 3, true);
  placeShip(ship(5), 4, 4);
  placeShip(ship(3), 7, 3);
};

const randomAllPlace = (arr) => {
  if (Array.isArray(arr) === false)
    throw new Error("No array showing ship length for Opponent");

  const sum = sumArray(arr);
  let res = 0;

  while (res !== sum) {
    b.reset();
    domStuff.resetOpponent();
    arr.forEach((x) => randomPlace(ship(x)));
    res = domStuff.botShipCells();
    console.log(res);
  }
};

const newGame = () => {
  domStuff.clearBoards();
  domStuff.setBoard();
  playerAllPlace();
  randomAllPlace([2, 2, 3, 4, 5]);
};

const obj = { p, b, playerBoard, botBoard };

export { play, obj, placeShip, randomPlace, newGame, botFindCell };
