

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

function asteroidCollision2(asteroids){
	let left = 0;
	let right = asteroids.length -1;
	while(left < right){
		if(asteroids[left] > 0 && asteroids[left+1] < 0){
			if(Math.abs(asteroids[left]) == Math.abs(asteroids[left+1])){
				asteroids.splice(left+1,1);
				asteroids.splice(left,1);
				left-=2; 
				right-=2;
				

			}else if(Math.abs(asteroids[left]) > Math.abs(asteroids[left+1])){
				asteroids.splice(left+1,1);
				left--;
				right--;
				
			}else{
				asteroids.splice(left,1);
				left--;
				right--;
				
			}
		}else{
			left++;
		}
		

	}
	return asteroids;
}

function asteroidCollision3(asteroids){
	if(!asteroids || asteroids.length == 0){
		return asteroids;
	}
	let stack = [];
	let flg = true;
	for (var i = 0; i < asteroids.length; i++) {
		flg = true;
		while(stack.length > 0 && asteroids[i] < 0){
			if(stack[stack.length-1] > 0 && asteroids[i] < 0){
				if(Math.abs(stack[stack.length-1])< Math.abs(asteroids[i])){
					stack.pop();			
				}else if(Math.abs(stack[stack.length-1])== Math.abs(asteroids[i])){
					stack.pop();
					flg = false;
					break;
				}else{
					flg = false;
					break;
				}
			}else{
				break;
			}

		}
		if(flg){
			stack.push(asteroids[i]);
		}
		
	}
	return stack;
}

let testcase = asteroidCollision3([10, 2, -5]);
console.log(testcase);

export default asteroidCollision;