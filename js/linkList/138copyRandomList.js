/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
	let map = new Map();
	return getCopy(head,map);
    function getCopy(head,map){
    	if(head == null){
    		return null;
    	}
    	if(map.has(head)){
    		return map.get(head);
    	}
    	let copy = new Node(head.val,null,null);
    	map.set(head,copy);
    	copy.random = getCopy(head.random,map);
    	copy.next = getCopy(head.next,map);
    	return copy;
    }
};


let testcase = copyRandomList(head);
export default copyRandomList;