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
/* harmony export */   "obj": () => (/* binding */ obj),
/* harmony export */   "placeShip": () => (/* binding */ placeShip),
/* harmony export */   "play": () => (/* binding */ play),
/* harmony export */   "randomPlace": () => (/* binding */ randomPlace)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");




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
  if (x && b.finished()) console.log("P won");
  x = botAttack();
  if (x && p.finished()) console.log("B won");
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

const clearGame = () => {
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].clearBoards();
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");





(0,_game__WEBPACK_IMPORTED_MODULE_1__.placeShip)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(2), 2, 3, true);
(0,_game__WEBPACK_IMPORTED_MODULE_1__.placeShip)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(5), 4, 4);
(0,_game__WEBPACK_IMPORTED_MODULE_1__.placeShip)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(3), 7, 3);

(0,_game__WEBPACK_IMPORTED_MODULE_1__.randomPlace)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(2));
(0,_game__WEBPACK_IMPORTED_MODULE_1__.randomPlace)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(4));
(0,_game__WEBPACK_IMPORTED_MODULE_1__.randomPlace)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(5));
(0,_game__WEBPACK_IMPORTED_MODULE_1__.randomPlace)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(4));
(0,_game__WEBPACK_IMPORTED_MODULE_1__.randomPlace)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(2));

_domStuff__WEBPACK_IMPORTED_MODULE_0__["default"].clearBoards();

