/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
  import {treeNode as TreeNode} from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
var sortedArrayToBST = function(nums) {
	return buildTree(nums);
    function buildTree(nums){
    	let node = null;
    	if(nums.length == 0){
    		return node;
    	}
    	let val = nums[Math.floor(nums.length/2)];
    	node = new TreeNode(val);
    	node.left = buildTree(nums.slice(0,nums.indexOf(val)));
    	node.right = buildTree(nums.slice(nums.indexOf(val)+1,nums.length));
    	return node;
    }
};
//[-10,-3,0,5,9]
let testcase = sortedArrayToBST([1,2,3,4,5,6,7]);
console.log(testcase);
export default sortedArrayToBST;