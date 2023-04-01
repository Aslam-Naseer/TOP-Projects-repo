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
  const projectNodes = document.querySelectorAll(".project-div");
  projectNodes.forEach((node) => node.classList.remove("active-project"));
  e.target.classList.add("active-project");
};

const displayProject = (project) => {
  const projectDiv = component("li", "project-div", `${project.name}`);
  projectDiv.addEventListener("click", activateProject);
  projects.appendChild(projectDiv);
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



const prj1 = (0,_todoModule__WEBPACK_IMPORTED_MODULE_0__["default"])("Default");
const prj21 = (0,_todoModule__WEBPACK_IMPORTED_MODULE_0__["default"])("Special");
const prj31 = (0,_todoModule__WEBPACK_IMPORTED_MODULE_0__["default"])("someOther");

prj1.addTodo("todo1");
prj1.addTodo("todo4");
prj1.addTodo("todofsdfs sdfg d2");
prj1.addTodo("todo15");

_DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodo(prj1.getTodo(0));
_DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodo(prj1.getTodo(3));
_DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodo(prj1.getTodo(2));

_DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].displayProject(prj1);
_DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].displayProject(prj21);
_DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].displayProject(prj31);

const addProject = () => {
  const projName = _DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].fetchProjectName();
  if (projName === "") return;
  const proj = (0,_todoModule__WEBPACK_IMPORTED_MODULE_0__["default"])(projName);
  _DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].displayProject(proj);
};

const addNewTodo = () => {
  const todoObj = _DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].fetchTodoDetails();
  if (todoObj.title === "") return;
  prj1.addTodo(todoObj.title, todoObj.dueDate);
  _DomModule__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodo(todoObj);
};

const addProjectAdd = content.querySelector(".add-project .new-add");
addProjectAdd.addEventListener("click", addProject);

