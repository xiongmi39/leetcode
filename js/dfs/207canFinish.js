/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 //有点不对劲的bfs,自己想的
// var canFinish = function(numCourses, prerequisites) {
//     if(numCourses == 0 || prerequisites.length == 0){
//     	return true;
//     }
//     let indegrees = {};
//     let adjacency = {};
//     for (let i = 0; i < prerequisites.length; i++) {
//     	let [sed,fst] = prerequisites[i];
//     	if(!indegrees[sed]){
//     		indegrees[sed] = 0;
//     	}
//     	if(!indegrees[fst]){
//     		indegrees[fst] = 0;
//     	}
//     	indegrees[sed]++;
//     	if(!adjacency[fst]){
//     		adjacency[fst] = [];
//     	}
//     	if(!adjacency[sed]){
//     		adjacency[sed] = [];
//     	}
//     	adjacency[sed].push(fst);
//     	adjacency[fst].push(sed);
//     }
//     let q = [];
//     for (let i in indegrees) {
//     	if(indegrees[i] == 0){
//     		q.push(i);
//     	}
//     }
//     while(q.length !== 0){
//     	let cur = q.pop();
//     	let curadj = adjacency[cur];
//     	for (let i = 0; i < curadj.length; i++) {
//     		indegrees[curadj[i]]--;
//     		if(indegrees[curadj[i]] == 0){
//     			q.push(curadj[i]);
//     		}
//     	}
//     }
//     let flg = true;
//     for (let i in indegrees) {
//     	if(indegrees[i] > 0){
//     		flg = false;
//     	}
//     }
//     return flg; 
// };
//bfs 拓扑排序
var canFinish = function(numCourses, prerequisites) {
    if(numCourses == 0 || prerequisites.length == 0){
    	return true;
    }
    let indegrees = new Array(numCourses).fill(0);
    let adjacency = {};
    let res = [];
    let num = 0;
    for (let i = 0; i < prerequisites.length; i++) {
    	let [sed,fst] = prerequisites[i];
    	indegrees[sed]++;
    	if(!adjacency[fst]){
    		adjacency[fst] = [];
    	}
    	adjacency[fst].push(sed);
    }
    let q = [];
    for (let i in indegrees) {
    	if(indegrees[i] == 0){
    		q.push(i);
    	}
    }
    while(q.length !== 0){
    	let cur = q.shift();
    	res.push(cur);
    	num++;
    	let curadj = adjacency[cur];
    	if(!curadj){
    		continue;
    	}
    	for (let i = 0; i < curadj.length; i++) {
    		indegrees[curadj[i]]--;
    		if(indegrees[curadj[i]] == 0){
    			q.push(curadj[i]);
    		}
    	}
    }
    return res.length == numCourses; 
};
//怪怪的dfs，自己想的
// var canFinish = function(numCourses, prerequisites) {
// 	if(numCourses == 0 || prerequisites.length == 0){
// 		return true;
// 	}
// 	let flgs = new Array(numCourses).fill(0);
// 	let adjacency = {};
// 	let ensureflg = true;
// 	for (let i = 0; i < prerequisites.length; i++) {
// 		let [sed,fst] = prerequisites[i];
// 		if(!adjacency[fst]){
// 			adjacency[fst] = [];
// 		}
// 		adjacency[fst].push(sed);
// 	}
// 	for (let i = 0; i < numCourses; i++) {
// 		ensureflg = ensure(adjacency,flgs,i);
// 		if(!ensureflg){
// 			return false;
// 		}
// 	}
// 	return true;
// 	function ensure(adjacency,flgs,i){
// 		//课程不存在于邻接表中，当然没有环，flgs[i] == -1 表明走完了所有递归也没有环
// 		if(!adjacency[i] ||flgs[i] == -1){
// 			return true;
// 		}
// 		//当前路线中又出现了本次循环开始的点，有环
// 		if(flgs[i] == 1){
// 			return false;
// 		}
// 		//路线开始时，标识为1，再次碰到这个点等于1，说明有环
// 		flgs[i] = 1;
// 		//没有后续节点了，返回true
// 		if(adjacency[i].length == 0){
// 			return true;
// 		}
// 		//递归继续走
// 		for (let j =0;j< adjacency[i].length;j++) {
// 			let flg = ensure(adjacency,flgs,adjacency[i][j]);
// 			if(!flg){
// 				return false;
// 			}
// 		}
// 		//走完递归也没有碰到环，开始点设为-1
// 		flgs[i] = -1;
// 		return true;
// 	}
// };

//sample
// var canFinish = function (numCourses, prerequisites) {
//     let visited = new Array(numCourses).fill(0) // 课程状态；0：未学；1：已学
//     let indegree = new Array(numCourses).fill(0) // 顶点的入度
//     let topology = [] // 拓扑序列
//     let prerqMap = {} // 先学课程

//     for (let i = 0; i < prerequisites.length; i++) {
//         indegree[prerequisites[i][0]]++     // 初始化顶点入度
//         if (prerqMap[prerequisites[i][1]]) { 
//             prerqMap[prerequisites[i][1]].push(prerequisites[i][0])
//         } else {
//             prerqMap[prerequisites[i][1]] = [prerequisites[i][0]]
//         }
//     }

//     while (topology.length < numCourses) {
//         let hasNoPreNode = true
       
//         for (let i = 0; i < numCourses; i++) {
//             if (visited[i] == 0 && indegree[i] == 0) {  // 没有访问过并且没有前驱（入度为0）的顶点
//                 hasNoPreNode = false
//                 topology.push(i)
//                 visited[i] = 1
//                 if (prerqMap[i]) {
//                     for (let out of prerqMap[i]) {
//                         indegree[out]--
//                     }
//                 }
//             }
//         }
//         if (hasNoPreNode) break
//     }

//     return topology.length == numCourses // 没有环；可以修完所有课程
// };



let testcase = canFinish(3,[[1,0]]);
console.log(testcase);
export default canFinish;