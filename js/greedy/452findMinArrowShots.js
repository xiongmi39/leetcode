/**
 * @param {number[][]} points
 * @return {number}
 */
// var findMinArrowShots = function(points) {
//     points.sort((a,b)=> a[1]-b[1]); 
//     let xsets = 0;
//     while(points.length > 0){
//     	let x = points.shift();
//     	xsets++;
//     	points = points.filter(a=> a[0] > x[1] || a[1] < x[0]);
//     }
//     return xsets;
// };

var findMinArrowShots = function(points) {
    if(points.length == 0){
    	return 0;
    }
    points.sort((a,b)=> a[1]-b[1]);
    let end = points[0][1];
    let count = 1;    
    for (let i = 1; i < points.length; i++) {
    	if(points[i][0] > end){
    		end = points[i][1];
    		count++;
    	}
    }
    return count;
};

let testcase = findMinArrowShots([[10,16], [2,8], [1,6], [7,12]]);
console.log(testcase);
export default findMinArrowShots;