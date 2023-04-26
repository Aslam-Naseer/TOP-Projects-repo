/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domStuff.js":
/*!*************************!*\
  !*** ./src/domStuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


const player = document.querySelector("#player");
const bot = document.querySelector("#bot");

const setBoard = () => {
  for (let i = 0; i < 10; i++) {
    const playerRow = document.createElement("div");
    playerRow.classList.add("row");
    playerRow.dataset.row = i;

    const botRow = document.createElement("div");
    botRow.classList.add("row");
    botRow.dataset.row = i;

    for (let j = 0; j < 10; j++) {
      const playerCell = document.createElement("div");
      playerCell.classList.add("cell");
      playerCell.dataset.x = i;
      playerCell.dataset.y = j;

      const botCell = document.createElement("div");
      botCell.classList.add("attacking-cell");
      botCell.classList.add("cell");
      botCell.dataset.x = i;
      botCell.dataset.y = j;

      botCell.addEventListener("click", _game__WEBPACK_IMPORTED_MODULE_0__.play);

      playerRow.appendChild(playerCell);
      botRow.appendChild(botCell);
    }

    player.appendChild(playerRow);
    bot.appendChild(botRow);
  }
};

setBoard();

const clearBoards = () => {
  player.textContent = "";
  bot.textContent = "";
};

const attack = (isPlayer, x, y, isHit) => {
  const board = isPlayer ? bot : player;
  const cell = board
    .querySelector(`[data-row='${x}']`)
    .querySelector(`[data-y='${y}']`);

  if (isHit) {
    cell.classList.add("hit");
    return true;
  } else {
    cell.classList.add("miss");
    return false;
  }
};

const isAttacked = (x, y, isPlayer) => {
  const board = isPlayer ? player : bot;
  const cell = board
    .querySelector(`[data-row='${x}']`)
    .querySelector(`[data-y='${y}']`);

  return cell.classList.contains("miss") || cell.classList.contains("hit");
};

const placeShipOnMap = (arr, classname) => {
  const board = classname === "ship" ? player : bot;

  if (Array.isArray(arr) === false) return null;
  arr.forEach((cellData) => {
    const cell = board
      .querySelector(`[data-row='${cellData[0]}']`)
      .querySelector(`[data-y='${cellData[1]}']`);
    cell.classList.add(classname);
  });
};

const botShipCells = () => {
  let val = 0;
  const rows = bot.querySelectorAll(".row");

  rows.forEach((row) => {
    const cells = row.querySelectorAll(".cell");
    cells.forEach((cell) => {
      // console.log(cell.classList.contains("opp-ship"));
      if (cell.classList.contains("opp-ship")) val += 1;
    });
  });

  // console.log(val);

  return val;
};

const resetOpponent = () => {
  bot.textContent = "";
  for (let i = 0; i < 10; i++) {
    const botRow = document.createElement("div");
    botRow.classList.add("row");
    botRow.dataset.row = i;

    for (let j = 0; j < 10; j++) {
      const botCell = document.createElement("div");
      botCell.classList.add("attacking-cell");
      botCell.classList.add("cell");
      botCell.dataset.x = i;
      botCell.dataset.y = j;

      botCell.addEventListener("click", _game__WEBPACK_IMPORTED_MODULE_0__.play);

      botRow.appendChild(botCell);
    }
    bot.appendChild(botRow);
  }
};

document.querySelector(".new-game").addEventListener("click", _game__WEBPACK_IMPORTED_MODULE_0__.newGame);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setBoard,
  attack,
  isAttacked,
  placeShipOnMap,
  clearBoards,
  botShipCells,
  resetOpponent,
});


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "botFindCell": () => (/* binding */ botFindCell),
/* harmony export */   "newGame": () => (/* binding */ newGame),
/* harmony export */   "obj": () => (/* binding */ obj),
/* harmony export */   "placeShip": () => (/* binding */ placeShip),
/* harmony export */   "play": () => (/* binding */ play),
/* harmony export */   "randomPlace": () => (/* binding */ randomPlace)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");





