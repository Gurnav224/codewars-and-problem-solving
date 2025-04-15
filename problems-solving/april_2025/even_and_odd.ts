// Move all even numbers to the beginning and all odd numbers to the end of an array using two pointers.
function rearrangeEvenOdd(arr: number[]): number[] {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] % 2 === 0) {
      left++;
    } else if (arr[right] % 2 === 1) {
      right--;
    } else {
      [arr[left],arr[right]] = [arr[right], arr[left]]
      left++;
      right--;
    }
  }
  const even = arr.filter(val => val % 2 === 0).sort((a,b) => a -b);
  const odd = arr.filter(val => val % 2 === 1).sort((a,b) => a - b);
  return [...even, ...odd]
}

console.log(rearrangeEvenOdd([12, 17, 70, 15, 22, 65, 21, 90]));
console.log(rearrangeEvenOdd([1,2,3,4,5,6,7,8,9,10]))