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

const clearPopups = () => {
  const popups = document.querySelector(".popups");
  popups.classList.remove("active-popup");
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

const clearBoards = () => {
  clearPopups();
  player.textContent = "";
  bot.textContent = "";
};

const shipCells = (userText) => {
  let val = 0;
  const board = userText === "player" ? player : bot;
  const rows = board.querySelectorAll(".row");

  rows.forEach((row) => {
    const cells = row.querySelectorAll(".cell");
    cells.forEach((cell) => {
      if (
        cell.classList.contains("opp-ship") ||
        cell.classList.contains("ship")
      )
        val += 1;
    });
  });

  return val;
};

const resetBoard = (toChange) => {
  const board = toChange === "player" ? player : bot;

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





const playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
const botBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();

const p = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(playerBoard, botBoard);
const b = (0,_player__WEBPACK_IMPORTED_MODULE_0__.bot)(botBoard, playerBoard);

const sumArray = (arr) => arr.reduce((prev, curr) => (prev += curr), 0);

// const botFindCell = (x, y) => botBoard.grid[x][y];

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
    _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].showWinner("You won");
  }
  x = botAttack();
  if (x && p.finished()) {
    _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].showWinner("You lost");
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
  }
};

const newGame = () => {
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].clearBoards();
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

  const randomBool = () => {
    const val = Math.floor(Math.random() * 2);
    return val === 0 ? false : true;
  };

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

  const allSunk = () =>
    ships.reduce((prev, curr) => prev && curr.isSunk(), true);

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
  const attack = (x, y) => opponent.attack(x, y);

  const placeShip = (ship, x, y, vert) => board.placeShip(ship, x, y, vert);

  const placeShipRandom = (ship) => board.placeRandom(ship);

  const finished = () => board.allSunk();

  const reset = () => board.resetBoard();

  return { attack, placeShip, finished, reset, placeShipRandom };
}

