/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let valid = {'row':{},'col':{},'box':{},'solved':false};
    for (var i = 0; i < 9; i++) {
    	for (var j = 0; j < 9; j++) {
    		if(board[i][j] !== "."){
    			setValid(i,j,board[i][j],valid,true);
    			continue;
    		}   		
    	}
    }
    backtrack(board,valid,0,0);
    return board;
};

function isValid(row,col,d,valid){
	return valid.row[row+"."+d] ||  valid.col[col+"."+d] ||  valid.box[Math.floor(row/3)+','+Math.floor(col/3)+"."+d];
}

function backtrack(board,valid,r,c){
	if(board[r][c] == "."){
		for (var j = 1; j < 10; j++) {
			if(isValid(r,c,j,valid)){
				continue;
			}
			setValid(r,c,j,valid,true);
			board[r][c] = j+"";
			setNextNumber(board,r,c,valid);	
			if(!valid.solved){
				board[r][c] = ".";
				setValid(r,c,j,valid,false);
			}	
		}
	}else{
		setNextNumber(board,r,c,valid);
	}

}

function setNextNumber(board,r,c,valid){
	if(r == 8 && c == 8){
		valid.solved = true;
	}else{
		if(c == 8){
			backtrack(board,valid,r+1,0);
		}else{
			backtrack(board,valid,r,c+1);
		}
	}
}

function setValid(row,col,d,valid,flg){

	valid.row[row+"."+d] = flg;
	valid.col[col+"."+d] = flg;
	valid.box[Math.floor(row/3)+','+Math.floor(col/3)+"."+d] = flg;
}

let testcase = solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]);
console.log(testcase);

export default solveSudoku;