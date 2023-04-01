/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --shadeA: #222222;\r\n  --shadeB: #121212;\r\n  --text: #FFF;\r\n  --textLight: #999;\r\n  --theme: #0ff;\r\n  --checked: rgb(0, 255, 98);\r\n  --add: #90fe90;\r\n  --cancel: #ff8686;\r\n}\r\n\r\n#content {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: calc(200px + 10vw) 1fr;\r\n  color: var(--text);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.projects {\r\n  background-color: var(--shadeA);\r\n  display: grid;\r\n  grid-template-rows: 150px auto 1fr;\r\n  padding: 20px 50px;\r\n}\r\n\r\n.todos {\r\n  background-color: var(--shadeB);\r\n  display: grid;\r\n  grid-template-rows: 100px auto 1fr;\r\n  padding: 20px 70px;\r\n}\r\n\r\n.projects>div:first-child,\r\n.todos>div:first-child {\r\n  border-bottom: 2px solid var(--textLight);\r\n  font-size: 34px;\r\n  align-self: end;\r\n  padding-bottom: 24px;\r\n  font-weight: 700;\r\n}\r\n\r\n.add-btn {\r\n  justify-self: end;\r\n  align-self: flex-start;\r\n  background-color: transparent;\r\n  color: var(--textLight);\r\n  padding: 12px 18px;\r\n  font-size: 22px;\r\n  font-weight: 600;\r\n  border: none;\r\n  border-radius: 5px;\r\n  margin: 20px 0;\r\n}\r\n\r\n.add-btn:hover {\r\n  background-color: #fff1;\r\n  cursor: pointer;\r\n}\r\n\r\n.add-btn::before {\r\n  content: \"+ \";\r\n  color: var(--theme);\r\n}\r\n\r\n.todos-list,\r\n.projects-list {\r\n  list-style-type: none;\r\n}\r\n\r\n.todo-div {\r\n  margin: 20px;\r\n  border: 2px solid var(--textLight);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  padding: 10px 20px;\r\n  gap: 8px;\r\n  justify-content: space-between;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  transition: all 0.35s;\r\n}\r\n\r\n.todo-div:hover {\r\n  scale: 1.03;\r\n  box-shadow: 5px 5px 10px 3px #000;\r\n}\r\n\r\n.todo-done {\r\n  appearance: none;\r\n  cursor: pointer;\r\n  width: 25px;\r\n  height: 25px;\r\n  translate: 0 2px;\r\n  border-radius: 20px;\r\n  border: 1px solid var(--textLight);\r\n}\r\n\r\n.todo-done:checked {\r\n  background-color: var(--checked);\r\n}\r\n\r\n.todo-date {\r\n  color-scheme: dark;\r\n}\r\n\r\n.project-div {\r\n  margin: 10px 0;\r\n  border: none;\r\n  border-radius: 5px;\r\n  color: var(--textLight);\r\n  padding: 10px 20px;\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n  cursor: pointer;\r\n  transition: all 0.35s;\r\n}\r\n\r\n.project-div:hover {\r\n  background-color: #333;\r\n}\r\n\r\n.active-project {\r\n  color: var(--text);\r\n  background-color: #333;\r\n}\r\n\r\n.add-project {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-self: flex-start;\r\n}\r\n\r\n.new-project-name {\r\n  background-color: #444;\r\n  border: 1px solid black;\r\n  color: var(--text);\r\n  border-radius: 6px;\r\n  padding: 6px;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  height: 36px;\r\n}\r\n\r\n.add-project>div {\r\n  margin: 12px 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.new-add,\r\n.new-cancel {\r\n  border: 1px solid black;\r\n  border-radius: 3px;\r\n  padding: 6px 12px;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.new-add {\r\n  background-color: var(--add);\r\n}\r\n\r\n.new-cancel {\r\n  background-color: var(--cancel);\r\n}\r\n\r\n.add-project .new-add,\r\n.add-project .new-cancel {\r\n  width: 45%;\r\n}\r\n\r\n.new-todo-div {\r\n  display: none;\r\n  justify-content: space-evenly;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n\r\n.new-todo-name {\r\n  background-color: #222;\r\n  color: var(--text);\r\n  border: 1px solid var(--textLight);\r\n  border-radius: 4px;\r\n  padding: 0 6px;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  height: 36px;\r\n}\r\n\r\n.new-todo-date {\r\n  color-scheme: dark;\r\n  font-size: 18px;\r\n  height: 32px;\r\n  padding: 0 6px;\r\n}\r\n\r\n.new-todo-div>div {}\r\n\r\n.new-todo-div .new-add,\r\n.new-todo-div .new-cancel {\r\n  margin: 0 6px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,0BAA0B;EAC1B,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,6CAA6C;EAC7C,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,0CAA0C;AAC5C;;AAEA;EACE,+BAA+B;EAC/B,aAAa;EACb,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;EAC/B,aAAa;EACb,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;;EAEE,yCAAyC;EACzC,eAAe;EACf,eAAe;EACf,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,6BAA6B;EAC7B,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,QAAQ;EACR,8BAA8B;EAC9B,eAAe;EACf,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,aAAa;EACb,8BAA8B;AAChC;;AAEA;;EAEE,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,SAAS;EACT,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,kCAAkC;EAClC,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,cAAc;AAChB;;AAEA,mBAAmB;;AAEnB;;EAEE,aAAa;AACf","sourcesContent":[":root {\r\n  --shadeA: #222222;\r\n  --shadeB: #121212;\r\n  --text: #FFF;\r\n  --textLight: #999;\r\n  --theme: #0ff;\r\n  --checked: rgb(0, 255, 98);\r\n  --add: #90fe90;\r\n  --cancel: #ff8686;\r\n}\r\n\r\n#content {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: calc(200px + 10vw) 1fr;\r\n  color: var(--text);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.projects {\r\n  background-color: var(--shadeA);\r\n  display: grid;\r\n  grid-template-rows: 150px auto 1fr;\r\n  padding: 20px 50px;\r\n}\r\n\r\n.todos {\r\n  background-color: var(--shadeB);\r\n  display: grid;\r\n  grid-template-rows: 100px auto 1fr;\r\n  padding: 20px 70px;\r\n}\r\n\r\n.projects>div:first-child,\r\n.todos>div:first-child {\r\n  border-bottom: 2px solid var(--textLight);\r\n  font-size: 34px;\r\n  align-self: end;\r\n  padding-bottom: 24px;\r\n  font-weight: 700;\r\n}\r\n\r\n.add-btn {\r\n  justify-self: end;\r\n  align-self: flex-start;\r\n  background-color: transparent;\r\n  color: var(--textLight);\r\n  padding: 12px 18px;\r\n  font-size: 22px;\r\n  font-weight: 600;\r\n  border: none;\r\n  border-radius: 5px;\r\n  margin: 20px 0;\r\n}\r\n\r\n.add-btn:hover {\r\n  background-color: #fff1;\r\n  cursor: pointer;\r\n}\r\n\r\n.add-btn::before {\r\n  content: \"+ \";\r\n  color: var(--theme);\r\n}\r\n\r\n.todos-list,\r\n.projects-list {\r\n  list-style-type: none;\r\n}\r\n\r\n.todo-div {\r\n  margin: 20px;\r\n  border: 2px solid var(--textLight);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  padding: 10px 20px;\r\n  gap: 8px;\r\n  justify-content: space-between;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  transition: all 0.35s;\r\n}\r\n\r\n.todo-div:hover {\r\n  scale: 1.03;\r\n  box-shadow: 5px 5px 10px 3px #000;\r\n}\r\n\r\n.todo-done {\r\n  appearance: none;\r\n  cursor: pointer;\r\n  width: 25px;\r\n  height: 25px;\r\n  translate: 0 2px;\r\n  border-radius: 20px;\r\n  border: 1px solid var(--textLight);\r\n}\r\n\r\n.todo-done:checked {\r\n  background-color: var(--checked);\r\n}\r\n\r\n.todo-date {\r\n  color-scheme: dark;\r\n}\r\n\r\n.project-div {\r\n  margin: 10px 0;\r\n  border: none;\r\n  border-radius: 5px;\r\n  color: var(--textLight);\r\n  padding: 10px 20px;\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n  cursor: pointer;\r\n  transition: all 0.35s;\r\n}\r\n\r\n.project-div:hover {\r\n  background-color: #333;\r\n}\r\n\r\n.active-project {\r\n  color: var(--text);\r\n  background-color: #333;\r\n}\r\n\r\n.add-project {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-self: flex-start;\r\n}\r\n\r\n.new-project-name {\r\n  background-color: #444;\r\n  border: 1px solid black;\r\n  color: var(--text);\r\n  border-radius: 6px;\r\n  padding: 6px;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  height: 36px;\r\n}\r\n\r\n.add-project>div {\r\n  margin: 12px 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.new-add,\r\n.new-cancel {\r\n  border: 1px solid black;\r\n  border-radius: 3px;\r\n  padding: 6px 12px;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.new-add {\r\n  background-color: var(--add);\r\n}\r\n\r\n.new-cancel {\r\n  background-color: var(--cancel);\r\n}\r\n\r\n.add-project .new-add,\r\n.add-project .new-cancel {\r\n  width: 45%;\r\n}\r\n\r\n.new-todo-div {\r\n  display: none;\r\n  justify-content: space-evenly;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n\r\n.new-todo-name {\r\n  background-color: #222;\r\n  color: var(--text);\r\n  border: 1px solid var(--textLight);\r\n  border-radius: 4px;\r\n  padding: 0 6px;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  height: 36px;\r\n}\r\n\r\n.new-todo-date {\r\n  color-scheme: dark;\r\n  font-size: 18px;\r\n  height: 32px;\r\n  padding: 0 6px;\r\n}\r\n\r\n.new-todo-div>div {}\r\n\r\n.new-todo-div .new-add,\r\n.new-todo-div .new-cancel {\r\n  margin: 0 6px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DomModule.js":
/*!**************************!*\
  !*** ./src/DomModule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const content = document.querySelector("#content");

const component = (type, className, text) => {
  const comp = document.createElement(type);
  if (!!text) comp.textContent = text;
  if (!!className) {
    comp.classList.add(className);
  }
  return comp;
};

const displayTodo = (todo) => {
  const todoDiv = component("li", "todo-div");
  todoDiv.setAttribute("id", `todo-${todo.title}`);

  const checkBox = component("input", "todo-done");
  checkBox.setAttribute("type", "checkbox");

  const todoTitle = component("div", "", `${todo.title}`);

  const calander = component("input", "todo-date");
  calander.setAttribute("type", "date");
  calander.value = `${todo.dueDate}`;

  todoDiv.appendChild(checkBox);
  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(calander);

  todos.appendChild(todoDiv);
};

const addTodoComponent = () => {
  const newTodoDiv = component("div", "new-todo-div");

  const todoTitle = component("input", "new-todo-name");

  const calander = component("input", "new-todo-date");
  calander.setAttribute("type", "date");

  const addTodoButtons = component("div");
  addTodoButtons.appendChild(component("button", "new-add", "Add"));
  addTodoButtons.appendChild(component("button", "new-cancel", "Cancel"));

  newTodoDiv.appendChild(todoTitle);
  newTodoDiv.appendChild(addTodoButtons);
  newTodoDiv.appendChild(calander);

  return newTodoDiv;
};

const loadAddTodo = () => {
  const addTodoDiv = document.querySelector(".new-todo-div");
  const addTodoBtn = content.querySelector(".todos>.add-btn");

  addTodoBtn.style.display = "none";
  addTodoDiv.style.display = "flex";
};

const unloadAddTodo = () => {
  const addTodoDiv = document.querySelector(".new-todo-div");
  const addTodoBtn = content.querySelector(".todos>.add-btn");

  const textField = document.querySelector(".new-todo-name");
  const dateField = document.querySelector(".new-todo-date");
  textField.value = "";
  dateField.value = "";

  addTodoBtn.style.display = "inline-block";
  addTodoDiv.style.display = "none";
};

const fetchTodoDetails = () => {
  const todoName = content.querySelector(".new-todo-name");
  const todoDate = content.querySelector(".new-todo-date");

  const title = todoName.value;
  const dueDate = todoDate.value;

  if (title === "") alert("Task needs a title");
  else unloadAddTodo();
  return { title, dueDate };
};

const activateProject = (e) => {
  const projectNodes = content.querySelectorAll(".project-div");
  projectNodes.forEach((node) => node.classList.remove("active-project"));

  const projectTitle = content.querySelector(".project-title");
  projectTitle.textContent = e.target.textContent;

  const todosList = content.querySelector(".todos-list");
  todosList.textContent = "";

  e.target.classList.add("active-project");
};

const displayProject = (project) => {
  const projectDiv = component("li", "project-div", `${project.name}`);
  projects.appendChild(projectDiv);
  return projectDiv;
};

const addProjectComponent = () => {
  const addProjectDiv = component("div", "add-project");

  const newProjectName = component("input", "new-project-name");
  const addProjectButtons = component("div");

  addProjectButtons.appendChild(component("button", "new-add", "Add"));
  addProjectButtons.appendChild(component("button", "new-cancel", "Cancel"));

  addProjectDiv.appendChild(newProjectName);
  addProjectDiv.appendChild(addProjectButtons);

  return addProjectDiv;
};

const loadAddProject = () => {
  const addProjectDiv = document.querySelector(".add-project");
  const addProjectBtn = content.querySelector(".projects>.add-btn");

  addProjectBtn.style.display = "none";
  addProjectDiv.style.display = "flex";
};

const unloadAddProject = () => {
  const addProjectDiv = content.querySelector(".add-project");
  const addProjectBtn = content.querySelector(".projects>.add-btn");

  const textField = addProjectDiv.querySelector(".new-project-name");
  textField.value = "";

  addProjectBtn.style.display = "inline-block";
  addProjectDiv.style.display = "none";
};

const fetchProjectName = () => {
  const projectName = content.querySelector(".new-project-name");
  const name = projectName.value;
  if (name === "") alert("Project needs a name");
  else unloadAddProject();
  return name;
};

const fetchSelectedProject = () => {
  const projTitle = content.querySelector(".project-title");
  return projTitle.textContent;
};

const loadPage = () => {
  const projectSide = component("div", "projects");
  const todosSide = component("div", "todos");

  projectSide.appendChild(component("div", "", "Projects"));
  projectSide.appendChild(component("ul", "projects-list"));
  projectSide.appendChild(component("button", "add-btn", "Add Project"));
  projectSide.appendChild(addProjectComponent());

  todosSide.appendChild(component("div", "project-title"));
  todosSide.appendChild(component("ul", "todos-list"));
  todosSide.appendChild(component("button", "add-btn", "Add Task"));
  todosSide.appendChild(addTodoComponent());

  content.appendChild(projectSide);
  content.appendChild(todosSide);
};

const loadEventListeners = () => {
  const addProjectBtn = content.querySelector(".projects>.add-btn");
  addProjectBtn.addEventListener("click", loadAddProject);

  const addProjectCancel = content.querySelector(".add-project .new-cancel");
  addProjectCancel.addEventListener("click", unloadAddProject);

  const addTodoBtn = content.querySelector(".todos>.add-btn");
  addTodoBtn.addEventListener("click", loadAddTodo);

  const addTodoCancel = content.querySelector(".new-todo-div .new-cancel");
  addTodoCancel.addEventListener("click", unloadAddTodo);
};

loadPage();
loadEventListeners();

const todos = content.querySelector(".todos-list");
const projects = content.querySelector(".projects-list");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  displayTodo,
  displayProject,
  fetchProjectName,
  fetchTodoDetails,
  activateProject,
  fetchSelectedProject,
});


/***/ }),

