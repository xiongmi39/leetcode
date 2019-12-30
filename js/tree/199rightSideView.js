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
var rightSideView = function(root) {
	if(root == null){
		return [];
	}
    let queue = [root];
    let list = [];
    while(queue.length !== 0){
    	let tmp = [];
    	let tmparr = [];
    	while(queue.length !== 0 ){
    		let cur = queue.shift();
    		if(cur == null){
    			continue;
    		} 
    		tmparr.push(cur.val);   		
    		tmp.push(cur.left);
    		tmp.push(cur.right);		
    	}
    	if(tmparr.length !== 0){
    		list.push(tmparr[tmparr.length -1]);
    	}    	
    	queue = tmp;
    }
    return list;
};

let tool = new Tool();
// let root = tool.arrToTree([1,null,2,3]);
let root = tool.arrToTree([1,2,3,null,5,null,4]);
let testcase = rightSideView(root);
console.log(testcase);
export default rightSideView;