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
var calcEquation = function(equations, values, queries) {
	let graph = {};
	let visited = {};
	for (let i = 0; i < equations.length; i++) {
		let [x,y] = equations[i];
		if(!graph[x]){
			graph[x] = {};
		}
		graph[x][y] = parseFloat(values[i]);
		if(!graph[y]){
			graph[y] = {};
		}
		graph[y][x] = parseFloat(1/values[i]);
	}
	let goal = [];
	for (let i = 0; i < queries.length; i++) {
		let [x,y] = queries[i];
		let value = getValue(x,y);
		goal.push(parseFloat(value));
	}
	return goal;
	function getValue(x,y){
		let q = [[x,1]];
		let visited = {};
		while(q.length !== 0){
			let [s,v] = q.pop();
			if(visited[s]){
				continue;
			}
			if(!graph[x] || ! graph[y]){
				return -1.0;
			}
			if(x == y){
				return 1.0;
			}
			visited[s] = true;
			for (let i in graph[s]) {
				if(i == y){
					return v*graph[s][i];
				}
				q.push([i,v*graph[s][i]]);
			}
		}
		return -1.0;
	}
};

let testcase = calcEquation([["a","b"],["c","d"]],[1.0,1.0],[["a","c"],["b","d"],["b","a"],["d","c"]]);
console.log(testcase);
export default calcEquation;