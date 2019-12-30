/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	if(grid.length == 0){
		return 0;
	}
	let xi = grid.length-1;
	let yj = grid[0].length-1;
	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if(grid[i][j] == '1'){
				dfs(i,j,grid);	
				count++;
			}			
		}
	}
	return count;
    function dfs(r,c,grid){
    	if(r < 0 || r > xi || c < 0 || c> yj ){
    		return ;
    	}
    	if(grid[r][c] == '0'){
    		return;
    	}
    	grid[r][c] = '0';
    	dfs(r-1,c,grid);
    	dfs(r+1,c,grid);
    	dfs(r,c-1,grid);
    	dfs(r,c+1,grid);
    }
};

//let testcase = numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]);
 let testcase = numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);
console.log(testcase);
export default numIslands;