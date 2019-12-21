/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 import {treeNode as TreeNode} from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
var generateTrees = function(n) {
	if(n == 0){
		return [];
	}
	let arr = [];
	for (var i = 1; i < n+1; i++) {
		arr.push(i);
	}
	
	return buildTree(arr);
    function buildTree(arr){   	
    	if(arr.length == 0){
    		return [null];
    	}
    	let list = [];
    	for (var i = 0; i < arr.length; i++) {    		
    		let left = buildTree(arr.slice(0,i));
    		let right = buildTree(arr.slice(i+1,arr.length));
    		for (let l = 0; l < left.length; l++) {
    			for (var r = 0; r < right.length; r++) {
    				let node = new TreeNode(arr[i]);    				
    				node.left = left[l];
    				node.right = right[r];
    				list.push(node);
    			}
    		}    		
    	}
    	return list;
    }
};


let testcase = generateTrees(0);
console.log(testcase);
export default generateTrees;