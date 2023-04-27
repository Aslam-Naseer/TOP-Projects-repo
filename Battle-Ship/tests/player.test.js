import { player, bot } from "../src/player";
import board from "../src/gameboard";
import ship from "../src/shipFactory";

const b1 = board();
const b2 = board();
b1.placeShip(ship(2), 2, 4, true);
b2.placeShip(ship(3), 5, 0);
const p1 = player(b1, b2);
const p2 = bot(b2, b1);

test("player can play", () => {
  expect(p1.attack(5, 2)).toBe(true);
  expect(p1.attack(4, 3)).toBe(false);
});

test("Bot attacks randomly", () => {
  for (let i = 0; i < 101; i++) p2.attack();
  expect(p2.attack()).toBe(null);
  expect(p2.filled.length).toBe(100);
});
