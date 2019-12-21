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
var minDepth = function(root) {
	let queue = [root];
	let level = 0;
	if(root == null){
		return level;
	}
	while(queue.length !== 0){
		let tmp = [];
		while(queue.length !== 0){
			let cur = queue.shift();
			if(cur == null){
				continue;
			}			
			if(cur !== null && (cur.left== null && cur.right == null)){
				return level+1;
			}
			tmp.push(cur.left);
			tmp.push(cur.right);										
		}
		level++;
		queue = tmp;
	}
	return level;
};


let tool = new Tool();
// let root = tool.arrToTree([1,2,null,3,null,4,null,5,null,6,null,7]);
// let root = tool.arrToTree([1,2,3,4,5]);
let root = tool.arrToTree([]);
let testcase = minDepth(root);
console.log(testcase);
export default minDepth;