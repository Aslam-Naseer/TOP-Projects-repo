import domMethods from "./domStuff";
import { play, obj, placeShip, randomPlace } from "./pipe";
import { player } from "./player";
import ship from "./shipFactory";

placeShip(ship(2), 2, 3, true);
placeShip(ship(5), 4, 4);
placeShip(ship(3), 7, 3);

randomPlace(ship(2));
randomPlace(ship(5));
randomPlace(ship(2));

// console.log(obj.playerBoard.grid);
// console.log(obj.botBoard.grid);
