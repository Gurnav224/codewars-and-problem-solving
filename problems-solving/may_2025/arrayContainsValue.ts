


const arrayContainsValue = <T>(array: T[], value: T): boolean => {
    return array.includes(value);
}
const numbers3 = [1, 2, 3, 4, 5];
const result3 = arrayContainsValue(numbers3, 3);
console.log(`The array contains the value: ${result3}`); // Output: The array contains the value: true