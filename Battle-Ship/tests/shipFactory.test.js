import ship from "../src/shipFactory";

test("creates a ship", () => {
  const ship1 = ship(1);
  expect(ship1.isSunk()).toBe(false);
});

test("hit ship without destroying", () => {
  const ship1 = ship(3);
  ship1.hit();
  ship1.hit();
  expect(ship1.isSunk()).toBe(false);
});

test("hit ship and destroying", () => {
  const ship1 = ship(3);
  ship1.hit();
  ship1.hit();
  ship1.hit();
  expect(ship1.isSunk()).toBe(true);
});
