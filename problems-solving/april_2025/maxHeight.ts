function maxHeight(heights: number[]): number {
  let left = 0;
  let right = heights.length - 1;
  let max = 0;

  while (left < right) {
    let height = Math.min(heights[left], heights[right]);
    let width = right - left;
    let area = height * width;

    max = Math.max(area, max);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

const nums: number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxHeight(nums));


// brute force
// getting minimum height of two lines 
// getting the distance between them j - i
// calculate the area 
// why heights.length -2 because to get valid pairs to calculat width i.e j > i

function maxHeight2(heights:number[]):number{
  let max = 0;
  for (let i = 0; i <= heights.length - 2; i++){
    for (let j = i + 1; j <= heights.length - 1; j++){
      const area = Math.min(heights[i], heights[j]) * (j - i);
      max = Math.max(area, max)
    }
  }
  return max
}


console.log(maxHeight2(nums))