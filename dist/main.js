/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _NodeClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  // Insert at the end
  append(value) {
    const node = new _NodeClass__WEBPACK_IMPORTED_MODULE_0__["default"](value);

    // If empty create head and tail else update the tail
    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.nextNode = node;
      this._tail = this._tail.nextNode
    }

    this._size += 1;
  }

  // Insert at start
  prepend(value) {
    if (!this._head) {
      this._head = new _NodeClass__WEBPACK_IMPORTED_MODULE_0__["default"](value, this._head);
      this._tail = this._head;
    } else {
      this._head = new _NodeClass__WEBPACK_IMPORTED_MODULE_0__["default"](value, this._head);
    }
    this._size += 1;
  }

  size() {
    console.log(this._size);
  }

  head() {
    return this._head.value;
  }

  tail() {
    return this._tail.value;
  }

  // Return node at index
  at(index) {
    let current = this._head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count += 1;
      current = current.next;
    }

    return null;
  }

  pop() {
    let current = this._head;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = null;
    this._tail = current
    this._size -= 1;

  }

  // Returns true if the value exist in the list
  contains(value) {
    if (this.find(value) === null) {
      return false;
    }
    return true;
  }

  // Returns the index of the node containing value
  find(value) {
    let current = this._head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode
      index += 1;
    }
    return null;
  }

  toString() {
    let current = this._head;
    let string = ''
    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return string + 'null';
  }

  // Insert at index
  insertAt(value, index) {
    //  If index is out of range
    if (index > 0 && index > this._size) {
      return;
    }

    // If first index or list empty
    if (index === 0 || !this._head) {
      this.prepend(value);
      return;
    } else if (index === this._size) {
      //If insert after tail
      this.append(value);
      return;
    }

    const node = new _NodeClass__WEBPACK_IMPORTED_MODULE_0__["default"](value);
    let current;
    let previous;

    // Set current to head
    current = this._head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count += 1;
      current = current.nextNode; // Node after index
    }

    node.nextNode = current;
    previous.nextNode = node;

    this._size += 1;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index >= this._size) {
      return;
    }

    let current = this._head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this._head = current.nextNode;
    } else if (index === (Number(this._size - 1))) {
      //If remove last
      this.pop();
    }else {
      while (count < index) {
        count += 1;
        previous = current;
        current = current.nextNode;
      }

      previous.nextNode = current.nextNode;
    }

    this._size -= 1;
  }

  // clearList() {
  //   this._head = null;
  //   this._size = 0;
  // }
  
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printResult": () => (/* binding */ printResult)
/* harmony export */ });


function printResult(string) {
  document.getElementById('result').textContent = string
  console.log(string)
}

/***/ })
/******/ 	]);
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _DomStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



console.log('You can access the Linked List functions using "list.<function>"')
const list = new _ListClass__WEBPACK_IMPORTED_MODULE_0__["default"]();
list.prepend(100);
list.prepend(3000);
list.prepend(200);
list.prepend(40000);
list.append(200)

;(0,_DomStuff__WEBPACK_IMPORTED_MODULE_1__.printResult)(list.toString)

window.list = list;
})();

/******/ })()
;