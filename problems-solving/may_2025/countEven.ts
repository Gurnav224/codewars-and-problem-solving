
function countEven(arr:number[]): number {
    return arr.filter(num => num % 2 === 0).length;
}

const numbers = [1, 2, 3, 4, 5, 6];

const result = countEven(numbers);

console.log(`The count of even numbers in the array is: ${result}`); // Output: The count of even numbers in the array is: 3