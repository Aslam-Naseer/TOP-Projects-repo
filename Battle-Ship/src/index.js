import domMethods from "./domStuff";
import { play, obj, placeShip } from "./pipe";
import { player } from "./player";
import ship from "./shipFactory";

placeShip(ship(2), 2, 3, true);
placeShip(ship(5), 4, 4);
placeShip(ship(3), 3, 3);

obj.b.placeShip(ship(2), 2, 3);
obj.b.placeShip(ship(5), 4, 4, true);
obj.b.placeShip(ship(2), 3, 3);

// console.log(obj.playerBoard.grid);
// console.log(obj.botBoard.grid);
