/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
	//dp[i][j]表示在i,j范围内，先手比后手拿到最好的多多少
    let dp = Array.from(new Array(nums.length),()=> new Array(nums.length).fill(0));
    for (let j = 0; j < dp[0].length; j++) {
    	for (let i = j; i >= 0; i--) {
    		if(i == j){
    			dp[i][j]=nums[i];
    		}else{//先手选择第i个数字，则另一玩家比先手多dp[i+1][j]，nums[i]-这个差值等于先手当前比对方多拿的数；先手选择第j个数字
    			dp[i][j] = Math.max(nums[i]-dp[i+1][j],nums[j]-dp[i][j-1]);
    		}
    	}
    }
    return dp[0][nums.length-1] >= 0;
};

let testcase = PredictTheWinner([1, 5, 233, 7]);
console.log(testcase);
export default PredictTheWinner;