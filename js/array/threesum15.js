/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	let outnums = [];    
    nums.sort((a,b)=>a-b);
    let i = 0;
    while(nums[i]<=0){
    	let l = i+1;
    	let r = nums.length -1;
    	if(nums[i]== nums[i-1]){
    		i++;
    		continue;
    	}    	
    	while(l<r){
    	    let sum = nums[i]+nums[l]+nums[r];
    		if(sum == 0){
    			outnums.push([nums[i],nums[l],nums[r]]);
    			while(nums[l]== nums[l+1]){
    				l++;
    			}
    			while(nums[r]== nums[r+1]){
    				r--;
    			}
    			l++;
    			r--;
    			
    		}else if(sum<0){
    			l++;
    		}else if(sum>0){
    			r--;
    		}

    	}
		i++;
    }
    return outnums;
};

let testcase = threeSum([1,-1,-1,0]);
console.log(testcase);

export default threeSum;