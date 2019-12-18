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
 //迭代
// var zigzagLevelOrder = function(root) {
// 	return getLevel(root);
//     function getLevel(root){
//     	let levels = [];
//     	let queue = [root];
//     	let flg = true;
//     	while(queue.length !== 0){
//     		let tmp = [];
//     		let level = [];
//     		while(queue.length !== 0){
//     			let cur = queue.pop(); 			
//     			if(cur !== null){
//     				level.push(cur.val);
//     				if(flg){
//     					tmp.push(cur.left);
//     					tmp.push(cur.right);
//     				}else{
//     					tmp.push(cur.right);
//     					tmp.push(cur.left);
//     				}
//     			}   			
//     		}
//     		if(level.length !== 0){
//     			levels.push(level);
//     		}   		
//     		queue = tmp;
//     		flg = !flg;
//     	}
//     	return levels;
//     }
// };

//递归
var zigzagLevelOrder = function(root) {
	let levels = [];
	return getLevels(levels,root,0);
	function getLevels(levels,root,level){
		if(root == null){
			return levels;
		}
		if(levels.length < level+1 ){
			levels.push([]);
		}
		if(level%2 == 0){
			levels[level].push(root.val);
		}else{
			levels[level].unshift(root.val);
		}		
		getLevels(levels,root.left,level+1);	
		getLevels(levels,root.right,level+1);							
		return levels;
	}
};


let tool = new Tool();
//[3,9,20,null,null,15,7]
//[1,2,3,4,null,null,5]
//[1,2,3,4,5]
let root = tool.arrToTree([1,2,3,4,null,null,5]);
let testcase = zigzagLevelOrder(root);
console.log(testcase);
export default zigzagLevelOrder;