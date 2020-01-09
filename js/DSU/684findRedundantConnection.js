/**
 * @param {number[][]} edges
 * @return {number[]}
 */
// var findRedundantConnection = function(edges) {
// 	let adj = {};
// 	for (let i = edges.length-1; i > 0; i--) {
// 		let [x,y] = edges[i];
// 		if(!adj[x]){
// 			adj[x] = {};
// 		}
// 		adj[x].push(y);
// 		if(!adj[y]){
// 			adj[y] = {};
// 		}
// 		adj[y].push(x);
// 	}
// 	for (let i in adj) {
// 		dfs(adj,{},i,i);
// 	}
//     function dfs(adj,visited,i,start){
//     	if(visited[i]){
//     		return ;
//     	}
//     	visited[i] = true;
    	
//     }
// };

//DSU
var findRedundantConnection = function(edges) {
    let par = [];

    for (let i = 0; i < edges.length; i++) {
    	init(edges[i][0]);
    	init(edges[i][1]);
    	let rootx = find(edges[i][0]);
    	let rooty = find(edges[i][1]);
    	if(rootx == rooty){
    		return edges[i];
    	}else{
    		union(edges[i][0],edges[i][1]);
    	}
    }
    function find(p){
    	while(p !== par[p]){
    		par[p] = par[par[p]];
    		p = par[p];
    	}
    	return p;
    }
    function init(p){
    	if(par[p]){
    		return;
    	}
    	par[p] = p;
    }
    function union(p,q){
    	let rootp = find(p);
    	let rootq = find(q);
    	if(rootp == rootq){
    		return;
    	}
    	par[rootp] = rootq;
    }
};
let testcase = findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]]);
console.log(testcase);
export default findRedundantConnection;