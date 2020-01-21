/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Number.MAX_VALUE;
    let maxprofit = 0;
    for (let i = 0; i < prices.length; i++) {
    	if(prices[i] < min){
    		min = prices[i];
    	}else if(prices[i]-min> maxprofit){
    		maxprofit = prices[i]-min;
    	}
    }
    return maxprofit;
};

let testcase = maxProfit([7,1,5,3,6,4]);
console.log(testcase);
export default maxProfit;