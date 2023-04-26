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

      botCell.addEventListener("click", _pipe__WEBPACK_IMPORTED_MODULE_0__.play);

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

const placeFriendly = (arr) => {
  if (Array.isArray(arr) === false) return null;
  arr.forEach((cellData) => {
    const cell = player
      .querySelector(`[data-row='${cellData[0]}']`)
      .querySelector(`[data-y='${cellData[1]}']`);
    cell.classList.add("ship");
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ setBoard, attack, isAttacked, placeFriendly });


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
/* harmony export */   "obj": () => (/* binding */ obj),
/* harmony export */   "placeShip": () => (/* binding */ placeShip),
/* harmony export */   "play": () => (/* binding */ play),
/* harmony export */   "randomPlace": () => (/* binding */ randomPlace)
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

const placeShip = (ship, x, y, vert) => {
  const cellsPlaced = p.placeShip(ship, x, y, vert);
  if (Array.isArray(cellsPlaced) === false) throw new Error("Cant place ship");
  _domStuff__WEBPACK_IMPORTED_MODULE_2__["default"].placeFriendly(cellsPlaced);
};

const randomPlace = (ship) => {
  const cellPlaced = b.placeShip(ship);
  console.log(cellPlaced);
};
const obj = { p, b, playerBoard, botBoard };




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





(0,_pipe__WEBPACK_IMPORTED_MODULE_1__.placeShip)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(2), 2, 3, true);
(0,_pipe__WEBPACK_IMPORTED_MODULE_1__.placeShip)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(5), 4, 4);
(0,_pipe__WEBPACK_IMPORTED_MODULE_1__.placeShip)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(3), 7, 3);

