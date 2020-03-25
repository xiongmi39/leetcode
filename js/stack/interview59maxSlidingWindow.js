/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(nums == null || k<1|| nums.length < k){
        return [];
    }
    let ans = [];
    let stack = [];
   for(let i= 0; i< nums.length;i++){
        while(stack.length > 0 && nums[i] >= nums[stack[stack.length-1]]){
            stack.pop();
        }
        stack.push(i);
        if(stack[0] == (i-k)){
            stack.shift();
        }
        if(i >= (k-1)){
            ans.push(nums[stack[0]]);
        }
    }
    return ans;
};

let testcase = maxSlidingWindow([7,2,4],2);
console.log(testcase);
export default maxSlidingWindow;