/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\")\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\n\nfunction Asteroid(pos = [250, 0], vel = [0,50], radius = 50, color = \"black\") {\n    const canvas = document.getElementById('game-canvas');\n    canvas.width = 500,\n    canvas.height =500;\n\n    this.context = canvas.getContext(\"2d\");\n    this.pos = pos;\n    this.vel = vel;\n    this.radius = radius;\n    this.color = color;\n}\nUtils.inherits(Asteroid, MovingObject);\n\nwindow.Asteroid = Asteroid;\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://webpack/./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconsole.log(\"Webpack is working!\")\nconst MovingObject =__webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nwindow.MovingObject = MovingObject;\nconst Asteroid =__webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\nwindow.Asteroid = Asteroid;\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById('game-canvas');\n    canvas.width = 500,\n    canvas.height =500;\n    const ctx = canvas.getContext(\"2d\");\n\n    var grd = ctx.createLinearGradient(0,0,canvas.width,canvas.height);\n    grd.addColorStop(0, \"teal\");\n    grd.addColorStop(1, \"white\");\n\n    ctx.fillStyle = grd;\n    ctx.fillRect(0 , 0, canvas.width,canvas.height);\n\n    var grd2 = ctx.createLinearGradient(0,0,canvas.width,canvas.height);\n    grd2.addColorStop(0, \"blue\");\n    grd2.addColorStop(1, \"red\");\n\n    ctx.beginPath();\n    ctx.arc(250,250, 100, 0, 2 * Math.PI)\n    ctx.strokeStyle = grd2;\n    ctx.lineWidth =40\n    ctx.stroke()\n})\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject (pos,vel,radius,color){\n    this.pos= pos;\n    this.vel =vel;\n    this.radius = radius;\n    this.color=color;\n}\n\nMovingObject.prototype.move = function() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.draw(this.context);\n}\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0],this.pos[1], this.radius, 0, 2 * Math.PI)\n    ctx.strokeStyle = \"black\";\n    ctx.lineWidth =40\n    ctx.stroke()\n}\n\nwindow.MovingObject = MovingObject;\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack://webpack/./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Utils = {\n    inherits: function inherits (childClass, parentClass){\n        Surrogate = function(){};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    }\n};\n\nmodule.exports = Utils;\n\n//# sourceURL=webpack://webpack/./src/utils.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;