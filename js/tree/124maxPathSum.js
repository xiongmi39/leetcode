/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 import {treeNode as TreeNode} from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
var maxPathSum = function(root) {
	let max = root.val;
	getMax(root);
	return max;
    function getMax(root){
    	if(root == null){
    		return 0;
    	}
    	let left = getMax(root.left);
    	let right = getMax(root.right);
    	let lrr = root.val + Math.max(0,left) + Math.max(0,right);
    	let lr = root.val+Math.max(0,Math.max(left,right));
    	max = Math.max(max,lrr,lr);
    	return lr;
    }
};

let tool = new Tool();
// let root = tool.arrToTree([1,null,2,3]);
let root = tool.arrToTree([9,6,-3,null,null,-6,2,null,null,2,null,-6,-6,-6]);
let testcase = maxPathSum(root);
console.log(testcase);
export default maxPathSum;