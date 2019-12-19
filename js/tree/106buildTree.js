/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 import {treeNode as TreeNode} from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
 var buildTree = function(inorder, postorder) {
 	return buildTree(inorder,postorder);
 	function buildTree(inorder, postorder){		
 		let node = null;
 		if(inorder.length == 0 && postorder.length == 0){
 			return node;
 		}
 		let val = postorder[postorder.length -1];
 		let idx = inorder.indexOf(val);
 		node = new TreeNode(val);
 		node.left = buildTree(inorder.slice(0,idx),postorder.slice(0,idx));
 		node.right = buildTree(inorder.slice(idx+1,inorder.length),postorder.slice(idx,postorder.length-1));			
 		return node;
 	}
 };

let tool = new Tool();
// let root = tool.arrToTree([1,null,2,3]);
let root = tool.arrToTree([]);
let testcase = buildTree([9,3,15,20,7],[9,15,7,20,3]);
console.log(testcase);
export default buildTree;