/***/ "./src/todoModule.js":
/*!***************************!*\
  !*** ./src/todoModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createTodo(state) {
  return { ...state };
}

function newProjects(name) {
  const projects = [];

  const addTodo = (title, dueDate, priority = 5) => {
    const state = { title, dueDate, priority };
    projects.push(createTodo(state));
  };

  const getTodo = (val = 0) => {
    const pos =
      val >= projects.length ? projects.length - 1 : val < 0 ? 0 : val;
    return projects[pos];
  };

  const todoCount = () => projects.length;

  return { name, projects, addTodo, getTodo, todoCount };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjects);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _todoModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoModule */ "./src/todoModule.js");
/* harmony import */ var _DomModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomModule */ "./src/DomModule.js");



const projectsArray = {};

const displayAllTodos = (e) => {
  console.log(projectsArray);
  const proj = projectsArray[e.target.dataset.name];
  _DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].activateProject(e);
  for (let i = 0; i < proj.todoCount(); i++) _DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodo(proj.getTodo(i));
};

const addProject = () => {
  const projName = _DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].fetchProjectName();
  if (projName === "") return;
  const proj = (0,_todoModule__WEBPACK_IMPORTED_MODULE_0__["default"])(projName);
  initProjects(proj, projName);
};

const initProjects = (proj, projName) => {
  projectsArray[projName] = proj;
  const projNode = _DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].displayProject(proj);
  projNode.dataset.name = projName;
  projNode.addEventListener("click", displayAllTodos);
};

