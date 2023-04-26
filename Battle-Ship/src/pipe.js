import { player, bot } from "../src/player";
import board from "../src/gameboard";
import domStuff from "./domStuff";

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

  e.target.style.pointerEvents = "none";
  return domStuff.attack(true, x, y, p.attack(x, y));
};

const play = (e) => {
  let x;
  x = playerAttack(e);
  if (x && b.finished()) console.log("P won");
  x = botAttack();
  if (x && p.finished()) console.log("B won");
};

const placeShip = (ship, x, y, vert) => {
  const cellsPlaced = p.placeShip(ship, x, y, vert);
  if (cellsPlaced === null) return null;
  domStuff.placeFriendly(cellsPlaced);
};

const obj = { p, b, playerBoard, botBoard };

export { play, obj, placeShip };
