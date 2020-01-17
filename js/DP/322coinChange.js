/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
	if(amount == 0 || coins.length == 0){
		return -1;
	}
	let dp = new Array(amount+1).fill(amount+1);
	dp[0] = 0;
	for (let i = 1; i <= amount; i++) {
		for (let j = 0; j < coins.length; j++) {
			if(i >= coins[j]){
				dp[i] = Math.min(dp[i],dp[i-coins[j]]+1);
			}
		}
	}
	return dp[amount]==amount+1 ? -1 : dp[amount];
};

let testcase = coinChange([1,2,5],11);
console.log(testcase);
export default coinChange;