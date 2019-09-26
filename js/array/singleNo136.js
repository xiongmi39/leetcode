/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
 return    nums.reduce((bef,cur)=>{
    	return bef ^= cur;
    });
}

let testcase = singleNumber([4,1,2,1,2]);
console.log(testcase);

export default singleNumber;