function bot(board, opponent) {
  let filled = [];

  const isInFilled = (x, y) =>
    filled.findIndex((pair) => pair[0] === x && pair[1] === y);

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

  return { filled, attack, placeShipRandom, finished, reset };
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
  return { length, isSunk, hit };
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



(0,_game__WEBPACK_IMPORTED_MODULE_1__.newGame)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakZ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDdUI7Ozs7Ozs7Ozs7Ozs7OztBQ3REdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDUjNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ0g7QUFDakM7QUFDQSw4Q0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2RvbVN0dWZmLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXksIG5ld0dhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG5jb25zdCBwbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllclwiKTtcclxuY29uc3QgYm90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3RcIik7XHJcblxyXG5jb25zdCBjbGVhclBvcHVwcyA9ICgpID0+IHtcclxuICBjb25zdCBwb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwc1wiKTtcclxuICBwb3B1cHMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wb3B1cFwiKTtcclxufTtcclxuXHJcbmNvbnN0IGF0dGFjayA9IChpc1BsYXllciwgeCwgeSwgaXNIaXQpID0+IHtcclxuICBjb25zdCBib2FyZCA9IGlzUGxheWVyID8gYm90IDogcGxheWVyO1xyXG4gIGNvbnN0IGNlbGwgPSBib2FyZFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHt4fSddYClcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS15PScke3l9J11gKTtcclxuXHJcbiAgaWYgKGlzSGl0KSB7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBpc0F0dGFja2VkID0gKHgsIHksIGlzUGxheWVyKSA9PiB7XHJcbiAgY29uc3QgYm9hcmQgPSBpc1BsYXllciA/IHBsYXllciA6IGJvdDtcclxuICBjb25zdCBjZWxsID0gYm9hcmRcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7eH0nXWApXHJcbiAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEteT0nJHt5fSddYCk7XHJcblxyXG4gIHJldHVybiBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikgfHwgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIik7XHJcbn07XHJcblxyXG5jb25zdCBwbGFjZVNoaXBPbk1hcCA9IChhcnIsIGNsYXNzbmFtZSkgPT4ge1xyXG4gIGNvbnN0IGJvYXJkID0gY2xhc3NuYW1lID09PSBcInNoaXBcIiA/IHBsYXllciA6IGJvdDtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xyXG4gIGFyci5mb3JFYWNoKChjZWxsRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgY2VsbCA9IGJvYXJkXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7Y2VsbERhdGFbMF19J11gKVxyXG4gICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEteT0nJHtjZWxsRGF0YVsxXX0nXWApO1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjbGVhckJvYXJkcyA9ICgpID0+IHtcclxuICBjbGVhclBvcHVwcygpO1xyXG4gIHBsYXllci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgYm90LnRleHRDb250ZW50ID0gXCJcIjtcclxufTtcclxuXHJcbmNvbnN0IHNoaXBDZWxscyA9ICh1c2VyVGV4dCkgPT4ge1xyXG4gIGxldCB2YWwgPSAwO1xyXG4gIGNvbnN0IGJvYXJkID0gdXNlclRleHQgPT09IFwicGxheWVyXCIgPyBwbGF5ZXIgOiBib3Q7XHJcbiAgY29uc3Qgcm93cyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm93XCIpO1xyXG5cclxuICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgY29uc3QgY2VsbHMgPSByb3cucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xyXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcHAtc2hpcFwiKSB8fFxyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKVxyXG4gICAgICApXHJcbiAgICAgICAgdmFsICs9IDE7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHZhbDtcclxufTtcclxuXHJcbmNvbnN0IHJlc2V0Qm9hcmQgPSAodG9DaGFuZ2UpID0+IHtcclxuICBjb25zdCBib2FyZCA9IHRvQ2hhbmdlID09PSBcInBsYXllclwiID8gcGxheWVyIDogYm90O1xyXG5cclxuICBib2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICByb3cuZGF0YXNldC5yb3cgPSBpO1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgY2VsbC5kYXRhc2V0LnggPSBpO1xyXG4gICAgICBjZWxsLmRhdGFzZXQueSA9IGo7XHJcbiAgICAgIGlmIChib2FyZCA9PT0gYm90KSB7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNraW5nLWNlbGxcIik7XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgIH1cclxuICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2hvd1dpbm5lciA9ICh0ZXh0ID0gXCJcIikgPT4ge1xyXG4gIGNvbnN0IHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBzXCIpO1xyXG4gIGNvbnN0IHdpbm5lclRpdGxlID0gcG9wdXBzLnF1ZXJ5U2VsZWN0b3IoXCIjd2lubmVyXCIpO1xyXG5cclxuICB3aW5uZXJUaXRsZS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcG9wdXBzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcG9wdXBcIik7XHJcbn07XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5ldy1nYW1lXCIpXHJcbiAgLmZvckVhY2goKG5vZGUpID0+IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld0dhbWUpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhdHRhY2ssXHJcbiAgaXNBdHRhY2tlZCxcclxuICBwbGFjZVNoaXBPbk1hcCxcclxuICBjbGVhckJvYXJkcyxcclxuICBzaGlwQ2VsbHMsXHJcbiAgcmVzZXRCb2FyZCxcclxuICBzaG93V2lubmVyLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBwbGF5ZXIsIGJvdCB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCBkb21TdHVmZiBmcm9tIFwiLi9kb21TdHVmZlwiO1xyXG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xyXG5cclxuY29uc3QgcGxheWVyQm9hcmQgPSBib2FyZCgpO1xyXG5jb25zdCBib3RCb2FyZCA9IGJvYXJkKCk7XHJcblxyXG5jb25zdCBwID0gcGxheWVyKHBsYXllckJvYXJkLCBib3RCb2FyZCk7XHJcbmNvbnN0IGIgPSBib3QoYm90Qm9hcmQsIHBsYXllckJvYXJkKTtcclxuXHJcbmNvbnN0IHN1bUFycmF5ID0gKGFycikgPT4gYXJyLnJlZHVjZSgocHJldiwgY3VycikgPT4gKHByZXYgKz0gY3VyciksIDApO1xyXG5cclxuLy8gY29uc3QgYm90RmluZENlbGwgPSAoeCwgeSkgPT4gYm90Qm9hcmQuZ3JpZFt4XVt5XTtcclxuXHJcbmNvbnN0IGJvdEF0dGFjayA9ICgpID0+IHtcclxuICBsZXQgYXR0YWNrT2JqID0gbnVsbDtcclxuICB3aGlsZSAoYXR0YWNrT2JqID09PSBudWxsKSBhdHRhY2tPYmogPSBiLmF0dGFjaygpO1xyXG4gIHJldHVybiBkb21TdHVmZi5hdHRhY2soZmFsc2UsIGF0dGFja09iai54LCBhdHRhY2tPYmoueSwgYXR0YWNrT2JqLnJlcyk7XHJcbn07XHJcblxyXG5jb25zdCBwbGF5ZXJBdHRhY2sgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHggPSBlLnRhcmdldC5kYXRhc2V0Lng7XHJcbiAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQueTtcclxuXHJcbiAgcmV0dXJuIGRvbVN0dWZmLmF0dGFjayh0cnVlLCB4LCB5LCBwLmF0dGFjayh4LCB5KSk7XHJcbn07XHJcblxyXG5jb25zdCBwbGF5ID0gKGUpID0+IHtcclxuICBsZXQgeDtcclxuICB4ID0gcGxheWVyQXR0YWNrKGUpO1xyXG4gIGlmICh4ICYmIGIuZmluaXNoZWQoKSkge1xyXG4gICAgZG9tU3R1ZmYuc2hvd1dpbm5lcihcIllvdSB3b25cIik7XHJcbiAgfVxyXG4gIHggPSBib3RBdHRhY2soKTtcclxuICBpZiAoeCAmJiBwLmZpbmlzaGVkKCkpIHtcclxuICAgIGRvbVN0dWZmLnNob3dXaW5uZXIoXCJZb3UgbG9zdFwiKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgdmVydCkgPT4ge1xyXG4gIGNvbnN0IGNlbGxzUGxhY2VkID0gcC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgdmVydCk7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2VsbHNQbGFjZWQpID09PSBmYWxzZSkgdGhyb3cgbmV3IEVycm9yKFwiQ2FudCBwbGFjZSBzaGlwXCIpO1xyXG4gIGRvbVN0dWZmLnBsYWNlU2hpcE9uTWFwKGNlbGxzUGxhY2VkLCBcInNoaXBcIik7XHJcbn07XHJcblxyXG5jb25zdCByYW5kb21QbGFjZSA9ICh1c2VyLCBzaGlwKSA9PiB7XHJcbiAgY29uc3QgY2VsbHNQbGFjZWQgPSB1c2VyLnBsYWNlU2hpcFJhbmRvbShzaGlwKTtcclxuICBjb25zdCB1c2VyVGV4dCA9IHVzZXIgPT09IHAgPyBcInNoaXBcIiA6IFwib3BwLXNoaXBcIjtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2VsbHNQbGFjZWQpID09PSBmYWxzZSkgdGhyb3cgbmV3IEVycm9yKFwiQ2FudCBwbGFjZSBzaGlwXCIpO1xyXG4gIGRvbVN0dWZmLnBsYWNlU2hpcE9uTWFwKGNlbGxzUGxhY2VkLCB1c2VyVGV4dCk7XHJcbn07XHJcblxyXG5jb25zdCByYW5kb21BbGxQbGFjZSA9ICh1c2VyLCBhcnIpID0+IHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpID09PSBmYWxzZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gYXJyYXlcIik7XHJcblxyXG4gIGNvbnN0IHN1bSA9IHN1bUFycmF5KGFycik7XHJcbiAgbGV0IHJlcyA9IDA7XHJcbiAgY29uc3QgdXNlclRleHQgPSB1c2VyID09PSBwID8gXCJwbGF5ZXJcIiA6IFwiYm90XCI7XHJcblxyXG4gIHdoaWxlIChyZXMgIT09IHN1bSkge1xyXG4gICAgdXNlci5yZXNldCgpO1xyXG4gICAgZG9tU3R1ZmYucmVzZXRCb2FyZCh1c2VyVGV4dCk7XHJcbiAgICBhcnIuZm9yRWFjaCgoeCkgPT4gcmFuZG9tUGxhY2UodXNlciwgc2hpcCh4KSkpO1xyXG4gICAgcmVzID0gZG9tU3R1ZmYuc2hpcENlbGxzKHVzZXJUZXh0KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBuZXdHYW1lID0gKCkgPT4ge1xyXG4gIGRvbVN0dWZmLmNsZWFyQm9hcmRzKCk7XHJcbiAgcmFuZG9tQWxsUGxhY2UocCwgWzIsIDMsIDMsIDQsIDVdKTtcclxuICByYW5kb21BbGxQbGFjZShiLCBbMiwgMywgMywgNCwgNV0pO1xyXG59O1xyXG5cclxuY29uc3Qgb2JqID0geyBwLCBiLCBwbGF5ZXJCb2FyZCwgYm90Qm9hcmQgfTtcclxuXHJcbmV4cG9ydCB7IG9iaiwgcGxheSwgcGxhY2VTaGlwLCByYW5kb21QbGFjZSwgbmV3R2FtZSB9O1xyXG4iLCJmdW5jdGlvbiBnYW1lYm9hcmQoTUFYID0gMTApIHtcclxuICBsZXQgZ3JpZCA9IFtdO1xyXG4gIGxldCBzaGlwcyA9IFtdO1xyXG5cclxuICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgZ3JpZCA9IFtdO1xyXG4gICAgc2hpcHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1BWDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE1BWDsgaisrKSB7XHJcbiAgICAgICAgcm93LnB1c2goMCk7XHJcbiAgICAgIH1cclxuICAgICAgZ3JpZC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXNldEJvYXJkKCk7XHJcblxyXG4gIGNvbnN0IHJhbmRvbUJvb2wgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB2YWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgIHJldHVybiB2YWwgPT09IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNGcmVlU3BhY2UgPSAoeCwgeSwgbCwgdmVydCkgPT4ge1xyXG4gICAgaWYgKCF2ZXJ0KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGw7IGkrKykgaWYgKGdyaWRbeF1baV0gIT09IDApIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIGw7IGkrKykgaWYgKGdyaWRbeF1baV0gIT09IDApIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCB2ZXJ0ID0gZmFsc2UpID0+IHtcclxuICAgIGNvbnN0IGNlbGxzID0gW107XHJcblxyXG4gICAgaWYgKCFpc0ZyZWVTcGFjZSh4LCB5LCBzaGlwLmxlbmd0aCwgdmVydCkpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKCF2ZXJ0KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBncmlkW3hdW2ldID0gc2hpcDtcclxuICAgICAgICBjZWxscy5wdXNoKFt4LCBpXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBncmlkW2ldW3ldID0gc2hpcDtcclxuICAgICAgICBjZWxscy5wdXNoKFtpLCB5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNoaXBzLnB1c2goc2hpcCk7XHJcbiAgICByZXR1cm4gY2VsbHM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXR0YWNrID0gKHgsIHkpID0+IHtcclxuICAgIGlmICh0eXBlb2YgZ3JpZFt4XVt5XSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICBncmlkW3hdW3ldLmhpdCgpO1xyXG4gICAgICBncmlkW3hdW3ldID0gMTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBncmlkW3hdW3ldID0gMTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PlxyXG4gICAgc2hpcHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmIGN1cnIuaXNTdW5rKCksIHRydWUpO1xyXG5cclxuICBjb25zdCBwbGFjZVJhbmRvbSA9IChzaGlwKSA9PiB7XHJcbiAgICBsZXQgY2VsbHMgPSBudWxsO1xyXG4gICAgd2hpbGUgKGNlbGxzID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIGNvbnN0IHZlcnQgPSByYW5kb21Cb29sKCk7XHJcblxyXG4gICAgICBjZWxscyA9IHBsYWNlU2hpcChzaGlwLCB4LCB5LCB2ZXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2VsbHM7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZ3JpZCwgcGxhY2VTaGlwLCBhdHRhY2ssIGFsbFN1bmssIHJlc2V0Qm9hcmQsIHBsYWNlUmFuZG9tIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDtcclxuIiwiZnVuY3Rpb24gcGxheWVyKGJvYXJkLCBvcHBvbmVudCkge1xyXG4gIGNvbnN0IGF0dGFjayA9ICh4LCB5KSA9PiBvcHBvbmVudC5hdHRhY2soeCwgeSk7XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCB2ZXJ0KSA9PiBib2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgdmVydCk7XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcFJhbmRvbSA9IChzaGlwKSA9PiBib2FyZC5wbGFjZVJhbmRvbShzaGlwKTtcclxuXHJcbiAgY29uc3QgZmluaXNoZWQgPSAoKSA9PiBib2FyZC5hbGxTdW5rKCk7XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4gYm9hcmQucmVzZXRCb2FyZCgpO1xyXG5cclxuICByZXR1cm4geyBhdHRhY2ssIHBsYWNlU2hpcCwgZmluaXNoZWQsIHJlc2V0LCBwbGFjZVNoaXBSYW5kb20gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYm90KGJvYXJkLCBvcHBvbmVudCkge1xyXG4gIGxldCBmaWxsZWQgPSBbXTtcclxuXHJcbiAgY29uc3QgaXNJbkZpbGxlZCA9ICh4LCB5KSA9PlxyXG4gICAgZmlsbGVkLmZpbmRJbmRleCgocGFpcikgPT4gcGFpclswXSA9PT0geCAmJiBwYWlyWzFdID09PSB5KTtcclxuXHJcbiAgY29uc3QgaXNGdWxsID0gKCkgPT4gZmlsbGVkLmxlbmd0aCA+IDk5O1xyXG5cclxuICBjb25zdCBhdHRhY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNGdWxsKCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgIGxldCB4LCB5O1xyXG5cclxuICAgIHdoaWxlICghZmxhZykge1xyXG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG5cclxuICAgICAgZmxhZyA9IGlzSW5GaWxsZWQoeCwgeSkgPT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxlZC5wdXNoKFt4LCB5XSk7XHJcbiAgICBjb25zdCByZXMgPSBvcHBvbmVudC5hdHRhY2soeCwgeSk7XHJcbiAgICByZXR1cm4geyB4LCB5LCByZXMgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwbGFjZVNoaXBSYW5kb20gPSAoc2hpcCkgPT4gYm9hcmQucGxhY2VSYW5kb20oc2hpcCk7XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgYm9hcmQucmVzZXRCb2FyZCgpO1xyXG4gICAgZmlsbGVkID0gW107XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmluaXNoZWQgPSAoKSA9PiBib2FyZC5hbGxTdW5rKCk7XHJcblxyXG4gIHJldHVybiB7IGZpbGxlZCwgYXR0YWNrLCBwbGFjZVNoaXBSYW5kb20sIGZpbmlzaGVkLCByZXNldCB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBwbGF5ZXIsIGJvdCB9O1xyXG4iLCJmdW5jdGlvbiBzaGlwRmFjdG9yeShsKSB7XHJcbiAgbGV0IGxlbmd0aCA9IGw7XHJcbiAgbGV0IGhpdENvdW50ID0gMDtcclxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRDb3VudCA+PSBsZW5ndGg7XHJcbiAgY29uc3QgaGl0ID0gKCkgPT4gKGhpdENvdW50ICs9IDEpO1xyXG4gIHJldHVybiB7IGxlbmd0aCwgaXNTdW5rLCBoaXQgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcEZhY3Rvcnk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRvbU1ldGhvZHMgZnJvbSBcIi4vZG9tU3R1ZmZcIjtcclxuaW1wb3J0IHsgbmV3R2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbm5ld0dhbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9