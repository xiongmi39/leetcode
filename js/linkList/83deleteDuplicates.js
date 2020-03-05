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
var deleteDuplicates = function(head) {
    let dummy = head;
    while(head){
        if(head.next && head.next.val == head.val){
            head.next = head.next.next;
        }else{
        	head= head.next;
        }
        
    }
    return dummy;
};

let tool = new linkTool();
let head = tool.arrToLinkList([1,2,2]);
let testcase = deleteDuplicates(head);
console.log(testcase);
export default deleteDuplicates;