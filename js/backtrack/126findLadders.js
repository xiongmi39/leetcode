/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
	let list = [];
    backtrack(list,[],beginWord,endWord,wordList);
    return list;
};
function backtrack(list,tmparr,begin,end,wordList){
	if(list.length >0 && tmparr.length+1 > list[0].length){
		return;
	}
	if(begin == end){
		if(list.length == 1 && tmparr.length +1 !==list[0].length){
			return list[0] = [...Array.from(tmparr),end];
		}
		return list.push([...Array.from(tmparr),end]);					
	}
	for (let i = 0; i < wordList.length; i++) {
		if(isValid(begin,wordList[i])){
			tmparr.push(begin);
			let word = wordList.splice(i,1);

			backtrack(list,tmparr,...word,end,wordList);
			wordList.splice(i,0,...word);
			tmparr.pop();
		}
	}
}

function isValid(word,oword){
	let count = 0;
	for (let i = 0; i < word.length; i++) {
		if(word.charAt(i) !== oword.charAt(i)){
			count++;
		}
		if(count == 2){
			return false;
		}
	}
	return count == 1;
}

let testcase = findLadders("hit","cog",["hot","dot","dog","lot","log","cog"]);
console.log(testcase);

export default findLadders;