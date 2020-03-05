/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
import {ListNode } from '../linkList/ListNode'
import {linkTool } from '../linkList/linkTool'
var detectCycle = function(head) {
	if(head == null){
		return head;
	}
    let fast = head;
    let slow = head;
    while(true){
    	if(fast == null || fast.next == null){
    		return null;
    	}
    	fast = fast.next.next;
    	slow = slow.next;
    	if(fast == slow){
    		break;
    	}
    }
    fast = head;
    while(slow !== fast){
    	slow = slow.next;
    	fast = fast.next;
    }
return fast;

};

let tool = new linkTool();
let head = tool.arrToCycle([3,2,0,-4],1);
let testcase = detectCycle(head);
console.log(testcase);
export default detectCycle;