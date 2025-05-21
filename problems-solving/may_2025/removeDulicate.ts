

const removeDuplicate = (arr: number[]): number[] => {
    const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
    return uniqueArr;
}

console.log(removeDuplicate([1, 2, 3, 4, 5, 1, 2, 3])); // Output: [1, 2, 3, 4, 5]