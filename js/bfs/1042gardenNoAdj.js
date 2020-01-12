/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
	let garden = new Array(N).fill(1);
    let adj = {};
    for (var i = 0; i < paths.length; i++) {
    	let [x,y] = paths[i];
    	if(!adj[Math.max(x,y)-1]){
    		adj[Math.max(x,y)-1] = [];
    	}
    	adj[Math.max(x,y)-1].push(Math.min(x,y)-1);
    }
    for (let i = 1; i < N; i++) {
    	let lastNo = new Set([1,2,3,4]);
    	if(!adj[i]){
    		continue;
    	}
    	for (let j = 0; j < adj[i].length; j++) {
    		lastNo.delete(garden[adj[i][j]]);
    	}
    	garden[i] = Array.from(lastNo)[0];
    }

    return garden;
};

let testcase = gardenNoAdj(5,[[4,1],[4,2],[4,3],[2,5],[1,2],[1,5]]);
console.log(testcase);
export default gardenNoAdj;