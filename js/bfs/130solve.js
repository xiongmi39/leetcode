/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if(i == 0 || i == board.length -1 || j == 0 || j == board[i].length -1){
				getline(i,j);
			}
		}
	}
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if(board[i][j] == 'O'){
				board[i][j] = 'X';
			}
			if(board[i][j] == '#'){
				board[i][j] = 'O';
			}
		}
	}
    return board;
    function getline(x,y){
    	if(x<0 || y<0 || x>board.length -1|| y> board[0].length-1){
    		return;
    	}
    	if(board[x][y] == '#' || board[x][y] == 'X'){
    		return;
    	}
    	if(board[x][y] == 'O'){
    		board[x][y] = '#';
    	}  	
    	getline(x+1,y);
    	getline(x-1,y);
    	getline(x,y+1);
    	getline(x,y-1);
    }
};


let testcase = solve([["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]]);
console.log(testcase);
export default solve;

[["O","X","X","O","X"]
,["X","X","X","X","O"]
,["X","X","X","O","X"]
,["O","X","O","O","O"]
,["X","X","O","X","O"]]