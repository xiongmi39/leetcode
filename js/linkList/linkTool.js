import {ListNode } from '../linkList/ListNode'

export class linkTool{
	arrToLinkList(arr,linkList){
		if(arr.length == 0){
			return null;
		}
		let listnode = new ListNode(arr.shift());
		listnode.next = this.arrToLinkList(arr,listnode);
		return listnode;		
	}
}