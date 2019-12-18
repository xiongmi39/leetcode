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
var zigzagLevelOrder = function(root) {
	return getLevel(root);
    function getLevel(root){
    	let levels = [];
    	let queue = [root];
    	let flg = true;
    	while(queue.length !== 0){
    		let tmp = [];
    		let level = [];
    		while(queue.length !== 0){
    			let cur = queue.pop(); 			
    			if(cur !== null){
    				level.push(cur.val);
    				if(flg){
    					tmp.push(cur.left);
    					tmp.push(cur.right);
    				}else{
    					tmp.push(cur.right);
    					tmp.push(cur.left);
    				}
    			}   			
    		}
    		if(level.length !== 0){
    			levels.push(level);
    		}   		
    		queue = tmp;
    		flg = !flg;
    	}
    	return levels;
    }
};


let tool = new Tool();
//[3,9,20,null,null,15,7]
//[1,2,3,4,null,null,5]
//[1,2,3,4,5]
let root = tool.arrToTree([3,9,20,null,null,15,7]);
let testcase = zigzagLevelOrder(root);
console.log(testcase);
export default zigzagLevelOrder;