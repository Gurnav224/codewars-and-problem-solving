/*
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]

The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.
*/

//Approach 
 // Step 1: Sort the array
  // Step 2: Pick max and min alternately


function solve(nums:number[]):number[]{
  let sorted: number[] = nums.sort((a, b) => a - b);
  
  let left: number = 0;
  let right: number = sorted.length - 1;
  let result:number[] = []
  
  while(left < right){
    if(left !== right){
      result.push(sorted[right--])
      result.push(sorted[left++])
    }
    else[
      result.push(sorted[left++])
    ]
  }
  
  return result
  
}


console.log(solve([15,7,12,10,11]))


