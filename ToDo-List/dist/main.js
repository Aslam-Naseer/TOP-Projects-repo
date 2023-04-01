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

const displayAllTodos = (e) => {
  console.log(e.target);
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

initProjects(prj1, "Default");
initProjects(prj21, "Specl");
initProjects(prj31, "someone");

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

const projects = content.querySelector(".projects-list>li");
projects.addEventListener("click", displayAllTodos);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDQXNDO0FBQ1I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1REFBVTtBQUN2QixjQUFjLHVEQUFVO0FBQ3hCLGNBQWMsdURBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQWU7QUFDZiw4REFBZTtBQUNmLDhEQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtFQUFtQjtBQUNyQixrQkFBa0Isc0JBQXNCLEtBQUssOERBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1FQUFvQjtBQUN2QztBQUNBLGVBQWUsdURBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpRUFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1FQUFvQjtBQUN0QztBQUNBO0FBQ0EsRUFBRSw4REFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRG9tTW9kdWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvTW9kdWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tc2hhZGVBOiAjMjIyMjIyO1xcclxcbiAgLS1zaGFkZUI6ICMxMjEyMTI7XFxyXFxuICAtLXRleHQ6ICNGRkY7XFxyXFxuICAtLXRleHRMaWdodDogIzk5OTtcXHJcXG4gIC0tdGhlbWU6ICMwZmY7XFxyXFxuICAtLWNoZWNrZWQ6IHJnYigwLCAyNTUsIDk4KTtcXHJcXG4gIC0tYWRkOiAjOTBmZTkwO1xcclxcbiAgLS1jYW5jZWw6ICNmZjg2ODY7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDIwMHB4ICsgMTB2dykgMWZyO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkZUEpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggYXV0byAxZnI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkZUIpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggYXV0byAxZnI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cz5kaXY6Zmlyc3QtY2hpbGQsXFxyXFxuLnRvZG9zPmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGV4dExpZ2h0KTtcXHJcXG4gIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idG4ge1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dExpZ2h0KTtcXHJcXG4gIHBhZGRpbmc6IDEycHggMThweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjE7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnRuOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIisgXFxcIjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10aGVtZSk7XFxyXFxufVxcclxcblxcclxcbi50b2Rvcy1saXN0LFxcclxcbi5wcm9qZWN0cy1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGl2IHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHRMaWdodCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kaXY6aG92ZXIge1xcclxcbiAgc2NhbGU6IDEuMDM7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggM3B4ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRvbmUge1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgdHJhbnNsYXRlOiAwIDJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0TGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kb25lOmNoZWNrZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2tlZCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUge1xcclxcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kaXYge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dExpZ2h0KTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRpdjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLXByb2plY3Qge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXByb2plY3QtbmFtZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgaGVpZ2h0OiAzNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3Q+ZGl2IHtcXHJcXG4gIG1hcmdpbjogMTJweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1hZGQsXFxyXFxuLm5ldy1jYW5jZWwge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBwYWRkaW5nOiA2cHggMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXctYWRkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZCk7XFxyXFxufVxcclxcblxcclxcbi5uZXctY2FuY2VsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbmNlbCk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdCAubmV3LWFkZCxcXHJcXG4uYWRkLXByb2plY3QgLm5ldy1jYW5jZWwge1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10b2RvLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10b2RvLW5hbWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRMaWdodCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBwYWRkaW5nOiAwIDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBoZWlnaHQ6IDM2cHg7XFxyXFxufVxcclxcblxcclxcbi5uZXctdG9kby1kYXRlIHtcXHJcXG4gIGNvbG9yLXNjaGVtZTogZGFyaztcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIHBhZGRpbmc6IDAgNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tZGl2PmRpdiB7fVxcclxcblxcclxcbi5uZXctdG9kby1kaXYgLm5ldy1hZGQsXFxyXFxuLm5ldy10b2RvLWRpdiAubmV3LWNhbmNlbCB7XFxyXFxuICBtYXJnaW46IDAgNnB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUEsbUJBQW1COztBQUVuQjs7RUFFRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1zaGFkZUE6ICMyMjIyMjI7XFxyXFxuICAtLXNoYWRlQjogIzEyMTIxMjtcXHJcXG4gIC0tdGV4dDogI0ZGRjtcXHJcXG4gIC0tdGV4dExpZ2h0OiAjOTk5O1xcclxcbiAgLS10aGVtZTogIzBmZjtcXHJcXG4gIC0tY2hlY2tlZDogcmdiKDAsIDI1NSwgOTgpO1xcclxcbiAgLS1hZGQ6ICM5MGZlOTA7XFxyXFxuICAtLWNhbmNlbDogI2ZmODY4NjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMjAwcHggKyAxMHZ3KSAxZnI7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRlQSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCBhdXRvIDFmcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9zIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRlQik7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvIDFmcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzPmRpdjpmaXJzdC1jaGlsZCxcXHJcXG4udG9kb3M+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXh0TGlnaHQpO1xcclxcbiAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0biB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0TGlnaHQpO1xcclxcbiAgcGFkZGluZzogMTJweCAxOHB4O1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idG46OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiKyBcXFwiO1xcclxcbiAgY29sb3I6IHZhcigtLXRoZW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9zLWxpc3QsXFxyXFxuLnByb2plY3RzLWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kaXYge1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dExpZ2h0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRpdjpob3ZlciB7XFxyXFxuICBzY2FsZTogMS4wMztcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAzcHggIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZG9uZSB7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB0cmFuc2xhdGU6IDAgMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRMaWdodCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRvbmU6Y2hlY2tlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVja2VkKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGF0ZSB7XFxyXFxuICBjb2xvci1zY2hlbWU6IGRhcms7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRpdiB7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0TGlnaHQpO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGl2OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtcHJvamVjdCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3Qge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdC1uYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBoZWlnaHQ6IDM2cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdD5kaXYge1xcclxcbiAgbWFyZ2luOiAxMnB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWFkZCxcXHJcXG4ubmV3LWNhbmNlbCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1hZGQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1jYW5jZWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0IC5uZXctYWRkLFxcclxcbi5hZGQtcHJvamVjdCAubmV3LWNhbmNlbCB7XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tZGl2IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tbmFtZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dExpZ2h0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHBhZGRpbmc6IDAgNnB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGhlaWdodDogMzZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10b2RvLWRhdGUge1xcclxcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgcGFkZGluZzogMCA2cHg7XFxyXFxufVxcclxcblxcclxcbi5uZXctdG9kby1kaXY+ZGl2IHt9XFxyXFxuXFxyXFxuLm5ldy10b2RvLWRpdiAubmV3LWFkZCxcXHJcXG4ubmV3LXRvZG8tZGl2IC5uZXctY2FuY2VsIHtcXHJcXG4gIG1hcmdpbjogMCA2cHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudCA9ICh0eXBlLCBjbGFzc05hbWUsIHRleHQpID0+IHtcclxuICBjb25zdCBjb21wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICBpZiAoISF0ZXh0KSBjb21wLnRleHRDb250ZW50ID0gdGV4dDtcclxuICBpZiAoISFjbGFzc05hbWUpIHtcclxuICAgIGNvbXAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIH1cclxuICByZXR1cm4gY29tcDtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlUb2RvID0gKHRvZG8pID0+IHtcclxuICBjb25zdCB0b2RvRGl2ID0gY29tcG9uZW50KFwibGlcIiwgXCJ0b2RvLWRpdlwiKTtcclxuICB0b2RvRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGB0b2RvLSR7dG9kby50aXRsZX1gKTtcclxuXHJcbiAgY29uc3QgY2hlY2tCb3ggPSBjb21wb25lbnQoXCJpbnB1dFwiLCBcInRvZG8tZG9uZVwiKTtcclxuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcblxyXG4gIGNvbnN0IHRvZG9UaXRsZSA9IGNvbXBvbmVudChcImRpdlwiLCBcIlwiLCBgJHt0b2RvLnRpdGxlfWApO1xyXG5cclxuICBjb25zdCBjYWxhbmRlciA9IGNvbXBvbmVudChcImlucHV0XCIsIFwidG9kby1kYXRlXCIpO1xyXG4gIGNhbGFuZGVyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xyXG4gIGNhbGFuZGVyLnZhbHVlID0gYCR7dG9kby5kdWVEYXRlfWA7XHJcblxyXG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xyXG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcclxuICB0b2RvRGl2LmFwcGVuZENoaWxkKGNhbGFuZGVyKTtcclxuXHJcbiAgdG9kb3MuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XHJcbn07XHJcblxyXG5jb25zdCBhZGRUb2RvQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1RvZG9EaXYgPSBjb21wb25lbnQoXCJkaXZcIiwgXCJuZXctdG9kby1kaXZcIik7XHJcblxyXG4gIGNvbnN0IHRvZG9UaXRsZSA9IGNvbXBvbmVudChcImlucHV0XCIsIFwibmV3LXRvZG8tbmFtZVwiKTtcclxuXHJcbiAgY29uc3QgY2FsYW5kZXIgPSBjb21wb25lbnQoXCJpbnB1dFwiLCBcIm5ldy10b2RvLWRhdGVcIik7XHJcbiAgY2FsYW5kZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XHJcblxyXG4gIGNvbnN0IGFkZFRvZG9CdXR0b25zID0gY29tcG9uZW50KFwiZGl2XCIpO1xyXG4gIGFkZFRvZG9CdXR0b25zLmFwcGVuZENoaWxkKGNvbXBvbmVudChcImJ1dHRvblwiLCBcIm5ldy1hZGRcIiwgXCJBZGRcIikpO1xyXG4gIGFkZFRvZG9CdXR0b25zLmFwcGVuZENoaWxkKGNvbXBvbmVudChcImJ1dHRvblwiLCBcIm5ldy1jYW5jZWxcIiwgXCJDYW5jZWxcIikpO1xyXG5cclxuICBuZXdUb2RvRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XHJcbiAgbmV3VG9kb0Rpdi5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9ucyk7XHJcbiAgbmV3VG9kb0Rpdi5hcHBlbmRDaGlsZChjYWxhbmRlcik7XHJcblxyXG4gIHJldHVybiBuZXdUb2RvRGl2O1xyXG59O1xyXG5cclxuY29uc3QgbG9hZEFkZFRvZG8gPSAoKSA9PiB7XHJcbiAgY29uc3QgYWRkVG9kb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvZG8tZGl2XCIpO1xyXG4gIGNvbnN0IGFkZFRvZG9CdG4gPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3M+LmFkZC1idG5cIik7XHJcblxyXG4gIGFkZFRvZG9CdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGFkZFRvZG9EaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG59O1xyXG5cclxuY29uc3QgdW5sb2FkQWRkVG9kbyA9ICgpID0+IHtcclxuICBjb25zdCBhZGRUb2RvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdG9kby1kaXZcIik7XHJcbiAgY29uc3QgYWRkVG9kb0J0biA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvcz4uYWRkLWJ0blwiKTtcclxuXHJcbiAgY29uc3QgdGV4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdG9kby1uYW1lXCIpO1xyXG4gIGNvbnN0IGRhdGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvZG8tZGF0ZVwiKTtcclxuICB0ZXh0RmllbGQudmFsdWUgPSBcIlwiO1xyXG4gIGRhdGVGaWVsZC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gIGFkZFRvZG9CdG4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgYWRkVG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaFRvZG9EZXRhaWxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvZG9OYW1lID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10b2RvLW5hbWVcIik7XHJcbiAgY29uc3QgdG9kb0RhdGUgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvZG8tZGF0ZVwiKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSB0b2RvTmFtZS52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gdG9kb0RhdGUudmFsdWU7XHJcblxyXG4gIGlmICh0aXRsZSA9PT0gXCJcIikgYWxlcnQoXCJUYXNrIG5lZWRzIGEgdGl0bGVcIik7XHJcbiAgZWxzZSB1bmxvYWRBZGRUb2RvKCk7XHJcbiAgcmV0dXJuIHsgdGl0bGUsIGR1ZURhdGUgfTtcclxufTtcclxuXHJcbmNvbnN0IGFjdGl2YXRlUHJvamVjdCA9IChlKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdE5vZGVzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZGl2XCIpO1xyXG4gIHByb2plY3ROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcHJvamVjdFwiKSk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xyXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG5cclxuICBjb25zdCB0b2Rvc0xpc3QgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3MtbGlzdFwiKTtcclxuICB0b2Rvc0xpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdERpdiA9IGNvbXBvbmVudChcImxpXCIsIFwicHJvamVjdC1kaXZcIiwgYCR7cHJvamVjdC5uYW1lfWApO1xyXG4gIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xyXG4gIHJldHVybiBwcm9qZWN0RGl2O1xyXG59O1xyXG5cclxuY29uc3QgYWRkUHJvamVjdENvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBhZGRQcm9qZWN0RGl2ID0gY29tcG9uZW50KFwiZGl2XCIsIFwiYWRkLXByb2plY3RcIik7XHJcblxyXG4gIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gY29tcG9uZW50KFwiaW5wdXRcIiwgXCJuZXctcHJvamVjdC1uYW1lXCIpO1xyXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b25zID0gY29tcG9uZW50KFwiZGl2XCIpO1xyXG5cclxuICBhZGRQcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChjb21wb25lbnQoXCJidXR0b25cIiwgXCJuZXctYWRkXCIsIFwiQWRkXCIpKTtcclxuICBhZGRQcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChjb21wb25lbnQoXCJidXR0b25cIiwgXCJuZXctY2FuY2VsXCIsIFwiQ2FuY2VsXCIpKTtcclxuXHJcbiAgYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TmFtZSk7XHJcbiAgYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9ucyk7XHJcblxyXG4gIHJldHVybiBhZGRQcm9qZWN0RGl2O1xyXG59O1xyXG5cclxuY29uc3QgbG9hZEFkZFByb2plY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWRkUHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XHJcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cz4uYWRkLWJ0blwiKTtcclxuXHJcbiAgYWRkUHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgYWRkUHJvamVjdERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn07XHJcblxyXG5jb25zdCB1bmxvYWRBZGRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFByb2plY3REaXYgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XHJcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cz4uYWRkLWJ0blwiKTtcclxuXHJcbiAgY29uc3QgdGV4dEZpZWxkID0gYWRkUHJvamVjdERpdi5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LW5hbWVcIik7XHJcbiAgdGV4dEZpZWxkLnZhbHVlID0gXCJcIjtcclxuXHJcbiAgYWRkUHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICBhZGRQcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoUHJvamVjdE5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtbmFtZVwiKTtcclxuICBjb25zdCBuYW1lID0gcHJvamVjdE5hbWUudmFsdWU7XHJcbiAgaWYgKG5hbWUgPT09IFwiXCIpIGFsZXJ0KFwiUHJvamVjdCBuZWVkcyBhIG5hbWVcIik7XHJcbiAgZWxzZSB1bmxvYWRBZGRQcm9qZWN0KCk7XHJcbiAgcmV0dXJuIG5hbWU7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0U2lkZSA9IGNvbXBvbmVudChcImRpdlwiLCBcInByb2plY3RzXCIpO1xyXG4gIGNvbnN0IHRvZG9zU2lkZSA9IGNvbXBvbmVudChcImRpdlwiLCBcInRvZG9zXCIpO1xyXG5cclxuICBwcm9qZWN0U2lkZS5hcHBlbmRDaGlsZChjb21wb25lbnQoXCJkaXZcIiwgXCJcIiwgXCJQcm9qZWN0c1wiKSk7XHJcbiAgcHJvamVjdFNpZGUuYXBwZW5kQ2hpbGQoY29tcG9uZW50KFwidWxcIiwgXCJwcm9qZWN0cy1saXN0XCIpKTtcclxuICBwcm9qZWN0U2lkZS5hcHBlbmRDaGlsZChjb21wb25lbnQoXCJidXR0b25cIiwgXCJhZGQtYnRuXCIsIFwiQWRkIFByb2plY3RcIikpO1xyXG4gIHByb2plY3RTaWRlLmFwcGVuZENoaWxkKGFkZFByb2plY3RDb21wb25lbnQoKSk7XHJcblxyXG4gIHRvZG9zU2lkZS5hcHBlbmRDaGlsZChjb21wb25lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LXRpdGxlXCIpKTtcclxuICB0b2Rvc1NpZGUuYXBwZW5kQ2hpbGQoY29tcG9uZW50KFwidWxcIiwgXCJ0b2Rvcy1saXN0XCIpKTtcclxuICB0b2Rvc1NpZGUuYXBwZW5kQ2hpbGQoY29tcG9uZW50KFwiYnV0dG9uXCIsIFwiYWRkLWJ0blwiLCBcIkFkZCBUYXNrXCIpKTtcclxuICB0b2Rvc1NpZGUuYXBwZW5kQ2hpbGQoYWRkVG9kb0NvbXBvbmVudCgpKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0U2lkZSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0b2Rvc1NpZGUpO1xyXG59O1xyXG5cclxuY29uc3QgbG9hZEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHM+LmFkZC1idG5cIik7XHJcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEFkZFByb2plY3QpO1xyXG5cclxuICBjb25zdCBhZGRQcm9qZWN0Q2FuY2VsID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IC5uZXctY2FuY2VsXCIpO1xyXG4gIGFkZFByb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVubG9hZEFkZFByb2plY3QpO1xyXG5cclxuICBjb25zdCBhZGRUb2RvQnRuID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zPi5hZGQtYnRuXCIpO1xyXG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRBZGRUb2RvKTtcclxuXHJcbiAgY29uc3QgYWRkVG9kb0NhbmNlbCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdG9kby1kaXYgLm5ldy1jYW5jZWxcIik7XHJcbiAgYWRkVG9kb0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdW5sb2FkQWRkVG9kbyk7XHJcbn07XHJcblxyXG5sb2FkUGFnZSgpO1xyXG5sb2FkRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IHRvZG9zID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLWxpc3RcIik7XHJcbmNvbnN0IHByb2plY3RzID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGlzcGxheVRvZG8sXHJcbiAgZGlzcGxheVByb2plY3QsXHJcbiAgZmV0Y2hQcm9qZWN0TmFtZSxcclxuICBmZXRjaFRvZG9EZXRhaWxzLFxyXG4gIGFjdGl2YXRlUHJvamVjdCxcclxufTtcclxuIiwiZnVuY3Rpb24gY3JlYXRlVG9kbyhzdGF0ZSkge1xyXG4gIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld1Byb2plY3RzKG5hbWUpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICBjb25zdCBhZGRUb2RvID0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSA9IDUpID0+IHtcclxuICAgIGNvbnN0IHN0YXRlID0geyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcclxuICAgIHByb2plY3RzLnB1c2goY3JlYXRlVG9kbyhzdGF0ZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRvZG8gPSAodmFsID0gMCkgPT4ge1xyXG4gICAgY29uc3QgcG9zID1cclxuICAgICAgdmFsID49IHByb2plY3RzLmxlbmd0aCA/IHByb2plY3RzLmxlbmd0aCAtIDEgOiB2YWwgPCAwID8gMCA6IHZhbDtcclxuICAgIHJldHVybiBwcm9qZWN0c1twb3NdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZG9Db3VudCA9ICgpID0+IHByb2plY3RzLmxlbmd0aDtcclxuXHJcbiAgcmV0dXJuIHsgbmFtZSwgcHJvamVjdHMsIGFkZFRvZG8sIGdldFRvZG8sIHRvZG9Db3VudCB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdQcm9qZWN0cztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IG5ld1Byb2plY3QgZnJvbSBcIi4vdG9kb01vZHVsZVwiO1xyXG5pbXBvcnQgZnVuIGZyb20gXCIuL0RvbU1vZHVsZVwiO1xyXG5cclxuY29uc3QgcHJvamVjdHNBcnJheSA9IHt9O1xyXG5cclxuY29uc3QgcHJqMSA9IG5ld1Byb2plY3QoXCJEZWZhdWx0XCIpO1xyXG5jb25zdCBwcmoyMSA9IG5ld1Byb2plY3QoXCJTcGVjaWFsXCIpO1xyXG5jb25zdCBwcmozMSA9IG5ld1Byb2plY3QoXCJzb21lT3RoZXJcIik7XHJcblxyXG5wcmoxLmFkZFRvZG8oXCJ0b2RvMVwiKTtcclxucHJqMS5hZGRUb2RvKFwidG9kbzRcIik7XHJcbnByajEuYWRkVG9kbyhcInRvZG9mc2RmcyBzZGZnIGQyXCIpO1xyXG5wcmoxLmFkZFRvZG8oXCJ0b2RvMTVcIik7XHJcblxyXG5mdW4uZGlzcGxheVRvZG8ocHJqMS5nZXRUb2RvKDApKTtcclxuZnVuLmRpc3BsYXlUb2RvKHByajEuZ2V0VG9kbygzKSk7XHJcbmZ1bi5kaXNwbGF5VG9kbyhwcmoxLmdldFRvZG8oMikpO1xyXG5cclxuY29uc3QgZGlzcGxheUFsbFRvZG9zID0gKGUpID0+IHtcclxuICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcbiAgY29uc3QgcHJvaiA9IHByb2plY3RzQXJyYXlbZS50YXJnZXQuZGF0YXNldC5uYW1lXTtcclxuICBmdW4uYWN0aXZhdGVQcm9qZWN0KGUpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvai50b2RvQ291bnQoKTsgaSsrKSBmdW4uZGlzcGxheVRvZG8ocHJvai5nZXRUb2RvKGkpKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvak5hbWUgPSBmdW4uZmV0Y2hQcm9qZWN0TmFtZSgpO1xyXG4gIGlmIChwcm9qTmFtZSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gIGNvbnN0IHByb2ogPSBuZXdQcm9qZWN0KHByb2pOYW1lKTtcclxuICBpbml0UHJvamVjdHMocHJvaiwgcHJvak5hbWUpO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdFByb2plY3RzID0gKHByb2osIHByb2pOYW1lKSA9PiB7XHJcbiAgcHJvamVjdHNBcnJheVtwcm9qTmFtZV0gPSBwcm9qO1xyXG4gIGNvbnN0IHByb2pOb2RlID0gZnVuLmRpc3BsYXlQcm9qZWN0KHByb2opO1xyXG4gIHByb2pOb2RlLmRhdGFzZXQubmFtZSA9IHByb2pOYW1lO1xyXG4gIHByb2pOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5QWxsVG9kb3MpO1xyXG59O1xyXG5cclxuaW5pdFByb2plY3RzKHByajEsIFwiRGVmYXVsdFwiKTtcclxuaW5pdFByb2plY3RzKHByajIxLCBcIlNwZWNsXCIpO1xyXG5pbml0UHJvamVjdHMocHJqMzEsIFwic29tZW9uZVwiKTtcclxuXHJcbmNvbnN0IGFkZE5ld1RvZG8gPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9kb09iaiA9IGZ1bi5mZXRjaFRvZG9EZXRhaWxzKCk7XHJcbiAgaWYgKHRvZG9PYmoudGl0bGUgPT09IFwiXCIpIHJldHVybjtcclxuICBwcmoxLmFkZFRvZG8odG9kb09iai50aXRsZSwgdG9kb09iai5kdWVEYXRlKTtcclxuICBmdW4uZGlzcGxheVRvZG8odG9kb09iaik7XHJcbn07XHJcblxyXG5jb25zdCBhZGRQcm9qZWN0QWRkID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IC5uZXctYWRkXCIpO1xyXG5hZGRQcm9qZWN0QWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0KTtcclxuXHJcbmNvbnN0IGFkZFRvZG9BZGQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvZG8tZGl2IC5uZXctYWRkXCIpO1xyXG5hZGRUb2RvQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdUb2RvKTtcclxuXHJcbmNvbnN0IHByb2plY3RzID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3Q+bGlcIik7XHJcbnByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5QWxsVG9kb3MpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=