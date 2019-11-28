/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
	if(digits.length == 0){
		return [];
	}
	let letters = {'2':['a','b','c'],
	'3':['d','e','f'],
	'4':['g','h','i'],
	'5':['j','k','l'],
	'6':['m','n','o'],
	'7':['p','q','r','s'],
	'8':['t','u','v'],
	'9':['w','x','y','z']
};
    let list = [];
    let letterArr = [];
    for (let i=0;i<digits.length;i++) {
    	letterArr.push(letters[digits.charAt(i)]);
    }
    backtrack(list,[],letterArr,0);
    return list;
};

function backtrack(list,tmparr,letterArr,n){
	if(n == letterArr.length){
		return list.push([...Array.from(tmparr)].join(''));
	}
	for (var j =0 ; j < letterArr[n].length; j++) {
		tmparr.push(letterArr[n][j]);
		backtrack(list,tmparr,letterArr,n+1);
		tmparr.pop();
	}
	return list;
}

let testcase = letterCombinations("23");
console.log(testcase);

export default letterCombinations;