/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 import {treeNode } from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
 var levelOrderBottom = function(root) {
 	let queue = [root];
 	let levels = [];
 	while(queue.length !== 0){
 		let tmp = [];
 		let level = [];
 		while(queue.length !== 0){
 			let cur = queue.shift();
 			if(cur !== null){
 				level.push(cur.val);
 				tmp.push(cur.left);
 				tmp.push(cur.right);
 			}
 		}
 		queue = tmp;
 		if(level.length >0){
 			levels.unshift(level);
 		} 		
 	}
 	return levels;
 };


 let tool = new Tool();
// let root = tool.arrToTree([1,2,null,3,null,4,null,5,null,6,null,7]);
// let root = tool.arrToTree([1,2,3,4,5]);
let root = tool.arrToTree([3,9,20,null,null,15,7]);
let testcase = levelOrderBottom(root);
console.log(testcase);
export default levelOrderBottom;