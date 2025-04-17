// Find the maximum sum of any contiguous subarray of size k in a given array.
// 

function maxSum(arr: number[], k: number): number {
  if (arr.length < k) return 0;
  let window_sum = 0;
  for (let i = 0; i < k; i++){
    window_sum = window_sum + arr[i]
  }
  
  let maxSum = window_sum;
  
  for (let j = k; j < arr.length; j++){
    window_sum = window_sum - arr[j -k]+ arr[j]
    maxSum = Math.max(maxSum,window_sum)
  }
  return maxSum
}

const numbers: number[] = [1, 2, 3, 4, 5, 6,11];

const sum: number = 3;

console.log(maxSum(numbers, sum))