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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUNSM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNnQztBQUNsQztBQUNEO0FBQ2pDO0FBQ0EsOENBQU87QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF5LCBuZXdHYW1lLCBib3RGaW5kQ2VsbCB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbmNvbnN0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyXCIpO1xyXG5jb25zdCBib3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvdFwiKTtcclxuXHJcbmNvbnN0IHNldEJvYXJkID0gKCkgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgY29uc3QgcGxheWVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBsYXllclJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgcGxheWVyUm93LmRhdGFzZXQucm93ID0gaTtcclxuXHJcbiAgICBjb25zdCBib3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm90Um93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICBib3RSb3cuZGF0YXNldC5yb3cgPSBpO1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICBjb25zdCBwbGF5ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcGxheWVyQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgcGxheWVyQ2VsbC5kYXRhc2V0LnggPSBpO1xyXG4gICAgICBwbGF5ZXJDZWxsLmRhdGFzZXQueSA9IGo7XHJcblxyXG4gICAgICBjb25zdCBib3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgYm90Q2VsbC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNraW5nLWNlbGxcIik7XHJcbiAgICAgIGJvdENlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgIGJvdENlbGwuZGF0YXNldC54ID0gaTtcclxuICAgICAgYm90Q2VsbC5kYXRhc2V0LnkgPSBqO1xyXG5cclxuICAgICAgYm90Q2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheSk7XHJcblxyXG4gICAgICBwbGF5ZXJSb3cuYXBwZW5kQ2hpbGQocGxheWVyQ2VsbCk7XHJcbiAgICAgIGJvdFJvdy5hcHBlbmRDaGlsZChib3RDZWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXIuYXBwZW5kQ2hpbGQocGxheWVyUm93KTtcclxuICAgIGJvdC5hcHBlbmRDaGlsZChib3RSb3cpO1xyXG4gIH1cclxufTtcclxuXHJcbnNldEJvYXJkKCk7XHJcblxyXG5jb25zdCBjbGVhclBvcHVwcyA9ICgpID0+IHtcclxuICBjb25zdCBwb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwc1wiKTtcclxuICBwb3B1cHMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wb3B1cFwiKTtcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyQm9hcmRzID0gKCkgPT4ge1xyXG4gIGNsZWFyUG9wdXBzKCk7XHJcbiAgcGxheWVyLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBib3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG59O1xyXG5cclxuY29uc3QgYXR0YWNrID0gKGlzUGxheWVyLCB4LCB5LCBpc0hpdCkgPT4ge1xyXG4gIGNvbnN0IGJvYXJkID0gaXNQbGF5ZXIgPyBib3QgOiBwbGF5ZXI7XHJcbiAgY29uc3QgY2VsbCA9IGJvYXJkXHJcbiAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PScke3h9J11gKVxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXk9JyR7eX0nXWApO1xyXG5cclxuICBpZiAoaXNIaXQpIHtcclxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGlzQXR0YWNrZWQgPSAoeCwgeSwgaXNQbGF5ZXIpID0+IHtcclxuICBjb25zdCBib2FyZCA9IGlzUGxheWVyID8gcGxheWVyIDogYm90O1xyXG4gIGNvbnN0IGNlbGwgPSBib2FyZFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHt4fSddYClcclxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS15PScke3l9J11gKTtcclxuXHJcbiAgcmV0dXJuIGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzc1wiKSB8fCBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYWNlU2hpcE9uTWFwID0gKGFyciwgY2xhc3NuYW1lKSA9PiB7XHJcbiAgY29uc3QgYm9hcmQgPSBjbGFzc25hbWUgPT09IFwic2hpcFwiID8gcGxheWVyIDogYm90O1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XHJcbiAgYXJyLmZvckVhY2goKGNlbGxEYXRhKSA9PiB7XHJcbiAgICBjb25zdCBjZWxsID0gYm9hcmRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtjZWxsRGF0YVswXX0nXWApXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS15PScke2NlbGxEYXRhWzFdfSddYCk7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoY2xhc3NuYW1lKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNoaXBDZWxscyA9ICh1c2VyVGV4dCkgPT4ge1xyXG4gIGxldCB2YWwgPSAwO1xyXG4gIGNvbnN0IGJvYXJkID0gdXNlclRleHQgPT09IFwicGxheWVyXCIgPyBwbGF5ZXIgOiBib3Q7XHJcbiAgY29uc3Qgcm93cyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm93XCIpO1xyXG5cclxuICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgY29uc3QgY2VsbHMgPSByb3cucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xyXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcIm9wcC1zaGlwXCIpKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BwLXNoaXBcIikgfHxcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIilcclxuICAgICAgKVxyXG4gICAgICAgIHZhbCArPSAxO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHZhbCk7XHJcblxyXG4gIHJldHVybiB2YWw7XHJcbn07XHJcblxyXG5jb25zdCByZXNldEJvYXJkID0gKHRvQ2hhbmdlKSA9PiB7XHJcbiAgY29uc3QgYm9hcmQgPSB0b0NoYW5nZSA9PT0gXCJwbGF5ZXJcIiA/IHBsYXllciA6IGJvdDtcclxuXHJcbiAgY29uc29sZS5sb2codG9DaGFuZ2UpO1xyXG4gIGNvbnNvbGUubG9nKGJvYXJkKTtcclxuXHJcbiAgYm9hcmQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgcm93LmRhdGFzZXQucm93ID0gaTtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcclxuICAgICAgY2VsbC5kYXRhc2V0LnkgPSBqO1xyXG4gICAgICBpZiAoYm9hcmQgPT09IGJvdCkge1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImF0dGFja2luZy1jZWxsXCIpO1xyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9XHJcbiAgICBib2FyZC5hcHBlbmRDaGlsZChyb3cpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNob3dXaW5uZXIgPSAodGV4dCA9IFwiXCIpID0+IHtcclxuICBjb25zdCBwb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwc1wiKTtcclxuICBjb25zdCB3aW5uZXJUaXRsZSA9IHBvcHVwcy5xdWVyeVNlbGVjdG9yKFwiI3dpbm5lclwiKTtcclxuXHJcbiAgd2lubmVyVGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHBvcHVwcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXBvcHVwXCIpO1xyXG59O1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvckFsbChcIi5uZXctZ2FtZVwiKVxyXG4gIC5mb3JFYWNoKChub2RlKSA9PiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdHYW1lKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgc2V0Qm9hcmQsXHJcbiAgYXR0YWNrLFxyXG4gIGlzQXR0YWNrZWQsXHJcbiAgcGxhY2VTaGlwT25NYXAsXHJcbiAgY2xlYXJCb2FyZHMsXHJcbiAgc2hpcENlbGxzLFxyXG4gIHJlc2V0Qm9hcmQsXHJcbiAgc2hvd1dpbm5lcixcclxufTtcclxuIiwiaW1wb3J0IHsgcGxheWVyLCBib3QgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IGJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5pbXBvcnQgZG9tU3R1ZmYgZnJvbSBcIi4vZG9tU3R1ZmZcIjtcclxuaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcclxuXHJcbmNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllclwiKTtcclxuY29uc3QgYm90R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm90XCIpO1xyXG5cclxuY29uc3QgcGxheWVyQm9hcmQgPSBib2FyZCgpO1xyXG5jb25zdCBib3RCb2FyZCA9IGJvYXJkKCk7XHJcblxyXG5jb25zdCBwID0gcGxheWVyKHBsYXllckJvYXJkLCBib3RCb2FyZCk7XHJcbmNvbnN0IGIgPSBib3QoYm90Qm9hcmQsIHBsYXllckJvYXJkKTtcclxuXHJcbmNvbnN0IHN1bUFycmF5ID0gKGFycikgPT4ge1xyXG4gIHJldHVybiBhcnIucmVkdWNlKChwcmV2LCBjdXJyKSA9PiAocHJldiArPSBjdXJyKSwgMCk7XHJcbn07XHJcblxyXG5jb25zdCBib3RGaW5kQ2VsbCA9ICh4LCB5KSA9PiBib3RCb2FyZC5ncmlkW3hdW3ldO1xyXG5cclxuY29uc3QgYm90QXR0YWNrID0gKCkgPT4ge1xyXG4gIGxldCBhdHRhY2tPYmogPSBudWxsO1xyXG4gIHdoaWxlIChhdHRhY2tPYmogPT09IG51bGwpIGF0dGFja09iaiA9IGIuYXR0YWNrKCk7XHJcbiAgcmV0dXJuIGRvbVN0dWZmLmF0dGFjayhmYWxzZSwgYXR0YWNrT2JqLngsIGF0dGFja09iai55LCBhdHRhY2tPYmoucmVzKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYXllckF0dGFjayA9IChlKSA9PiB7XHJcbiAgY29uc3QgeCA9IGUudGFyZ2V0LmRhdGFzZXQueDtcclxuICBjb25zdCB5ID0gZS50YXJnZXQuZGF0YXNldC55O1xyXG5cclxuICByZXR1cm4gZG9tU3R1ZmYuYXR0YWNrKHRydWUsIHgsIHksIHAuYXR0YWNrKHgsIHkpKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYXkgPSAoZSkgPT4ge1xyXG4gIGxldCB4O1xyXG4gIHggPSBwbGF5ZXJBdHRhY2soZSk7XHJcbiAgaWYgKHggJiYgYi5maW5pc2hlZCgpKSB7XHJcbiAgICBkb21TdHVmZi5zaG93V2lubmVyKFwiUGxheWVyIHdvblwiKTtcclxuICB9XHJcbiAgeCA9IGJvdEF0dGFjaygpO1xyXG4gIGlmICh4ICYmIHAuZmluaXNoZWQoKSkge1xyXG4gICAgZG9tU3R1ZmYuc2hvd1dpbm5lcihcIkNvbXB1dGVyIHdvblwiKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgdmVydCkgPT4ge1xyXG4gIGNvbnN0IGNlbGxzUGxhY2VkID0gcC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgdmVydCk7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2VsbHNQbGFjZWQpID09PSBmYWxzZSkgdGhyb3cgbmV3IEVycm9yKFwiQ2FudCBwbGFjZSBzaGlwXCIpO1xyXG4gIGRvbVN0dWZmLnBsYWNlU2hpcE9uTWFwKGNlbGxzUGxhY2VkLCBcInNoaXBcIik7XHJcbn07XHJcblxyXG5jb25zdCByYW5kb21QbGFjZSA9ICh1c2VyLCBzaGlwKSA9PiB7XHJcbiAgY29uc3QgY2VsbHNQbGFjZWQgPSB1c2VyLnBsYWNlU2hpcFJhbmRvbShzaGlwKTtcclxuICBjb25zdCB1c2VyVGV4dCA9IHVzZXIgPT09IHAgPyBcInNoaXBcIiA6IFwib3BwLXNoaXBcIjtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2VsbHNQbGFjZWQpID09PSBmYWxzZSkgdGhyb3cgbmV3IEVycm9yKFwiQ2FudCBwbGFjZSBzaGlwXCIpO1xyXG4gIGRvbVN0dWZmLnBsYWNlU2hpcE9uTWFwKGNlbGxzUGxhY2VkLCB1c2VyVGV4dCk7XHJcbiAgY29uc29sZS5sb2coY2VsbHNQbGFjZWQpO1xyXG59O1xyXG5cclxuY29uc3QgcGxheWVyQWxsUGxhY2UgPSAoKSA9PiB7XHJcbiAgcC5yZXNldCgpO1xyXG4gIHBsYWNlU2hpcChzaGlwKDIpLCAyLCAzLCB0cnVlKTtcclxuICBwbGFjZVNoaXAoc2hpcCg1KSwgNCwgNCk7XHJcbiAgcGxhY2VTaGlwKHNoaXAoMyksIDcsIDMpO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tQWxsUGxhY2UgPSAodXNlciwgYXJyKSA9PiB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSA9PT0gZmFsc2UpIHRocm93IG5ldyBFcnJvcihcIk5vIGFycmF5XCIpO1xyXG5cclxuICBjb25zdCBzdW0gPSBzdW1BcnJheShhcnIpO1xyXG4gIGxldCByZXMgPSAwO1xyXG4gIGNvbnN0IHVzZXJUZXh0ID0gdXNlciA9PT0gcCA/IFwicGxheWVyXCIgOiBcImJvdFwiO1xyXG5cclxuICB3aGlsZSAocmVzICE9PSBzdW0pIHtcclxuICAgIHVzZXIucmVzZXQoKTtcclxuICAgIGRvbVN0dWZmLnJlc2V0Qm9hcmQodXNlclRleHQpO1xyXG4gICAgYXJyLmZvckVhY2goKHgpID0+IHJhbmRvbVBsYWNlKHVzZXIsIHNoaXAoeCkpKTtcclxuICAgIHJlcyA9IGRvbVN0dWZmLnNoaXBDZWxscyh1c2VyVGV4dCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XHJcbiAgZG9tU3R1ZmYuY2xlYXJCb2FyZHMoKTtcclxuICBkb21TdHVmZi5zZXRCb2FyZCgpO1xyXG4gIHJhbmRvbUFsbFBsYWNlKHAsIFsyLCAzLCAzLCA0LCA1XSk7XHJcbiAgcmFuZG9tQWxsUGxhY2UoYiwgWzIsIDMsIDMsIDQsIDVdKTtcclxufTtcclxuXHJcbmNvbnN0IG9iaiA9IHsgcCwgYiwgcGxheWVyQm9hcmQsIGJvdEJvYXJkIH07XHJcblxyXG5leHBvcnQgeyBwbGF5LCBvYmosIHBsYWNlU2hpcCwgcmFuZG9tUGxhY2UsIG5ld0dhbWUsIGJvdEZpbmRDZWxsIH07XHJcbiIsImZ1bmN0aW9uIGdhbWVib2FyZChNQVggPSAxMCkge1xyXG4gIGxldCBncmlkID0gW107XHJcbiAgbGV0IHNoaXBzID0gW107XHJcblxyXG4gIGNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XHJcbiAgICBncmlkID0gW107XHJcbiAgICBzaGlwcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTUFYOyBpKyspIHtcclxuICAgICAgY29uc3Qgcm93ID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgTUFYOyBqKyspIHtcclxuICAgICAgICByb3cucHVzaCgwKTtcclxuICAgICAgfVxyXG4gICAgICBncmlkLnB1c2gocm93KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXNldEJvYXJkKCk7XHJcblxyXG4gIGNvbnN0IGlzRnJlZVNwYWNlID0gKHgsIHksIGwsIHZlcnQpID0+IHtcclxuICAgIGlmICghdmVydCkge1xyXG4gICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBsOyBpKyspIGlmIChncmlkW3hdW2ldICE9PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsOyBpKyspIGlmIChncmlkW3hdW2ldICE9PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgdmVydCA9IGZhbHNlKSA9PiB7XHJcbiAgICBjb25zdCBjZWxscyA9IFtdO1xyXG5cclxuICAgIGlmICghaXNGcmVlU3BhY2UoeCwgeSwgc2hpcC5sZW5ndGgsIHZlcnQpKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICghdmVydCkge1xyXG4gICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZ3JpZFt4XVtpXSA9IHNoaXA7XHJcbiAgICAgICAgY2VsbHMucHVzaChbeCwgaV0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZ3JpZFtpXVt5XSA9IHNoaXA7XHJcbiAgICAgICAgY2VsbHMucHVzaChbaSwgeV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgcmV0dXJuIGNlbGxzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGF0dGFjayA9ICh4LCB5KSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGdyaWRbeF1beV0gIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgZ3JpZFt4XVt5XS5oaXQoKTtcclxuICAgICAgZ3JpZFt4XVt5XSA9IDE7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3JpZFt4XVt5XSA9IDE7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNoaXBzLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiAmJiBjdXJyLmlzU3VuaygpLCB0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByYW5kb21Cb29sID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICByZXR1cm4gdmFsID09PSAwID8gZmFsc2UgOiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlUmFuZG9tID0gKHNoaXApID0+IHtcclxuICAgIGxldCBjZWxscyA9IG51bGw7XHJcbiAgICB3aGlsZSAoY2VsbHMgPT09IG51bGwpIHtcclxuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgY29uc3QgdmVydCA9IHJhbmRvbUJvb2woKTtcclxuXHJcbiAgICAgIGNlbGxzID0gcGxhY2VTaGlwKHNoaXAsIHgsIHksIHZlcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjZWxscztcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBncmlkLCBwbGFjZVNoaXAsIGF0dGFjaywgYWxsU3VuaywgcmVzZXRCb2FyZCwgcGxhY2VSYW5kb20gfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkO1xyXG4iLCJmdW5jdGlvbiBwbGF5ZXIoYm9hcmQsIG9wcG9uZW50KSB7XHJcbiAgY29uc3QgYXR0YWNrID0gKHgsIHkpID0+IHtcclxuICAgIHJldHVybiBvcHBvbmVudC5hdHRhY2soeCwgeSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIHZlcnQpID0+IHtcclxuICAgIHJldHVybiBib2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgdmVydCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwUmFuZG9tID0gKHNoaXApID0+IGJvYXJkLnBsYWNlUmFuZG9tKHNoaXApO1xyXG5cclxuICBjb25zdCBmaW5pc2hlZCA9ICgpID0+IGJvYXJkLmFsbFN1bmsoKTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiBib2FyZC5yZXNldEJvYXJkKCk7XHJcblxyXG4gIHJldHVybiB7IGF0dGFjaywgcGxhY2VTaGlwLCBmaW5pc2hlZCwgcmVzZXQsIHBsYWNlU2hpcFJhbmRvbSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBib3QoYm9hcmQsIG9wcG9uZW50KSB7XHJcbiAgbGV0IGZpbGxlZCA9IFtdO1xyXG5cclxuICBjb25zdCBpc0luRmlsbGVkID0gKHgsIHkpID0+IHtcclxuICAgIHJldHVybiBmaWxsZWQuZmluZEluZGV4KChwYWlyKSA9PiBwYWlyWzBdID09PSB4ICYmIHBhaXJbMV0gPT09IHkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzRnVsbCA9ICgpID0+IGZpbGxlZC5sZW5ndGggPiA5OTtcclxuXHJcbiAgY29uc3QgYXR0YWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzRnVsbCgpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICBsZXQgeCwgeTtcclxuXHJcbiAgICB3aGlsZSAoIWZsYWcpIHtcclxuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuXHJcbiAgICAgIGZsYWcgPSBpc0luRmlsbGVkKHgsIHkpID09PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsZWQucHVzaChbeCwgeV0pO1xyXG4gICAgY29uc3QgcmVzID0gb3Bwb25lbnQuYXR0YWNrKHgsIHkpO1xyXG4gICAgcmV0dXJuIHsgeCwgeSwgcmVzIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwUmFuZG9tID0gKHNoaXApID0+IGJvYXJkLnBsYWNlUmFuZG9tKHNoaXApO1xyXG5cclxuICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgIGJvYXJkLnJlc2V0Qm9hcmQoKTtcclxuICAgIGZpbGxlZCA9IFtdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbmlzaGVkID0gKCkgPT4gYm9hcmQuYWxsU3VuaygpO1xyXG5cclxuICByZXR1cm4geyBhdHRhY2ssIGZpbGxlZCwgcGxhY2VTaGlwUmFuZG9tLCBmaW5pc2hlZCwgcmVzZXQgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgcGxheWVyLCBib3QgfTtcclxuIiwiZnVuY3Rpb24gc2hpcEZhY3RvcnkobCkge1xyXG4gIGxldCBsZW5ndGggPSBsO1xyXG4gIGxldCBoaXRDb3VudCA9IDA7XHJcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0Q291bnQgPj0gbGVuZ3RoO1xyXG4gIGNvbnN0IGhpdCA9ICgpID0+IChoaXRDb3VudCArPSAxKTtcclxuICByZXR1cm4geyBpc1N1bmssIGhpdCwgbGVuZ3RoIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNoaXBGYWN0b3J5O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkb21NZXRob2RzIGZyb20gXCIuL2RvbVN0dWZmXCI7XHJcbmltcG9ydCB7IHBsYXksIG9iaiwgcGxhY2VTaGlwLCByYW5kb21QbGFjZSwgbmV3R2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XHJcblxyXG5uZXdHYW1lKCk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhvYmoucGxheWVyQm9hcmQuZ3JpZCk7XHJcbi8vIGNvbnNvbGUubG9nKG9iai5ib3RCb2FyZC5ncmlkKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9