/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	let valid = {'row':{},'column':{},'box':{}};
    for (let i = 0; i < board.length; i++) {
    	for (let j = 0; j < board[i].length; j++) {
    		if(board[i][j] == "."){
    			continue;
    		}
    		if(valid.row[i+'.'+board[i][j]] || valid.column[j+'.'+board[i][j]] || valid.box[Math.floor(i/3)+'.'+Math.floor(j/3)+'.'+board[i][j]]){
    			return false;
    		}
    		valid.row[i+'.'+board[i][j]] = true;
    		valid.column[j+'.'+board[i][j]] = true;
    		valid.box[Math.floor(i/3)+'.'+Math.floor(j/3)+'.'+board[i][j]] = true;
    	}
    }
    return true;
};

let testcase = isValidSudoku([["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]);
console.log(testcase);

export default isValidSudoku;