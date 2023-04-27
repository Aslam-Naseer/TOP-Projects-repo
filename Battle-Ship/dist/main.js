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

const clearPopus = () => {
  const popups = document.querySelector(".popups");
  popups.classList.remove("active-popup");
};

const clearBoards = () => {
  clearPopus();
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

const shipCells = (userText) => {
  let val = 0;
  const board = userText === "player" ? player : bot;
  const rows = board.querySelectorAll(".row");

  rows.forEach((row) => {
    const cells = row.querySelectorAll(".cell");
    cells.forEach((cell) => {
      // console.log(cell.classList.contains("opp-ship"));
      if (
        cell.classList.contains("opp-ship") ||
        cell.classList.contains("ship")
      )
        val += 1;
    });
  });

  // console.log(val);

  return val;
};

const resetBoard = (toChange) => {
  const board = toChange === "player" ? player : bot;

  console.log(toChange);
  console.log(board);

  board.textContent = "";
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.dataset.row = i;

    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = i;
      cell.dataset.y = j;
      if (board === bot) {
        cell.classList.add("attacking-cell");
        cell.addEventListener("click", _game__WEBPACK_IMPORTED_MODULE_0__.play);
      }

      row.appendChild(cell);
    }
    board.appendChild(row);
  }
};

const showWinner = (text = "") => {
  const popups = document.querySelector(".popups");
  const winnerTitle = popups.querySelector("#winner");

  winnerTitle.textContent = text;
  popups.classList.add("active-popup");
};

document
  .querySelectorAll(".new-game")
  .forEach((node) => node.addEventListener("click", _game__WEBPACK_IMPORTED_MODULE_0__.newGame));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setBoard,
  attack,
  isAttacked,
  placeShipOnMap,
  clearBoards,
  shipCells,
  resetBoard,
  showWinner,
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
    _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].showWinner("Player won");
  }
  x = botAttack();
  if (x && p.finished()) {
    _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].showWinner("Computer won");
  }
};

const placeShip = (ship, x, y, vert) => {
  const cellsPlaced = p.placeShip(ship, x, y, vert);
  if (Array.isArray(cellsPlaced) === false) throw new Error("Cant place ship");
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].placeShipOnMap(cellsPlaced, "ship");
};

const randomPlace = (user, ship) => {
  const cellsPlaced = user.placeShipRandom(ship);
  const userText = user === p ? "ship" : "opp-ship";

  if (Array.isArray(cellsPlaced) === false) throw new Error("Cant place ship");
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].placeShipOnMap(cellsPlaced, userText);
  console.log(cellsPlaced);
};

const playerAllPlace = () => {
  p.reset();
  placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(2), 2, 3, true);
  placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(5), 4, 4);
  placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(3), 7, 3);
};

const randomAllPlace = (user, arr) => {
  if (Array.isArray(arr) === false) throw new Error("No array");

  const sum = sumArray(arr);
  let res = 0;
  const userText = user === p ? "player" : "bot";

  while (res !== sum) {
    user.reset();
    _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].resetBoard(userText);
    arr.forEach((x) => randomPlace(user, (0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(x)));
    res = _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].shipCells(userText);
    console.log(res);
  }
};

