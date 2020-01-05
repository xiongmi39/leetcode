/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
 //dfs
// var calcEquation = function(equations, values, queries) {
//     let graph = {};
//     let visited = {};
//     for (let i = 0; i < equations.length; i++) {
//     	let [x,y] = equations[i];
//     	if(!graph[x]){
//     		graph[x] = {};
//     	}
//     	graph[x][y] = parseFloat(values[i]);
//     	if(!graph[y]){
//     		graph[y] = {};
//     	}
//     		graph[y][x] = parseFloat(1/values[i]);
//     }
//     let goal = [];
//     for (let i = 0; i < queries.length; i++) {
//     	let value = getValue(queries[i][0],queries[i][1]);
//     	goal.push(parseFloat(value));
//     	visited = {};
//     }
//     return goal;
//     function getValue(v,s){
//     	if(visited[v]){
//     		return -1;
//     	}
//     	visited[v] = true;
//     	if(!graph[v] || !graph[s]){
//     		return -1.0;
//     	}
//     	if(v == s){
//     		return 1.0;
//     	}
//     	let value = 1.0;
//     	for (let i in graph[v]) {   		
//     		if(i == s){
//     			return graph[v][i];
//     		}
//     		value = getValue(i,s);   
//     		if(value !== -1){
//     			return value*graph[v][i];
//     		}		
//     	}
//     	return value;
//     }
// };

//bfs
// var calcEquation = function(equations, values, queries) {
// 	let graph = {};
// 	let visited = {};
// 	for (let i = 0; i < equations.length; i++) {
// 		let [x,y] = equations[i];
// 		if(!graph[x]){
// 			graph[x] = {};
// 		}
// 		graph[x][y] = parseFloat(values[i]);
// 		if(!graph[y]){
// 			graph[y] = {};
// 		}
// 		graph[y][x] = parseFloat(1/values[i]);
// 	}
// 	let goal = [];
// 	for (let i = 0; i < queries.length; i++) {
// 		let [x,y] = queries[i];
// 		let value = getValue(x,y);
// 		goal.push(parseFloat(value));
// 	}
// 	return goal;
// 	function getValue(x,y){
// 		let q = [[x,1]];
// 		let visited = {};
// 		while(q.length !== 0){
// 			let [s,v] = q.pop();
// 			if(visited[s]){
// 				continue;
// 			}
// 			if(!graph[x] || ! graph[y]){
// 				return -1.0;
// 			}
// 			if(x == y){
// 				return 1.0;
// 			}
// 			visited[s] = true;
// 			for (let i in graph[s]) {
// 				if(i == y){
// 					return v*graph[s][i];
// 				}
// 				q.push([i,v*graph[s][i]]);
// 			}
// 		}
// 		return -1.0;
// 	}
// };

var calcEquation = function(equations, values, queries) {
	let par = {};
	let val = {};
	let goal = [];
	for (let i = 0; i < equations.length; i++) {
		let[x,y] = equations[i];
		union(x,y,values[i]);
	}
	for (let i = 0; i < queries.length; i++) {
		goal.push(parseFloat(ask(queries[i][0],queries[i][1])));
	}
	return goal;
	function ask(p,q){
		if(!par[p] || !par[q]){
			return -1.0;
		}

		let rootp = find(p);
		let rootq = find(q);
		if(rootp !== rootq){
			return -1.0;
		}
		return val[q] * 1.0 / val[p];
	}
	function init(p){
		if(!par[p]){
			par[p] = p; 
			val[p] = 1;
		}
	}
	function find(p){
		if(par[p] == p){
			return p;
		}else{
			let f = find(par[p]);
			val[p] = val[p] * val[par[p]];
			return par[p] = f;
		}
	}
    function union(p,q,v){
    	init(p);
    	init(q);
    	let rootp = find(p);
    	let rootq = find(q);

    	par[rootq] = rootp;
    	val[rootq] = val[p] *1.0 / val[q] * v;

    }
};

let testcase = calcEquation([["a","b"],["b","c"]],[2.0,3.0],[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]);
console.log(testcase);
export default calcEquation;