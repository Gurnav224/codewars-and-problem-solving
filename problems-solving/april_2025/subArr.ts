
// Given an array, find if there exists a subarray with a sum equal to a given number.
// 
// Example:
// Input: nums = [1, 2, 3, 4, 5], target = 9
// Output: true
// Explanation: The subarray [2, 3, 4] has a sum of 9.

function subArrSum(nums:number[], target:number):number{
  let arrCount:number = 0;
  
  for (let i = 0; i < nums.length; i++){
      let sum = 0;
    for (let j = i; j < nums.length; j++){
      sum += nums[j]
      if(sum === target){
        arrCount++
      }
    }
  }
  
  return arrCount
}

console.log(subArrSum([1,2,3,4,5], 5))