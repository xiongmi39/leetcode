/**
 * @param {number[][]} M
 * @return {number}
 */
// var findCircleNum = function(M) {
// 	if(M.length == 0){
// 		return 0;
// 	}
//     let m = M.length;
//     let n = M[0].length;
//     let count = 0;
//     let par = [];
//     for (let i = 0; i < m; i++) {
//     	for (let j = 0; j < n; j++) {
//     		if(M[i][j] == 1){
//     			if(!par[i*n+j]){
//     				par[i*n+j] = i*n+j;
//     			}else{
//     				par[j*n+i] = j*n+i;
//     			}
    			
//     			count++;
//     		}
//     	}
//     }
//     for (let i = 0; i < m; i++) {
//     	for (let j = 0; j < n; j++) {
//     		if(M[i][j] == 1 && i !== j){
//     			union(i*n+j,j*n+i);
//     			if(M[i][i] == 1){
//     				count --;
//     				M[i][i] = 0
//     			}
//     			if(M[j][j] == 1){
//     				count --;
//     				M[j][j] = 0
//     			}
//     		}
//     	}
//     }
//     return count;
//     function find(p){
//     	while(p !== par[p]){
//     		par[p] = par[par[p]];
//     		p = par[p];
//     	}
//     	return p;
//     }
//     function union(p,q){
//     	let parp = find(p);
//     	let parq = find(q);
//     	if(parp == parq){
//     		return;
//     	}
//     	par[parp] = parq;
//     	count --;
//     }
// };

var findCircleNum = function(M) {
	if(M.length == 0){
		return 0;
	}
	let par = [];
	for (let i = 0; i < M.length; i++) {
		par.push(-1);
	}
	for (let i = 0; i < M.length; i++) {
		for (let j = 0; j < M.length; j++) {
			if(M[i][j] == 1 && i !== j){
				union(i,j);
			}
		}
	}
	let count = 0;
	for (let i = 0; i < par.length; i++) {
		if(par[i] == -1){
			count ++;
		}
	}
	return count;
	function find(p){
		if(par[p] == -1 ){
			return p;
		}
		return find(par[p]);
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

let testcase = findCircleNum([[1,1,0],[1,1,1],[0,1,1]]);
console.log(testcase);
export default findCircleNum;