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
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe */ "./src/pipe.js");


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
      botCell.classList.add("cell");
      botCell.dataset.x = i;
      botCell.dataset.y = j;

      botCell.addEventListener("click", _pipe__WEBPACK_IMPORTED_MODULE_0__["default"].play);

      playerRow.appendChild(playerCell);
      botRow.appendChild(botCell);
    }

    player.appendChild(playerRow);
    bot.appendChild(botRow);
  }
};

setBoard();

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ setBoard, attack, isAttacked });


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);


/***/ }),

/***/ "./src/pipe.js":
/*!*********************!*\
  !*** ./src/pipe.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/player */ "./src/player.js");
/* harmony import */ var _src_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/gameboard */ "./src/gameboard.js");
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");




const playerGrid = document.querySelector("#player");
const botGrid = document.querySelector("#bot");

const playerBoard = (0,_src_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
const botBoard = (0,_src_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();

const p = (0,_src_player__WEBPACK_IMPORTED_MODULE_0__.player)(playerBoard, botBoard);
const b = (0,_src_player__WEBPACK_IMPORTED_MODULE_0__.bot)(botBoard, playerBoard);

const botAttack = () => {
  let attackObj = null;
  while (attackObj === null) attackObj = b.attack();
  return _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].attack(false, attackObj.x, attackObj.y, attackObj.res);
};

const playerAttack = (e) => {
  const x = e.target.dataset.x;
  const y = e.target.dataset.y;

  e.target.style.pointerEvents = "none";
  return _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].attack(true, x, y, p.attack(x, y));
};

const play = (e) => {
  let x;
  x = playerAttack(e);
  if (x && b.finished()) console.log("P won");
  x = botAttack();
  if (x && p.finished()) console.log("B won");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ play, p, b, playerBoard, botBoard });


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

  const placeShip = (ship, x, y, vert) => {
    return board.placeShip(ship, x, y, vert);
  };

  const finished = () => board.allSunk();

  return { attack, filled, placeShip, finished };
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
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipe */ "./src/pipe.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");





