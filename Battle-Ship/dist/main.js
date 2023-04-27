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

const clearBoards = () => {
  clearPopups();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2RvbVN0dWZmLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXksIG5ld0dhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG5jb25zdCBwbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllclwiKTtcclxuY29uc3QgYm90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3RcIik7XHJcblxyXG5jb25zdCBjbGVhclBvcHVwcyA9ICgpID0+IHtcclxuICBjb25zdCBwb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwc1wiKTtcclxuICBwb3B1cHMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wb3B1cFwiKTtcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyQm9hcmRzID0gKCkgPT4ge1xyXG4gIGNsZWFyUG9wdXBzKCk7XHJcbiAgcGxheWVyLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBib3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG59O1xyXG5cclxuY29uc3QgYXR0YWNrID0gKGlzUGxheWVyLCB4LCB5LCBpc0hpdCkgPT4ge1xyXG4gIGNvbnN0IGJvYXJkID0gaXNQbGF5ZXIgPyBib3QgOiBwbGF5ZXI7XHJcbiAgY29uc3QgY2VsbCA9IGJvYXJkXHJcbiAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PScke3h9J11gKVxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXk9JyR7eX0nXWApO1xyXG5cclxuICBpZiAoaXNIaXQpIHtcclxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGlzQXR0YWNrZWQgPSAoeCwgeSwgaXNQbGF5ZXIpID0+IHtcclxuICBjb25zdCBib2FyZCA9IGlzUGxheWVyID8gcGxheWVyIDogYm90O1xyXG4gIGNvbnN0IGNlbGwgPSBib2FyZFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHt4fSddYClcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS15PScke3l9J11gKTtcclxuXHJcbiAgcmV0dXJuIGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzc1wiKSB8fCBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYWNlU2hpcE9uTWFwID0gKGFyciwgY2xhc3NuYW1lKSA9PiB7XHJcbiAgY29uc3QgYm9hcmQgPSBjbGFzc25hbWUgPT09IFwic2hpcFwiID8gcGxheWVyIDogYm90O1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XHJcbiAgYXJyLmZvckVhY2goKGNlbGxEYXRhKSA9PiB7XHJcbiAgICBjb25zdCBjZWxsID0gYm9hcmRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtjZWxsRGF0YVswXX0nXWApXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS15PScke2NlbGxEYXRhWzFdfSddYCk7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoY2xhc3NuYW1lKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNoaXBDZWxscyA9ICh1c2VyVGV4dCkgPT4ge1xyXG4gIGxldCB2YWwgPSAwO1xyXG4gIGNvbnN0IGJvYXJkID0gdXNlclRleHQgPT09IFwicGxheWVyXCIgPyBwbGF5ZXIgOiBib3Q7XHJcbiAgY29uc3Qgcm93cyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm93XCIpO1xyXG5cclxuICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgY29uc3QgY2VsbHMgPSByb3cucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xyXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcHAtc2hpcFwiKSB8fFxyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKVxyXG4gICAgICApXHJcbiAgICAgICAgdmFsICs9IDE7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHZhbDtcclxufTtcclxuXHJcbmNvbnN0IHJlc2V0Qm9hcmQgPSAodG9DaGFuZ2UpID0+IHtcclxuICBjb25zdCBib2FyZCA9IHRvQ2hhbmdlID09PSBcInBsYXllclwiID8gcGxheWVyIDogYm90O1xyXG5cclxuICBib2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICByb3cuZGF0YXNldC5yb3cgPSBpO1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgY2VsbC5kYXRhc2V0LnggPSBpO1xyXG4gICAgICBjZWxsLmRhdGFzZXQueSA9IGo7XHJcbiAgICAgIGlmIChib2FyZCA9PT0gYm90KSB7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNraW5nLWNlbGxcIik7XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgIH1cclxuICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2hvd1dpbm5lciA9ICh0ZXh0ID0gXCJcIikgPT4ge1xyXG4gIGNvbnN0IHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBzXCIpO1xyXG4gIGNvbnN0IHdpbm5lclRpdGxlID0gcG9wdXBzLnF1ZXJ5U2VsZWN0b3IoXCIjd2lubmVyXCIpO1xyXG5cclxuICB3aW5uZXJUaXRsZS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcG9wdXBzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcG9wdXBcIik7XHJcbn07XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5ldy1nYW1lXCIpXHJcbiAgLmZvckVhY2goKG5vZGUpID0+IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld0dhbWUpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhdHRhY2ssXHJcbiAgaXNBdHRhY2tlZCxcclxuICBwbGFjZVNoaXBPbk1hcCxcclxuICBjbGVhckJvYXJkcyxcclxuICBzaGlwQ2VsbHMsXHJcbiAgcmVzZXRCb2FyZCxcclxuICBzaG93V2lubmVyLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBwbGF5ZXIsIGJvdCB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCBkb21TdHVmZiBmcm9tIFwiLi9kb21TdHVmZlwiO1xyXG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xyXG5cclxuY29uc3QgcGxheWVyQm9hcmQgPSBib2FyZCgpO1xyXG5jb25zdCBib3RCb2FyZCA9IGJvYXJkKCk7XHJcblxyXG5jb25zdCBwID0gcGxheWVyKHBsYXllckJvYXJkLCBib3RCb2FyZCk7XHJcbmNvbnN0IGIgPSBib3QoYm90Qm9hcmQsIHBsYXllckJvYXJkKTtcclxuXHJcbmNvbnN0IHN1bUFycmF5ID0gKGFycikgPT4ge1xyXG4gIHJldHVybiBhcnIucmVkdWNlKChwcmV2LCBjdXJyKSA9PiAocHJldiArPSBjdXJyKSwgMCk7XHJcbn07XHJcblxyXG5jb25zdCBib3RGaW5kQ2VsbCA9ICh4LCB5KSA9PiBib3RCb2FyZC5ncmlkW3hdW3ldO1xyXG5cclxuY29uc3QgYm90QXR0YWNrID0gKCkgPT4ge1xyXG4gIGxldCBhdHRhY2tPYmogPSBudWxsO1xyXG4gIHdoaWxlIChhdHRhY2tPYmogPT09IG51bGwpIGF0dGFja09iaiA9IGIuYXR0YWNrKCk7XHJcbiAgcmV0dXJuIGRvbVN0dWZmLmF0dGFjayhmYWxzZSwgYXR0YWNrT2JqLngsIGF0dGFja09iai55LCBhdHRhY2tPYmoucmVzKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYXllckF0dGFjayA9IChlKSA9PiB7XHJcbiAgY29uc3QgeCA9IGUudGFyZ2V0LmRhdGFzZXQueDtcclxuICBjb25zdCB5ID0gZS50YXJnZXQuZGF0YXNldC55O1xyXG5cclxuICByZXR1cm4gZG9tU3R1ZmYuYXR0YWNrKHRydWUsIHgsIHksIHAuYXR0YWNrKHgsIHkpKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYXkgPSAoZSkgPT4ge1xyXG4gIGxldCB4O1xyXG4gIHggPSBwbGF5ZXJBdHRhY2soZSk7XHJcbiAgaWYgKHggJiYgYi5maW5pc2hlZCgpKSB7XHJcbiAgICBkb21TdHVmZi5zaG93V2lubmVyKFwiWW91IHdvblwiKTtcclxuICB9XHJcbiAgeCA9IGJvdEF0dGFjaygpO1xyXG4gIGlmICh4ICYmIHAuZmluaXNoZWQoKSkge1xyXG4gICAgZG9tU3R1ZmYuc2hvd1dpbm5lcihcIllvdSBsb3N0XCIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCB2ZXJ0KSA9PiB7XHJcbiAgY29uc3QgY2VsbHNQbGFjZWQgPSBwLnBsYWNlU2hpcChzaGlwLCB4LCB5LCB2ZXJ0KTtcclxuICBpZiAoQXJyYXkuaXNBcnJheShjZWxsc1BsYWNlZCkgPT09IGZhbHNlKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW50IHBsYWNlIHNoaXBcIik7XHJcbiAgZG9tU3R1ZmYucGxhY2VTaGlwT25NYXAoY2VsbHNQbGFjZWQsIFwic2hpcFwiKTtcclxufTtcclxuXHJcbmNvbnN0IHJhbmRvbVBsYWNlID0gKHVzZXIsIHNoaXApID0+IHtcclxuICBjb25zdCBjZWxsc1BsYWNlZCA9IHVzZXIucGxhY2VTaGlwUmFuZG9tKHNoaXApO1xyXG4gIGNvbnN0IHVzZXJUZXh0ID0gdXNlciA9PT0gcCA/IFwic2hpcFwiIDogXCJvcHAtc2hpcFwiO1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShjZWxsc1BsYWNlZCkgPT09IGZhbHNlKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW50IHBsYWNlIHNoaXBcIik7XHJcbiAgZG9tU3R1ZmYucGxhY2VTaGlwT25NYXAoY2VsbHNQbGFjZWQsIHVzZXJUZXh0KTtcclxufTtcclxuXHJcbmNvbnN0IHJhbmRvbUFsbFBsYWNlID0gKHVzZXIsIGFycikgPT4ge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGFycikgPT09IGZhbHNlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBhcnJheVwiKTtcclxuXHJcbiAgY29uc3Qgc3VtID0gc3VtQXJyYXkoYXJyKTtcclxuICBsZXQgcmVzID0gMDtcclxuICBjb25zdCB1c2VyVGV4dCA9IHVzZXIgPT09IHAgPyBcInBsYXllclwiIDogXCJib3RcIjtcclxuXHJcbiAgd2hpbGUgKHJlcyAhPT0gc3VtKSB7XHJcbiAgICB1c2VyLnJlc2V0KCk7XHJcbiAgICBkb21TdHVmZi5yZXNldEJvYXJkKHVzZXJUZXh0KTtcclxuICAgIGFyci5mb3JFYWNoKCh4KSA9PiByYW5kb21QbGFjZSh1c2VyLCBzaGlwKHgpKSk7XHJcbiAgICByZXMgPSBkb21TdHVmZi5zaGlwQ2VsbHModXNlclRleHQpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XHJcbiAgZG9tU3R1ZmYuY2xlYXJCb2FyZHMoKTtcclxuICByYW5kb21BbGxQbGFjZShwLCBbMiwgMywgMywgNCwgNV0pO1xyXG4gIHJhbmRvbUFsbFBsYWNlKGIsIFsyLCAzLCAzLCA0LCA1XSk7XHJcbn07XHJcblxyXG5jb25zdCBvYmogPSB7IHAsIGIsIHBsYXllckJvYXJkLCBib3RCb2FyZCB9O1xyXG5cclxuZXhwb3J0IHsgcGxheSwgb2JqLCBwbGFjZVNoaXAsIHJhbmRvbVBsYWNlLCBuZXdHYW1lLCBib3RGaW5kQ2VsbCB9O1xyXG4iLCJmdW5jdGlvbiBnYW1lYm9hcmQoTUFYID0gMTApIHtcclxuICBsZXQgZ3JpZCA9IFtdO1xyXG4gIGxldCBzaGlwcyA9IFtdO1xyXG5cclxuICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgZ3JpZCA9IFtdO1xyXG4gICAgc2hpcHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1BWDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE1BWDsgaisrKSB7XHJcbiAgICAgICAgcm93LnB1c2goMCk7XHJcbiAgICAgIH1cclxuICAgICAgZ3JpZC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVzZXRCb2FyZCgpO1xyXG5cclxuICBjb25zdCBpc0ZyZWVTcGFjZSA9ICh4LCB5LCBsLCB2ZXJ0KSA9PiB7XHJcbiAgICBpZiAoIXZlcnQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbDsgaSsrKSBpZiAoZ3JpZFt4XVtpXSAhPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbDsgaSsrKSBpZiAoZ3JpZFt4XVtpXSAhPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIHZlcnQgPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgY2VsbHMgPSBbXTtcclxuXHJcbiAgICBpZiAoIWlzRnJlZVNwYWNlKHgsIHksIHNoaXAubGVuZ3RoLCB2ZXJ0KSkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoIXZlcnQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdyaWRbeF1baV0gPSBzaGlwO1xyXG4gICAgICAgIGNlbGxzLnB1c2goW3gsIGldKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdyaWRbaV1beV0gPSBzaGlwO1xyXG4gICAgICAgIGNlbGxzLnB1c2goW2ksIHldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hpcHMucHVzaChzaGlwKTtcclxuICAgIHJldHVybiBjZWxscztcclxuICB9O1xyXG5cclxuICBjb25zdCBhdHRhY2sgPSAoeCwgeSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBncmlkW3hdW3ldICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIGdyaWRbeF1beV0uaGl0KCk7XHJcbiAgICAgIGdyaWRbeF1beV0gPSAxO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyaWRbeF1beV0gPSAxO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcclxuICAgIHJldHVybiBzaGlwcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgY3Vyci5pc1N1bmsoKSwgdHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmFuZG9tQm9vbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgcmV0dXJuIHZhbCA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwbGFjZVJhbmRvbSA9IChzaGlwKSA9PiB7XHJcbiAgICBsZXQgY2VsbHMgPSBudWxsO1xyXG4gICAgd2hpbGUgKGNlbGxzID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIGNvbnN0IHZlcnQgPSByYW5kb21Cb29sKCk7XHJcblxyXG4gICAgICBjZWxscyA9IHBsYWNlU2hpcChzaGlwLCB4LCB5LCB2ZXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2VsbHM7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZ3JpZCwgcGxhY2VTaGlwLCBhdHRhY2ssIGFsbFN1bmssIHJlc2V0Qm9hcmQsIHBsYWNlUmFuZG9tIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDtcclxuIiwiZnVuY3Rpb24gcGxheWVyKGJvYXJkLCBvcHBvbmVudCkge1xyXG4gIGNvbnN0IGF0dGFjayA9ICh4LCB5KSA9PiB7XHJcbiAgICByZXR1cm4gb3Bwb25lbnQuYXR0YWNrKHgsIHkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCB2ZXJ0KSA9PiB7XHJcbiAgICByZXR1cm4gYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHksIHZlcnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcFJhbmRvbSA9IChzaGlwKSA9PiBib2FyZC5wbGFjZVJhbmRvbShzaGlwKTtcclxuXHJcbiAgY29uc3QgZmluaXNoZWQgPSAoKSA9PiBib2FyZC5hbGxTdW5rKCk7XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4gYm9hcmQucmVzZXRCb2FyZCgpO1xyXG5cclxuICByZXR1cm4geyBhdHRhY2ssIHBsYWNlU2hpcCwgZmluaXNoZWQsIHJlc2V0LCBwbGFjZVNoaXBSYW5kb20gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYm90KGJvYXJkLCBvcHBvbmVudCkge1xyXG4gIGxldCBmaWxsZWQgPSBbXTtcclxuXHJcbiAgY29uc3QgaXNJbkZpbGxlZCA9ICh4LCB5KSA9PiB7XHJcbiAgICByZXR1cm4gZmlsbGVkLmZpbmRJbmRleCgocGFpcikgPT4gcGFpclswXSA9PT0geCAmJiBwYWlyWzFdID09PSB5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc0Z1bGwgPSAoKSA9PiBmaWxsZWQubGVuZ3RoID4gOTk7XHJcblxyXG4gIGNvbnN0IGF0dGFjayA9ICgpID0+IHtcclxuICAgIGlmIChpc0Z1bGwoKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgbGV0IHgsIHk7XHJcblxyXG4gICAgd2hpbGUgKCFmbGFnKSB7XHJcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcblxyXG4gICAgICBmbGFnID0gaXNJbkZpbGxlZCh4LCB5KSA9PT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbGVkLnB1c2goW3gsIHldKTtcclxuICAgIGNvbnN0IHJlcyA9IG9wcG9uZW50LmF0dGFjayh4LCB5KTtcclxuICAgIHJldHVybiB7IHgsIHksIHJlcyB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcFJhbmRvbSA9IChzaGlwKSA9PiBib2FyZC5wbGFjZVJhbmRvbShzaGlwKTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBib2FyZC5yZXNldEJvYXJkKCk7XHJcbiAgICBmaWxsZWQgPSBbXTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaW5pc2hlZCA9ICgpID0+IGJvYXJkLmFsbFN1bmsoKTtcclxuXHJcbiAgcmV0dXJuIHsgYXR0YWNrLCBmaWxsZWQsIHBsYWNlU2hpcFJhbmRvbSwgZmluaXNoZWQsIHJlc2V0IH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IHBsYXllciwgYm90IH07XHJcbiIsImZ1bmN0aW9uIHNoaXBGYWN0b3J5KGwpIHtcclxuICBsZXQgbGVuZ3RoID0gbDtcclxuICBsZXQgaGl0Q291bnQgPSAwO1xyXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGhpdENvdW50ID49IGxlbmd0aDtcclxuICBjb25zdCBoaXQgPSAoKSA9PiAoaGl0Q291bnQgKz0gMSk7XHJcbiAgcmV0dXJuIHsgaXNTdW5rLCBoaXQsIGxlbmd0aCB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaGlwRmFjdG9yeTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZG9tTWV0aG9kcyBmcm9tIFwiLi9kb21TdHVmZlwiO1xyXG5pbXBvcnQgeyBwbGF5LCBvYmosIHBsYWNlU2hpcCwgcmFuZG9tUGxhY2UsIG5ld0dhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xyXG5cclxubmV3R2FtZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=