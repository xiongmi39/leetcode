/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function(s, wordDict) {
// 	wordDict.sort((a, b) => {
// 		if (a.length > b.length) {
// 			return 1
// 		}
// 		if (a.length < b.length) {
// 			return -1
// 		}
// 		return 0
// 	})
// 	return wordDict.reduce((pre,cur)=>pre.replace(new RegExp(cur,'g'),""),s).length == 0 ? true : false;
// };

//76ms
// var wordBreak = function(s, wordDict) {
// 	let len = s.length;
// 	let dp = new Array(len+1).fill(false);
// 		let wensure = new Set(wordDict);
// 		dp[0] = true;
// 		for (let i = 0; i < len; i++) {
// 			for (let j = i+1; j < len+1; j++) {
// 				if(dp[i] && wensure.has(s.slice(i,j))){
// 					dp[j] = true;
// 				}
// 			}
// 		}
// 		return dp[len];
// 	};
//64ms
	// var wordBreak = function(s,wordDict){
	// 	let len = s.length;
	// 	let dp = new Array(len+1).fill(false);
	// 		dp[0] = true;
	// 		for (let i = 0; i < len+1; i++) {
	// 			for (let word of wordDict) {
	// 				let start = i-word.length;
	// 				if(start >= 0 && s.slice(start,start+word.length) == word && dp[start] ){
	// 					dp[i] = true;
	// 					break;
	// 				}
	// 			}
	// 		}
	// 		return dp[len];
	// 	};

	//"ccbb",["bc","cb"] 回溯，不通过 超时
var wordBreak = function(s, wordDict) {
	let flg = false;
	backtrack(s,0,wordDict);
	return flg;
	function backtrack(s,i,pre){
		if(flg){
			return true;
		}
		let tmps = s
		if(tmps.split('0').join('').length == 0){
			flg = true;
			return true;
		}
		if(s === pre){
			return false;
		}
		for (let i = 0; i < wordDict.length; i++) {
			let pre = s;
			backtrack(s.replace(new RegExp(wordDict[i],'g'),"0"),i+1,pre);
			s = pre;
		}
		return flg;
	}
};

let testcase = wordBreak("catsandog",["cats", "dog", "sand", "and", "cat"]);
//let testcase = wordBreak("cats",["cat", "ca", "ts"]);
console.log(testcase);
export default wordBreak;