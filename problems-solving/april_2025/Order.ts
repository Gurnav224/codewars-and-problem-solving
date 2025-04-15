

// Implement an algorithm to shift all zeroes in an array to the end while maintaining the relative order of non-zero elements.
// 
// input  1020304050
// output 12345                                                                                                             
const shiftZero = (number:number ):number => {
  const arr = number.toString().split('');
  const zeros = arr.filter(val => Number(val) === 0).join('');
  const non_zero = arr.filter(val => Number(val) !== 0).join('')
  const result = non_zero + zeros;
  return Number(result)
}

const number: number = 1020304050;

console.log(shiftZero(number))