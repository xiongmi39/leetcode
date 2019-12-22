/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
  import {treeNode as TreeNode} from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
var pathSum = function(root, sum) {
	let list = [];
	getPath(list,[],root,sum);
	return list;
    function getPath(list,tmplist,root,sum){
    	if(root == null){
    		return list;
    	}
    	if(root !== null && root.left == null && root.right == null){
    		if(root.val - sum == 0 ){
    			list.push([...Array.from(tmplist),root.val]);    			
    		}
    		return list;
    	}
    	tmplist.push(root.val);
    	getPath(list,tmplist,root.left,sum-root.val);
    	getPath(list,tmplist,root.right,sum-root.val);
    	tmplist.pop();
    }
};


let tool = new Tool();
// let root = tool.arrToTree([1,null,2,3]);
let root = tool.arrToTree([]);
let testcase = pathSum(root,0);
console.log(testcase);
export default pathSum;