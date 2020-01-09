/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
// var findJudge = function(N, trust) {
//     let adj = {};
//     let reAdj = {};
//     if(trust.length == 0){
//     	return N;
//     }
//     for (let i = 0; i < trust.length; i++) {
//     	let [fst,sed] = trust[i];
//     	if(!adj[fst]){
//     		adj[fst] = [];
//     	}
//     	adj[fst].push(sed);
//     	if(!reAdj[sed]){
//     		reAdj[sed] = [];
//     	}
//     	reAdj[sed].push(fst);
//     }
//     let totalcount = (1+N)*N/2;
//     let count = 0;
//     let res = -1;
//     let resCount = 0;
//     for (let i = 1; i <= N; i++) {
//     	if(!adj[i] && reAdj[i]){
//     		for (let j = 0; j < reAdj[i].length; j++) {
//     			count += reAdj[i][j];
//     		}
//     		if(count == totalcount-i){
//     			res=i;
//     			resCount++;
//     		}
//     	}
//     }
//     if(resCount>1){
//     	return -1;
//     }
//     return res;
// };

// var findJudge = function(N, trust) {
//     let indegree = new Array(N+1).fill(0);
//     let outdegree = new Array(N+1).fill(0);
//     for (let i = 0; i < trust.length; i++) {
//     	let [fst,sed] = trust[i];
//     	indegree[sed]++ ;
//     	outdegree[fst]++;
//     }
//     let count = 0;
//     let res = -1;
//     for (let i = 1; i <= N; i++) {
//     	if(indegree[i] == N-1 && outdegree[i] == 0){
//     		res = i;
//     		count ++;
//     	}
//     }
//     if(count>1){
//     	return -1;
//     }
//     return res;
// };

var findJudge = function(N, trust) {
    let indegree = new Array(N+1).fill(0);
    let outdegree = new Array(N+1).fill(0);
    for (let i = 0; i < trust.length; i++) {
    	let [fst,sed] = trust[i];
    	indegree[sed-1]++ ;
    	outdegree[fst-1]++;
    }
    let res = -1;
    if(outdegree.indexOf(0) == indegree.indexOf(N-1)){
    	res = outdegree.indexOf(0)+1;
    }
    return res;
};

// var findJudge = function(N, trust) {
//     var indegree = new Array(N);
//     var outdegree = new Array(N);
//     for(var i = 0; i < N; i++){
//         indegree[i] = 0;
//         outdegree[i] = 0;
//     }
//     for(var i = 0; i < trust.length; i++){
//         outdegree[trust[i][0]-1]++;
//         indegree[trust[i][1]-1]++;
//     }
//     if(outdegree.indexOf(0) == indegree.indexOf(N-1)){
//         return outdegree.indexOf(0) + 1;
//     }else{
//         return -1;
//     }
// }

let testcase = findJudge(2,[[1,2]]);
console.log(testcase);
export default findJudge;