// console.log(obj.playerBoard.grid);
// console.log(obj.botBoard.grid);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ3VCOzs7Ozs7Ozs7Ozs7Ozs7QUN6RXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQ1IzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ3VCO0FBQ3pCO0FBQ0Q7QUFDakM7QUFDQSxnREFBUyxDQUFDLHdEQUFJO0FBQ2QsZ0RBQVMsQ0FBQyx3REFBSTtBQUNkLGdEQUFTLENBQUMsd0RBQUk7QUFDZDtBQUNBLGtEQUFXLENBQUMsd0RBQUk7QUFDaEIsa0RBQVcsQ0FBQyx3REFBSTtBQUNoQixrREFBVyxDQUFDLHdEQUFJO0FBQ2hCLGtEQUFXLENBQUMsd0RBQUk7QUFDaEIsa0RBQVcsQ0FBQyx3REFBSTtBQUNoQjtBQUNBLDZEQUFzQjtBQUN0QjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF5IH0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxuY29uc3QgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJcIik7XHJcbmNvbnN0IGJvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm90XCIpO1xyXG5cclxuY29uc3Qgc2V0Qm9hcmQgPSAoKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBjb25zdCBwbGF5ZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGxheWVyUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICBwbGF5ZXJSb3cuZGF0YXNldC5yb3cgPSBpO1xyXG5cclxuICAgIGNvbnN0IGJvdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3RSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIGJvdFJvdy5kYXRhc2V0LnJvdyA9IGk7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgIGNvbnN0IHBsYXllckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwbGF5ZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICBwbGF5ZXJDZWxsLmRhdGFzZXQueCA9IGk7XHJcbiAgICAgIHBsYXllckNlbGwuZGF0YXNldC55ID0gajtcclxuXHJcbiAgICAgIGNvbnN0IGJvdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBib3RDZWxsLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tpbmctY2VsbFwiKTtcclxuICAgICAgYm90Q2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgYm90Q2VsbC5kYXRhc2V0LnggPSBpO1xyXG4gICAgICBib3RDZWxsLmRhdGFzZXQueSA9IGo7XHJcblxyXG4gICAgICBib3RDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5KTtcclxuXHJcbiAgICAgIHBsYXllclJvdy5hcHBlbmRDaGlsZChwbGF5ZXJDZWxsKTtcclxuICAgICAgYm90Um93LmFwcGVuZENoaWxkKGJvdENlbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXllci5hcHBlbmRDaGlsZChwbGF5ZXJSb3cpO1xyXG4gICAgYm90LmFwcGVuZENoaWxkKGJvdFJvdyk7XHJcbiAgfVxyXG59O1xyXG5cclxuc2V0Qm9hcmQoKTtcclxuXHJcbmNvbnN0IGNsZWFyQm9hcmRzID0gKCkgPT4ge1xyXG4gIHBsYXllci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgYm90LnRleHRDb250ZW50ID0gXCJcIjtcclxufTtcclxuXHJcbmNvbnN0IGF0dGFjayA9IChpc1BsYXllciwgeCwgeSwgaXNIaXQpID0+IHtcclxuICBjb25zdCBib2FyZCA9IGlzUGxheWVyID8gYm90IDogcGxheWVyO1xyXG4gIGNvbnN0IGNlbGwgPSBib2FyZFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHt4fSddYClcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS15PScke3l9J11gKTtcclxuXHJcbiAgaWYgKGlzSGl0KSB7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBpc0F0dGFja2VkID0gKHgsIHksIGlzUGxheWVyKSA9PiB7XHJcbiAgY29uc3QgYm9hcmQgPSBpc1BsYXllciA/IHBsYXllciA6IGJvdDtcclxuICBjb25zdCBjZWxsID0gYm9hcmRcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7eH0nXWApXHJcbiAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEteT0nJHt5fSddYCk7XHJcblxyXG4gIHJldHVybiBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikgfHwgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIik7XHJcbn07XHJcblxyXG5jb25zdCBwbGFjZUZyaWVuZGx5ID0gKGFycikgPT4ge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGFycikgPT09IGZhbHNlKSByZXR1cm4gbnVsbDtcclxuICBhcnIuZm9yRWFjaCgoY2VsbERhdGEpID0+IHtcclxuICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXJcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtjZWxsRGF0YVswXX0nXWApXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS15PScke2NlbGxEYXRhWzFdfSddYCk7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBzZXRCb2FyZCwgYXR0YWNrLCBpc0F0dGFja2VkLCBwbGFjZUZyaWVuZGx5LCBjbGVhckJvYXJkcyB9O1xyXG4iLCJpbXBvcnQgeyBwbGF5ZXIsIGJvdCB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCBkb21TdHVmZiBmcm9tIFwiLi9kb21TdHVmZlwiO1xyXG5cclxuY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyXCIpO1xyXG5jb25zdCBib3RHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3RcIik7XHJcblxyXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGJvYXJkKCk7XHJcbmNvbnN0IGJvdEJvYXJkID0gYm9hcmQoKTtcclxuXHJcbmNvbnN0IHAgPSBwbGF5ZXIocGxheWVyQm9hcmQsIGJvdEJvYXJkKTtcclxuY29uc3QgYiA9IGJvdChib3RCb2FyZCwgcGxheWVyQm9hcmQpO1xyXG5cclxuY29uc3QgYm90QXR0YWNrID0gKCkgPT4ge1xyXG4gIGxldCBhdHRhY2tPYmogPSBudWxsO1xyXG4gIHdoaWxlIChhdHRhY2tPYmogPT09IG51bGwpIGF0dGFja09iaiA9IGIuYXR0YWNrKCk7XHJcbiAgcmV0dXJuIGRvbVN0dWZmLmF0dGFjayhmYWxzZSwgYXR0YWNrT2JqLngsIGF0dGFja09iai55LCBhdHRhY2tPYmoucmVzKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYXllckF0dGFjayA9IChlKSA9PiB7XHJcbiAgY29uc3QgeCA9IGUudGFyZ2V0LmRhdGFzZXQueDtcclxuICBjb25zdCB5ID0gZS50YXJnZXQuZGF0YXNldC55O1xyXG5cclxuICByZXR1cm4gZG9tU3R1ZmYuYXR0YWNrKHRydWUsIHgsIHksIHAuYXR0YWNrKHgsIHkpKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYXkgPSAoZSkgPT4ge1xyXG4gIGxldCB4O1xyXG4gIHggPSBwbGF5ZXJBdHRhY2soZSk7XHJcbiAgaWYgKHggJiYgYi5maW5pc2hlZCgpKSBjb25zb2xlLmxvZyhcIlAgd29uXCIpO1xyXG4gIHggPSBib3RBdHRhY2soKTtcclxuICBpZiAoeCAmJiBwLmZpbmlzaGVkKCkpIGNvbnNvbGUubG9nKFwiQiB3b25cIik7XHJcbn07XHJcblxyXG5jb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgdmVydCkgPT4ge1xyXG4gIGNvbnN0IGNlbGxzUGxhY2VkID0gcC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgdmVydCk7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2VsbHNQbGFjZWQpID09PSBmYWxzZSkgdGhyb3cgbmV3IEVycm9yKFwiQ2FudCBwbGFjZSBzaGlwXCIpO1xyXG4gIGRvbVN0dWZmLnBsYWNlRnJpZW5kbHkoY2VsbHNQbGFjZWQpO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tUGxhY2UgPSAoc2hpcCkgPT4ge1xyXG4gIGNvbnN0IGNlbGxQbGFjZWQgPSBiLnBsYWNlU2hpcChzaGlwKTtcclxuICBjb25zb2xlLmxvZyhjZWxsUGxhY2VkKTtcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyR2FtZSA9ICgpID0+IHtcclxuICBkb21TdHVmZi5jbGVhckJvYXJkcygpO1xyXG59O1xyXG5cclxuY29uc3Qgb2JqID0geyBwLCBiLCBwbGF5ZXJCb2FyZCwgYm90Qm9hcmQgfTtcclxuXHJcbmV4cG9ydCB7IHBsYXksIG9iaiwgcGxhY2VTaGlwLCByYW5kb21QbGFjZSB9O1xyXG4iLCJmdW5jdGlvbiBnYW1lYm9hcmQoTUFYID0gMTApIHtcclxuICBsZXQgZ3JpZCA9IFtdO1xyXG4gIGxldCBzaGlwcyA9IFtdO1xyXG5cclxuICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgZ3JpZCA9IFtdO1xyXG4gICAgc2hpcHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1BWDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE1BWDsgaisrKSB7XHJcbiAgICAgICAgcm93LnB1c2goMCk7XHJcbiAgICAgIH1cclxuICAgICAgZ3JpZC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVzZXRCb2FyZCgpO1xyXG5cclxuICBjb25zdCBpc0ZyZWVTcGFjZSA9ICh4LCB5LCBsLCB2ZXJ0KSA9PiB7XHJcbiAgICBpZiAoIXZlcnQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbDsgaSsrKSBpZiAoZ3JpZFt4XVtpXSAhPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbDsgaSsrKSBpZiAoZ3JpZFt4XVtpXSAhPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIHZlcnQgPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgY2VsbHMgPSBbXTtcclxuXHJcbiAgICBpZiAoIWlzRnJlZVNwYWNlKHgsIHksIHNoaXAubGVuZ3RoLCB2ZXJ0KSkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoIXZlcnQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdyaWRbeF1baV0gPSBzaGlwO1xyXG4gICAgICAgIGNlbGxzLnB1c2goW3gsIGldKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdyaWRbaV1beV0gPSBzaGlwO1xyXG4gICAgICAgIGNlbGxzLnB1c2goW2ksIHldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hpcHMucHVzaChzaGlwKTtcclxuICAgIHJldHVybiBjZWxscztcclxuICB9O1xyXG5cclxuICBjb25zdCBhdHRhY2sgPSAoeCwgeSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBncmlkW3hdW3ldICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIGdyaWRbeF1beV0uaGl0KCk7XHJcbiAgICAgIGdyaWRbeF1beV0gPSAxO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyaWRbeF1beV0gPSAxO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcclxuICAgIHJldHVybiBzaGlwcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgY3Vyci5pc1N1bmsoKSwgdHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZ3JpZCwgcGxhY2VTaGlwLCBhdHRhY2ssIGFsbFN1bmssIHJlc2V0Qm9hcmQgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkO1xyXG4iLCJmdW5jdGlvbiBwbGF5ZXIoYm9hcmQsIG9wcG9uZW50KSB7XHJcbiAgY29uc3QgYXR0YWNrID0gKHgsIHkpID0+IHtcclxuICAgIHJldHVybiBvcHBvbmVudC5hdHRhY2soeCwgeSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIHZlcnQpID0+IHtcclxuICAgIHJldHVybiBib2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgdmVydCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmluaXNoZWQgPSAoKSA9PiBib2FyZC5hbGxTdW5rKCk7XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4gYm9hcmQucmVzZXRCb2FyZCgpO1xyXG5cclxuICByZXR1cm4geyBhdHRhY2ssIHBsYWNlU2hpcCwgZmluaXNoZWQsIHJlc2V0IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvdChib2FyZCwgb3Bwb25lbnQpIHtcclxuICBsZXQgZmlsbGVkID0gW107XHJcblxyXG4gIGNvbnN0IGlzSW5GaWxsZWQgPSAoeCwgeSkgPT4ge1xyXG4gICAgcmV0dXJuIGZpbGxlZC5maW5kSW5kZXgoKHBhaXIpID0+IHBhaXJbMF0gPT09IHggJiYgcGFpclsxXSA9PT0geSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNGdWxsID0gKCkgPT4gZmlsbGVkLmxlbmd0aCA+IDk5O1xyXG5cclxuICBjb25zdCBhdHRhY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNGdWxsKCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgIGxldCB4LCB5O1xyXG5cclxuICAgIHdoaWxlICghZmxhZykge1xyXG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG5cclxuICAgICAgZmxhZyA9IGlzSW5GaWxsZWQoeCwgeSkgPT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxlZC5wdXNoKFt4LCB5XSk7XHJcbiAgICBjb25zdCByZXMgPSBvcHBvbmVudC5hdHRhY2soeCwgeSk7XHJcbiAgICByZXR1cm4geyB4LCB5LCByZXMgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCByYW5kb21Cb29sID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICByZXR1cm4gdmFsID09PSAwID8gZmFsc2UgOiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwKSA9PiB7XHJcbiAgICBsZXQgY2VsbFBsYWNlZCA9IG51bGw7XHJcbiAgICB3aGlsZSAoY2VsbFBsYWNlZCA9PT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICBjb25zdCB2ZXJ0ID0gcmFuZG9tQm9vbCgpO1xyXG5cclxuICAgICAgY2VsbFBsYWNlZCA9IGJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5LCB2ZXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2VsbFBsYWNlZDtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgIGJvYXJkLnJlc2V0Qm9hcmQoKTtcclxuICAgIGZpbGxlZCA9IFtdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbmlzaGVkID0gKCkgPT4gYm9hcmQuYWxsU3VuaygpO1xyXG5cclxuICByZXR1cm4geyBhdHRhY2ssIGZpbGxlZCwgcGxhY2VTaGlwLCBmaW5pc2hlZCB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBwbGF5ZXIsIGJvdCB9O1xyXG4iLCJmdW5jdGlvbiBzaGlwRmFjdG9yeShsKSB7XHJcbiAgbGV0IGxlbmd0aCA9IGw7XHJcbiAgbGV0IGhpdENvdW50ID0gMDtcclxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRDb3VudCA+PSBsZW5ndGg7XHJcbiAgY29uc3QgaGl0ID0gKCkgPT4gKGhpdENvdW50ICs9IDEpO1xyXG4gIHJldHVybiB7IGlzU3VuaywgaGl0LCBsZW5ndGggfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcEZhY3Rvcnk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRvbU1ldGhvZHMgZnJvbSBcIi4vZG9tU3R1ZmZcIjtcclxuaW1wb3J0IHsgcGxheSwgb2JqLCBwbGFjZVNoaXAsIHJhbmRvbVBsYWNlIH0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcclxuXHJcbnBsYWNlU2hpcChzaGlwKDIpLCAyLCAzLCB0cnVlKTtcclxucGxhY2VTaGlwKHNoaXAoNSksIDQsIDQpO1xyXG5wbGFjZVNoaXAoc2hpcCgzKSwgNywgMyk7XHJcblxyXG5yYW5kb21QbGFjZShzaGlwKDIpKTtcclxucmFuZG9tUGxhY2Uoc2hpcCg0KSk7XHJcbnJhbmRvbVBsYWNlKHNoaXAoNSkpO1xyXG5yYW5kb21QbGFjZShzaGlwKDQpKTtcclxucmFuZG9tUGxhY2Uoc2hpcCgyKSk7XHJcblxyXG5kb21NZXRob2RzLmNsZWFyQm9hcmRzKCk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhvYmoucGxheWVyQm9hcmQuZ3JpZCk7XHJcbi8vIGNvbnNvbGUubG9nKG9iai5ib3RCb2FyZC5ncmlkKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9