const newGame = () => {
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].clearBoards();
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].setBoard();
  randomAllPlace(p, [2, 3, 3, 4, 5]);
  randomAllPlace(b, [2, 3, 3, 4, 5]);
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

  const randomBool = () => {
    const val = Math.floor(Math.random() * 2);
    return val === 0 ? false : true;
  };

  const placeRandom = (ship) => {
    let cells = null;
    while (cells === null) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const vert = randomBool();

      cells = placeShip(ship, x, y, vert);
    }

    return cells;
  };

  return { grid, placeShip, attack, allSunk, resetBoard, placeRandom };
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

  const placeShipRandom = (ship) => board.placeRandom(ship);

  const finished = () => board.allSunk();

  const reset = () => board.resetBoard();

  return { attack, placeShip, finished, reset, placeShipRandom };
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

  const placeShipRandom = (ship) => board.placeRandom(ship);

  const reset = () => {
    board.resetBoard();
    filled = [];
  };

  const finished = () => board.allSunk();

  return { attack, filled, placeShipRandom, finished, reset };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUNSM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNnQztBQUNsQztBQUNEO0FBQ2pDO0FBQ0EsOENBQU87QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF5LCBuZXdHYW1lLCBib3RGaW5kQ2VsbCB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbmNvbnN0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyXCIpO1xyXG5jb25zdCBib3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvdFwiKTtcclxuXHJcbmNvbnN0IHNldEJvYXJkID0gKCkgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgY29uc3QgcGxheWVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBsYXllclJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgcGxheWVyUm93LmRhdGFzZXQucm93ID0gaTtcclxuXHJcbiAgICBjb25zdCBib3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm90Um93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICBib3RSb3cuZGF0YXNldC5yb3cgPSBpO1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICBjb25zdCBwbGF5ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcGxheWVyQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgcGxheWVyQ2VsbC5kYXRhc2V0LnggPSBpO1xyXG4gICAgICBwbGF5ZXJDZWxsLmRhdGFzZXQueSA9IGo7XHJcblxyXG4gICAgICBjb25zdCBib3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgYm90Q2VsbC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNraW5nLWNlbGxcIik7XHJcbiAgICAgIGJvdENlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgIGJvdENlbGwuZGF0YXNldC54ID0gaTtcclxuICAgICAgYm90Q2VsbC5kYXRhc2V0LnkgPSBqO1xyXG5cclxuICAgICAgYm90Q2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheSk7XHJcblxyXG4gICAgICBwbGF5ZXJSb3cuYXBwZW5kQ2hpbGQocGxheWVyQ2VsbCk7XHJcbiAgICAgIGJvdFJvdy5hcHBlbmRDaGlsZChib3RDZWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXIuYXBwZW5kQ2hpbGQocGxheWVyUm93KTtcclxuICAgIGJvdC5hcHBlbmRDaGlsZChib3RSb3cpO1xyXG4gIH1cclxufTtcclxuXHJcbnNldEJvYXJkKCk7XHJcblxyXG5jb25zdCBjbGVhclBvcHVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBzXCIpO1xyXG4gIHBvcHVwcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXBvcHVwXCIpO1xyXG59O1xyXG5cclxuY29uc3QgY2xlYXJCb2FyZHMgPSAoKSA9PiB7XHJcbiAgY2xlYXJQb3B1cygpO1xyXG4gIHBsYXllci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgYm90LnRleHRDb250ZW50ID0gXCJcIjtcclxufTtcclxuXHJcbmNvbnN0IGF0dGFjayA9IChpc1BsYXllciwgeCwgeSwgaXNIaXQpID0+IHtcclxuICBjb25zdCBib2FyZCA9IGlzUGxheWVyID8gYm90IDogcGxheWVyO1xyXG4gIGNvbnN0IGNlbGwgPSBib2FyZFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHt4fSddYClcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS15PScke3l9J11gKTtcclxuXHJcbiAgaWYgKGlzSGl0KSB7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBpc0F0dGFja2VkID0gKHgsIHksIGlzUGxheWVyKSA9PiB7XHJcbiAgY29uc3QgYm9hcmQgPSBpc1BsYXllciA/IHBsYXllciA6IGJvdDtcclxuICBjb25zdCBjZWxsID0gYm9hcmRcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7eH0nXWApXHJcbiAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEteT0nJHt5fSddYCk7XHJcblxyXG4gIHJldHVybiBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikgfHwgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIik7XHJcbn07XHJcblxyXG5jb25zdCBwbGFjZVNoaXBPbk1hcCA9IChhcnIsIGNsYXNzbmFtZSkgPT4ge1xyXG4gIGNvbnN0IGJvYXJkID0gY2xhc3NuYW1lID09PSBcInNoaXBcIiA/IHBsYXllciA6IGJvdDtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xyXG4gIGFyci5mb3JFYWNoKChjZWxsRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgY2VsbCA9IGJvYXJkXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7Y2VsbERhdGFbMF19J11gKVxyXG4gICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEteT0nJHtjZWxsRGF0YVsxXX0nXWApO1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzaGlwQ2VsbHMgPSAodXNlclRleHQpID0+IHtcclxuICBsZXQgdmFsID0gMDtcclxuICBjb25zdCBib2FyZCA9IHVzZXJUZXh0ID09PSBcInBsYXllclwiID8gcGxheWVyIDogYm90O1xyXG4gIGNvbnN0IHJvd3MgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJvd1wiKTtcclxuXHJcbiAgcm93cy5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgIGNvbnN0IGNlbGxzID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKTtcclxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcHAtc2hpcFwiKSk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcIm9wcC1zaGlwXCIpIHx8XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpXHJcbiAgICAgIClcclxuICAgICAgICB2YWwgKz0gMTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyh2YWwpO1xyXG5cclxuICByZXR1cm4gdmFsO1xyXG59O1xyXG5cclxuY29uc3QgcmVzZXRCb2FyZCA9ICh0b0NoYW5nZSkgPT4ge1xyXG4gIGNvbnN0IGJvYXJkID0gdG9DaGFuZ2UgPT09IFwicGxheWVyXCIgPyBwbGF5ZXIgOiBib3Q7XHJcblxyXG4gIGNvbnNvbGUubG9nKHRvQ2hhbmdlKTtcclxuICBjb25zb2xlLmxvZyhib2FyZCk7XHJcblxyXG4gIGJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIHJvdy5kYXRhc2V0LnJvdyA9IGk7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICBjZWxsLmRhdGFzZXQueCA9IGk7XHJcbiAgICAgIGNlbGwuZGF0YXNldC55ID0gajtcclxuICAgICAgaWYgKGJvYXJkID09PSBib3QpIHtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tpbmctY2VsbFwiKTtcclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgfVxyXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzaG93V2lubmVyID0gKHRleHQgPSBcIlwiKSA9PiB7XHJcbiAgY29uc3QgcG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cHNcIik7XHJcbiAgY29uc3Qgd2lubmVyVGl0bGUgPSBwb3B1cHMucXVlcnlTZWxlY3RvcihcIiN3aW5uZXJcIik7XHJcblxyXG4gIHdpbm5lclRpdGxlLnRleHRDb250ZW50ID0gdGV4dDtcclxuICBwb3B1cHMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wb3B1cFwiKTtcclxufTtcclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmV3LWdhbWVcIilcclxuICAuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3R2FtZSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNldEJvYXJkLFxyXG4gIGF0dGFjayxcclxuICBpc0F0dGFja2VkLFxyXG4gIHBsYWNlU2hpcE9uTWFwLFxyXG4gIGNsZWFyQm9hcmRzLFxyXG4gIHNoaXBDZWxscyxcclxuICByZXNldEJvYXJkLFxyXG4gIHNob3dXaW5uZXIsXHJcbn07XHJcbiIsImltcG9ydCB7IHBsYXllciwgYm90IH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCBib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuaW1wb3J0IGRvbVN0dWZmIGZyb20gXCIuL2RvbVN0dWZmXCI7XHJcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XHJcblxyXG5jb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJcIik7XHJcbmNvbnN0IGJvdEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvdFwiKTtcclxuXHJcbmNvbnN0IHBsYXllckJvYXJkID0gYm9hcmQoKTtcclxuY29uc3QgYm90Qm9hcmQgPSBib2FyZCgpO1xyXG5cclxuY29uc3QgcCA9IHBsYXllcihwbGF5ZXJCb2FyZCwgYm90Qm9hcmQpO1xyXG5jb25zdCBiID0gYm90KGJvdEJvYXJkLCBwbGF5ZXJCb2FyZCk7XHJcblxyXG5jb25zdCBzdW1BcnJheSA9IChhcnIpID0+IHtcclxuICByZXR1cm4gYXJyLnJlZHVjZSgocHJldiwgY3VycikgPT4gKHByZXYgKz0gY3VyciksIDApO1xyXG59O1xyXG5cclxuY29uc3QgYm90RmluZENlbGwgPSAoeCwgeSkgPT4gYm90Qm9hcmQuZ3JpZFt4XVt5XTtcclxuXHJcbmNvbnN0IGJvdEF0dGFjayA9ICgpID0+IHtcclxuICBsZXQgYXR0YWNrT2JqID0gbnVsbDtcclxuICB3aGlsZSAoYXR0YWNrT2JqID09PSBudWxsKSBhdHRhY2tPYmogPSBiLmF0dGFjaygpO1xyXG4gIHJldHVybiBkb21TdHVmZi5hdHRhY2soZmFsc2UsIGF0dGFja09iai54LCBhdHRhY2tPYmoueSwgYXR0YWNrT2JqLnJlcyk7XHJcbn07XHJcblxyXG5jb25zdCBwbGF5ZXJBdHRhY2sgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHggPSBlLnRhcmdldC5kYXRhc2V0Lng7XHJcbiAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQueTtcclxuXHJcbiAgcmV0dXJuIGRvbVN0dWZmLmF0dGFjayh0cnVlLCB4LCB5LCBwLmF0dGFjayh4LCB5KSk7XHJcbn07XHJcblxyXG5jb25zdCBwbGF5ID0gKGUpID0+IHtcclxuICBsZXQgeDtcclxuICB4ID0gcGxheWVyQXR0YWNrKGUpO1xyXG4gIGlmICh4ICYmIGIuZmluaXNoZWQoKSkge1xyXG4gICAgZG9tU3R1ZmYuc2hvd1dpbm5lcihcIlBsYXllciB3b25cIik7XHJcbiAgfVxyXG4gIHggPSBib3RBdHRhY2soKTtcclxuICBpZiAoeCAmJiBwLmZpbmlzaGVkKCkpIHtcclxuICAgIGRvbVN0dWZmLnNob3dXaW5uZXIoXCJDb21wdXRlciB3b25cIik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIHZlcnQpID0+IHtcclxuICBjb25zdCBjZWxsc1BsYWNlZCA9IHAucGxhY2VTaGlwKHNoaXAsIHgsIHksIHZlcnQpO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGNlbGxzUGxhY2VkKSA9PT0gZmFsc2UpIHRocm93IG5ldyBFcnJvcihcIkNhbnQgcGxhY2Ugc2hpcFwiKTtcclxuICBkb21TdHVmZi5wbGFjZVNoaXBPbk1hcChjZWxsc1BsYWNlZCwgXCJzaGlwXCIpO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tUGxhY2UgPSAodXNlciwgc2hpcCkgPT4ge1xyXG4gIGNvbnN0IGNlbGxzUGxhY2VkID0gdXNlci5wbGFjZVNoaXBSYW5kb20oc2hpcCk7XHJcbiAgY29uc3QgdXNlclRleHQgPSB1c2VyID09PSBwID8gXCJzaGlwXCIgOiBcIm9wcC1zaGlwXCI7XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KGNlbGxzUGxhY2VkKSA9PT0gZmFsc2UpIHRocm93IG5ldyBFcnJvcihcIkNhbnQgcGxhY2Ugc2hpcFwiKTtcclxuICBkb21TdHVmZi5wbGFjZVNoaXBPbk1hcChjZWxsc1BsYWNlZCwgdXNlclRleHQpO1xyXG4gIGNvbnNvbGUubG9nKGNlbGxzUGxhY2VkKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYXllckFsbFBsYWNlID0gKCkgPT4ge1xyXG4gIHAucmVzZXQoKTtcclxuICBwbGFjZVNoaXAoc2hpcCgyKSwgMiwgMywgdHJ1ZSk7XHJcbiAgcGxhY2VTaGlwKHNoaXAoNSksIDQsIDQpO1xyXG4gIHBsYWNlU2hpcChzaGlwKDMpLCA3LCAzKTtcclxufTtcclxuXHJcbmNvbnN0IHJhbmRvbUFsbFBsYWNlID0gKHVzZXIsIGFycikgPT4ge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGFycikgPT09IGZhbHNlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBhcnJheVwiKTtcclxuXHJcbiAgY29uc3Qgc3VtID0gc3VtQXJyYXkoYXJyKTtcclxuICBsZXQgcmVzID0gMDtcclxuICBjb25zdCB1c2VyVGV4dCA9IHVzZXIgPT09IHAgPyBcInBsYXllclwiIDogXCJib3RcIjtcclxuXHJcbiAgd2hpbGUgKHJlcyAhPT0gc3VtKSB7XHJcbiAgICB1c2VyLnJlc2V0KCk7XHJcbiAgICBkb21TdHVmZi5yZXNldEJvYXJkKHVzZXJUZXh0KTtcclxuICAgIGFyci5mb3JFYWNoKCh4KSA9PiByYW5kb21QbGFjZSh1c2VyLCBzaGlwKHgpKSk7XHJcbiAgICByZXMgPSBkb21TdHVmZi5zaGlwQ2VsbHModXNlclRleHQpO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBuZXdHYW1lID0gKCkgPT4ge1xyXG4gIGRvbVN0dWZmLmNsZWFyQm9hcmRzKCk7XHJcbiAgZG9tU3R1ZmYuc2V0Qm9hcmQoKTtcclxuICByYW5kb21BbGxQbGFjZShwLCBbMiwgMywgMywgNCwgNV0pO1xyXG4gIHJhbmRvbUFsbFBsYWNlKGIsIFsyLCAzLCAzLCA0LCA1XSk7XHJcbn07XHJcblxyXG5jb25zdCBvYmogPSB7IHAsIGIsIHBsYXllckJvYXJkLCBib3RCb2FyZCB9O1xyXG5cclxuZXhwb3J0IHsgcGxheSwgb2JqLCBwbGFjZVNoaXAsIHJhbmRvbVBsYWNlLCBuZXdHYW1lLCBib3RGaW5kQ2VsbCB9O1xyXG4iLCJmdW5jdGlvbiBnYW1lYm9hcmQoTUFYID0gMTApIHtcclxuICBsZXQgZ3JpZCA9IFtdO1xyXG4gIGxldCBzaGlwcyA9IFtdO1xyXG5cclxuICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgZ3JpZCA9IFtdO1xyXG4gICAgc2hpcHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1BWDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE1BWDsgaisrKSB7XHJcbiAgICAgICAgcm93LnB1c2goMCk7XHJcbiAgICAgIH1cclxuICAgICAgZ3JpZC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVzZXRCb2FyZCgpO1xyXG5cclxuICBjb25zdCBpc0ZyZWVTcGFjZSA9ICh4LCB5LCBsLCB2ZXJ0KSA9PiB7XHJcbiAgICBpZiAoIXZlcnQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbDsgaSsrKSBpZiAoZ3JpZFt4XVtpXSAhPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbDsgaSsrKSBpZiAoZ3JpZFt4XVtpXSAhPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIHZlcnQgPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgY2VsbHMgPSBbXTtcclxuXHJcbiAgICBpZiAoIWlzRnJlZVNwYWNlKHgsIHksIHNoaXAubGVuZ3RoLCB2ZXJ0KSkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoIXZlcnQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdyaWRbeF1baV0gPSBzaGlwO1xyXG4gICAgICAgIGNlbGxzLnB1c2goW3gsIGldKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdyaWRbaV1beV0gPSBzaGlwO1xyXG4gICAgICAgIGNlbGxzLnB1c2goW2ksIHldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hpcHMucHVzaChzaGlwKTtcclxuICAgIHJldHVybiBjZWxscztcclxuICB9O1xyXG5cclxuICBjb25zdCBhdHRhY2sgPSAoeCwgeSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBncmlkW3hdW3ldICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIGdyaWRbeF1beV0uaGl0KCk7XHJcbiAgICAgIGdyaWRbeF1beV0gPSAxO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyaWRbeF1beV0gPSAxO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcclxuICAgIHJldHVybiBzaGlwcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgY3Vyci5pc1N1bmsoKSwgdHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmFuZG9tQm9vbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgcmV0dXJuIHZhbCA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwbGFjZVJhbmRvbSA9IChzaGlwKSA9PiB7XHJcbiAgICBsZXQgY2VsbHMgPSBudWxsO1xyXG4gICAgd2hpbGUgKGNlbGxzID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIGNvbnN0IHZlcnQgPSByYW5kb21Cb29sKCk7XHJcblxyXG4gICAgICBjZWxscyA9IHBsYWNlU2hpcChzaGlwLCB4LCB5LCB2ZXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2VsbHM7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZ3JpZCwgcGxhY2VTaGlwLCBhdHRhY2ssIGFsbFN1bmssIHJlc2V0Qm9hcmQsIHBsYWNlUmFuZG9tIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDtcclxuIiwiZnVuY3Rpb24gcGxheWVyKGJvYXJkLCBvcHBvbmVudCkge1xyXG4gIGNvbnN0IGF0dGFjayA9ICh4LCB5KSA9PiB7XHJcbiAgICByZXR1cm4gb3Bwb25lbnQuYXR0YWNrKHgsIHkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCB2ZXJ0KSA9PiB7XHJcbiAgICByZXR1cm4gYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHksIHZlcnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcFJhbmRvbSA9IChzaGlwKSA9PiBib2FyZC5wbGFjZVJhbmRvbShzaGlwKTtcclxuXHJcbiAgY29uc3QgZmluaXNoZWQgPSAoKSA9PiBib2FyZC5hbGxTdW5rKCk7XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4gYm9hcmQucmVzZXRCb2FyZCgpO1xyXG5cclxuICByZXR1cm4geyBhdHRhY2ssIHBsYWNlU2hpcCwgZmluaXNoZWQsIHJlc2V0LCBwbGFjZVNoaXBSYW5kb20gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYm90KGJvYXJkLCBvcHBvbmVudCkge1xyXG4gIGxldCBmaWxsZWQgPSBbXTtcclxuXHJcbiAgY29uc3QgaXNJbkZpbGxlZCA9ICh4LCB5KSA9PiB7XHJcbiAgICByZXR1cm4gZmlsbGVkLmZpbmRJbmRleCgocGFpcikgPT4gcGFpclswXSA9PT0geCAmJiBwYWlyWzFdID09PSB5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc0Z1bGwgPSAoKSA9PiBmaWxsZWQubGVuZ3RoID4gOTk7XHJcblxyXG4gIGNvbnN0IGF0dGFjayA9ICgpID0+IHtcclxuICAgIGlmIChpc0Z1bGwoKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgbGV0IHgsIHk7XHJcblxyXG4gICAgd2hpbGUgKCFmbGFnKSB7XHJcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcblxyXG4gICAgICBmbGFnID0gaXNJbkZpbGxlZCh4LCB5KSA9PT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbGVkLnB1c2goW3gsIHldKTtcclxuICAgIGNvbnN0IHJlcyA9IG9wcG9uZW50LmF0dGFjayh4LCB5KTtcclxuICAgIHJldHVybiB7IHgsIHksIHJlcyB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcFJhbmRvbSA9IChzaGlwKSA9PiBib2FyZC5wbGFjZVJhbmRvbShzaGlwKTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBib2FyZC5yZXNldEJvYXJkKCk7XHJcbiAgICBmaWxsZWQgPSBbXTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaW5pc2hlZCA9ICgpID0+IGJvYXJkLmFsbFN1bmsoKTtcclxuXHJcbiAgcmV0dXJuIHsgYXR0YWNrLCBmaWxsZWQsIHBsYWNlU2hpcFJhbmRvbSwgZmluaXNoZWQsIHJlc2V0IH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IHBsYXllciwgYm90IH07XHJcbiIsImZ1bmN0aW9uIHNoaXBGYWN0b3J5KGwpIHtcclxuICBsZXQgbGVuZ3RoID0gbDtcclxuICBsZXQgaGl0Q291bnQgPSAwO1xyXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGhpdENvdW50ID49IGxlbmd0aDtcclxuICBjb25zdCBoaXQgPSAoKSA9PiAoaGl0Q291bnQgKz0gMSk7XHJcbiAgcmV0dXJuIHsgaXNTdW5rLCBoaXQsIGxlbmd0aCB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaGlwRmFjdG9yeTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZG9tTWV0aG9kcyBmcm9tIFwiLi9kb21TdHVmZlwiO1xyXG5pbXBvcnQgeyBwbGF5LCBvYmosIHBsYWNlU2hpcCwgcmFuZG9tUGxhY2UsIG5ld0dhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xyXG5cclxubmV3R2FtZSgpO1xyXG5cclxuLy8gY29uc29sZS5sb2cob2JqLnBsYXllckJvYXJkLmdyaWQpO1xyXG4vLyBjb25zb2xlLmxvZyhvYmouYm90Qm9hcmQuZ3JpZCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==