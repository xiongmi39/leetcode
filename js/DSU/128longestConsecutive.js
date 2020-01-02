/**
 * @param {number[]} nums
 * @return {number}
 */
 //并查集
// var longestConsecutive = function(nums) {
// 	if(nums.length == 0){
// 		return 0;
// 	}
//     let par = {};
//     let count = [];
//     for (let i = 0; i < nums.length; i++) {
//     	par[nums[i]] = nums[i];
//     }
//     for (let i in par) {
//     	if(par[par[i]+1] ){
//     		union(par[i],par[par[i]+1]);
//     	}
//     	if(par[par[i]-1]){
//     		union(par[i],par[par[i]-1]);
//     	} 
//     }
//     let max = 0;
//     for (let i in par) {
//     	if(!count[find(par[i])]){
//     		count[find(par[i])] = 1;
//     	}else{
//     		count[find(par[i])]++;
//     	} 
//     	max = Math.max(max,count[find(par[i])]);
//     }
//     return max;
//     function find(p){
//     	while(p !== par[p]){
//     		par[p] = par[par[p]];
//     		p = par[p];
//     	}
//     	return p;
//     }
//     function union(p,q){
//     	let rootp = find(p);
//     	let rootq = find(q);
//     	if(rootp == rootq){
//     		return;
//     	}
//     		par[rootp] = rootq;
//     }
// }

var longestConsecutive = function(nums) {
	if(nums.length == 0){
		return 0;
	}
	let par = {};
	let max = 0;
	for (let i = 0; i < nums.length; i++) {
		par[nums[i]] = nums[i];
	}
	for (let i in par) {
		if(!par[par[i]-1]){
			let cur = par[i];
			let count = 1;
			while(par[cur] !== undefined){
				cur++;				
				max = Math.max(max,count);	
				count++;			
			}
		}
	}
	return max;
};

let testcase = longestConsecutive([100, 4, 200, 1, 3, 2]);
console.log(testcase);
export default longestConsecutive;