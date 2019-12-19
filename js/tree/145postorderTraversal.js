/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 import {treeNode } from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
// var postorderTraversal = function(root) {
// 	let list = [];
// 	return getPostOrder(list,root);
//     function getPostOrder(list,root){
//     	if(root == null){
//     		return list;
//     	}
//     	getPostOrder(list,root.left);    	
//     	getPostOrder(list,root.right);
//     	list.push(root.val);
//     	return list;
//     }
// };

//颜色标记
var postorderTraversal = function(root) {
	let stack = [['white',root]];
	let list = [];
	while(stack.length !== 0){
		let cur = stack.pop();
		if(cur[1] !== null && cur[0] == 'white'){
			//与出栈顺序相反（出栈顺序是左右根）
			stack.push(['gray',cur[1]]);
			stack.push(['white',cur[1].right]);
			stack.push(['white',cur[1].left]);						
		}	
		if(cur[0] == 'gray'){
			list.push(cur[1].val);
		}	
	}
	return list;
};


let tool = new Tool();
// let root = tool.arrToTree([1,null,2,3]);
let root = tool.arrToTree([1,null,2,null,3,null,4]);
let testcase = postorderTraversal(root);
console.log(testcase);

export default postorderTraversal;