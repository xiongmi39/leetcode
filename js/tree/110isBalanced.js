/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
  import {treeNode } from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'


var isBalanced = function(root) {
	return check(root) !==-1;
    function check(root){
    	if(root == null){
    		return 0;
    	}
    	let left = check(root.left);
    	if(left == -1){
    		return -1;
    	}
    	let right = check(root.right);
    	if(right == -1){
    		return -1;
    	}
    	//后序遍历 左右根 自底向顶
    	//console.log(root.val);
    	//如果当前根的左右树之差大于1，返回-1，否则返回左右子树深度中大的那一个再加1（即加上当前根的深度）
    	return Math.abs(left-right)>1 ? -1: Math.max(left,right)+1;
    }    
};

let tool = new Tool();
// let root = tool.arrToTree([1,2,null,3,null,4,null,5,null,6,null,7]);
// let root = tool.arrToTree([1,2,3,4,5]);
let root = tool.arrToTree([1,null,3,2]);
let testcase = isBalanced(root);
console.log(testcase);
export default isBalanced;