// Given a sorted array, find two numbers that add up to a specific target.

// input: [2, 7, 11, 15], target = 9
// output: [0, 1]

const twoSum = (arr: number[], target: number): number[] => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < right) {
      left++;
    } else {
      right--;
    }
  }

  return [];
};

const numbers: number[] = [2, 7, 11, 15];

const target: number = 9;

console.log(twoSum(numbers, target));
