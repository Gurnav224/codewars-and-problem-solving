

const minNumber = (numbers:number[]):number => {
    return numbers.reduce((min, current) => (current < min ? current : min), numbers[0]);
}


const numbers2 = [1, 2, 3, 4, 5];
const result2 = minNumber(numbers2);
console.log(`The minimum number in the array is: ${result2}`); // Output: The minimum number in the array is: 1