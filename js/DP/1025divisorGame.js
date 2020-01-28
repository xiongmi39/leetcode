/**
 * @param {number} N
 * @return {boolean}
 */
// var divisorGame = function(N) {
// 	// 为偶数时先手一定会赢（面临N==2时能赢）
// 	//为偶数，先手选1，=> 对手面临奇数 奇数%奇数==0 （奇数的约数一定是奇数）N==奇数，x==奇数，N-x==偶数 => 先手拿到偶数，再选一，循环，最后先手一定能拿到2
// 	//为奇数，奇数%奇数==0 （奇数的约数一定是奇数）N==奇数，x==奇数，N-x==偶数 ，先手选完N一定为偶数，对手面临偶数，先手会一直面临奇数，无法面临N==2，所以会输
//     return N%2 == 0;
// };

var divisorGame = function(N) {
    let dp = new Array(N+1).fill(false);
    dp[1] = false;
    dp[2] = true;
    //i为N的取值
    for (let i = 3; i <= N; i++) {
    	//j为x取值
    	for (let j = 1; j < i; j++) {
    		//dp[N]与dp[N-x]输赢情况相反
    		//N%x == 0     dp[N-x] == false
    		if(i%j == 0 && dp[i-j] == false){
    			dp[i] = true;
    			break;
    		}
    	}
    }
    return dp[N];
};

let testcase = divisorGame(2);
console.log(testcase);
export default divisorGame;