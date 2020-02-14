/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// var hammingWeight = function(n) {
//     let sum = 0;
//     while(n !== 0){
//     	n &= n-1;
//     	sum++;
//     }
//     return sum;
// };
var hammingWeight = function(n) {
    return n.toString(2).split('0').join('').length;
};

let testcase = hammingWeight( parseInt('00000000000000000000000000001011',2));
console.log(testcase);
export default hammingWeight;