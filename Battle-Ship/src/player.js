function player(board, opponent) {
  const attack = (x, y) => {
    return opponent.attack(x, y);
  };

  const placeShip = (ship, x, y, vert) => {
    return board.placeShip(ship, x, y, vert);
  };

  const finished = () => board.allSunk();

  return { attack, placeShip, finished };
}

function bot(board, opponent) {
  const filled = [];

  const isInFilled = (x, y) => {
    return filled.findIndex((pair) => pair[0] === x && pair[1] === y);
  };

  const isFull = () => filled.length > 99;

  const attack = () => {
    if (isFull()) {
      return null;
    }

    let flag = false;
    let x, y;

    while (!flag) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);

      flag = isInFilled(x, y) === -1;
    }

    filled.push([x, y]);
    const res = opponent.attack(x, y);
    return { x, y, res };
  };

  const randomBool = () => {
    const val = Math.floor(Math.random() * 2);
    return val === 0 ? false : true;
  };

  const placeShip = (ship) => {
    let cellPlaced = null;
    while (cellPlaced === null) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const vert = randomBool();

      cellPlaced = board.placeShip(ship, x, y, vert);
    }

    return cellPlaced;
  };

  const finished = () => board.allSunk();

  return { attack, filled, placeShip, finished };
}

export { player, bot };