const addNewTodo = () => {
  const todoObj = _DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].fetchTodoDetails();
  if (todoObj.title === "") return;
  const selectedProject = _DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].fetchSelectedProject();
  projectsArray[selectedProject].addTodo(todoObj.title, todoObj.dueDate);
  _DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodo(todoObj);
};

const initializePage = () => {
  const prj1 = (0,_todoModule__WEBPACK_IMPORTED_MODULE_0__["default"])("Default");
  const prj21 = (0,_todoModule__WEBPACK_IMPORTED_MODULE_0__["default"])("Special");
  const prj31 = (0,_todoModule__WEBPACK_IMPORTED_MODULE_0__["default"])("smthing");

  initProjects(prj1, "Default");
  initProjects(prj21, "Specl");
  initProjects(prj31, "someone");

  prj1.addTodo("Todo 1", Date());
  prj1.addTodo("Todo 166", Date());
  prj21.addTodo("Todo 12", Date());
  prj21.addTodo("Todo 142", Date());
  prj1.addTodo("Todo 12", Date());
  prj31.addTodo("Todo 3", Date());

  document.querySelector(".project-div:first-child").click();
};

initializePage();

const addProjectAdd = content.querySelector(".add-project .new-add");
addProjectAdd.addEventListener("click", addProject);

