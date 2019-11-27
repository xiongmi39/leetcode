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

function backtrack(list,tmparr,n,lr,count){
	//有括号多余左括号的情况下，剪枝
	if(count[')'] < count['(']){
		return;
	}
	//加入结果集
	if(n==0){
		if(count['('] == 0 && count[')'] == 0 && tmparr[tmparr.length-1] == ')'){
			return list.push(tmparr.join(''));

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