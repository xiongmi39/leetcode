/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 import {treeNode as TreeNode} from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
var flatten = function(root) {
	return morrisPre(root);
	function morrisPre(root){
		let dummy = new TreeNode();
		let cur = dummy = root;
		while(cur !== null){
			if(cur.left !== null){
				let tmp = cur.left;
				let r = root.right;
				cur.right = tmp;
				cur.left = null;
				tmp = cur;
				while(tmp.right !== null){
					tmp = tmp.right;
				}
				tmp.right = r;
			}
			cur = cur.right;
			root = cur;
		}
		return dummy;
	}
};

	//莫里斯中序
	// function moorisMid(root){
	// 	let dummy = new TreeNode();
	// 	let cur = dummy = root;
	// 	while(cur !== null){
	// 		if(cur.left !== null){
	// 			cur = cur.left;
	// 			let tmp = cur;
	// 			while(tmp.right !== null){
	// 				tmp = tmp.right;
	// 			}
	// 			root.left = null;
	// 			tmp.right = root;
	// 			root = cur;	
	// 			dummy = cur;	
	// 		}else{
	// 			cur = cur.right;
	// 			root = root.right;
	// 		}			
	// 	}
	// 	return dummy;
	// }

let tool = new Tool();
// let root = tool.arrToTree([1,null,2,3]);
let root = tool.arrToTree([1,2,5,3,4,null,6]);
let testcase = flatten(root);
console.log(testcase);
export default flatten;