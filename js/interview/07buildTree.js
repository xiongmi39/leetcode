/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 import {treeNode as TreeNode} from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
 var buildTree = function(preorder, inorder) {
 	return build(preorder,inorder);
 	function build(preorder, inorder){
 		if(preorder.length == 0){
 			return null;
 		}
 		if(inorder.length == 0){
 			return null;
 		}
 		let root = preorder[0];
 		let node = new TreeNode(root);
 		let idx = inorder.indexOf(root);
 		node.left = build(preorder.slice(1,preorder.length),inorder.slice(0,idx));		
 		node.right = build(preorder.slice(idx+1,preorder.length),inorder.slice(idx+1,inorder.length));
 		return node;
 	}
 };

let testcase = buildTree([3,9,20,15,7],[9,3,15,20,7]);
console.log(testcase);
export default buildTree;