/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
	if(matrix.length == 0){
		return 0;
	}
    let heights = new Array(matrix[0].length).fill(0);
    let max = 0;
    for (let r = 0; r < matrix.length; r++) {
    	for (let c = 0; c < matrix[0].length; c++) {
    		if(matrix[r][c] == "1"){
    			heights[c]++;
    		}else{
    			heights[c] = 0;
    		}   		
    	}
    	max = Math.max(max,getMax(heights));
    }
    return max;
    function getMax(heights){
    	if(heights.length == 0 ){
    		return 0;
    	}
    	let len = heights.length;
    	let stack = [];
    	stack.push(-1);
    	let max = 0;
    	for (let i = 0; i < heights.length; i++) {
    		while(stack[stack.length-1] !== -1 && heights[stack[stack.length-1]] >= heights[i]){
    			max = Math.max(max,heights[i] * (i-heights[stack.pop()]-1));
    		}
    		stack.push(i);
    	}
    	while(stack[stack.length -1] !== -1){
    		max = Math.max(max,heights[len-1] *(len - heights[stack.pop()]-1));
    	}
    	return max;
    }
};

let testcase = maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]);
console.log(testcase);
export default maximalRectangle;