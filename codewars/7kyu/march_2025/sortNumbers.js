
function solution(nums) {
  if (nums.length < 0) return [];
  return nums.sort((a,b) => a-b)
}

console.log(solution([2,10,15,4,7,9]))