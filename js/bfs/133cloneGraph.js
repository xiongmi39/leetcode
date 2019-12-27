/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
 import {graghNode as Node } from '../tree/graghNode'
 import {graphTool } from '../tree/graphTool'
var cloneGraph = function(node) {
	return getCopy(node,{});
    function getCopy(node,map){
    	let copy = new Node(node.val,[]);
    	map[copy.val] = copy;
    	for (let i = 0; i < node.neighbors.length; i++) {
    		if(map[node.neighbors[i].val]){
    			copy.neighbors.push(map[node.neighbors[i].val]);
    		}else{
    			copy.neighbors.push(getCopy(node.neighbors[i],map));
    		}
    	}
    	return copy;
    }
};

let tool = new graphTool();
let node = tool.objToGraph({"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"}],"val":2}],"val":1},{});
 console.log(node);
 //let testcase = cloneGraph({"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1});
let testcase = cloneGraph(node);
console.log(testcase);
export default cloneGraph;
