/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solve = function(board) {
// 	for (let i = 0; i < board.length; i++) {
// 		for (let j = 0; j < board[i].length; j++) {
// 			if(i == 0 || i == board.length -1 || j == 0 || j == board[i].length -1){
// 				getline(i,j);
// 			}
// 		}
// 	}
// 	for (let i = 0; i < board.length; i++) {
// 		for (let j = 0; j < board[i].length; j++) {
// 			if(board[i][j] == 'O'){
// 				board[i][j] = 'X';
// 			}
// 			if(board[i][j] == '#'){
// 				board[i][j] = 'O';
// 			}
// 		}
// 	}
//     return board;
//     function getline(x,y){
//     	if(x<0 || y<0 || x>board.length -1|| y> board[0].length-1){
//     		return;
//     	}
//     	if(board[x][y] == '#' || board[x][y] == 'X'){
//     		return;
//     	}
//     	if(board[x][y] == 'O'){
//     		board[x][y] = '#';
//     	}  	
//     	getline(x+1,y);
//     	getline(x-1,y);
//     	getline(x,y+1);
//     	getline(x,y-1);
//     }
// };

var solve = function(board) {
	if(board.length == 0 || board[0].length == 0){
		return board;
	}
    let m = board.length;
    let n = board[0].length;
    let par = [];
    let cannotSet = -1;
 	par[cannotSet] = cannotSet;
    for (let i = 0; i < m; i++) {
    	for (let j = 0; j < n; j++) {
    		par[i*n+j] = i*n+j;
    	}
    }
    for (let i = 0; i < m; i++) {
    	for (let j = 0; j < n; j++) {
    		if(board[i][j] == "O"){
    			if((i == 0 || j == 0 || i == m -1|| j == n-1 ) ){
    				union(i*n+j,cannotSet);
    				// par[i*n+j] = -1;

    			}else{
    				i-1>=0  && board[i-1][j] == "O" && union(i*n+j,(i-1)*n+j);
    				i+1<m && board[i+1][j] == "O" && union(i*n+j,(i+1)*n+j);
    				j-1>=0 && board[i][j-1] == "O" && union(i*n+j,i*n+j-1);
    				j+1<n && board[i][j+1] == "O" && union(i*n+j,i*n+j+1);
    			} 			
    		}

    	}
    }
    for (let i = 0; i < m; i++) {
    	for (let j = 0; j < n; j++) {
    		if(i ==2 && j == 3){
    			console.log(par[i*n+j]);
    		}
    		if(board[i][j] =="O"&& find(i*n+j) != find(cannotSet)){
    		//if(board[i][j] =="O"&& par[i*n+j] != find(cannotSet)){
    			board[i][j] = "X"; 
    		}
    	}
    }
    return board;
    function find(p){
    	while(par[p] !== p){
    		par[p] = par[par[p]];
    		p = par[p];
    	}
    	return p;
    }
    function union(p,q){
    	let rootp = find(p);
    	let rootq = find(q);
    	if(rootp == rootq){
    		return;
    	}
    	par[rootp] = rootq;
    }
};
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solve = function(board) {
//     let m = board.length;
//     if(m == 0){return};
//     let n = board[0].length;
//     let find = (p) => {
//         while( p != parent[p]){
//             parent[p] = parent[parent[p]];
//             p = parent[p];
//         }
//         return p;
//     }
//     let union = (p,q) => {
//         let rootP = find(p);
//         let rootQ = find(q);
//         if(rootP == rootQ){
//             return;
//         }
//         parent[rootP] = rootQ;
//     }
//     // A类根节点
//     let cannotSet = 'not';
//     let parent = [];
//     parent[cannotSet] = cannotSet;
//     for(let i = 0;i < m;i++){
//         for(let j = 0;j < n;j++){
//             parent[i+'-'+j] = i+'-'+j;
//         }
//     }
//     for(let i = 0;i < m;i++){
//         for(let j = 0;j < n;j++){
//             // 遇到O字符
//             if(board[i][j] == 'O'){
//                 // 边缘O。不能替换，将其查并到A类下
//                 if(i == 0 || i == m-1 || j == 0 || j == n-1){
//                     union(i+'-'+j,cannotSet);
//                 }
//                 // 紧跟边缘O的内部O，题意可知同样不能替换，将其查并到A类下
//                 else{
//                     i -1 >= 0 && board[i-1][j] == 'O' && union(i+'-'+j,(i-1)+'-'+ j);
//                     i + 1 < m && board[i+1][j] == 'O' && union(i+'-'+j,(i+1)+'-'+j) ;
//                     j - 1 >= 0 && board[i][j-1] == 'O' && union(i+'-'+j,i +'-'+ (j - 1));
//                     j + 1 < n &&  board[i][j+1] == 'O' && union(i+'-'+j,i +'-'+ (j + 1));
//                 }
//             }
//         }
//     }
//     // 从非边缘下开始遍历替换不属于A类下的O字符为X，完毕即为所求
//     for(let i = 1;i < m-1;i++){
//         for(let j = 1;j < n-1;j++){
//             if( board[i][j] == 'O' && find(i +'-'+j) != find(cannotSet)){
//                 board[i][j] = 'X';
//             }
//         }
//     }
//     return board;
// };



//let testcase = solve([["O","X","X","O","X"],["X","O","O","X","O"],["X","O","X","O","X"],["O","X","O","O","O"],["X","X","O","X","O"]]);
//let testcase = solve([["O","X","X","O","X"],["X","X","X","X","O"],["X","X","X","O","X"],["O","X","O","O","O"],["X","X","O","X","O"]]);
//let testcase = solve([["O","O","O"],["O","O","O"],["O","O","O"]]);
let testcase = solve([["O","X","X","O","X"],["X","O","O","X","O"],["X","O","X","O","X"],["O","X","O","O","O"],["X","X","O","X","O"]]);
console.log(testcase);
export default solve;

