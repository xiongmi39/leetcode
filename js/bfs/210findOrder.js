/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 //拓扑排序bfs
// var findOrder = function(numCourses, prerequisites) {
//     let indegrees = new Array(numCourses).fill(0);
//     let adjacency = {};
//     for (let i = 0; i < prerequisites.length; i++) {
//     	let [x,y] = prerequisites[i];
//     	indegrees[x] ++;
//     	if(!adjacency[y]){
//     		adjacency[y] =[];
//     	}
//     	adjacency[y].push(x);
//     }
//     let q = [];
//     let res = [];
//     for (let i = 0; i < indegrees.length; i++) {
//     	if(indegrees[i] == 0){
//     		q.push(i);
//     	}    	
//     }
//     while(q.length !== 0){
//     	let cur = q.shift();
//     	res.push(cur);
//     	if(!adjacency[cur]){
//     		continue;
//     	}
//     	for (let i = 0; i < adjacency[cur].length; i++) {
//     		indegrees[adjacency[cur][i]] --;
//     		if(indegrees[adjacency[cur][i]] == 0){
//     			q.push(adjacency[cur][i]);
//     		}
//     	}
//     }
//     if(res.length == numCourses){
//     	return res;
//     }
//     return [];
// };

var findOrder = function(numCourses, prerequisites) {
	let adjacency = {};
	let res = [];
	let flgs = new Array(numCourses).fill(0);
	let canOrder= true;
	if(numCourses == 0){
		return [];
	}
	if(prerequisites.length == 0){
		for (let i = 0; i < numCourses; i++) {
			res.push(i);
		}
		return res;
	}
	for (let i = 0; i < prerequisites.length; i++) {
		let [sed,fst] = prerequisites[i];				
		if(!adjacency[sed]){
			adjacency[sed] = [];
		}
		adjacency[sed].push(fst);
	}
	for (let i = 0; i<numCourses;i++) {
			
	}

	if(!canOrder){
		return [];
	}
	return res;
	function getOrder(adjacency,flgs,i){

	}
};

let testcase = findOrder(3,[[1,0]]);
console.log(testcase);
export default findOrder;