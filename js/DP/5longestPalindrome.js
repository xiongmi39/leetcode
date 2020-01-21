/**
 * @param {string} s
 * @return {string}
 */
 //超时
 // var longestPalindrome = function(s) {
 // 	if(s.length == 0){
 // 		return '';
 // 	}
 // 	let longest = "";
 // 	for (let l = 0; l < s.length; l++) {
 // 		for (let r = s.length-1; r >=l ; r--) {
 // 			if(r+1-l <= longest.length){
 // 				break;
 // 			}
 // 			if(s[l] == s[r] &&s.slice(l,r+1).split('').reverse().join('') == s.slice(l,r+1) && s.slice(l,r+1).length > longest.length){
 // 				longest = s.slice(l,r+1);
 // 				break;
 // 			}
 // 		}
 // 	}
 // 	return longest;
 // };

 var longestPalindrome = function(s) {
 	if(s.length <2){
 		return s;
 	}
 	let dp = new Array(s.length);
 	let longest=1;
 	let start = 0;
 	for (let i = 0; i < dp.length; i++) {
 		dp[i] = new Array(s.length).fill(false);
 	}
 	for (let i = 0; i < dp.length; i++) {
 		dp[i][i] = true;
 	}
 	for (let r = 1; r < s.length; r++) {
 		for (let l = 0; l <= r; l++) {
 			if(s.charAt(l) == s.charAt(r)){
 				if( r-l<3){
 					dp[l][r] = true; 					
 				}else{
 					dp[l][r] = dp[l+1][r-1];
 				}

 			}else{
 				dp[l][r] = false;
 			}
 			if(dp[l][r]){
 				let curlen = r-l+1;
 				if(curlen > longest){
 					longest = curlen;
 					start = l;
 				}
 			}
 		}
 	}
 	return s.slice(start,start+longest);
 };

 let testcase = longestPalindrome('adbaab');
 console.log(testcase);
 export default longestPalindrome;