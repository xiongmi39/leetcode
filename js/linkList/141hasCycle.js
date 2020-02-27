/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
//     let set = new Set();
//     while(head){
//     	if(set.has(head)){
//     		return true;
//     	}else{
//     		set.add(head);
//     		head = head.next;
//     	}
//     }
//     return false;
// };

// var hasCycle = function(head) {
//     while(head){
//     	if(head.flg){
//     		return true;
//     	}else{
//     		head.flg = 1;
//     		head = head.next;
//     	}
//     }
//     return false;
// };

var hasCycle = function(head) {
	if(!head || !head.next){
		return false;
	}
	let fast = head.next;
	let slow = head;
	while(fast !== slow){
		if(!fast || !fast.next){
			return false;
		}
		fast = fast.next.next;
		slow = slow.next;
	}
	return true;
};

let testcase = hasCycle();
console.log(testcase);
export default hasCycle;