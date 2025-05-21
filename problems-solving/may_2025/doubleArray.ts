

function doubleArray(arr: number[]): number[] {
    return arr.map(num => num * 2);
}
const numbers4 = [1, 2, 3, 4, 5];
const result4 = doubleArray(numbers4);
console.log(`The doubled array is: ${result4}`); // Output: The doubled array is: [2, 4, 6, 8, 10]