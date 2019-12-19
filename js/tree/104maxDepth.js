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
 import {treeNode } from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
// var maxDepth = function(root) {
// 	let cur = 0;
// 	getDepth(root,0);
// 	return cur;
//     function getDepth(root,level){
//     	if(root == null){
//     		return level;
//     	}
//     	level++;
//     	if(cur < level){
//     		cur++;
//     	}
//     	getDepth(root.left,level);
//     	getDepth(root.right,level);
//     	return level;
//     }
// };

var maxDepth = function(root) {
	return getDepth(root,0);
	function getDepth(root,level){
		if(root == null){
			return level;
		}
		let left = getDepth(root.left,level+1);
		let right = getDepth(root.right,level+1);
		return Math.max(left,right);
	}
};



let tool = new Tool();
//[3,9,20,null,null,15,7]
//[1,2,3,4,null,null,5]
//[1,2,3,4,5]
let root = tool.arrToTree([1,2,null,3,null,4,null,5]);
let testcase = maxDepth(root);
console.log(testcase);
export default maxDepth;