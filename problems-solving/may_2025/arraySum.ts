

const sum = (arr: number[]): number => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};

const arr = [1, 2, 3, 4, 5];
const result = sum(arr);
console.log(`The sum of the array is: ${result}`); // Output: The sum of the array is: 15

