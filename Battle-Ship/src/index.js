import domMethods from "./domStuff";
import pipe from "./pipe";
import { player } from "./player";
import ship from "./shipFactory";

pipe.b.placeShip(ship(2), 2, 3, true);
pipe.p.placeShip(ship(5), 4, 4);

console.log(pipe.playerBoard.grid);
console.log(pipe.botBoard.grid);
