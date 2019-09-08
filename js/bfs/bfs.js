import Utils from '../utils/utils.js';

function bfssearch(graph,arr=[]){
	if(Object.keys(graph).length == 0){
		return arr;
	}
	arr = arr.concat(Object.keys(graph));
	for(let i in graph){
	arr = bfssearch(graph[i],arr);
	}
return arr;	 	
}

let utils = new Utils();
let outgraph = bfssearch(utils.grapha);
console.log(outgraph);

export default bfssearch;