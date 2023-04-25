function gameboard(MAX = 12) {
  const grid = [];
  const ships = [];

  (() => {
    for (let i = 0; i < MAX; i++) {
      const row = [];
      for (let j = 0; j < MAX; j++) {
        row.push(0);
      }
      grid.push(row);
    }
  })();

  const isFreeSpace = (x, y, l, vert) => {
    if (!vert) {
      for (let i = y; i < y + l; i++) if (grid[x][i] !== 0) return false;
    } else {
      for (let i = x; i < x + l; i++) if (grid[x][i] !== 0) return false;
    }
    return true;
  };

  const placeShip = (ship, x, y, vert = false) => {
    if (!isFreeSpace(x, y, ship.length, vert)) throw new Error("No space");
    if (!vert) {
      for (let i = y; i < y + ship.length; i++) grid[x][i] = ship;
    } else {
      for (let i = x; i < x + ship.length; i++) grid[i][y] = ship;
    }
    ships.push(ship);
  };

  const attack = (x = 0, y = 0) => {
    if (typeof grid[x][y] !== "number") {
      grid[x][y].hit();
      grid[x][y] = 1;
      return true;
    } else {
      grid[x][y] = 1;
      return false;
    }
  };

  const allSunk = () => {
    return ships.reduce((prev, curr) => prev && curr.isSunk(), true);
  };

  return { grid, placeShip, attack, allSunk };
}

// const board = gameboard();
// board.placeShip(3, 6, 6);
// console.log(board.filled.find(5));
// console.log(board.filled);

export default gameboard;
