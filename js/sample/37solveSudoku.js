/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let isValid = (row,col,num) => {
        for(let i = 0;i < 9;i++){
            let boxRow = parseInt(row/3)*3;
            let boxCol = parseInt(col/3)*3;
            if(board[row][i] == num || board[i][col] == num || board[boxRow+parseInt(i/3)][boxCol+i%3] == num){
            	console.log(boxRow+parseInt(i/3));
            	console.log(boxCol+i%3);
                return false;
            }
        }
        return true;
    }
    let solve = () => {
        for(let i = 0;i < 9;i++){
            for(let j = 0;j < 9;j++){
                if(board[i][j] == '.'){
                    for(let num = 1;num <10;num++){
                        if(isValid(i,j,num)){
                            board[i][j] = String(num);
                            if(solve(board)){
                                return true;
                            }
                            board[i][j] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    solve(board);
    return board;
};

  // function placeNumber(d,row,col) {
  //   let idx = (row /3 ) * 3 + col / 3;
  //   let boxes = [];
  //   return idx;
  // }

  let valid = (row,col,num) => {
  	for(let i = 0;i < 9;i++){
  		let boxRow = parseInt(row/3)*3;
  		let boxCol = parseInt(col/3)*3;
  		console.log(boxRow+parseInt(i/3));
  		console.log(boxCol+i%3);
  	}
  	return true;
  }



// let testcase = solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]);
// console.log(testcase);

let validBox = valid(1,1,3);

// let valid = placeNumber(1,2,1);
// console.log(valid);

export default solveSudoku;

