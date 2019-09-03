	var twoSum = function(nums, target) { 
		const map = {} ;
		let arr = [];
		for (let i = 0; i < nums.length; i++){ 
			if(map[target - nums[i] ] >= 0){ 
				arr.push([ map[target - nums[i] ], i]);
			} 
			map[nums[i]] = i; 
		}
		return arr;
	}


 
 let nums = [7, 4, 2, 5,3,6];
 let tar = 9;
 let sum = twoSum(nums,tar);
 
 console.log(sum);

