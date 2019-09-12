

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
	for (let i = 0; i < asteroids.length; i++) {
		if(asteroids[i]> 0 && asteroids[i+1]<0){
			if(Math.abs(asteroids[i]) == Math.abs(asteroids[i+1])){
				asteroids.splice(i+1,1);
				asteroids.splice(i,1);
			}else if(Math.abs(asteroids[i]) > Math.abs(asteroids[i+1])){
				asteroids.splice(i+1,1);
			}else{
				asteroids.splice(i,1);
			}
			i=-1;
		}
	}
    return asteroids;
};

let testcase = asteroidCollision([-2, -1, 1, 2]);
console.log(testcase);

export default asteroidCollision;