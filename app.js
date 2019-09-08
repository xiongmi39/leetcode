import "babel-polyfill";
// import reverseList from './js/linkList/reverseLink.js';
// import reverseWords from './js/others/reverseWords.js';
// import pickBinaryStr from './js/binary/binaryString.js';
// import getPhoneNumComb from './js/array/phoneNumbers.js';
// import getSubSets from './js/array/subsets.js';
import Utils from './js/utils/utils.js';
// import dfssearch from './js/dfs/dfs.js';
import bfssearch from './js/bfs/bfs.js';
let func = () => {};
const NUM = 45;
let arr = [1, 2, 4];
let arrB = arr.map(item => item * 2);

console.log(arrB.includes(8));
console.log("new Set(arrB) is ", new Set(arrB));