const addTodoAdd = content.querySelector(".new-todo-div .new-add");
addTodoAdd.addEventListener("click", addNewTodo);

const projects = content.querySelector(".projects-list>li");
projects.addEventListener("click", displayAllTodos);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ1I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrRUFBbUI7QUFDckIsa0JBQWtCLHNCQUFzQixLQUFLLDhEQUFlO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtRUFBb0I7QUFDdkM7QUFDQSxlQUFlLHVEQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUVBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUVBQW9CO0FBQ3RDO0FBQ0EsMEJBQTBCLHVFQUF3QjtBQUNsRDtBQUNBLEVBQUUsOERBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBVTtBQUN6QixnQkFBZ0IsdURBQVU7QUFDMUIsZ0JBQWdCLHVEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Eb21Nb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9Nb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1zaGFkZUE6ICMyMjIyMjI7XFxyXFxuICAtLXNoYWRlQjogIzEyMTIxMjtcXHJcXG4gIC0tdGV4dDogI0ZGRjtcXHJcXG4gIC0tdGV4dExpZ2h0OiAjOTk5O1xcclxcbiAgLS10aGVtZTogIzBmZjtcXHJcXG4gIC0tY2hlY2tlZDogcmdiKDAsIDI1NSwgOTgpO1xcclxcbiAgLS1hZGQ6ICM5MGZlOTA7XFxyXFxuICAtLWNhbmNlbDogI2ZmODY4NjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMjAwcHggKyAxMHZ3KSAxZnI7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRlQSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCBhdXRvIDFmcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9zIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRlQik7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvIDFmcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzPmRpdjpmaXJzdC1jaGlsZCxcXHJcXG4udG9kb3M+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXh0TGlnaHQpO1xcclxcbiAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0biB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0TGlnaHQpO1xcclxcbiAgcGFkZGluZzogMTJweCAxOHB4O1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idG46OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiKyBcXFwiO1xcclxcbiAgY29sb3I6IHZhcigtLXRoZW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9zLWxpc3QsXFxyXFxuLnByb2plY3RzLWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kaXYge1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dExpZ2h0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRpdjpob3ZlciB7XFxyXFxuICBzY2FsZTogMS4wMztcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAzcHggIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZG9uZSB7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB0cmFuc2xhdGU6IDAgMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRMaWdodCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRvbmU6Y2hlY2tlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVja2VkKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGF0ZSB7XFxyXFxuICBjb2xvci1zY2hlbWU6IGRhcms7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRpdiB7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0TGlnaHQpO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGl2OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtcHJvamVjdCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3Qge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdC1uYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBoZWlnaHQ6IDM2cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdD5kaXYge1xcclxcbiAgbWFyZ2luOiAxMnB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWFkZCxcXHJcXG4ubmV3LWNhbmNlbCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1hZGQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1jYW5jZWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0IC5uZXctYWRkLFxcclxcbi5hZGQtcHJvamVjdCAubmV3LWNhbmNlbCB7XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tZGl2IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tbmFtZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dExpZ2h0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHBhZGRpbmc6IDAgNnB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGhlaWdodDogMzZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10b2RvLWRhdGUge1xcclxcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgcGFkZGluZzogMCA2cHg7XFxyXFxufVxcclxcblxcclxcbi5uZXctdG9kby1kaXY+ZGl2IHt9XFxyXFxuXFxyXFxuLm5ldy10b2RvLWRpdiAubmV3LWFkZCxcXHJcXG4ubmV3LXRvZG8tZGl2IC5uZXctY2FuY2VsIHtcXHJcXG4gIG1hcmdpbjogMCA2cHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0Msa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDViwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsU0FBUztFQUNULG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQSxtQkFBbUI7O0FBRW5COztFQUVFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXNoYWRlQTogIzIyMjIyMjtcXHJcXG4gIC0tc2hhZGVCOiAjMTIxMjEyO1xcclxcbiAgLS10ZXh0OiAjRkZGO1xcclxcbiAgLS10ZXh0TGlnaHQ6ICM5OTk7XFxyXFxuICAtLXRoZW1lOiAjMGZmO1xcclxcbiAgLS1jaGVja2VkOiByZ2IoMCwgMjU1LCA5OCk7XFxyXFxuICAtLWFkZDogIzkwZmU5MDtcXHJcXG4gIC0tY2FuY2VsOiAjZmY4Njg2O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygyMDBweCArIDEwdncpIDFmcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZGVBKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1MHB4IGF1dG8gMWZyO1xcclxcbiAgcGFkZGluZzogMjBweCA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZGVCKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG8gMWZyO1xcclxcbiAgcGFkZGluZzogMjBweCA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+ZGl2OmZpcnN0LWNoaWxkLFxcclxcbi50b2Rvcz5kaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRleHRMaWdodCk7XFxyXFxuICBmb250LXNpemU6IDM0cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnRuIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHZhcigtLXRleHRMaWdodCk7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDE4cHg7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYxO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0bjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIrIFxcXCI7XFxyXFxuICBjb2xvcjogdmFyKC0tdGhlbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3MtbGlzdCxcXHJcXG4ucHJvamVjdHMtbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRpdiB7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0TGlnaHQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGdhcDogOHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGl2OmhvdmVyIHtcXHJcXG4gIHNjYWxlOiAxLjAzO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDNweCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kb25lIHtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHRyYW5zbGF0ZTogMCAycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dExpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZG9uZTpjaGVja2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlIHtcXHJcXG4gIGNvbG9yLXNjaGVtZTogZGFyaztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGl2IHtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY29sb3I6IHZhcigtLXRleHRMaWdodCk7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kaXY6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1wcm9qZWN0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1wcm9qZWN0LW5hbWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGhlaWdodDogMzZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0PmRpdiB7XFxyXFxuICBtYXJnaW46IDEycHggMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5uZXctYWRkLFxcclxcbi5uZXctY2FuY2VsIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgcGFkZGluZzogNnB4IDEycHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWFkZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWNhbmNlbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW5jZWwpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QgLm5ldy1hZGQsXFxyXFxuLmFkZC1wcm9qZWN0IC5uZXctY2FuY2VsIHtcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxufVxcclxcblxcclxcbi5uZXctdG9kby1kaXYge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uZXctdG9kby1uYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0TGlnaHQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgcGFkZGluZzogMCA2cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgaGVpZ2h0OiAzNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tZGF0ZSB7XFxyXFxuICBjb2xvci1zY2hlbWU6IGRhcms7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICBwYWRkaW5nOiAwIDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10b2RvLWRpdj5kaXYge31cXHJcXG5cXHJcXG4ubmV3LXRvZG8tZGl2IC5uZXctYWRkLFxcclxcbi5uZXctdG9kby1kaXYgLm5ldy1jYW5jZWwge1xcclxcbiAgbWFyZ2luOiAwIDZweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuY29uc3QgY29tcG9uZW50ID0gKHR5cGUsIGNsYXNzTmFtZSwgdGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gIGlmICghIXRleHQpIGNvbXAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIGlmICghIWNsYXNzTmFtZSkge1xyXG4gICAgY29tcC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG4gIHJldHVybiBjb21wO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheVRvZG8gPSAodG9kbykgPT4ge1xyXG4gIGNvbnN0IHRvZG9EaXYgPSBjb21wb25lbnQoXCJsaVwiLCBcInRvZG8tZGl2XCIpO1xyXG4gIHRvZG9EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRvZG8tJHt0b2RvLnRpdGxlfWApO1xyXG5cclxuICBjb25zdCBjaGVja0JveCA9IGNvbXBvbmVudChcImlucHV0XCIsIFwidG9kby1kb25lXCIpO1xyXG4gIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuXHJcbiAgY29uc3QgdG9kb1RpdGxlID0gY29tcG9uZW50KFwiZGl2XCIsIFwiXCIsIGAke3RvZG8udGl0bGV9YCk7XHJcblxyXG4gIGNvbnN0IGNhbGFuZGVyID0gY29tcG9uZW50KFwiaW5wdXRcIiwgXCJ0b2RvLWRhdGVcIik7XHJcbiAgY2FsYW5kZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XHJcbiAgY2FsYW5kZXIudmFsdWUgPSBgJHt0b2RvLmR1ZURhdGV9YDtcclxuXHJcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZChjaGVja0JveCk7XHJcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xyXG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQoY2FsYW5kZXIpO1xyXG5cclxuICB0b2Rvcy5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFRvZG9Db21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3VG9kb0RpdiA9IGNvbXBvbmVudChcImRpdlwiLCBcIm5ldy10b2RvLWRpdlwiKTtcclxuXHJcbiAgY29uc3QgdG9kb1RpdGxlID0gY29tcG9uZW50KFwiaW5wdXRcIiwgXCJuZXctdG9kby1uYW1lXCIpO1xyXG5cclxuICBjb25zdCBjYWxhbmRlciA9IGNvbXBvbmVudChcImlucHV0XCIsIFwibmV3LXRvZG8tZGF0ZVwiKTtcclxuICBjYWxhbmRlci5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcclxuXHJcbiAgY29uc3QgYWRkVG9kb0J1dHRvbnMgPSBjb21wb25lbnQoXCJkaXZcIik7XHJcbiAgYWRkVG9kb0J1dHRvbnMuYXBwZW5kQ2hpbGQoY29tcG9uZW50KFwiYnV0dG9uXCIsIFwibmV3LWFkZFwiLCBcIkFkZFwiKSk7XHJcbiAgYWRkVG9kb0J1dHRvbnMuYXBwZW5kQ2hpbGQoY29tcG9uZW50KFwiYnV0dG9uXCIsIFwibmV3LWNhbmNlbFwiLCBcIkNhbmNlbFwiKSk7XHJcblxyXG4gIG5ld1RvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcclxuICBuZXdUb2RvRGl2LmFwcGVuZENoaWxkKGFkZFRvZG9CdXR0b25zKTtcclxuICBuZXdUb2RvRGl2LmFwcGVuZENoaWxkKGNhbGFuZGVyKTtcclxuXHJcbiAgcmV0dXJuIG5ld1RvZG9EaXY7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkQWRkVG9kbyA9ICgpID0+IHtcclxuICBjb25zdCBhZGRUb2RvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdG9kby1kaXZcIik7XHJcbiAgY29uc3QgYWRkVG9kb0J0biA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvcz4uYWRkLWJ0blwiKTtcclxuXHJcbiAgYWRkVG9kb0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgYWRkVG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn07XHJcblxyXG5jb25zdCB1bmxvYWRBZGRUb2RvID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFRvZG9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10b2RvLWRpdlwiKTtcclxuICBjb25zdCBhZGRUb2RvQnRuID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zPi5hZGQtYnRuXCIpO1xyXG5cclxuICBjb25zdCB0ZXh0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10b2RvLW5hbWVcIik7XHJcbiAgY29uc3QgZGF0ZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdG9kby1kYXRlXCIpO1xyXG4gIHRleHRGaWVsZC52YWx1ZSA9IFwiXCI7XHJcbiAgZGF0ZUZpZWxkLnZhbHVlID0gXCJcIjtcclxuXHJcbiAgYWRkVG9kb0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICBhZGRUb2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoVG9kb0RldGFpbHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9kb05hbWUgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvZG8tbmFtZVwiKTtcclxuICBjb25zdCB0b2RvRGF0ZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdG9kby1kYXRlXCIpO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IHRvZG9OYW1lLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSB0b2RvRGF0ZS52YWx1ZTtcclxuXHJcbiAgaWYgKHRpdGxlID09PSBcIlwiKSBhbGVydChcIlRhc2sgbmVlZHMgYSB0aXRsZVwiKTtcclxuICBlbHNlIHVubG9hZEFkZFRvZG8oKTtcclxuICByZXR1cm4geyB0aXRsZSwgZHVlRGF0ZSB9O1xyXG59O1xyXG5cclxuY29uc3QgYWN0aXZhdGVQcm9qZWN0ID0gKGUpID0+IHtcclxuICBjb25zdCBwcm9qZWN0Tm9kZXMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1kaXZcIik7XHJcbiAgcHJvamVjdE5vZGVzLmZvckVhY2goKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcm9qZWN0XCIpKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XHJcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcblxyXG4gIGNvbnN0IHRvZG9zTGlzdCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvcy1saXN0XCIpO1xyXG4gIHRvZG9zTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJvamVjdFwiKTtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICBjb25zdCBwcm9qZWN0RGl2ID0gY29tcG9uZW50KFwibGlcIiwgXCJwcm9qZWN0LWRpdlwiLCBgJHtwcm9qZWN0Lm5hbWV9YCk7XHJcbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcbiAgcmV0dXJuIHByb2plY3REaXY7XHJcbn07XHJcblxyXG5jb25zdCBhZGRQcm9qZWN0Q29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFByb2plY3REaXYgPSBjb21wb25lbnQoXCJkaXZcIiwgXCJhZGQtcHJvamVjdFwiKTtcclxuXHJcbiAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBjb21wb25lbnQoXCJpbnB1dFwiLCBcIm5ldy1wcm9qZWN0LW5hbWVcIik7XHJcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbnMgPSBjb21wb25lbnQoXCJkaXZcIik7XHJcblxyXG4gIGFkZFByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKGNvbXBvbmVudChcImJ1dHRvblwiLCBcIm5ldy1hZGRcIiwgXCJBZGRcIikpO1xyXG4gIGFkZFByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKGNvbXBvbmVudChcImJ1dHRvblwiLCBcIm5ldy1jYW5jZWxcIiwgXCJDYW5jZWxcIikpO1xyXG5cclxuICBhZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcclxuICBhZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b25zKTtcclxuXHJcbiAgcmV0dXJuIGFkZFByb2plY3REaXY7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkQWRkUHJvamVjdCA9ICgpID0+IHtcclxuICBjb25zdCBhZGRQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcclxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzPi5hZGQtYnRuXCIpO1xyXG5cclxuICBhZGRQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBhZGRQcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxufTtcclxuXHJcbmNvbnN0IHVubG9hZEFkZFByb2plY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWRkUHJvamVjdERpdiA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcclxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzPi5hZGQtYnRuXCIpO1xyXG5cclxuICBjb25zdCB0ZXh0RmllbGQgPSBhZGRQcm9qZWN0RGl2LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtbmFtZVwiKTtcclxuICB0ZXh0RmllbGQudmFsdWUgPSBcIlwiO1xyXG5cclxuICBhZGRQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gIGFkZFByb2plY3REaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hQcm9qZWN0TmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1uYW1lXCIpO1xyXG4gIGNvbnN0IG5hbWUgPSBwcm9qZWN0TmFtZS52YWx1ZTtcclxuICBpZiAobmFtZSA9PT0gXCJcIikgYWxlcnQoXCJQcm9qZWN0IG5lZWRzIGEgbmFtZVwiKTtcclxuICBlbHNlIHVubG9hZEFkZFByb2plY3QoKTtcclxuICByZXR1cm4gbmFtZTtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoU2VsZWN0ZWRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb2pUaXRsZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xyXG4gIHJldHVybiBwcm9qVGl0bGUudGV4dENvbnRlbnQ7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0U2lkZSA9IGNvbXBvbmVudChcImRpdlwiLCBcInByb2plY3RzXCIpO1xyXG4gIGNvbnN0IHRvZG9zU2lkZSA9IGNvbXBvbmVudChcImRpdlwiLCBcInRvZG9zXCIpO1xyXG5cclxuICBwcm9qZWN0U2lkZS5hcHBlbmRDaGlsZChjb21wb25lbnQoXCJkaXZcIiwgXCJcIiwgXCJQcm9qZWN0c1wiKSk7XHJcbiAgcHJvamVjdFNpZGUuYXBwZW5kQ2hpbGQoY29tcG9uZW50KFwidWxcIiwgXCJwcm9qZWN0cy1saXN0XCIpKTtcclxuICBwcm9qZWN0U2lkZS5hcHBlbmRDaGlsZChjb21wb25lbnQoXCJidXR0b25cIiwgXCJhZGQtYnRuXCIsIFwiQWRkIFByb2plY3RcIikpO1xyXG4gIHByb2plY3RTaWRlLmFwcGVuZENoaWxkKGFkZFByb2plY3RDb21wb25lbnQoKSk7XHJcblxyXG4gIHRvZG9zU2lkZS5hcHBlbmRDaGlsZChjb21wb25lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LXRpdGxlXCIpKTtcclxuICB0b2Rvc1NpZGUuYXBwZW5kQ2hpbGQoY29tcG9uZW50KFwidWxcIiwgXCJ0b2Rvcy1saXN0XCIpKTtcclxuICB0b2Rvc1NpZGUuYXBwZW5kQ2hpbGQoY29tcG9uZW50KFwiYnV0dG9uXCIsIFwiYWRkLWJ0blwiLCBcIkFkZCBUYXNrXCIpKTtcclxuICB0b2Rvc1NpZGUuYXBwZW5kQ2hpbGQoYWRkVG9kb0NvbXBvbmVudCgpKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0U2lkZSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0b2Rvc1NpZGUpO1xyXG59O1xyXG5cclxuY29uc3QgbG9hZEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHM+LmFkZC1idG5cIik7XHJcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEFkZFByb2plY3QpO1xyXG5cclxuICBjb25zdCBhZGRQcm9qZWN0Q2FuY2VsID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IC5uZXctY2FuY2VsXCIpO1xyXG4gIGFkZFByb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVubG9hZEFkZFByb2plY3QpO1xyXG5cclxuICBjb25zdCBhZGRUb2RvQnRuID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zPi5hZGQtYnRuXCIpO1xyXG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRBZGRUb2RvKTtcclxuXHJcbiAgY29uc3QgYWRkVG9kb0NhbmNlbCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdG9kby1kaXYgLm5ldy1jYW5jZWxcIik7XHJcbiAgYWRkVG9kb0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdW5sb2FkQWRkVG9kbyk7XHJcbn07XHJcblxyXG5sb2FkUGFnZSgpO1xyXG5sb2FkRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IHRvZG9zID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLWxpc3RcIik7XHJcbmNvbnN0IHByb2plY3RzID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGlzcGxheVRvZG8sXHJcbiAgZGlzcGxheVByb2plY3QsXHJcbiAgZmV0Y2hQcm9qZWN0TmFtZSxcclxuICBmZXRjaFRvZG9EZXRhaWxzLFxyXG4gIGFjdGl2YXRlUHJvamVjdCxcclxuICBmZXRjaFNlbGVjdGVkUHJvamVjdCxcclxufTtcclxuIiwiZnVuY3Rpb24gY3JlYXRlVG9kbyhzdGF0ZSkge1xyXG4gIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld1Byb2plY3RzKG5hbWUpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICBjb25zdCBhZGRUb2RvID0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSA9IDUpID0+IHtcclxuICAgIGNvbnN0IHN0YXRlID0geyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcclxuICAgIHByb2plY3RzLnB1c2goY3JlYXRlVG9kbyhzdGF0ZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRvZG8gPSAodmFsID0gMCkgPT4ge1xyXG4gICAgY29uc3QgcG9zID1cclxuICAgICAgdmFsID49IHByb2plY3RzLmxlbmd0aCA/IHByb2plY3RzLmxlbmd0aCAtIDEgOiB2YWwgPCAwID8gMCA6IHZhbDtcclxuICAgIHJldHVybiBwcm9qZWN0c1twb3NdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZG9Db3VudCA9ICgpID0+IHByb2plY3RzLmxlbmd0aDtcclxuXHJcbiAgcmV0dXJuIHsgbmFtZSwgcHJvamVjdHMsIGFkZFRvZG8sIGdldFRvZG8sIHRvZG9Db3VudCB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdQcm9qZWN0cztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IG5ld1Byb2plY3QgZnJvbSBcIi4vdG9kb01vZHVsZVwiO1xyXG5pbXBvcnQgZnVuIGZyb20gXCIuL0RvbU1vZHVsZVwiO1xyXG5cclxuY29uc3QgcHJvamVjdHNBcnJheSA9IHt9O1xyXG5cclxuY29uc3QgZGlzcGxheUFsbFRvZG9zID0gKGUpID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcclxuICBjb25zdCBwcm9qID0gcHJvamVjdHNBcnJheVtlLnRhcmdldC5kYXRhc2V0Lm5hbWVdO1xyXG4gIGZ1bi5hY3RpdmF0ZVByb2plY3QoZSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qLnRvZG9Db3VudCgpOyBpKyspIGZ1bi5kaXNwbGF5VG9kbyhwcm9qLmdldFRvZG8oaSkpO1xyXG59O1xyXG5cclxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qTmFtZSA9IGZ1bi5mZXRjaFByb2plY3ROYW1lKCk7XHJcbiAgaWYgKHByb2pOYW1lID09PSBcIlwiKSByZXR1cm47XHJcbiAgY29uc3QgcHJvaiA9IG5ld1Byb2plY3QocHJvak5hbWUpO1xyXG4gIGluaXRQcm9qZWN0cyhwcm9qLCBwcm9qTmFtZSk7XHJcbn07XHJcblxyXG5jb25zdCBpbml0UHJvamVjdHMgPSAocHJvaiwgcHJvak5hbWUpID0+IHtcclxuICBwcm9qZWN0c0FycmF5W3Byb2pOYW1lXSA9IHByb2o7XHJcbiAgY29uc3QgcHJvak5vZGUgPSBmdW4uZGlzcGxheVByb2plY3QocHJvaik7XHJcbiAgcHJvak5vZGUuZGF0YXNldC5uYW1lID0gcHJvak5hbWU7XHJcbiAgcHJvak5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlBbGxUb2Rvcyk7XHJcbn07XHJcblxyXG5jb25zdCBhZGROZXdUb2RvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvZG9PYmogPSBmdW4uZmV0Y2hUb2RvRGV0YWlscygpO1xyXG4gIGlmICh0b2RvT2JqLnRpdGxlID09PSBcIlwiKSByZXR1cm47XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZnVuLmZldGNoU2VsZWN0ZWRQcm9qZWN0KCk7XHJcbiAgcHJvamVjdHNBcnJheVtzZWxlY3RlZFByb2plY3RdLmFkZFRvZG8odG9kb09iai50aXRsZSwgdG9kb09iai5kdWVEYXRlKTtcclxuICBmdW4uZGlzcGxheVRvZG8odG9kb09iaik7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsaXplUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBwcmoxID0gbmV3UHJvamVjdChcIkRlZmF1bHRcIik7XHJcbiAgY29uc3QgcHJqMjEgPSBuZXdQcm9qZWN0KFwiU3BlY2lhbFwiKTtcclxuICBjb25zdCBwcmozMSA9IG5ld1Byb2plY3QoXCJzbXRoaW5nXCIpO1xyXG5cclxuICBpbml0UHJvamVjdHMocHJqMSwgXCJEZWZhdWx0XCIpO1xyXG4gIGluaXRQcm9qZWN0cyhwcmoyMSwgXCJTcGVjbFwiKTtcclxuICBpbml0UHJvamVjdHMocHJqMzEsIFwic29tZW9uZVwiKTtcclxuXHJcbiAgcHJqMS5hZGRUb2RvKFwiVG9kbyAxXCIsIERhdGUoKSk7XHJcbiAgcHJqMS5hZGRUb2RvKFwiVG9kbyAxNjZcIiwgRGF0ZSgpKTtcclxuICBwcmoyMS5hZGRUb2RvKFwiVG9kbyAxMlwiLCBEYXRlKCkpO1xyXG4gIHByajIxLmFkZFRvZG8oXCJUb2RvIDE0MlwiLCBEYXRlKCkpO1xyXG4gIHByajEuYWRkVG9kbyhcIlRvZG8gMTJcIiwgRGF0ZSgpKTtcclxuICBwcmozMS5hZGRUb2RvKFwiVG9kbyAzXCIsIERhdGUoKSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1kaXY6Zmlyc3QtY2hpbGRcIikuY2xpY2soKTtcclxufTtcclxuXHJcbmluaXRpYWxpemVQYWdlKCk7XHJcblxyXG5jb25zdCBhZGRQcm9qZWN0QWRkID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IC5uZXctYWRkXCIpO1xyXG5hZGRQcm9qZWN0QWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0KTtcclxuXHJcbmNvbnN0IGFkZFRvZG9BZGQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvZG8tZGl2IC5uZXctYWRkXCIpO1xyXG5hZGRUb2RvQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdUb2RvKTtcclxuXHJcbmNvbnN0IHByb2plY3RzID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3Q+bGlcIik7XHJcbnByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5QWxsVG9kb3MpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=