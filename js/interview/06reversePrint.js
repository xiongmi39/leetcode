/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
	let ans = [];
	while(head !== null){
		ans.unshift(head.val);
		head = head.next;
	}
	return ans;
};

let testcase = reversePrint();
console.log(testcase);
export default reversePrint;