const playerGrid = document.querySelector("#player");
const botGrid = document.querySelector("#bot");

const playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
const botBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();

const p = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(playerBoard, botBoard);
const b = (0,_player__WEBPACK_IMPORTED_MODULE_0__.bot)(botBoard, playerBoard);

const sumArray = (arr) => {
  return arr.reduce((prev, curr) => (prev += curr), 0);
};

const botFindCell = (x, y) => botBoard.grid[x][y];

const botAttack = () => {
  let attackObj = null;
  while (attackObj === null) attackObj = b.attack();
  return _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].attack(false, attackObj.x, attackObj.y, attackObj.res);
};

const playerAttack = (e) => {
  const x = e.target.dataset.x;
  const y = e.target.dataset.y;

  return _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].attack(true, x, y, p.attack(x, y));
};

const play = (e) => {
  let x;
  x = playerAttack(e);
  if (x && b.finished()) {
    console.log("P won");
    newGame();
  }
  x = botAttack();
  if (x && p.finished()) {
    console.log("B won");
    newGame();
  }
};

const placeShip = (ship, x, y, vert) => {
  const cellsPlaced = p.placeShip(ship, x, y, vert);
  if (Array.isArray(cellsPlaced) === false) throw new Error("Cant place ship");
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].placeShipOnMap(cellsPlaced, "ship");
};

const randomPlace = (ship) => {
  const cellsPlaced = b.placeShip(ship);
  if (Array.isArray(cellsPlaced) === false) throw new Error("Cant place ship");
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].placeShipOnMap(cellsPlaced, "opp-ship");
  console.log(cellsPlaced);
};

const playerAllPlace = () => {
  p.reset();
  placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(2), 2, 3, true);
  placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(5), 4, 4);
  placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(3), 7, 3);
};

const randomAllPlace = (arr) => {
  if (Array.isArray(arr) === false)
    throw new Error("No array showing ship length for Opponent");

  const sum = sumArray(arr);
  let res = 0;

  while (res !== sum) {
    b.reset();
    _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].resetOpponent();
    arr.forEach((x) => randomPlace((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(x)));
    res = _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].botShipCells();
    console.log(res);
  }
};

const newGame = () => {
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].clearBoards();
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].setBoard();
  playerAllPlace();
  randomAllPlace([2, 2, 3, 4, 5]);
};

