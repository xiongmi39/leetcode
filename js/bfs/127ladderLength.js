/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// var ladderLength = function(beginWord, endWord, wordList) {
// 	let wordDic = {};
// 	let keyDic = {};
// 	let level = 0;
// 	let flg = false;
// 	keyDic[beginWord] = [];
// 	getFstQ(beginWord);	
// 	makewordDic();
// 	if(!flg){
// 		return level;
// 	}
// 	let queue = [beginWord];
// 	level ++;
// 	while(queue.length !== 0){		
// 		let tmp = [];
// 		while(queue.length !== 0){
// 			let cur = queue.shift();
// 			for (let i = 0; i < keyDic[cur].length; i++) {
// 				if(keyDic[cur] && keyDic[cur][i] && wordDic[keyDic[cur][i]]){
// 					tmp = [...tmp,...wordDic[keyDic[cur][i]]];
// 					wordDic[keyDic[cur][i]] = null;
// 				}				
// 			}
// 		}
// 		if(tmp.length == 0){
// 			return 0;
// 		}
		
// 		let tmp2 = [];
// 		for (let i = 0; i < tmp.length; i++) {
// 			if(tmp[i] == endWord){
// 				return level+1;
// 			}
// 		}
// 		queue = tmp;
// 		level++;		
// 	}
// 	return level;
// 	function getFstQ(word){
// 		for (let i = 0; i < word.length; i++) {
// 			let bgwarr = word.split('');
// 			bgwarr.splice(i,1,'*');
// 			let bgw = bgwarr.join('');
// 			keyDic[word].push(bgw);
// 		}	
// 	}
// 	function makewordDic(){
// 		while(wordList.length >0){
// 			let cur = wordList.shift();
// 			if(cur == beginWord){
// 				continue;
// 			}
// 			if(cur == endWord){
// 				flg = true;
// 			}
// 			keyDic[cur] = [];	
// 			for (let i = 0; i < cur.length; i++) {
// 				let tmpw = cur.split('');
// 				tmpw.splice(i,1,'*');
// 				let aaa = tmpw.join('');
// 				keyDic[cur].push(aaa);
// 				if(!wordDic[aaa]){
// 					wordDic[aaa] = [];
// 				}
// 				wordDic[aaa].push(cur);
// 			}
// 		}
// 	}
// };

var ladderLength = function(beginWord, endWord, wordList) {
  	let wordDic = {};
	let keyDic = {};
	let levelb = 0;
	let levele = 0;
	let flg = false;
	keyDic[beginWord] = [];
	keyDic[endWord] = [];
	getFstQ(beginWord);	
	getFstQ(endWord);
	makewordDic();
	if(!flg){
		return levelb;
	}

	levelb ++;
	levele ++;
	let queueb = [beginWord];
	let queuee = [endWord];
	while(queueb.length !== 0 || queuee.length !== 0){		
		let tmpb = getQlevel(queueb);
		let tmpe = getQlevel(queuee);
		if(tmpb.length == 0 || tmpe.length == 0){
			return 0;
		}
		for (let i = 0; i < tmpb.length; i++) {
			for (let j = 0; j < tmpe.length; j++) {
				if(tmpb[i] == tmpe[j]){
					return levelb +levele+1;
				}
			}
		}
		queueb = tmpb;
		queuee = tmpe
		levelb++;
		levele++;		
	}	
	getQlevel(beginWord,endWord);
	return levelb;
	function getFstQ(word){
		for (let i = 0; i < word.length; i++) {
			let bgwarr = word.split('');
			bgwarr.splice(i,1,'*');
			let bgw = bgwarr.join('');
			keyDic[word].push(bgw);
		}	
	}
	function makewordDic(){
		while(wordList.length >0){
			let cur = wordList.shift();
			if(cur == beginWord){
				continue;
			}
			if(cur == endWord){
				flg = true;
			}
			keyDic[cur] = [];	
			for (let i = 0; i < cur.length; i++) {
				let tmpw = cur.split('');
				tmpw.splice(i,1,'*');
				let aaa = tmpw.join('');
				keyDic[cur].push(aaa);
				if(!wordDic[aaa]){
					wordDic[aaa] = [];
				}
				wordDic[aaa].push(cur);
			}
		}
	}  
	function getQlevel(queue){
		let tmp = [];
		while(queue.length !== 0){
			let cur = queue.shift();
			for (let i = 0; i < keyDic[cur].length; i++) {
				if(keyDic[cur] && keyDic[cur][i] && wordDic[keyDic[cur][i]]){
					tmp = [...tmp,...wordDic[keyDic[cur][i]]];
					wordDic[keyDic[cur][i]] = null;
				}				
			}
		}
		return tmp;
	}
};

let testcase = ladderLength("hit","cog",["hot","cog"]);
console.log(testcase);
export default ladderLength;
