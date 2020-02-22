/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
	let ylen = matrix.length;
	if(ylen == 0){
		return false;
	}
    let xlen = matrix[0].length;
    
    let x = xlen-1;
    let y = 0;
    while(x >=0 && y < ylen){
    	if(matrix[y][x] == target){
    		return true;
    	}else if(matrix[y][x] > target){
    		x--;
    	}else{
    		y++;
    	}
    }
    return false;
};

let testcase = findNumberIn2DArray([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],5);
console.log(testcase);
export default findNumberIn2DArray;