const addTodoAdd = content.querySelector(".new-todo-div .new-add");
addTodoAdd.addEventListener("click", addNewTodo);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkIsY0FBYyx1REFBVTtBQUN4QixjQUFjLHVEQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUFlO0FBQ2YsOERBQWU7QUFDZiw4REFBZTtBQUNmO0FBQ0EsaUVBQWtCO0FBQ2xCLGlFQUFrQjtBQUNsQixpRUFBa0I7QUFDbEI7QUFDQTtBQUNBLG1CQUFtQixtRUFBb0I7QUFDdkM7QUFDQSxlQUFlLHVEQUFVO0FBQ3pCLEVBQUUsaUVBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtRUFBb0I7QUFDdEM7QUFDQTtBQUNBLEVBQUUsOERBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RvbU1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb01vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXNoYWRlQTogIzIyMjIyMjtcXHJcXG4gIC0tc2hhZGVCOiAjMTIxMjEyO1xcclxcbiAgLS10ZXh0OiAjRkZGO1xcclxcbiAgLS10ZXh0TGlnaHQ6ICM5OTk7XFxyXFxuICAtLXRoZW1lOiAjMGZmO1xcclxcbiAgLS1jaGVja2VkOiByZ2IoMCwgMjU1LCA5OCk7XFxyXFxuICAtLWFkZDogIzkwZmU5MDtcXHJcXG4gIC0tY2FuY2VsOiAjZmY4Njg2O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygyMDBweCArIDEwdncpIDFmcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZGVBKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1MHB4IGF1dG8gMWZyO1xcclxcbiAgcGFkZGluZzogMjBweCA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZGVCKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG8gMWZyO1xcclxcbiAgcGFkZGluZzogMjBweCA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+ZGl2OmZpcnN0LWNoaWxkLFxcclxcbi50b2Rvcz5kaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRleHRMaWdodCk7XFxyXFxuICBmb250LXNpemU6IDM0cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnRuIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHZhcigtLXRleHRMaWdodCk7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDE4cHg7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYxO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0bjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIrIFxcXCI7XFxyXFxuICBjb2xvcjogdmFyKC0tdGhlbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3MtbGlzdCxcXHJcXG4ucHJvamVjdHMtbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRpdiB7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0TGlnaHQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGdhcDogOHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGl2OmhvdmVyIHtcXHJcXG4gIHNjYWxlOiAxLjAzO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDNweCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kb25lIHtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHRyYW5zbGF0ZTogMCAycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dExpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZG9uZTpjaGVja2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlIHtcXHJcXG4gIGNvbG9yLXNjaGVtZTogZGFyaztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGl2IHtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY29sb3I6IHZhcigtLXRleHRMaWdodCk7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kaXY6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1wcm9qZWN0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1wcm9qZWN0LW5hbWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGhlaWdodDogMzZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0PmRpdiB7XFxyXFxuICBtYXJnaW46IDEycHggMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5uZXctYWRkLFxcclxcbi5uZXctY2FuY2VsIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgcGFkZGluZzogNnB4IDEycHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWFkZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWNhbmNlbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW5jZWwpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QgLm5ldy1hZGQsXFxyXFxuLmFkZC1wcm9qZWN0IC5uZXctY2FuY2VsIHtcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxufVxcclxcblxcclxcbi5uZXctdG9kby1kaXYge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uZXctdG9kby1uYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0TGlnaHQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgcGFkZGluZzogMCA2cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgaGVpZ2h0OiAzNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tZGF0ZSB7XFxyXFxuICBjb2xvci1zY2hlbWU6IGRhcms7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICBwYWRkaW5nOiAwIDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10b2RvLWRpdj5kaXYge31cXHJcXG5cXHJcXG4ubmV3LXRvZG8tZGl2IC5uZXctYWRkLFxcclxcbi5uZXctdG9kby1kaXYgLm5ldy1jYW5jZWwge1xcclxcbiAgbWFyZ2luOiAwIDZweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSx5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTs7RUFFRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBLG1CQUFtQjs7QUFFbkI7O0VBRUUsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tc2hhZGVBOiAjMjIyMjIyO1xcclxcbiAgLS1zaGFkZUI6ICMxMjEyMTI7XFxyXFxuICAtLXRleHQ6ICNGRkY7XFxyXFxuICAtLXRleHRMaWdodDogIzk5OTtcXHJcXG4gIC0tdGhlbWU6ICMwZmY7XFxyXFxuICAtLWNoZWNrZWQ6IHJnYigwLCAyNTUsIDk4KTtcXHJcXG4gIC0tYWRkOiAjOTBmZTkwO1xcclxcbiAgLS1jYW5jZWw6ICNmZjg2ODY7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDIwMHB4ICsgMTB2dykgMWZyO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkZUEpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggYXV0byAxZnI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkZUIpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggYXV0byAxZnI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cz5kaXY6Zmlyc3QtY2hpbGQsXFxyXFxuLnRvZG9zPmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGV4dExpZ2h0KTtcXHJcXG4gIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idG4ge1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dExpZ2h0KTtcXHJcXG4gIHBhZGRpbmc6IDEycHggMThweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjE7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnRuOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIisgXFxcIjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10aGVtZSk7XFxyXFxufVxcclxcblxcclxcbi50b2Rvcy1saXN0LFxcclxcbi5wcm9qZWN0cy1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGl2IHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHRMaWdodCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kaXY6aG92ZXIge1xcclxcbiAgc2NhbGU6IDEuMDM7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggM3B4ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRvbmUge1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgdHJhbnNsYXRlOiAwIDJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0TGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kb25lOmNoZWNrZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2tlZCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUge1xcclxcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kaXYge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dExpZ2h0KTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRpdjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLXByb2plY3Qge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXByb2plY3QtbmFtZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgaGVpZ2h0OiAzNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3Q+ZGl2IHtcXHJcXG4gIG1hcmdpbjogMTJweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1hZGQsXFxyXFxuLm5ldy1jYW5jZWwge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBwYWRkaW5nOiA2cHggMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXctYWRkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZCk7XFxyXFxufVxcclxcblxcclxcbi5uZXctY2FuY2VsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbmNlbCk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdCAubmV3LWFkZCxcXHJcXG4uYWRkLXByb2plY3QgLm5ldy1jYW5jZWwge1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10b2RvLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10b2RvLW5hbWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRMaWdodCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBwYWRkaW5nOiAwIDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBoZWlnaHQ6IDM2cHg7XFxyXFxufVxcclxcblxcclxcbi5uZXctdG9kby1kYXRlIHtcXHJcXG4gIGNvbG9yLXNjaGVtZTogZGFyaztcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIHBhZGRpbmc6IDAgNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tZGl2PmRpdiB7fVxcclxcblxcclxcbi5uZXctdG9kby1kaXYgLm5ldy1hZGQsXFxyXFxuLm5ldy10b2RvLWRpdiAubmV3LWNhbmNlbCB7XFxyXFxuICBtYXJnaW46IDAgNnB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5jb25zdCBjb21wb25lbnQgPSAodHlwZSwgY2xhc3NOYW1lLCB0ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29tcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgaWYgKCEhdGV4dCkgY29tcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgaWYgKCEhY2xhc3NOYW1lKSB7XHJcbiAgICBjb21wLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbXA7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5VG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgY29uc3QgdG9kb0RpdiA9IGNvbXBvbmVudChcImxpXCIsIFwidG9kby1kaXZcIik7XHJcbiAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdG9kby0ke3RvZG8udGl0bGV9YCk7XHJcblxyXG4gIGNvbnN0IGNoZWNrQm94ID0gY29tcG9uZW50KFwiaW5wdXRcIiwgXCJ0b2RvLWRvbmVcIik7XHJcbiAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG5cclxuICBjb25zdCB0b2RvVGl0bGUgPSBjb21wb25lbnQoXCJkaXZcIiwgXCJcIiwgYCR7dG9kby50aXRsZX1gKTtcclxuXHJcbiAgY29uc3QgY2FsYW5kZXIgPSBjb21wb25lbnQoXCJpbnB1dFwiLCBcInRvZG8tZGF0ZVwiKTtcclxuICBjYWxhbmRlci5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcclxuICBjYWxhbmRlci52YWx1ZSA9IGAke3RvZG8uZHVlRGF0ZX1gO1xyXG5cclxuICB0b2RvRGl2LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcclxuICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XHJcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZChjYWxhbmRlcik7XHJcblxyXG4gIHRvZG9zLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xyXG59O1xyXG5cclxuY29uc3QgYWRkVG9kb0NvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBuZXdUb2RvRGl2ID0gY29tcG9uZW50KFwiZGl2XCIsIFwibmV3LXRvZG8tZGl2XCIpO1xyXG5cclxuICBjb25zdCB0b2RvVGl0bGUgPSBjb21wb25lbnQoXCJpbnB1dFwiLCBcIm5ldy10b2RvLW5hbWVcIik7XHJcblxyXG4gIGNvbnN0IGNhbGFuZGVyID0gY29tcG9uZW50KFwiaW5wdXRcIiwgXCJuZXctdG9kby1kYXRlXCIpO1xyXG4gIGNhbGFuZGVyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xyXG5cclxuICBjb25zdCBhZGRUb2RvQnV0dG9ucyA9IGNvbXBvbmVudChcImRpdlwiKTtcclxuICBhZGRUb2RvQnV0dG9ucy5hcHBlbmRDaGlsZChjb21wb25lbnQoXCJidXR0b25cIiwgXCJuZXctYWRkXCIsIFwiQWRkXCIpKTtcclxuICBhZGRUb2RvQnV0dG9ucy5hcHBlbmRDaGlsZChjb21wb25lbnQoXCJidXR0b25cIiwgXCJuZXctY2FuY2VsXCIsIFwiQ2FuY2VsXCIpKTtcclxuXHJcbiAgbmV3VG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xyXG4gIG5ld1RvZG9EaXYuYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvbnMpO1xyXG4gIG5ld1RvZG9EaXYuYXBwZW5kQ2hpbGQoY2FsYW5kZXIpO1xyXG5cclxuICByZXR1cm4gbmV3VG9kb0RpdjtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRBZGRUb2RvID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFRvZG9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10b2RvLWRpdlwiKTtcclxuICBjb25zdCBhZGRUb2RvQnRuID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zPi5hZGQtYnRuXCIpO1xyXG5cclxuICBhZGRUb2RvQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBhZGRUb2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxufTtcclxuXHJcbmNvbnN0IHVubG9hZEFkZFRvZG8gPSAoKSA9PiB7XHJcbiAgY29uc3QgYWRkVG9kb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvZG8tZGl2XCIpO1xyXG4gIGNvbnN0IGFkZFRvZG9CdG4gPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3M+LmFkZC1idG5cIik7XHJcblxyXG4gIGNvbnN0IHRleHRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvZG8tbmFtZVwiKTtcclxuICBjb25zdCBkYXRlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10b2RvLWRhdGVcIik7XHJcbiAgdGV4dEZpZWxkLnZhbHVlID0gXCJcIjtcclxuICBkYXRlRmllbGQudmFsdWUgPSBcIlwiO1xyXG5cclxuICBhZGRUb2RvQnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gIGFkZFRvZG9EaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hUb2RvRGV0YWlscyA9ICgpID0+IHtcclxuICBjb25zdCB0b2RvTmFtZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdG9kby1uYW1lXCIpO1xyXG4gIGNvbnN0IHRvZG9EYXRlID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10b2RvLWRhdGVcIik7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gdG9kb05hbWUudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IHRvZG9EYXRlLnZhbHVlO1xyXG5cclxuICBpZiAodGl0bGUgPT09IFwiXCIpIGFsZXJ0KFwiVGFzayBuZWVkcyBhIHRpdGxlXCIpO1xyXG4gIGVsc2UgdW5sb2FkQWRkVG9kbygpO1xyXG4gIHJldHVybiB7IHRpdGxlLCBkdWVEYXRlIH07XHJcbn07XHJcblxyXG5jb25zdCBhY3RpdmF0ZVByb2plY3QgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3ROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1kaXZcIik7XHJcbiAgcHJvamVjdE5vZGVzLmZvckVhY2goKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcm9qZWN0XCIpKTtcclxuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdERpdiA9IGNvbXBvbmVudChcImxpXCIsIFwicHJvamVjdC1kaXZcIiwgYCR7cHJvamVjdC5uYW1lfWApO1xyXG4gIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlUHJvamVjdCk7XHJcbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcbn07XHJcblxyXG5jb25zdCBhZGRQcm9qZWN0Q29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFByb2plY3REaXYgPSBjb21wb25lbnQoXCJkaXZcIiwgXCJhZGQtcHJvamVjdFwiKTtcclxuXHJcbiAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBjb21wb25lbnQoXCJpbnB1dFwiLCBcIm5ldy1wcm9qZWN0LW5hbWVcIik7XHJcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbnMgPSBjb21wb25lbnQoXCJkaXZcIik7XHJcblxyXG4gIGFkZFByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKGNvbXBvbmVudChcImJ1dHRvblwiLCBcIm5ldy1hZGRcIiwgXCJBZGRcIikpO1xyXG4gIGFkZFByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKGNvbXBvbmVudChcImJ1dHRvblwiLCBcIm5ldy1jYW5jZWxcIiwgXCJDYW5jZWxcIikpO1xyXG5cclxuICBhZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcclxuICBhZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b25zKTtcclxuXHJcbiAgcmV0dXJuIGFkZFByb2plY3REaXY7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkQWRkUHJvamVjdCA9ICgpID0+IHtcclxuICBjb25zdCBhZGRQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcclxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzPi5hZGQtYnRuXCIpO1xyXG5cclxuICBhZGRQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBhZGRQcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxufTtcclxuXHJcbmNvbnN0IHVubG9hZEFkZFByb2plY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWRkUHJvamVjdERpdiA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcclxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzPi5hZGQtYnRuXCIpO1xyXG5cclxuICBjb25zdCB0ZXh0RmllbGQgPSBhZGRQcm9qZWN0RGl2LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtbmFtZVwiKTtcclxuICB0ZXh0RmllbGQudmFsdWUgPSBcIlwiO1xyXG5cclxuICBhZGRQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gIGFkZFByb2plY3REaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hQcm9qZWN0TmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1uYW1lXCIpO1xyXG4gIGNvbnN0IG5hbWUgPSBwcm9qZWN0TmFtZS52YWx1ZTtcclxuICBpZiAobmFtZSA9PT0gXCJcIikgYWxlcnQoXCJQcm9qZWN0IG5lZWRzIGEgbmFtZVwiKTtcclxuICBlbHNlIHVubG9hZEFkZFByb2plY3QoKTtcclxuICByZXR1cm4gbmFtZTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RTaWRlID0gY29tcG9uZW50KFwiZGl2XCIsIFwicHJvamVjdHNcIik7XHJcbiAgY29uc3QgdG9kb3NTaWRlID0gY29tcG9uZW50KFwiZGl2XCIsIFwidG9kb3NcIik7XHJcblxyXG4gIHByb2plY3RTaWRlLmFwcGVuZENoaWxkKGNvbXBvbmVudChcImRpdlwiLCBcIlwiLCBcIlByb2plY3RzXCIpKTtcclxuICBwcm9qZWN0U2lkZS5hcHBlbmRDaGlsZChjb21wb25lbnQoXCJ1bFwiLCBcInByb2plY3RzLWxpc3RcIikpO1xyXG4gIHByb2plY3RTaWRlLmFwcGVuZENoaWxkKGNvbXBvbmVudChcImJ1dHRvblwiLCBcImFkZC1idG5cIiwgXCJBZGQgUHJvamVjdFwiKSk7XHJcbiAgcHJvamVjdFNpZGUuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdENvbXBvbmVudCgpKTtcclxuXHJcbiAgdG9kb3NTaWRlLmFwcGVuZENoaWxkKGNvbXBvbmVudChcImRpdlwiLCBcInByb2plY3QtdGl0bGVcIikpO1xyXG4gIHRvZG9zU2lkZS5hcHBlbmRDaGlsZChjb21wb25lbnQoXCJ1bFwiLCBcInRvZG9zLWxpc3RcIikpO1xyXG4gIHRvZG9zU2lkZS5hcHBlbmRDaGlsZChjb21wb25lbnQoXCJidXR0b25cIiwgXCJhZGQtYnRuXCIsIFwiQWRkIFRhc2tcIikpO1xyXG4gIHRvZG9zU2lkZS5hcHBlbmRDaGlsZChhZGRUb2RvQ29tcG9uZW50KCkpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RTaWRlKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9zU2lkZSk7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cz4uYWRkLWJ0blwiKTtcclxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkQWRkUHJvamVjdCk7XHJcblxyXG4gIGNvbnN0IGFkZFByb2plY3RDYW5jZWwgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QgLm5ldy1jYW5jZWxcIik7XHJcbiAgYWRkUHJvamVjdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdW5sb2FkQWRkUHJvamVjdCk7XHJcblxyXG4gIGNvbnN0IGFkZFRvZG9CdG4gPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3M+LmFkZC1idG5cIik7XHJcbiAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEFkZFRvZG8pO1xyXG5cclxuICBjb25zdCBhZGRUb2RvQ2FuY2VsID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10b2RvLWRpdiAubmV3LWNhbmNlbFwiKTtcclxuICBhZGRUb2RvQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1bmxvYWRBZGRUb2RvKTtcclxufTtcclxuXHJcbmxvYWRQYWdlKCk7XHJcbmxvYWRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgdG9kb3MgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3MtbGlzdFwiKTtcclxuY29uc3QgcHJvamVjdHMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtbGlzdFwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkaXNwbGF5VG9kbyxcclxuICBkaXNwbGF5UHJvamVjdCxcclxuICBmZXRjaFByb2plY3ROYW1lLFxyXG4gIGZldGNoVG9kb0RldGFpbHMsXHJcbn07XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZVRvZG8oc3RhdGUpIHtcclxuICByZXR1cm4geyAuLi5zdGF0ZSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0cyhuYW1lKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgY29uc3QgYWRkVG9kbyA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkgPSA1KSA9PiB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5IH07XHJcbiAgICBwcm9qZWN0cy5wdXNoKGNyZWF0ZVRvZG8oc3RhdGUpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRUb2RvID0gKHZhbCA9IDApID0+IHtcclxuICAgIGNvbnN0IHBvcyA9XHJcbiAgICAgIHZhbCA+PSBwcm9qZWN0cy5sZW5ndGggPyBwcm9qZWN0cy5sZW5ndGggLSAxIDogdmFsIDwgMCA/IDAgOiB2YWw7XHJcbiAgICByZXR1cm4gcHJvamVjdHNbcG9zXTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2RvQ291bnQgPSAoKSA9PiBwcm9qZWN0cy5sZW5ndGg7XHJcblxyXG4gIHJldHVybiB7IG5hbWUsIHByb2plY3RzLCBhZGRUb2RvLCBnZXRUb2RvLCB0b2RvQ291bnQgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3UHJvamVjdHM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBuZXdQcm9qZWN0IGZyb20gXCIuL3RvZG9Nb2R1bGVcIjtcclxuaW1wb3J0IGZ1biBmcm9tIFwiLi9Eb21Nb2R1bGVcIjtcclxuXHJcbmNvbnN0IHByajEgPSBuZXdQcm9qZWN0KFwiRGVmYXVsdFwiKTtcclxuY29uc3QgcHJqMjEgPSBuZXdQcm9qZWN0KFwiU3BlY2lhbFwiKTtcclxuY29uc3QgcHJqMzEgPSBuZXdQcm9qZWN0KFwic29tZU90aGVyXCIpO1xyXG5cclxucHJqMS5hZGRUb2RvKFwidG9kbzFcIik7XHJcbnByajEuYWRkVG9kbyhcInRvZG80XCIpO1xyXG5wcmoxLmFkZFRvZG8oXCJ0b2RvZnNkZnMgc2RmZyBkMlwiKTtcclxucHJqMS5hZGRUb2RvKFwidG9kbzE1XCIpO1xyXG5cclxuZnVuLmRpc3BsYXlUb2RvKHByajEuZ2V0VG9kbygwKSk7XHJcbmZ1bi5kaXNwbGF5VG9kbyhwcmoxLmdldFRvZG8oMykpO1xyXG5mdW4uZGlzcGxheVRvZG8ocHJqMS5nZXRUb2RvKDIpKTtcclxuXHJcbmZ1bi5kaXNwbGF5UHJvamVjdChwcmoxKTtcclxuZnVuLmRpc3BsYXlQcm9qZWN0KHByajIxKTtcclxuZnVuLmRpc3BsYXlQcm9qZWN0KHByajMxKTtcclxuXHJcbmNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvak5hbWUgPSBmdW4uZmV0Y2hQcm9qZWN0TmFtZSgpO1xyXG4gIGlmIChwcm9qTmFtZSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gIGNvbnN0IHByb2ogPSBuZXdQcm9qZWN0KHByb2pOYW1lKTtcclxuICBmdW4uZGlzcGxheVByb2plY3QocHJvaik7XHJcbn07XHJcblxyXG5jb25zdCBhZGROZXdUb2RvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvZG9PYmogPSBmdW4uZmV0Y2hUb2RvRGV0YWlscygpO1xyXG4gIGlmICh0b2RvT2JqLnRpdGxlID09PSBcIlwiKSByZXR1cm47XHJcbiAgcHJqMS5hZGRUb2RvKHRvZG9PYmoudGl0bGUsIHRvZG9PYmouZHVlRGF0ZSk7XHJcbiAgZnVuLmRpc3BsYXlUb2RvKHRvZG9PYmopO1xyXG59O1xyXG5cclxuY29uc3QgYWRkUHJvamVjdEFkZCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCAubmV3LWFkZFwiKTtcclxuYWRkUHJvamVjdEFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdCk7XHJcblxyXG5jb25zdCBhZGRUb2RvQWRkID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10b2RvLWRpdiAubmV3LWFkZFwiKTtcclxuYWRkVG9kb0FkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTmV3VG9kbyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==