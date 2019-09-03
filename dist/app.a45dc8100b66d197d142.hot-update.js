webpackHotUpdate("app",{

/***/ "./js/linkList/reverseLink.js":
/*!************************************!*\
  !*** ./js/linkList/reverseLink.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _LinkListNode = __webpack_require__(/*! ./LinkListNode */ "./js/linkList/LinkListNode.js");

var _LinkListNode2 = _interopRequireDefault(_LinkListNode);

var _LinkedList = __webpack_require__(/*! ./LinkedList */ "./js/linkList/LinkedList.js");

var _LinkedList2 = _interopRequireDefault(_LinkedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reverseList = function reverseList(head) {
    var cur = head;
    var pre = null;
    while (cur != null) {
        cur.next = pre;
        pre = cur;
        cur = cur.next;
    }
};

var arrTest = ['0', '1', '2', '3'];
var linkdList = new _LinkedList2.default();
linkdList.arrayToLinkedList(arrTest);
console.log(linkdList);

exports.default = reverseList;

/***/ })

})
//# sourceMappingURL=app.a45dc8100b66d197d142.hot-update.js.map