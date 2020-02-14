/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
	console.log(x^y);
	let a = (x^y).toString(2);
	return (x^y).toString(2).split('').filter(a => a === '1').length;
};

let testcase = hammingDistance(1,4);
console.log(testcase);
export default hammingDistance;