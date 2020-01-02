/**
 * @param {character[][]} grid
 * @return {number}
 */
 //DFS
// var numIslands = function(grid) {
// 	if(grid.length == 0){
// 		return 0;
// 	}
// 	let xi = grid.length-1;
// 	let yj = grid[0].length-1;
// 	let count = 0;
// 	for (let i = 0; i < grid.length; i++) {
// 		for (let j = 0; j < grid[i].length; j++) {
// 			if(grid[i][j] == '1'){
// 				dfs(i,j,grid);	
// 				count++;
// 			}			
// 		}
// 	}
// 	return count;
//     function dfs(r,c,grid){
//     	if(r < 0 || r > xi || c < 0 || c> yj ){
//     		return ;
//     	}
//     	if(grid[r][c] == '0'){
//     		return;
//     	}
//     	grid[r][c] = '0';
//     	dfs(r-1,c,grid);
//     	dfs(r+1,c,grid);
//     	dfs(r,c-1,grid);
//     	dfs(r,c+1,grid);
//     }
// };

var numIslands = function(grid) {
	if(grid.length == 0){
		return 0;
	}
	let m = grid.length;
	let n = grid[0].length;
	let count = 0;
	let par = [];
    for (let i = 0; i < m; i++) {
    	for (let j = 0; j < n; j++) {
    		if(grid[i][j] == '1'){
    			par[i*n + j] = i*n+j;
    			count ++;
    		}
    	}
    }
    for (let i = 0; i < m; i++) {
    	for (let j = 0; j < n; j++) {
    		if(grid[i][j] == '1'){
    			i-1 >= 0 && grid[i-1][j] == '1'&&union(i*n+j,(i-1)*n+j);
    			i+1 < m && grid[i+1][j] == '1'&&union(i*n+j,(i+1)*n+j);
    			j-1 >= 0 && grid[i][j-1] == '1'&&union(i*n+j,i*n+j-1);
    			j+1 < n && grid[i][j+1] == '1'&&union(i*n+j,i*n+j+1);	
    			
    		}
    	}
    }
    return count;
    function find(p){
    	while(par[p] !== p){
    		par[p] = par[par[p]];
    		p = par[p];
    	}
    	return p;
    }
    function union(p,q){
    	let nodep = find(p);
    	let nodeq = find(q);
    	if(nodep == nodeq){
    		return;
    	}
    	par[nodep] = nodeq;
    	count --;
    }
};

//let testcase = numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]);
 let testcase = numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);
console.log(testcase);
export default numIslands;