const obj = { p, b, playerBoard, botBoard };




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function gameboard(MAX = 10) {
  let grid = [];
  let ships = [];

  const resetBoard = () => {
    grid = [];
    ships = [];

    for (let i = 0; i < MAX; i++) {
      const row = [];
      for (let j = 0; j < MAX; j++) {
        row.push(0);
      }
      grid.push(row);
    }
  };

  resetBoard();

  const isFreeSpace = (x, y, l, vert) => {
    if (!vert) {
      for (let i = y; i < y + l; i++) if (grid[x][i] !== 0) return false;
    } else {
      for (let i = x; i < x + l; i++) if (grid[x][i] !== 0) return false;
    }
    return true;
  };

  const placeShip = (ship, x, y, vert = false) => {
    const cells = [];

    if (!isFreeSpace(x, y, ship.length, vert)) return null;
    if (!vert) {
      for (let i = y; i < y + ship.length; i++) {
        grid[x][i] = ship;
        cells.push([x, i]);
      }
    } else {
      for (let i = x; i < x + ship.length; i++) {
        grid[i][y] = ship;
        cells.push([i, y]);
      }
    }
    ships.push(ship);
    return cells;
  };

  const attack = (x, y) => {
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

  return { grid, placeShip, attack, allSunk, resetBoard };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bot": () => (/* binding */ bot),
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
function player(board, opponent) {
  const attack = (x, y) => {
    return opponent.attack(x, y);
  };

  const placeShip = (ship, x, y, vert) => {
    return board.placeShip(ship, x, y, vert);
  };

  const finished = () => board.allSunk();

  const reset = () => board.resetBoard();

  return { attack, placeShip, finished, reset };
}

function bot(board, opponent) {
  let filled = [];

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

  const reset = () => {
    board.resetBoard();
    filled = [];
  };

  const finished = () => board.allSunk();

  return { attack, filled, placeShip, finished, reset };
}




/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function shipFactory(l) {
  let length = l;
  let hitCount = 0;
  const isSunk = () => hitCount >= length;
  const hit = () => (hitCount += 1);
  return { isSunk, hit, length };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipFactory);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");





(0,_game__WEBPACK_IMPORTED_MODULE_1__.newGame)();

// console.log(obj.playerBoard.grid);
// console.log(obj.botBoard.grid);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNnQztBQUNsQztBQUNEO0FBQ2pDO0FBQ0EsOENBQU87QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF5LCBuZXdHYW1lLCBib3RGaW5kQ2VsbCB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbmNvbnN0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyXCIpO1xyXG5jb25zdCBib3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvdFwiKTtcclxuXHJcbmNvbnN0IHNldEJvYXJkID0gKCkgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgY29uc3QgcGxheWVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBsYXllclJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgcGxheWVyUm93LmRhdGFzZXQucm93ID0gaTtcclxuXHJcbiAgICBjb25zdCBib3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm90Um93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICBib3RSb3cuZGF0YXNldC5yb3cgPSBpO1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICBjb25zdCBwbGF5ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcGxheWVyQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgcGxheWVyQ2VsbC5kYXRhc2V0LnggPSBpO1xyXG4gICAgICBwbGF5ZXJDZWxsLmRhdGFzZXQueSA9IGo7XHJcblxyXG4gICAgICBjb25zdCBib3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgYm90Q2VsbC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNraW5nLWNlbGxcIik7XHJcbiAgICAgIGJvdENlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgIGJvdENlbGwuZGF0YXNldC54ID0gaTtcclxuICAgICAgYm90Q2VsbC5kYXRhc2V0LnkgPSBqO1xyXG5cclxuICAgICAgYm90Q2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheSk7XHJcblxyXG4gICAgICBwbGF5ZXJSb3cuYXBwZW5kQ2hpbGQocGxheWVyQ2VsbCk7XHJcbiAgICAgIGJvdFJvdy5hcHBlbmRDaGlsZChib3RDZWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXIuYXBwZW5kQ2hpbGQocGxheWVyUm93KTtcclxuICAgIGJvdC5hcHBlbmRDaGlsZChib3RSb3cpO1xyXG4gIH1cclxufTtcclxuXHJcbnNldEJvYXJkKCk7XHJcblxyXG5jb25zdCBjbGVhckJvYXJkcyA9ICgpID0+IHtcclxuICBwbGF5ZXIudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGJvdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbn07XHJcblxyXG5jb25zdCBhdHRhY2sgPSAoaXNQbGF5ZXIsIHgsIHksIGlzSGl0KSA9PiB7XHJcbiAgY29uc3QgYm9hcmQgPSBpc1BsYXllciA/IGJvdCA6IHBsYXllcjtcclxuICBjb25zdCBjZWxsID0gYm9hcmRcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7eH0nXWApXHJcbiAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEteT0nJHt5fSddYCk7XHJcblxyXG4gIGlmIChpc0hpdCkge1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaXNBdHRhY2tlZCA9ICh4LCB5LCBpc1BsYXllcikgPT4ge1xyXG4gIGNvbnN0IGJvYXJkID0gaXNQbGF5ZXIgPyBwbGF5ZXIgOiBib3Q7XHJcbiAgY29uc3QgY2VsbCA9IGJvYXJkXHJcbiAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PScke3h9J11gKVxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXk9JyR7eX0nXWApO1xyXG5cclxuICByZXR1cm4gY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpIHx8IGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpO1xyXG59O1xyXG5cclxuY29uc3QgcGxhY2VTaGlwT25NYXAgPSAoYXJyLCBjbGFzc25hbWUpID0+IHtcclxuICBjb25zdCBib2FyZCA9IGNsYXNzbmFtZSA9PT0gXCJzaGlwXCIgPyBwbGF5ZXIgOiBib3Q7XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KGFycikgPT09IGZhbHNlKSByZXR1cm4gbnVsbDtcclxuICBhcnIuZm9yRWFjaCgoY2VsbERhdGEpID0+IHtcclxuICAgIGNvbnN0IGNlbGwgPSBib2FyZFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PScke2NlbGxEYXRhWzBdfSddYClcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXk9JyR7Y2VsbERhdGFbMV19J11gKTtcclxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChjbGFzc25hbWUpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgYm90U2hpcENlbGxzID0gKCkgPT4ge1xyXG4gIGxldCB2YWwgPSAwO1xyXG4gIGNvbnN0IHJvd3MgPSBib3QucXVlcnlTZWxlY3RvckFsbChcIi5yb3dcIik7XHJcblxyXG4gIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICBjb25zdCBjZWxscyA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIik7XHJcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BwLXNoaXBcIikpO1xyXG4gICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcHAtc2hpcFwiKSkgdmFsICs9IDE7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2codmFsKTtcclxuXHJcbiAgcmV0dXJuIHZhbDtcclxufTtcclxuXHJcbmNvbnN0IHJlc2V0T3Bwb25lbnQgPSAoKSA9PiB7XHJcbiAgYm90LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIGNvbnN0IGJvdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3RSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIGJvdFJvdy5kYXRhc2V0LnJvdyA9IGk7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgIGNvbnN0IGJvdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBib3RDZWxsLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tpbmctY2VsbFwiKTtcclxuICAgICAgYm90Q2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgYm90Q2VsbC5kYXRhc2V0LnggPSBpO1xyXG4gICAgICBib3RDZWxsLmRhdGFzZXQueSA9IGo7XHJcblxyXG4gICAgICBib3RDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5KTtcclxuXHJcbiAgICAgIGJvdFJvdy5hcHBlbmRDaGlsZChib3RDZWxsKTtcclxuICAgIH1cclxuICAgIGJvdC5hcHBlbmRDaGlsZChib3RSb3cpO1xyXG4gIH1cclxufTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWdhbWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld0dhbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNldEJvYXJkLFxyXG4gIGF0dGFjayxcclxuICBpc0F0dGFja2VkLFxyXG4gIHBsYWNlU2hpcE9uTWFwLFxyXG4gIGNsZWFyQm9hcmRzLFxyXG4gIGJvdFNoaXBDZWxscyxcclxuICByZXNldE9wcG9uZW50LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBwbGF5ZXIsIGJvdCB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCBkb21TdHVmZiBmcm9tIFwiLi9kb21TdHVmZlwiO1xyXG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xyXG5cclxuY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyXCIpO1xyXG5jb25zdCBib3RHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3RcIik7XHJcblxyXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGJvYXJkKCk7XHJcbmNvbnN0IGJvdEJvYXJkID0gYm9hcmQoKTtcclxuXHJcbmNvbnN0IHAgPSBwbGF5ZXIocGxheWVyQm9hcmQsIGJvdEJvYXJkKTtcclxuY29uc3QgYiA9IGJvdChib3RCb2FyZCwgcGxheWVyQm9hcmQpO1xyXG5cclxuY29uc3Qgc3VtQXJyYXkgPSAoYXJyKSA9PiB7XHJcbiAgcmV0dXJuIGFyci5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IChwcmV2ICs9IGN1cnIpLCAwKTtcclxufTtcclxuXHJcbmNvbnN0IGJvdEZpbmRDZWxsID0gKHgsIHkpID0+IGJvdEJvYXJkLmdyaWRbeF1beV07XHJcblxyXG5jb25zdCBib3RBdHRhY2sgPSAoKSA9PiB7XHJcbiAgbGV0IGF0dGFja09iaiA9IG51bGw7XHJcbiAgd2hpbGUgKGF0dGFja09iaiA9PT0gbnVsbCkgYXR0YWNrT2JqID0gYi5hdHRhY2soKTtcclxuICByZXR1cm4gZG9tU3R1ZmYuYXR0YWNrKGZhbHNlLCBhdHRhY2tPYmoueCwgYXR0YWNrT2JqLnksIGF0dGFja09iai5yZXMpO1xyXG59O1xyXG5cclxuY29uc3QgcGxheWVyQXR0YWNrID0gKGUpID0+IHtcclxuICBjb25zdCB4ID0gZS50YXJnZXQuZGF0YXNldC54O1xyXG4gIGNvbnN0IHkgPSBlLnRhcmdldC5kYXRhc2V0Lnk7XHJcblxyXG4gIHJldHVybiBkb21TdHVmZi5hdHRhY2sodHJ1ZSwgeCwgeSwgcC5hdHRhY2soeCwgeSkpO1xyXG59O1xyXG5cclxuY29uc3QgcGxheSA9IChlKSA9PiB7XHJcbiAgbGV0IHg7XHJcbiAgeCA9IHBsYXllckF0dGFjayhlKTtcclxuICBpZiAoeCAmJiBiLmZpbmlzaGVkKCkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiUCB3b25cIik7XHJcbiAgICBuZXdHYW1lKCk7XHJcbiAgfVxyXG4gIHggPSBib3RBdHRhY2soKTtcclxuICBpZiAoeCAmJiBwLmZpbmlzaGVkKCkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQiB3b25cIik7XHJcbiAgICBuZXdHYW1lKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIHZlcnQpID0+IHtcclxuICBjb25zdCBjZWxsc1BsYWNlZCA9IHAucGxhY2VTaGlwKHNoaXAsIHgsIHksIHZlcnQpO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGNlbGxzUGxhY2VkKSA9PT0gZmFsc2UpIHRocm93IG5ldyBFcnJvcihcIkNhbnQgcGxhY2Ugc2hpcFwiKTtcclxuICBkb21TdHVmZi5wbGFjZVNoaXBPbk1hcChjZWxsc1BsYWNlZCwgXCJzaGlwXCIpO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tUGxhY2UgPSAoc2hpcCkgPT4ge1xyXG4gIGNvbnN0IGNlbGxzUGxhY2VkID0gYi5wbGFjZVNoaXAoc2hpcCk7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2VsbHNQbGFjZWQpID09PSBmYWxzZSkgdGhyb3cgbmV3IEVycm9yKFwiQ2FudCBwbGFjZSBzaGlwXCIpO1xyXG4gIGRvbVN0dWZmLnBsYWNlU2hpcE9uTWFwKGNlbGxzUGxhY2VkLCBcIm9wcC1zaGlwXCIpO1xyXG4gIGNvbnNvbGUubG9nKGNlbGxzUGxhY2VkKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYXllckFsbFBsYWNlID0gKCkgPT4ge1xyXG4gIHAucmVzZXQoKTtcclxuICBwbGFjZVNoaXAoc2hpcCgyKSwgMiwgMywgdHJ1ZSk7XHJcbiAgcGxhY2VTaGlwKHNoaXAoNSksIDQsIDQpO1xyXG4gIHBsYWNlU2hpcChzaGlwKDMpLCA3LCAzKTtcclxufTtcclxuXHJcbmNvbnN0IHJhbmRvbUFsbFBsYWNlID0gKGFycikgPT4ge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGFycikgPT09IGZhbHNlKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYXJyYXkgc2hvd2luZyBzaGlwIGxlbmd0aCBmb3IgT3Bwb25lbnRcIik7XHJcblxyXG4gIGNvbnN0IHN1bSA9IHN1bUFycmF5KGFycik7XHJcbiAgbGV0IHJlcyA9IDA7XHJcblxyXG4gIHdoaWxlIChyZXMgIT09IHN1bSkge1xyXG4gICAgYi5yZXNldCgpO1xyXG4gICAgZG9tU3R1ZmYucmVzZXRPcHBvbmVudCgpO1xyXG4gICAgYXJyLmZvckVhY2goKHgpID0+IHJhbmRvbVBsYWNlKHNoaXAoeCkpKTtcclxuICAgIHJlcyA9IGRvbVN0dWZmLmJvdFNoaXBDZWxscygpO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBuZXdHYW1lID0gKCkgPT4ge1xyXG4gIGRvbVN0dWZmLmNsZWFyQm9hcmRzKCk7XHJcbiAgZG9tU3R1ZmYuc2V0Qm9hcmQoKTtcclxuICBwbGF5ZXJBbGxQbGFjZSgpO1xyXG4gIHJhbmRvbUFsbFBsYWNlKFsyLCAyLCAzLCA0LCA1XSk7XHJcbn07XHJcblxyXG5jb25zdCBvYmogPSB7IHAsIGIsIHBsYXllckJvYXJkLCBib3RCb2FyZCB9O1xyXG5cclxuZXhwb3J0IHsgcGxheSwgb2JqLCBwbGFjZVNoaXAsIHJhbmRvbVBsYWNlLCBuZXdHYW1lLCBib3RGaW5kQ2VsbCB9O1xyXG4iLCJmdW5jdGlvbiBnYW1lYm9hcmQoTUFYID0gMTApIHtcclxuICBsZXQgZ3JpZCA9IFtdO1xyXG4gIGxldCBzaGlwcyA9IFtdO1xyXG5cclxuICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgZ3JpZCA9IFtdO1xyXG4gICAgc2hpcHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1BWDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE1BWDsgaisrKSB7XHJcbiAgICAgICAgcm93LnB1c2goMCk7XHJcbiAgICAgIH1cclxuICAgICAgZ3JpZC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVzZXRCb2FyZCgpO1xyXG5cclxuICBjb25zdCBpc0ZyZWVTcGFjZSA9ICh4LCB5LCBsLCB2ZXJ0KSA9PiB7XHJcbiAgICBpZiAoIXZlcnQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbDsgaSsrKSBpZiAoZ3JpZFt4XVtpXSAhPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbDsgaSsrKSBpZiAoZ3JpZFt4XVtpXSAhPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIHZlcnQgPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgY2VsbHMgPSBbXTtcclxuXHJcbiAgICBpZiAoIWlzRnJlZVNwYWNlKHgsIHksIHNoaXAubGVuZ3RoLCB2ZXJ0KSkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoIXZlcnQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdyaWRbeF1baV0gPSBzaGlwO1xyXG4gICAgICAgIGNlbGxzLnB1c2goW3gsIGldKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdyaWRbaV1beV0gPSBzaGlwO1xyXG4gICAgICAgIGNlbGxzLnB1c2goW2ksIHldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hpcHMucHVzaChzaGlwKTtcclxuICAgIHJldHVybiBjZWxscztcclxuICB9O1xyXG5cclxuICBjb25zdCBhdHRhY2sgPSAoeCwgeSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBncmlkW3hdW3ldICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIGdyaWRbeF1beV0uaGl0KCk7XHJcbiAgICAgIGdyaWRbeF1beV0gPSAxO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyaWRbeF1beV0gPSAxO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcclxuICAgIHJldHVybiBzaGlwcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgY3Vyci5pc1N1bmsoKSwgdHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZ3JpZCwgcGxhY2VTaGlwLCBhdHRhY2ssIGFsbFN1bmssIHJlc2V0Qm9hcmQgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkO1xyXG4iLCJmdW5jdGlvbiBwbGF5ZXIoYm9hcmQsIG9wcG9uZW50KSB7XHJcbiAgY29uc3QgYXR0YWNrID0gKHgsIHkpID0+IHtcclxuICAgIHJldHVybiBvcHBvbmVudC5hdHRhY2soeCwgeSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIHZlcnQpID0+IHtcclxuICAgIHJldHVybiBib2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgdmVydCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmluaXNoZWQgPSAoKSA9PiBib2FyZC5hbGxTdW5rKCk7XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4gYm9hcmQucmVzZXRCb2FyZCgpO1xyXG5cclxuICByZXR1cm4geyBhdHRhY2ssIHBsYWNlU2hpcCwgZmluaXNoZWQsIHJlc2V0IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvdChib2FyZCwgb3Bwb25lbnQpIHtcclxuICBsZXQgZmlsbGVkID0gW107XHJcblxyXG4gIGNvbnN0IGlzSW5GaWxsZWQgPSAoeCwgeSkgPT4ge1xyXG4gICAgcmV0dXJuIGZpbGxlZC5maW5kSW5kZXgoKHBhaXIpID0+IHBhaXJbMF0gPT09IHggJiYgcGFpclsxXSA9PT0geSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNGdWxsID0gKCkgPT4gZmlsbGVkLmxlbmd0aCA+IDk5O1xyXG5cclxuICBjb25zdCBhdHRhY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNGdWxsKCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgIGxldCB4LCB5O1xyXG5cclxuICAgIHdoaWxlICghZmxhZykge1xyXG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG5cclxuICAgICAgZmxhZyA9IGlzSW5GaWxsZWQoeCwgeSkgPT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxlZC5wdXNoKFt4LCB5XSk7XHJcbiAgICBjb25zdCByZXMgPSBvcHBvbmVudC5hdHRhY2soeCwgeSk7XHJcbiAgICByZXR1cm4geyB4LCB5LCByZXMgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCByYW5kb21Cb29sID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICByZXR1cm4gdmFsID09PSAwID8gZmFsc2UgOiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwKSA9PiB7XHJcbiAgICBsZXQgY2VsbFBsYWNlZCA9IG51bGw7XHJcbiAgICB3aGlsZSAoY2VsbFBsYWNlZCA9PT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICBjb25zdCB2ZXJ0ID0gcmFuZG9tQm9vbCgpO1xyXG5cclxuICAgICAgY2VsbFBsYWNlZCA9IGJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5LCB2ZXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2VsbFBsYWNlZDtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgIGJvYXJkLnJlc2V0Qm9hcmQoKTtcclxuICAgIGZpbGxlZCA9IFtdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbmlzaGVkID0gKCkgPT4gYm9hcmQuYWxsU3VuaygpO1xyXG5cclxuICByZXR1cm4geyBhdHRhY2ssIGZpbGxlZCwgcGxhY2VTaGlwLCBmaW5pc2hlZCwgcmVzZXQgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgcGxheWVyLCBib3QgfTtcclxuIiwiZnVuY3Rpb24gc2hpcEZhY3RvcnkobCkge1xyXG4gIGxldCBsZW5ndGggPSBsO1xyXG4gIGxldCBoaXRDb3VudCA9IDA7XHJcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0Q291bnQgPj0gbGVuZ3RoO1xyXG4gIGNvbnN0IGhpdCA9ICgpID0+IChoaXRDb3VudCArPSAxKTtcclxuICByZXR1cm4geyBpc1N1bmssIGhpdCwgbGVuZ3RoIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNoaXBGYWN0b3J5O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkb21NZXRob2RzIGZyb20gXCIuL2RvbVN0dWZmXCI7XHJcbmltcG9ydCB7IHBsYXksIG9iaiwgcGxhY2VTaGlwLCByYW5kb21QbGFjZSwgbmV3R2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XHJcblxyXG5uZXdHYW1lKCk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhvYmoucGxheWVyQm9hcmQuZ3JpZCk7XHJcbi8vIGNvbnNvbGUubG9nKG9iai5ib3RCb2FyZC5ncmlkKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9