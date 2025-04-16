// Write a function to remove duplicates from a sorted array and return the new length of the array.


function removeDuplicates(arr:number[]):number {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

const arr = [1, 1, 2, 2, 2, 3, 3];

console.log(removeDuplicates(arr))