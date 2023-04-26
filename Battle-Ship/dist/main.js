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

const placeFriendly = (arr) => {
  if (Array.isArray(arr) === false) return null;
  arr.forEach((cellData) => {
    const cell = player
      .querySelector(`[data-row='${cellData[0]}']`)
      .querySelector(`[data-y='${cellData[1]}']`);
    cell.classList.add("ship");
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ setBoard, attack, isAttacked, placeFriendly, clearBoards });


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clear": () => (/* binding */ clear),
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
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].placeFriendly(cellsPlaced);
};

const randomPlace = (ship) => {
  const cellPlaced = b.placeShip(ship);
  console.log(cellPlaced);
};

const clear = () => {
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].clearBoards();
  p.reset();
  b.reset();
};

const placeAlShips = () => {
  randomPlace((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(2));
  randomPlace((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(4));
  randomPlace((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(5));
  randomPlace((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(4));
  randomPlace((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(2));

  placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(2), 2, 3, true);
  placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(5), 4, 4);
  placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(3), 7, 3);
};

const newGame = () => {
  clear();
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].setBoard();
  placeAlShips();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7O0FDekV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUNSM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNnQztBQUNsQztBQUNEO0FBQ2pDO0FBQ0EsOENBQU87QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF5IH0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxuY29uc3QgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJcIik7XHJcbmNvbnN0IGJvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm90XCIpO1xyXG5cclxuY29uc3Qgc2V0Qm9hcmQgPSAoKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBjb25zdCBwbGF5ZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGxheWVyUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICBwbGF5ZXJSb3cuZGF0YXNldC5yb3cgPSBpO1xyXG5cclxuICAgIGNvbnN0IGJvdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3RSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIGJvdFJvdy5kYXRhc2V0LnJvdyA9IGk7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgIGNvbnN0IHBsYXllckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwbGF5ZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICBwbGF5ZXJDZWxsLmRhdGFzZXQueCA9IGk7XHJcbiAgICAgIHBsYXllckNlbGwuZGF0YXNldC55ID0gajtcclxuXHJcbiAgICAgIGNvbnN0IGJvdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBib3RDZWxsLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tpbmctY2VsbFwiKTtcclxuICAgICAgYm90Q2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgYm90Q2VsbC5kYXRhc2V0LnggPSBpO1xyXG4gICAgICBib3RDZWxsLmRhdGFzZXQueSA9IGo7XHJcblxyXG4gICAgICBib3RDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5KTtcclxuXHJcbiAgICAgIHBsYXllclJvdy5hcHBlbmRDaGlsZChwbGF5ZXJDZWxsKTtcclxuICAgICAgYm90Um93LmFwcGVuZENoaWxkKGJvdENlbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXllci5hcHBlbmRDaGlsZChwbGF5ZXJSb3cpO1xyXG4gICAgYm90LmFwcGVuZENoaWxkKGJvdFJvdyk7XHJcbiAgfVxyXG59O1xyXG5cclxuc2V0Qm9hcmQoKTtcclxuXHJcbmNvbnN0IGNsZWFyQm9hcmRzID0gKCkgPT4ge1xyXG4gIHBsYXllci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgYm90LnRleHRDb250ZW50ID0gXCJcIjtcclxufTtcclxuXHJcbmNvbnN0IGF0dGFjayA9IChpc1BsYXllciwgeCwgeSwgaXNIaXQpID0+IHtcclxuICBjb25zdCBib2FyZCA9IGlzUGxheWVyID8gYm90IDogcGxheWVyO1xyXG4gIGNvbnN0IGNlbGwgPSBib2FyZFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHt4fSddYClcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS15PScke3l9J11gKTtcclxuXHJcbiAgaWYgKGlzSGl0KSB7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBpc0F0dGFja2VkID0gKHgsIHksIGlzUGxheWVyKSA9PiB7XHJcbiAgY29uc3QgYm9hcmQgPSBpc1BsYXllciA/IHBsYXllciA6IGJvdDtcclxuICBjb25zdCBjZWxsID0gYm9hcmRcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7eH0nXWApXHJcbiAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEteT0nJHt5fSddYCk7XHJcblxyXG4gIHJldHVybiBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikgfHwgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIik7XHJcbn07XHJcblxyXG5jb25zdCBwbGFjZUZyaWVuZGx5ID0gKGFycikgPT4ge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGFycikgPT09IGZhbHNlKSByZXR1cm4gbnVsbDtcclxuICBhcnIuZm9yRWFjaCgoY2VsbERhdGEpID0+IHtcclxuICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXJcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtjZWxsRGF0YVswXX0nXWApXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS15PScke2NlbGxEYXRhWzFdfSddYCk7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBzZXRCb2FyZCwgYXR0YWNrLCBpc0F0dGFja2VkLCBwbGFjZUZyaWVuZGx5LCBjbGVhckJvYXJkcyB9O1xyXG4iLCJpbXBvcnQgeyBwbGF5ZXIsIGJvdCB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCBkb21TdHVmZiBmcm9tIFwiLi9kb21TdHVmZlwiO1xyXG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xyXG5cclxuY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyXCIpO1xyXG5jb25zdCBib3RHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3RcIik7XHJcblxyXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGJvYXJkKCk7XHJcbmNvbnN0IGJvdEJvYXJkID0gYm9hcmQoKTtcclxuXHJcbmNvbnN0IHAgPSBwbGF5ZXIocGxheWVyQm9hcmQsIGJvdEJvYXJkKTtcclxuY29uc3QgYiA9IGJvdChib3RCb2FyZCwgcGxheWVyQm9hcmQpO1xyXG5cclxuY29uc3QgYm90QXR0YWNrID0gKCkgPT4ge1xyXG4gIGxldCBhdHRhY2tPYmogPSBudWxsO1xyXG4gIHdoaWxlIChhdHRhY2tPYmogPT09IG51bGwpIGF0dGFja09iaiA9IGIuYXR0YWNrKCk7XHJcbiAgcmV0dXJuIGRvbVN0dWZmLmF0dGFjayhmYWxzZSwgYXR0YWNrT2JqLngsIGF0dGFja09iai55LCBhdHRhY2tPYmoucmVzKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYXllckF0dGFjayA9IChlKSA9PiB7XHJcbiAgY29uc3QgeCA9IGUudGFyZ2V0LmRhdGFzZXQueDtcclxuICBjb25zdCB5ID0gZS50YXJnZXQuZGF0YXNldC55O1xyXG5cclxuICByZXR1cm4gZG9tU3R1ZmYuYXR0YWNrKHRydWUsIHgsIHksIHAuYXR0YWNrKHgsIHkpKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYXkgPSAoZSkgPT4ge1xyXG4gIGxldCB4O1xyXG4gIHggPSBwbGF5ZXJBdHRhY2soZSk7XHJcbiAgaWYgKHggJiYgYi5maW5pc2hlZCgpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlAgd29uXCIpO1xyXG4gICAgbmV3R2FtZSgpO1xyXG4gIH1cclxuICB4ID0gYm90QXR0YWNrKCk7XHJcbiAgaWYgKHggJiYgcC5maW5pc2hlZCgpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkIgd29uXCIpO1xyXG4gICAgbmV3R2FtZSgpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCB2ZXJ0KSA9PiB7XHJcbiAgY29uc3QgY2VsbHNQbGFjZWQgPSBwLnBsYWNlU2hpcChzaGlwLCB4LCB5LCB2ZXJ0KTtcclxuICBpZiAoQXJyYXkuaXNBcnJheShjZWxsc1BsYWNlZCkgPT09IGZhbHNlKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW50IHBsYWNlIHNoaXBcIik7XHJcbiAgZG9tU3R1ZmYucGxhY2VGcmllbmRseShjZWxsc1BsYWNlZCk7XHJcbn07XHJcblxyXG5jb25zdCByYW5kb21QbGFjZSA9IChzaGlwKSA9PiB7XHJcbiAgY29uc3QgY2VsbFBsYWNlZCA9IGIucGxhY2VTaGlwKHNoaXApO1xyXG4gIGNvbnNvbGUubG9nKGNlbGxQbGFjZWQpO1xyXG59O1xyXG5cclxuY29uc3QgY2xlYXIgPSAoKSA9PiB7XHJcbiAgZG9tU3R1ZmYuY2xlYXJCb2FyZHMoKTtcclxuICBwLnJlc2V0KCk7XHJcbiAgYi5yZXNldCgpO1xyXG59O1xyXG5cclxuY29uc3QgcGxhY2VBbFNoaXBzID0gKCkgPT4ge1xyXG4gIHJhbmRvbVBsYWNlKHNoaXAoMikpO1xyXG4gIHJhbmRvbVBsYWNlKHNoaXAoNCkpO1xyXG4gIHJhbmRvbVBsYWNlKHNoaXAoNSkpO1xyXG4gIHJhbmRvbVBsYWNlKHNoaXAoNCkpO1xyXG4gIHJhbmRvbVBsYWNlKHNoaXAoMikpO1xyXG5cclxuICBwbGFjZVNoaXAoc2hpcCgyKSwgMiwgMywgdHJ1ZSk7XHJcbiAgcGxhY2VTaGlwKHNoaXAoNSksIDQsIDQpO1xyXG4gIHBsYWNlU2hpcChzaGlwKDMpLCA3LCAzKTtcclxufTtcclxuXHJcbmNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XHJcbiAgY2xlYXIoKTtcclxuICBkb21TdHVmZi5zZXRCb2FyZCgpO1xyXG4gIHBsYWNlQWxTaGlwcygpO1xyXG59O1xyXG5cclxuY29uc3Qgb2JqID0geyBwLCBiLCBwbGF5ZXJCb2FyZCwgYm90Qm9hcmQgfTtcclxuXHJcbmV4cG9ydCB7IHBsYXksIG9iaiwgcGxhY2VTaGlwLCByYW5kb21QbGFjZSwgY2xlYXIsIG5ld0dhbWUgfTtcclxuIiwiZnVuY3Rpb24gZ2FtZWJvYXJkKE1BWCA9IDEwKSB7XHJcbiAgbGV0IGdyaWQgPSBbXTtcclxuICBsZXQgc2hpcHMgPSBbXTtcclxuXHJcbiAgY29uc3QgcmVzZXRCb2FyZCA9ICgpID0+IHtcclxuICAgIGdyaWQgPSBbXTtcclxuICAgIHNoaXBzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNQVg7IGkrKykge1xyXG4gICAgICBjb25zdCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBNQVg7IGorKykge1xyXG4gICAgICAgIHJvdy5wdXNoKDApO1xyXG4gICAgICB9XHJcbiAgICAgIGdyaWQucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlc2V0Qm9hcmQoKTtcclxuXHJcbiAgY29uc3QgaXNGcmVlU3BhY2UgPSAoeCwgeSwgbCwgdmVydCkgPT4ge1xyXG4gICAgaWYgKCF2ZXJ0KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGw7IGkrKykgaWYgKGdyaWRbeF1baV0gIT09IDApIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIGw7IGkrKykgaWYgKGdyaWRbeF1baV0gIT09IDApIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCB2ZXJ0ID0gZmFsc2UpID0+IHtcclxuICAgIGNvbnN0IGNlbGxzID0gW107XHJcblxyXG4gICAgaWYgKCFpc0ZyZWVTcGFjZSh4LCB5LCBzaGlwLmxlbmd0aCwgdmVydCkpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKCF2ZXJ0KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBncmlkW3hdW2ldID0gc2hpcDtcclxuICAgICAgICBjZWxscy5wdXNoKFt4LCBpXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBncmlkW2ldW3ldID0gc2hpcDtcclxuICAgICAgICBjZWxscy5wdXNoKFtpLCB5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNoaXBzLnB1c2goc2hpcCk7XHJcbiAgICByZXR1cm4gY2VsbHM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXR0YWNrID0gKHgsIHkpID0+IHtcclxuICAgIGlmICh0eXBlb2YgZ3JpZFt4XVt5XSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICBncmlkW3hdW3ldLmhpdCgpO1xyXG4gICAgICBncmlkW3hdW3ldID0gMTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBncmlkW3hdW3ldID0gMTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2hpcHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmIGN1cnIuaXNTdW5rKCksIHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGdyaWQsIHBsYWNlU2hpcCwgYXR0YWNrLCBhbGxTdW5rLCByZXNldEJvYXJkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDtcclxuIiwiZnVuY3Rpb24gcGxheWVyKGJvYXJkLCBvcHBvbmVudCkge1xyXG4gIGNvbnN0IGF0dGFjayA9ICh4LCB5KSA9PiB7XHJcbiAgICByZXR1cm4gb3Bwb25lbnQuYXR0YWNrKHgsIHkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCB2ZXJ0KSA9PiB7XHJcbiAgICByZXR1cm4gYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHksIHZlcnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbmlzaGVkID0gKCkgPT4gYm9hcmQuYWxsU3VuaygpO1xyXG5cclxuICBjb25zdCByZXNldCA9ICgpID0+IGJvYXJkLnJlc2V0Qm9hcmQoKTtcclxuXHJcbiAgcmV0dXJuIHsgYXR0YWNrLCBwbGFjZVNoaXAsIGZpbmlzaGVkLCByZXNldCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBib3QoYm9hcmQsIG9wcG9uZW50KSB7XHJcbiAgbGV0IGZpbGxlZCA9IFtdO1xyXG5cclxuICBjb25zdCBpc0luRmlsbGVkID0gKHgsIHkpID0+IHtcclxuICAgIHJldHVybiBmaWxsZWQuZmluZEluZGV4KChwYWlyKSA9PiBwYWlyWzBdID09PSB4ICYmIHBhaXJbMV0gPT09IHkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzRnVsbCA9ICgpID0+IGZpbGxlZC5sZW5ndGggPiA5OTtcclxuXHJcbiAgY29uc3QgYXR0YWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzRnVsbCgpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICBsZXQgeCwgeTtcclxuXHJcbiAgICB3aGlsZSAoIWZsYWcpIHtcclxuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuXHJcbiAgICAgIGZsYWcgPSBpc0luRmlsbGVkKHgsIHkpID09PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsZWQucHVzaChbeCwgeV0pO1xyXG4gICAgY29uc3QgcmVzID0gb3Bwb25lbnQuYXR0YWNrKHgsIHkpO1xyXG4gICAgcmV0dXJuIHsgeCwgeSwgcmVzIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmFuZG9tQm9vbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgcmV0dXJuIHZhbCA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCkgPT4ge1xyXG4gICAgbGV0IGNlbGxQbGFjZWQgPSBudWxsO1xyXG4gICAgd2hpbGUgKGNlbGxQbGFjZWQgPT09IG51bGwpIHtcclxuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgY29uc3QgdmVydCA9IHJhbmRvbUJvb2woKTtcclxuXHJcbiAgICAgIGNlbGxQbGFjZWQgPSBib2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgdmVydCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNlbGxQbGFjZWQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBib2FyZC5yZXNldEJvYXJkKCk7XHJcbiAgICBmaWxsZWQgPSBbXTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaW5pc2hlZCA9ICgpID0+IGJvYXJkLmFsbFN1bmsoKTtcclxuXHJcbiAgcmV0dXJuIHsgYXR0YWNrLCBmaWxsZWQsIHBsYWNlU2hpcCwgZmluaXNoZWQsIHJlc2V0IH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IHBsYXllciwgYm90IH07XHJcbiIsImZ1bmN0aW9uIHNoaXBGYWN0b3J5KGwpIHtcclxuICBsZXQgbGVuZ3RoID0gbDtcclxuICBsZXQgaGl0Q291bnQgPSAwO1xyXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGhpdENvdW50ID49IGxlbmd0aDtcclxuICBjb25zdCBoaXQgPSAoKSA9PiAoaGl0Q291bnQgKz0gMSk7XHJcbiAgcmV0dXJuIHsgaXNTdW5rLCBoaXQsIGxlbmd0aCB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaGlwRmFjdG9yeTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZG9tTWV0aG9kcyBmcm9tIFwiLi9kb21TdHVmZlwiO1xyXG5pbXBvcnQgeyBwbGF5LCBvYmosIHBsYWNlU2hpcCwgcmFuZG9tUGxhY2UsIG5ld0dhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xyXG5cclxubmV3R2FtZSgpO1xyXG5cclxuLy8gY29uc29sZS5sb2cob2JqLnBsYXllckJvYXJkLmdyaWQpO1xyXG4vLyBjb25zb2xlLmxvZyhvYmouYm90Qm9hcmQuZ3JpZCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==