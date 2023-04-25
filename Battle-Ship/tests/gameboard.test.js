import gameboard from "../src/gameboard";
import ship from "../src/shipFactory";

test("Create a gameboard", () => {
  expect(gameboard(3).grid).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

test("Place ships", () => {
  const board = gameboard();
  board.placeShip(ship(1), 6, 6);
  expect(board.grid[6][6]).not.toBe(0);
});

test("cannot place multiple ships above one", () => {
  const board = gameboard();
  board.placeShip(ship(2), 6, 6);
  expect(() => board.placeShip(ship(1), 6, 6)).toThrow();
  expect(() => board.placeShip(ship(2), 6, 7)).toThrow();
  expect(() => board.placeShip(ship(5), 6, 4)).toThrow();
});

test("place multiple block ships", () => {
  const board = gameboard();
  board.placeShip(ship(3), 6, 6);
  expect(board.grid[6][6]).not.toBe(0);
  expect(board.grid[6][7]).not.toBe(0);
  expect(board.grid[6][8]).not.toBe(0);
  expect(board.grid[6][2]).toBe(0);
  expect(board.grid[6][1]).toBe(0);
});

test("Cannot place outside boundaries", () => {
  const board = gameboard();
  expect(() => board.placeShip(ship(7), 10, 6)).toThrow();
});

test("attack ship", () => {
  const board = gameboard();
  board.placeShip(ship(2), 6, 6);
  expect(board.attack(6, 7)).toBe(true);
  expect(board.attack(7, 7)).toBe(false);
});

test("attach twice on same tile", () => {
  const board = gameboard();
  board.placeShip(ship(2), 6, 6);
  expect(board.attack(6, 7)).toBe(true);
  expect(board.attack(6, 7)).toBe(false);
});

test("all sunk", () => {
  const board = gameboard();
  board.placeShip(ship(1), 6, 6);
  board.placeShip(ship(1), 5, 5);
  expect(board.allSunk()).toBe(false);
  board.attack(5, 5);
  expect(board.allSunk()).toBe(false);
  board.attack(6, 6);
  expect(board.allSunk()).toBe(true);
});
