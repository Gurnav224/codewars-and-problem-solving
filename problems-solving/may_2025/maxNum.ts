

const maxNumber = (numbers:number[]):number => {
    return numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
}
const numbers = [1, 2, 3, 4, 5];

const result = maxNumber(numbers);
console.log(`The maximum number in the array is: ${result}`); // Output: The maximum number in the array is: 5
