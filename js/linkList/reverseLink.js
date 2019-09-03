import LinkListNode from './LinkListNode';
import LinkedList from './LinkedList';

var reverseList = function(head) {
    let cur = head;
    let pre = null;
    while(cur != null){
    	cur.next = pre;
    	pre = cur;
    	cur = cur.next;
    }
};

let arrTest = ['0','1','2','3'];
let linkdList = new LinkedList();
linkdList.arrayToLinkedList(arrTest);
console.log('aaa');

export default reverseList;

