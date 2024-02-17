

function findAverage(nums){
 let sum = 0;
 for(let i=0; i<nums.length; i++){
    sum = sum+nums[i]
 }
 let average = sum/nums.length;
 return average
}

console.log(findAverage([1, 3, 5, 7]))

// refactor with reduce method

function findAverage2(nums){
    return nums.reduce((acc,curr)=>acc+curr,0)/nums.length;
}

console.log(findAverage2([1,3,5,7]))