/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// var getPermutation = function(n, k) {
// 	let arr = [];
//     for (var i = 1; i <= n; i++) {
//     	arr.push(i);
//     }
//     let list = [];
//     backtrack(list,[],arr,k);
//     return list[k-1].join('');
// };

// function backtrack(list,tmparr,arr,k){
// 	if(list.length == k){
// 		return;
// 	}
// 	if(arr.length == 0){
// 		return list.push([...Array.from(tmparr)]);
// 	}
// 	for (let i = 0; i < arr.length ; i++) {
// 		tmparr.push(arr[i]);
// 		let tmp = arr.splice(i,1);
// 		backtrack(list,tmparr,arr,k);
// 		arr.splice(i,0,...tmp);
// 		tmparr.pop();
// 	}
// }


var getPermutation = function(n, k) {
	let arr = [];
	for (var i = 1; i <= n; i++) {
		arr.push(i);
	}
	
	return getk(n,k,arr,"");
};


function getk(n,k,arr,val){
	if(arr.length == 1){
		val += arr[0];
		return val;
	}
	//n个数字，以每个数字开头，各有j个排列，如【1,2,3】，以1,2,3开头，各有（3-1）！，即2个排列
	let j = factorialize(n-1);
	//排定第一个数字的索引，如n=3,k=5，排定第一个数字3
	let index = Math.ceil(k/j)-1;
	//排定第一个数字后，第一个数字之前的排列个数要从k里减去，数字3之前有(3-1)! * 2 个排列，从k中减去
	k -= j*index;

	n--;
	val+= arr[index];
	arr.splice(index,1);
	return getk(n,k,arr,val);
}

function factorialize(num){
	if(num>1){
		return num*factorialize(num-1);
	}else{
		return 1;
	}
}

// 我们知道，一共N个元素，共有 n! 种排列，其中，每个不同作为开头的排列数各有 (n-1)! 个。
// 可知，第 k 个排列，可通过计算 (n-1)! 再做除法，向上取整后减一。即为第一个位置数字的索引

// 假设 n=4,k=10 的情况下，(n-1)! = 6
// 10 / 6 = 1.667 ,取整为 2，再减一，得出第一个位置的数字索引为 1，即为元素 2.
// 将 2 在未确定位置元素的数组中移除，此时，k应该递减，即减去第一位的可能性个数，既是减去 (n-1)! * 1 （此处 *1 是因为上面算出的索引为 1）。
// 确定第一个元素为 2，数组中还剩 [1,3,4] ，k为 4，第二个位置的数字索引为 ceil(4/(3-1)!)-1 = 1，
// 得出第二个元素为 3，数组中还剩 [1,4] ,k = 4-1*(3-1)! = 2
// 继续计算第三个位置的元素索引为 ceil(2/(2-1)!)-1 = 1，抵触第三个元素为 4，剩余最后一个元素 1 。依次计算，或者直接追加均可。
// class Solution:
//     def getPermutation(self, n: int, k: int) -> str:
//         temp = [str(i+1) for i in range(n)]
//         result = ""
//         while len(temp) > 0:
//             lTemp = len(temp)
//             j = math.factorial(lTemp-1)
//             t = math.ceil(k / j)-1
//             k -= j*t
//             result += temp[t]
//             temp.pop(t)

//         return result




let testcase = getPermutation(4,9);
console.log(testcase);

export default getPermutation;