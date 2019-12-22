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
 import {treeNode as TreeNode} from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
var sumNumbers = function(root) {
	let sum = 0;	
	return getSum([],root);
    function getSum(tmparr,root){
    	if(root == null){
    		return sum;
    	}
    	if(root !== null && root.left == null && root.right == null){
    		sum += parseInt(tmparr.join('')+root.val,10);
    	}
    	tmparr.push(root.val);
    	let left = getSum(tmparr,root.left);
    	let right = getSum(tmparr,root.right);
    	tmparr.pop();
    	return sum;
    }
};

let tool = new Tool();
// let root = tool.arrToTree([1,null,2,3]);
let root = tool.arrToTree([4,9,0,5,1]);
let testcase = sumNumbers(root);
console.log(testcase);
export default sumNumbers;