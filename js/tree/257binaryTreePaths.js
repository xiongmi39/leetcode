/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
   import {treeNode } from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
var binaryTreePaths = function(root) {
	if(root == null){
		return [];
	}
	let list = [];
	dfs(root,[]);
	return list;
    function dfs(node,tmparr){
    	if(node.val !== null && node.left == null && node.right == null){
    		return list.push([...Array.from(tmparr),node.val].join('->'));
    	}
    	tmparr.push(node.val);
    	if(node.left !== null){
    		dfs(node.left,tmparr);
    	}
    	if(node.right !== null){
    		dfs(node.right,tmparr);    		   		
    	}
    	tmparr.pop();
    }
};
let tool = new Tool();
// let root = tool.arrToTree([1,2,null,3,null,4,null,5,null,6,null,7]);
// let root = tool.arrToTree([1,2,3,4,5]);
let root = tool.arrToTree([1,2,3,null,5]);
let testcase = binaryTreePaths(root);
console.log(testcase);
export default binaryTreePaths;