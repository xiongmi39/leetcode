/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 import {treeNode } from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
// var isSymmetric = function(root) {

// 	return getSymmeric(root,root);
//     function getSymmeric(a,b){
//     	if(a == null && b == null ){
//     		return true;
//     	}
//     	if(a == null || b == null){
//     		return false;
//     	}
//     	//根节点不相同，不成立
//     	if(a.val !== b.val){
//     		return false;
//     	}
//     	//根节点相同，左子树的左子树和左子树的右子树互为镜像，左子树的右子树和右子树的左子树互为镜像
//     	return a.val == b.val && getSymmeric(a.left,b.right) && getSymmeric(a.right,b.left);
//     }
// };

var isSymmetric = function(root) {
	let queue = [root,root];
	let a,b;
	while(queue.length !== 0){
		//每次取出的两个节点都是相同的
		a = queue.shift();
		b = queue.shift();
		if(a == null && b == null){
			continue;
		}else if(a == null || b == null){
			return false;
		}else if(a.val !== b.val){
			return false;
		}else{
			//队列里加入左子树的左节点，右子树的右节点，左子树的右节点，右子树的左节点
			queue.push(a.left);
			queue.push(b.right);
			queue.push(a.right);
			queue.push(b.left);
		}
	}
	return true;
};


let tool = new Tool();
// let root = tool.arrToTree([1,null,2,3]);
let root = tool.arrToTree([1,2,2,3,4,4,3]);
let testcase = isSymmetric(root);
console.log(testcase);
export default isSymmetric;