/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
	let G = new Array(n+1).fill(0);
	G[0] = 1;
	G[1] = 1;
	for (let i = 2; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			G[i] += G[j-1]*G[i-j];
		}
	}
    return G[n];
};

var numTrees2 = function(n) {
	let G = new Array(n+1).fill(0);
	G[0] = 1;
	G[1] = 1;
	for (let i = 1; i <= n; i++) {
		G[i+1] = 2*(2*i+1)/(i+2)*G[i];
	}
	return G[n];
};




let testcase = numTrees2(3);
console.log(testcase);
export default numTrees;