import { player, bot } from "../src/player";
import board from "../src/gameboard";
import domStuff from "./domStuff";

const playerGrid = document.querySelector("#player");
const botGrid = document.querySelector("#bot");

const playerBoard = board();
const botBoard = board();

const p = player(playerBoard, botBoard);
const b = bot(botBoard, playerBoard);

const playerAttack = (e) => {
  const x = e.target.dataset.x;
  const y = e.target.dataset.y;

  console.log(botBoard.grid[x][y]);

  e.target.style.pointerEvents = "none";
  domStuff.attack(true, x, y, p.attack(x, y));
};

const botAttack = (e) => {};

export default { playerAttack, botAttack, p, b, playerBoard, botBoard };
