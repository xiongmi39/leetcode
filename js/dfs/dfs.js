import Utils from '../utils/utils.js';

function dfssearch(graph,arr=[]){
	for (let i in graph) {
		arr.push(i);
		dfssearch(graph[i],arr);
	}
	return arr;
}

let utils = new Utils();
let outgraph = dfssearch(utils.grapha);
console.log(outgraph);

export default dfssearch;