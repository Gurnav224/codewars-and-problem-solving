

const filterOutOdd = (arr: number[]): number[] => {
    return arr.filter(num => num % 2 === 0);
}
const numbers5 = [1, 2, 3, 4, 5, 6];
const result5 = filterOutOdd(numbers5);

console.log(`The filtered array is: ${result5}`); // Output: The filtered array is: [2, 4, 6]