_pipe__WEBPACK_IMPORTED_MODULE_1__["default"].b.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(2), 2, 3, true);
_pipe__WEBPACK_IMPORTED_MODULE_1__["default"].p.placeShip((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(5), 4, 4);

console.log(_pipe__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard.grid);
console.log(_pipe__WEBPACK_IMPORTED_MODULE_1__["default"].botBoard.grid);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDVjtBQUNRO0FBQ0Q7QUFDakM7QUFDQSx5REFBZ0IsQ0FBQyx3REFBSTtBQUNyQix5REFBZ0IsQ0FBQyx3REFBSTtBQUNyQjtBQUNBLFlBQVksOERBQXFCO0FBQ2pDLFlBQVksMkRBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvZG9tU3R1ZmYuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3BpcGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBpcGUgZnJvbSBcIi4vcGlwZVwiO1xyXG5cclxuY29uc3QgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJcIik7XHJcbmNvbnN0IGJvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm90XCIpO1xyXG5cclxuY29uc3Qgc2V0Qm9hcmQgPSAoKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBjb25zdCBwbGF5ZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGxheWVyUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICBwbGF5ZXJSb3cuZGF0YXNldC5yb3cgPSBpO1xyXG5cclxuICAgIGNvbnN0IGJvdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3RSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIGJvdFJvdy5kYXRhc2V0LnJvdyA9IGk7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgIGNvbnN0IHBsYXllckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwbGF5ZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICBwbGF5ZXJDZWxsLmRhdGFzZXQueCA9IGk7XHJcbiAgICAgIHBsYXllckNlbGwuZGF0YXNldC55ID0gajtcclxuXHJcbiAgICAgIGNvbnN0IGJvdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBib3RDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICBib3RDZWxsLmRhdGFzZXQueCA9IGk7XHJcbiAgICAgIGJvdENlbGwuZGF0YXNldC55ID0gajtcclxuXHJcbiAgICAgIGJvdENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBpcGUucGxheSk7XHJcblxyXG4gICAgICBwbGF5ZXJSb3cuYXBwZW5kQ2hpbGQocGxheWVyQ2VsbCk7XHJcbiAgICAgIGJvdFJvdy5hcHBlbmRDaGlsZChib3RDZWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXIuYXBwZW5kQ2hpbGQocGxheWVyUm93KTtcclxuICAgIGJvdC5hcHBlbmRDaGlsZChib3RSb3cpO1xyXG4gIH1cclxufTtcclxuXHJcbnNldEJvYXJkKCk7XHJcblxyXG5jb25zdCBhdHRhY2sgPSAoaXNQbGF5ZXIsIHgsIHksIGlzSGl0KSA9PiB7XHJcbiAgY29uc3QgYm9hcmQgPSBpc1BsYXllciA/IGJvdCA6IHBsYXllcjtcclxuICBjb25zdCBjZWxsID0gYm9hcmRcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7eH0nXWApXHJcbiAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEteT0nJHt5fSddYCk7XHJcblxyXG4gIGlmIChpc0hpdCkge1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaXNBdHRhY2tlZCA9ICh4LCB5LCBpc1BsYXllcikgPT4ge1xyXG4gIGNvbnN0IGJvYXJkID0gaXNQbGF5ZXIgPyBwbGF5ZXIgOiBib3Q7XHJcbiAgY29uc3QgY2VsbCA9IGJvYXJkXHJcbiAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PScke3h9J11gKVxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXk9JyR7eX0nXWApO1xyXG5cclxuICByZXR1cm4gY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpIHx8IGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBzZXRCb2FyZCwgYXR0YWNrLCBpc0F0dGFja2VkIH07XHJcbiIsImZ1bmN0aW9uIGdhbWVib2FyZChNQVggPSAxMCkge1xyXG4gIGNvbnN0IGdyaWQgPSBbXTtcclxuICBjb25zdCBzaGlwcyA9IFtdO1xyXG5cclxuICAoKCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNQVg7IGkrKykge1xyXG4gICAgICBjb25zdCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBNQVg7IGorKykge1xyXG4gICAgICAgIHJvdy5wdXNoKDApO1xyXG4gICAgICB9XHJcbiAgICAgIGdyaWQucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcblxyXG4gIGNvbnN0IGlzRnJlZVNwYWNlID0gKHgsIHksIGwsIHZlcnQpID0+IHtcclxuICAgIGlmICghdmVydCkge1xyXG4gICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBsOyBpKyspIGlmIChncmlkW3hdW2ldICE9PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsOyBpKyspIGlmIChncmlkW3hdW2ldICE9PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgdmVydCA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZiAoIWlzRnJlZVNwYWNlKHgsIHksIHNoaXAubGVuZ3RoLCB2ZXJ0KSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3BhY2VcIik7XHJcbiAgICBpZiAoIXZlcnQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcC5sZW5ndGg7IGkrKykgZ3JpZFt4XVtpXSA9IHNoaXA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmxlbmd0aDsgaSsrKSBncmlkW2ldW3ldID0gc2hpcDtcclxuICAgIH1cclxuICAgIHNoaXBzLnB1c2goc2hpcCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXR0YWNrID0gKHggPSAwLCB5ID0gMCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBncmlkW3hdW3ldICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIGdyaWRbeF1beV0uaGl0KCk7XHJcbiAgICAgIGdyaWRbeF1beV0gPSAxO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyaWRbeF1beV0gPSAxO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcclxuICAgIHJldHVybiBzaGlwcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgY3Vyci5pc1N1bmsoKSwgdHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZ3JpZCwgcGxhY2VTaGlwLCBhdHRhY2ssIGFsbFN1bmsgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkO1xyXG4iLCJpbXBvcnQgeyBwbGF5ZXIsIGJvdCB9IGZyb20gXCIuLi9zcmMvcGxheWVyXCI7XHJcbmltcG9ydCBib2FyZCBmcm9tIFwiLi4vc3JjL2dhbWVib2FyZFwiO1xyXG5pbXBvcnQgZG9tU3R1ZmYgZnJvbSBcIi4vZG9tU3R1ZmZcIjtcclxuXHJcbmNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllclwiKTtcclxuY29uc3QgYm90R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm90XCIpO1xyXG5cclxuY29uc3QgcGxheWVyQm9hcmQgPSBib2FyZCgpO1xyXG5jb25zdCBib3RCb2FyZCA9IGJvYXJkKCk7XHJcblxyXG5jb25zdCBwID0gcGxheWVyKHBsYXllckJvYXJkLCBib3RCb2FyZCk7XHJcbmNvbnN0IGIgPSBib3QoYm90Qm9hcmQsIHBsYXllckJvYXJkKTtcclxuXHJcbmNvbnN0IGJvdEF0dGFjayA9ICgpID0+IHtcclxuICBsZXQgYXR0YWNrT2JqID0gbnVsbDtcclxuICB3aGlsZSAoYXR0YWNrT2JqID09PSBudWxsKSBhdHRhY2tPYmogPSBiLmF0dGFjaygpO1xyXG4gIHJldHVybiBkb21TdHVmZi5hdHRhY2soZmFsc2UsIGF0dGFja09iai54LCBhdHRhY2tPYmoueSwgYXR0YWNrT2JqLnJlcyk7XHJcbn07XHJcblxyXG5jb25zdCBwbGF5ZXJBdHRhY2sgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHggPSBlLnRhcmdldC5kYXRhc2V0Lng7XHJcbiAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQueTtcclxuXHJcbiAgZS50YXJnZXQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gIHJldHVybiBkb21TdHVmZi5hdHRhY2sodHJ1ZSwgeCwgeSwgcC5hdHRhY2soeCwgeSkpO1xyXG59O1xyXG5cclxuY29uc3QgcGxheSA9IChlKSA9PiB7XHJcbiAgbGV0IHg7XHJcbiAgeCA9IHBsYXllckF0dGFjayhlKTtcclxuICBpZiAoeCAmJiBiLmZpbmlzaGVkKCkpIGNvbnNvbGUubG9nKFwiUCB3b25cIik7XHJcbiAgeCA9IGJvdEF0dGFjaygpO1xyXG4gIGlmICh4ICYmIHAuZmluaXNoZWQoKSkgY29uc29sZS5sb2coXCJCIHdvblwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgcGxheSwgcCwgYiwgcGxheWVyQm9hcmQsIGJvdEJvYXJkIH07XHJcbiIsImZ1bmN0aW9uIHBsYXllcihib2FyZCwgb3Bwb25lbnQpIHtcclxuICBjb25zdCBhdHRhY2sgPSAoeCwgeSkgPT4ge1xyXG4gICAgcmV0dXJuIG9wcG9uZW50LmF0dGFjayh4LCB5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgdmVydCkgPT4ge1xyXG4gICAgcmV0dXJuIGJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5LCB2ZXJ0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaW5pc2hlZCA9ICgpID0+IGJvYXJkLmFsbFN1bmsoKTtcclxuXHJcbiAgcmV0dXJuIHsgYXR0YWNrLCBwbGFjZVNoaXAsIGZpbmlzaGVkIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvdChib2FyZCwgb3Bwb25lbnQpIHtcclxuICBjb25zdCBmaWxsZWQgPSBbXTtcclxuXHJcbiAgY29uc3QgaXNJbkZpbGxlZCA9ICh4LCB5KSA9PiB7XHJcbiAgICByZXR1cm4gZmlsbGVkLmZpbmRJbmRleCgocGFpcikgPT4gcGFpclswXSA9PT0geCAmJiBwYWlyWzFdID09PSB5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc0Z1bGwgPSAoKSA9PiBmaWxsZWQubGVuZ3RoID4gOTk7XHJcblxyXG4gIGNvbnN0IGF0dGFjayA9ICgpID0+IHtcclxuICAgIGlmIChpc0Z1bGwoKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgbGV0IHgsIHk7XHJcblxyXG4gICAgd2hpbGUgKCFmbGFnKSB7XHJcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcblxyXG4gICAgICBmbGFnID0gaXNJbkZpbGxlZCh4LCB5KSA9PT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbGVkLnB1c2goW3gsIHldKTtcclxuICAgIGNvbnN0IHJlcyA9IG9wcG9uZW50LmF0dGFjayh4LCB5KTtcclxuICAgIHJldHVybiB7IHgsIHksIHJlcyB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCB2ZXJ0KSA9PiB7XHJcbiAgICByZXR1cm4gYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHksIHZlcnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbmlzaGVkID0gKCkgPT4gYm9hcmQuYWxsU3VuaygpO1xyXG5cclxuICByZXR1cm4geyBhdHRhY2ssIGZpbGxlZCwgcGxhY2VTaGlwLCBmaW5pc2hlZCB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBwbGF5ZXIsIGJvdCB9O1xyXG4iLCJmdW5jdGlvbiBzaGlwRmFjdG9yeShsKSB7XHJcbiAgbGV0IGxlbmd0aCA9IGw7XHJcbiAgbGV0IGhpdENvdW50ID0gMDtcclxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRDb3VudCA+PSBsZW5ndGg7XHJcbiAgY29uc3QgaGl0ID0gKCkgPT4gKGhpdENvdW50ICs9IDEpO1xyXG4gIHJldHVybiB7IGlzU3VuaywgaGl0LCBsZW5ndGggfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcEZhY3Rvcnk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRvbU1ldGhvZHMgZnJvbSBcIi4vZG9tU3R1ZmZcIjtcclxuaW1wb3J0IHBpcGUgZnJvbSBcIi4vcGlwZVwiO1xyXG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcclxuXHJcbnBpcGUuYi5wbGFjZVNoaXAoc2hpcCgyKSwgMiwgMywgdHJ1ZSk7XHJcbnBpcGUucC5wbGFjZVNoaXAoc2hpcCg1KSwgNCwgNCk7XHJcblxyXG5jb25zb2xlLmxvZyhwaXBlLnBsYXllckJvYXJkLmdyaWQpO1xyXG5jb25zb2xlLmxvZyhwaXBlLmJvdEJvYXJkLmdyaWQpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=