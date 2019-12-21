/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
  import {treeNode } from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
var hasPathSum = function(root, sum) {
	if(root == null){
		return false;
	}
	return isSum(root,sum);
    function isSum(root,sum){
    	if(root !== null && (root.left == null && root.right == null)){
    		if(sum-root.val == 0){
    			return true;
    		}else{
    			return false;
    		}
    	}
    	if(root !== null){
    		let left = isSum(root.left,sum-root.val);
    		if(left){
    			return left;
    		}
    		let right = isSum(root.right,sum-root.val);
    		if(right){
    			return right;
    		}    		
    	}
    	return false;
    }
};

let tool = new Tool();
// let root = tool.arrToTree([1,2,null,3,null,4,null,5,null,6,null,7]);
// let root = tool.arrToTree([1,2,3,4,5]);
let root = tool.arrToTree([1,2]);
let testcase = hasPathSum(root,3);
console.log(testcase);
export default hasPathSum;