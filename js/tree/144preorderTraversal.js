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
var preorderTraversal = function(root) {
    let list = [];
   // return getPreorder(list,root);
   return getPreorder2(list,root);
};
//递归
function getPreorder(list,node){
	if(node == null){
		return list;
	}
	list.push(node.val);	
	getPreorder(list,node.left);
	getPreorder(list,node.right);
	return list;
}
//颜色标记 迭代
function getPreorder2(list,node){
	let stack = [['w',node]];
	let cur;
	while(stack.length !== 0){
		cur = stack.pop();
		if(cur[1] == null){
			continue;
		}
		if(cur[0] == 'g'){
			list.push(cur[1].val);
		}else{
			stack.push(['w',cur[1].right]);
			stack.push(['w',cur[1].left]);
			stack.push(['g',cur[1]]);
		}		
	}
	return list;
}

let tool = new Tool();
// let root = tool.arrToTree([1,null,2,3]);
let root = tool.arrToTree([2,3,null,1]);
// let root = tool.arrToTree([3,1,2]);
let testcase = preorderTraversal(root);
console.log(testcase);

export default preorderTraversal;