// 914
// 给定一副牌，每张牌上都写着一个整数。

// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。
// 输入：[1,2,3,4,4,3,2,1]
// [1,1,1,2,2,2,3,3]



function cardgroup(arr){
	arr.sort();
	let min;
	let size = [];
	let cur = 1;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i+1]===arr[i]){
			cur++;
		}else{
			size.push(cur);
			cur = 1;
		}
	}
	size.sort();
	min = size[0];
	return	size.every((s)=>{
		return gcd(s,min)>1;
	});
}
function gcd(a,b){
	return b===0?a:gcd(b,a%b);
}

let testcase = [1,1,1,2,2,2,3,3];
let returncardgroup = cardgroup(testcase);
console.log(returncardgroup);

export default cardgroup;