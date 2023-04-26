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
    console.log("P won");
    newGame();
  }
  x = botAttack();
  if (x && p.finished()) {
    console.log("B won");
    newGame();
  }
};

const placeShip = (ship, x, y, vert) => {
  const cellsPlaced = p.placeShip(ship, x, y, vert);
  if (Array.isArray(cellsPlaced) === false) throw new Error("Cant place ship");
  domStuff.placeFriendly(cellsPlaced);
};

const randomPlace = (ship) => {
  const cellPlaced = b.placeShip(ship);
  console.log(cellPlaced);
};

const clear = () => {
  domStuff.clearBoards();
  p.reset();
  b.reset();
};

const placeAlShips = () => {
  randomPlace(ship(2));
  randomPlace(ship(4));
  randomPlace(ship(5));
  randomPlace(ship(4));
  randomPlace(ship(2));

  placeShip(ship(2), 2, 3, true);
  placeShip(ship(5), 4, 4);
  placeShip(ship(3), 7, 3);
};

const newGame = () => {
  clear();
  domStuff.setBoard();
  placeAlShips();
};

const obj = { p, b, playerBoard, botBoard };

export { play, obj, placeShip, randomPlace, clear, newGame };
