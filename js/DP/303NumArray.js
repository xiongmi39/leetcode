/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sum = new Array(nums.length +1);
    this.sum[0] = 0;
    for (let i = 0; i < nums.length; i++) {
    	this.sum[i+1] = this.sum[i]+nums[i];
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sum[j+1]-this.sum[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

let testcase = NumArray([-2, 0, 3, -5, 2, -1]);
console.log(testcase);
 export default NumArray;

 /**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sum = Array(nums.length + 1);
    this.sum[0] = 0;
    for(let i = 0;i < nums.length ; i++) {
      this.sum[i + 1] = this.sum[i] + nums[i];
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sum[j + 1] - this.sum[i];
};

作者：hemuxue
链接：https://leetcode-cn.com/problems/range-sum-query-immutable/solution/shi-yong-yu-chu-li-de-fang-fa-your-runtime-beats-9/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。