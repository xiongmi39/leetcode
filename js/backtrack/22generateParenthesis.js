/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	let list = [];
	let lr = ['(',')'];
	let count = {'(':n,')':n};
	backtrack(list,[],n*2,lr,count);
    return list;
};

//验证合法性
function pushStack(arr){
	let stack = [];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] == '('){
			stack.push(arr[i]);
		}else{
			stack.pop();
		}
	}
	if(stack.length == 0){
		return true;
	}
	return false;
}

function backtrack(list,tmparr,n,lr,count){
		//剪枝
	if(count[')'] == 0 && count['(']>0 && n>0){
		return;
	}
	if(tmparr[0] == ')'){
		return;
	}
	//加入结果集
	if(n==0){
		if(count['('] == 0 && count[')'] == 0 && tmparr[tmparr.length-1] == ')'){
			//验证合法性
			if(pushStack(tmparr)){
				return list.push(tmparr.join(''));
			}else{
				return;
			}
			
		}else{
			return;
		}		
	}


	for (let i = 0; i < lr.length; i++) {
		if(count[lr[i]]== 0){
			continue;
		}
		tmparr.push(...Array.from(lr[i]));
		count[lr[i]]--;
		backtrack(list,tmparr,n-1,lr,count);
		count[lr[i]]++;
		tmparr.pop();	
	}
return list;
			

}

let testcase = generateParenthesis(3);
console.log(testcase);

export default generateParenthesis;