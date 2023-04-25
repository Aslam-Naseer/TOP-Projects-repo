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
  domStuff.attack(false, attackObj.x, attackObj.y, attackObj.res);
};

const playerAttack = (e) => {
  const x = e.target.dataset.x;
  const y = e.target.dataset.y;

  e.target.style.pointerEvents = "none";
  domStuff.attack(true, x, y, p.attack(x, y));
};

const play = (e) => {
  playerAttack(e);
  botAttack();
};

export default { play, p, b, playerBoard, botBoard };
