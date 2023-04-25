function player(board, opponent) {
  const attack = (x, y) => {
    return opponent.attack(x, y);
  };

  const placeShip = (ship, x, y, vert) => {
    return board.placeShip(ship, x, y, vert);
  };

  return { attack, placeShip };
}

function bot(board, opponent) {
  const filled = [];

  const isInFilled = (x, y) => {
    return filled.findIndex((pair) => pair[0] === x && pair[1] === y);
  };

  const isFull = () => filled.length > 143;

  const attack = () => {
    if (isFull()) {
      throw new Error(filled.length);
    }

    let flag = false;
    let x, y;

    while (!flag) {
      x = Math.floor(Math.random() * 12);
      y = Math.floor(Math.random() * 12);

      flag = isInFilled(x, y) === -1;
    }

    filled.push([x, y]);
    return opponent.attack(x, y);
  };

  const placeShip = (ship, x, y, vert) => {
    return board.placeShip(ship, x, y, vert);
  };

  return { attack, filled, placeShip };
}

export { player, bot };