(0,_pipe__WEBPACK_IMPORTED_MODULE_1__.randomPlace)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(2));
(0,_pipe__WEBPACK_IMPORTED_MODULE_1__.randomPlace)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(5));
(0,_pipe__WEBPACK_IMPORTED_MODULE_1__.randomPlace)((0,_shipFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(2));

// console.log(obj.playerBoard.grid);
// console.log(obj.botBoard.grid);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDWDtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDUjNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDdUI7QUFDekI7QUFDRDtBQUNqQztBQUNBLGdEQUFTLENBQUMsd0RBQUk7QUFDZCxnREFBUyxDQUFDLHdEQUFJO0FBQ2QsZ0RBQVMsQ0FBQyx3REFBSTtBQUNkO0FBQ0Esa0RBQVcsQ0FBQyx3REFBSTtBQUNoQixrREFBVyxDQUFDLHdEQUFJO0FBQ2hCLGtEQUFXLENBQUMsd0RBQUk7QUFDaEI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvZG9tU3R1ZmYuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3BpcGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGxheSB9IGZyb20gXCIuL3BpcGVcIjtcclxuXHJcbmNvbnN0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyXCIpO1xyXG5jb25zdCBib3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvdFwiKTtcclxuXHJcbmNvbnN0IHNldEJvYXJkID0gKCkgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgY29uc3QgcGxheWVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBsYXllclJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgcGxheWVyUm93LmRhdGFzZXQucm93ID0gaTtcclxuXHJcbiAgICBjb25zdCBib3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm90Um93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICBib3RSb3cuZGF0YXNldC5yb3cgPSBpO1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICBjb25zdCBwbGF5ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcGxheWVyQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgcGxheWVyQ2VsbC5kYXRhc2V0LnggPSBpO1xyXG4gICAgICBwbGF5ZXJDZWxsLmRhdGFzZXQueSA9IGo7XHJcblxyXG4gICAgICBjb25zdCBib3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgYm90Q2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgYm90Q2VsbC5kYXRhc2V0LnggPSBpO1xyXG4gICAgICBib3RDZWxsLmRhdGFzZXQueSA9IGo7XHJcblxyXG4gICAgICBib3RDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5KTtcclxuXHJcbiAgICAgIHBsYXllclJvdy5hcHBlbmRDaGlsZChwbGF5ZXJDZWxsKTtcclxuICAgICAgYm90Um93LmFwcGVuZENoaWxkKGJvdENlbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXllci5hcHBlbmRDaGlsZChwbGF5ZXJSb3cpO1xyXG4gICAgYm90LmFwcGVuZENoaWxkKGJvdFJvdyk7XHJcbiAgfVxyXG59O1xyXG5cclxuc2V0Qm9hcmQoKTtcclxuXHJcbmNvbnN0IGF0dGFjayA9IChpc1BsYXllciwgeCwgeSwgaXNIaXQpID0+IHtcclxuICBjb25zdCBib2FyZCA9IGlzUGxheWVyID8gYm90IDogcGxheWVyO1xyXG4gIGNvbnN0IGNlbGwgPSBib2FyZFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHt4fSddYClcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS15PScke3l9J11gKTtcclxuXHJcbiAgaWYgKGlzSGl0KSB7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBpc0F0dGFja2VkID0gKHgsIHksIGlzUGxheWVyKSA9PiB7XHJcbiAgY29uc3QgYm9hcmQgPSBpc1BsYXllciA/IHBsYXllciA6IGJvdDtcclxuICBjb25zdCBjZWxsID0gYm9hcmRcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7eH0nXWApXHJcbiAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEteT0nJHt5fSddYCk7XHJcblxyXG4gIHJldHVybiBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikgfHwgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIik7XHJcbn07XHJcblxyXG5jb25zdCBwbGFjZUZyaWVuZGx5ID0gKGFycikgPT4ge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGFycikgPT09IGZhbHNlKSByZXR1cm4gbnVsbDtcclxuICBhcnIuZm9yRWFjaCgoY2VsbERhdGEpID0+IHtcclxuICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXJcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtjZWxsRGF0YVswXX0nXWApXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS15PScke2NlbGxEYXRhWzFdfSddYCk7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBzZXRCb2FyZCwgYXR0YWNrLCBpc0F0dGFja2VkLCBwbGFjZUZyaWVuZGx5IH07XHJcbiIsImZ1bmN0aW9uIGdhbWVib2FyZChNQVggPSAxMCkge1xyXG4gIGNvbnN0IGdyaWQgPSBbXTtcclxuICBjb25zdCBzaGlwcyA9IFtdO1xyXG5cclxuICAoKCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNQVg7IGkrKykge1xyXG4gICAgICBjb25zdCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBNQVg7IGorKykge1xyXG4gICAgICAgIHJvdy5wdXNoKDApO1xyXG4gICAgICB9XHJcbiAgICAgIGdyaWQucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcblxyXG4gIGNvbnN0IGlzRnJlZVNwYWNlID0gKHgsIHksIGwsIHZlcnQpID0+IHtcclxuICAgIGlmICghdmVydCkge1xyXG4gICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBsOyBpKyspIGlmIChncmlkW3hdW2ldICE9PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsOyBpKyspIGlmIChncmlkW3hdW2ldICE9PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgdmVydCA9IGZhbHNlKSA9PiB7XHJcbiAgICBjb25zdCBjZWxscyA9IFtdO1xyXG5cclxuICAgIGlmICghaXNGcmVlU3BhY2UoeCwgeSwgc2hpcC5sZW5ndGgsIHZlcnQpKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICghdmVydCkge1xyXG4gICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZ3JpZFt4XVtpXSA9IHNoaXA7XHJcbiAgICAgICAgY2VsbHMucHVzaChbeCwgaV0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZ3JpZFtpXVt5XSA9IHNoaXA7XHJcbiAgICAgICAgY2VsbHMucHVzaChbaSwgeV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgcmV0dXJuIGNlbGxzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGF0dGFjayA9ICh4ID0gMCwgeSA9IDApID0+IHtcclxuICAgIGlmICh0eXBlb2YgZ3JpZFt4XVt5XSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICBncmlkW3hdW3ldLmhpdCgpO1xyXG4gICAgICBncmlkW3hdW3ldID0gMTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBncmlkW3hdW3ldID0gMTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2hpcHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmIGN1cnIuaXNTdW5rKCksIHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGdyaWQsIHBsYWNlU2hpcCwgYXR0YWNrLCBhbGxTdW5rIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDtcclxuIiwiaW1wb3J0IHsgcGxheWVyLCBib3QgfSBmcm9tIFwiLi4vc3JjL3BsYXllclwiO1xyXG5pbXBvcnQgYm9hcmQgZnJvbSBcIi4uL3NyYy9nYW1lYm9hcmRcIjtcclxuaW1wb3J0IGRvbVN0dWZmIGZyb20gXCIuL2RvbVN0dWZmXCI7XHJcblxyXG5jb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJcIik7XHJcbmNvbnN0IGJvdEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvdFwiKTtcclxuXHJcbmNvbnN0IHBsYXllckJvYXJkID0gYm9hcmQoKTtcclxuY29uc3QgYm90Qm9hcmQgPSBib2FyZCgpO1xyXG5cclxuY29uc3QgcCA9IHBsYXllcihwbGF5ZXJCb2FyZCwgYm90Qm9hcmQpO1xyXG5jb25zdCBiID0gYm90KGJvdEJvYXJkLCBwbGF5ZXJCb2FyZCk7XHJcblxyXG5jb25zdCBib3RBdHRhY2sgPSAoKSA9PiB7XHJcbiAgbGV0IGF0dGFja09iaiA9IG51bGw7XHJcbiAgd2hpbGUgKGF0dGFja09iaiA9PT0gbnVsbCkgYXR0YWNrT2JqID0gYi5hdHRhY2soKTtcclxuICByZXR1cm4gZG9tU3R1ZmYuYXR0YWNrKGZhbHNlLCBhdHRhY2tPYmoueCwgYXR0YWNrT2JqLnksIGF0dGFja09iai5yZXMpO1xyXG59O1xyXG5cclxuY29uc3QgcGxheWVyQXR0YWNrID0gKGUpID0+IHtcclxuICBjb25zdCB4ID0gZS50YXJnZXQuZGF0YXNldC54O1xyXG4gIGNvbnN0IHkgPSBlLnRhcmdldC5kYXRhc2V0Lnk7XHJcblxyXG4gIGUudGFyZ2V0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICByZXR1cm4gZG9tU3R1ZmYuYXR0YWNrKHRydWUsIHgsIHksIHAuYXR0YWNrKHgsIHkpKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYXkgPSAoZSkgPT4ge1xyXG4gIGxldCB4O1xyXG4gIHggPSBwbGF5ZXJBdHRhY2soZSk7XHJcbiAgaWYgKHggJiYgYi5maW5pc2hlZCgpKSBjb25zb2xlLmxvZyhcIlAgd29uXCIpO1xyXG4gIHggPSBib3RBdHRhY2soKTtcclxuICBpZiAoeCAmJiBwLmZpbmlzaGVkKCkpIGNvbnNvbGUubG9nKFwiQiB3b25cIik7XHJcbn07XHJcblxyXG5jb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgdmVydCkgPT4ge1xyXG4gIGNvbnN0IGNlbGxzUGxhY2VkID0gcC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgdmVydCk7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2VsbHNQbGFjZWQpID09PSBmYWxzZSkgdGhyb3cgbmV3IEVycm9yKFwiQ2FudCBwbGFjZSBzaGlwXCIpO1xyXG4gIGRvbVN0dWZmLnBsYWNlRnJpZW5kbHkoY2VsbHNQbGFjZWQpO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tUGxhY2UgPSAoc2hpcCkgPT4ge1xyXG4gIGNvbnN0IGNlbGxQbGFjZWQgPSBiLnBsYWNlU2hpcChzaGlwKTtcclxuICBjb25zb2xlLmxvZyhjZWxsUGxhY2VkKTtcclxufTtcclxuY29uc3Qgb2JqID0geyBwLCBiLCBwbGF5ZXJCb2FyZCwgYm90Qm9hcmQgfTtcclxuXHJcbmV4cG9ydCB7IHBsYXksIG9iaiwgcGxhY2VTaGlwLCByYW5kb21QbGFjZSB9O1xyXG4iLCJmdW5jdGlvbiBwbGF5ZXIoYm9hcmQsIG9wcG9uZW50KSB7XHJcbiAgY29uc3QgYXR0YWNrID0gKHgsIHkpID0+IHtcclxuICAgIHJldHVybiBvcHBvbmVudC5hdHRhY2soeCwgeSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIHZlcnQpID0+IHtcclxuICAgIHJldHVybiBib2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgdmVydCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmluaXNoZWQgPSAoKSA9PiBib2FyZC5hbGxTdW5rKCk7XHJcblxyXG4gIHJldHVybiB7IGF0dGFjaywgcGxhY2VTaGlwLCBmaW5pc2hlZCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBib3QoYm9hcmQsIG9wcG9uZW50KSB7XHJcbiAgY29uc3QgZmlsbGVkID0gW107XHJcblxyXG4gIGNvbnN0IGlzSW5GaWxsZWQgPSAoeCwgeSkgPT4ge1xyXG4gICAgcmV0dXJuIGZpbGxlZC5maW5kSW5kZXgoKHBhaXIpID0+IHBhaXJbMF0gPT09IHggJiYgcGFpclsxXSA9PT0geSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNGdWxsID0gKCkgPT4gZmlsbGVkLmxlbmd0aCA+IDk5O1xyXG5cclxuICBjb25zdCBhdHRhY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNGdWxsKCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgIGxldCB4LCB5O1xyXG5cclxuICAgIHdoaWxlICghZmxhZykge1xyXG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG5cclxuICAgICAgZmxhZyA9IGlzSW5GaWxsZWQoeCwgeSkgPT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxlZC5wdXNoKFt4LCB5XSk7XHJcbiAgICBjb25zdCByZXMgPSBvcHBvbmVudC5hdHRhY2soeCwgeSk7XHJcbiAgICByZXR1cm4geyB4LCB5LCByZXMgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCByYW5kb21Cb29sID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICByZXR1cm4gdmFsID09PSAwID8gZmFsc2UgOiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwKSA9PiB7XHJcbiAgICBsZXQgY2VsbFBsYWNlZCA9IG51bGw7XHJcbiAgICB3aGlsZSAoY2VsbFBsYWNlZCA9PT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICBjb25zdCB2ZXJ0ID0gcmFuZG9tQm9vbCgpO1xyXG5cclxuICAgICAgY2VsbFBsYWNlZCA9IGJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5LCB2ZXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2VsbFBsYWNlZDtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaW5pc2hlZCA9ICgpID0+IGJvYXJkLmFsbFN1bmsoKTtcclxuXHJcbiAgcmV0dXJuIHsgYXR0YWNrLCBmaWxsZWQsIHBsYWNlU2hpcCwgZmluaXNoZWQgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgcGxheWVyLCBib3QgfTtcclxuIiwiZnVuY3Rpb24gc2hpcEZhY3RvcnkobCkge1xyXG4gIGxldCBsZW5ndGggPSBsO1xyXG4gIGxldCBoaXRDb3VudCA9IDA7XHJcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0Q291bnQgPj0gbGVuZ3RoO1xyXG4gIGNvbnN0IGhpdCA9ICgpID0+IChoaXRDb3VudCArPSAxKTtcclxuICByZXR1cm4geyBpc1N1bmssIGhpdCwgbGVuZ3RoIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNoaXBGYWN0b3J5O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkb21NZXRob2RzIGZyb20gXCIuL2RvbVN0dWZmXCI7XHJcbmltcG9ydCB7IHBsYXksIG9iaiwgcGxhY2VTaGlwLCByYW5kb21QbGFjZSB9IGZyb20gXCIuL3BpcGVcIjtcclxuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XHJcblxyXG5wbGFjZVNoaXAoc2hpcCgyKSwgMiwgMywgdHJ1ZSk7XHJcbnBsYWNlU2hpcChzaGlwKDUpLCA0LCA0KTtcclxucGxhY2VTaGlwKHNoaXAoMyksIDcsIDMpO1xyXG5cclxucmFuZG9tUGxhY2Uoc2hpcCgyKSk7XHJcbnJhbmRvbVBsYWNlKHNoaXAoNSkpO1xyXG5yYW5kb21QbGFjZShzaGlwKDIpKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKG9iai5wbGF5ZXJCb2FyZC5ncmlkKTtcclxuLy8gY29uc29sZS5sb2cob2JqLmJvdEJvYXJkLmdyaWQpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=