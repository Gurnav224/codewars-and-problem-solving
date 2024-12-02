function sumOrProduct(array, n) {
  const sortedUniqueArray = array.sort((a, b) => a - b);


  const sum = sortedUniqueArray.slice(-n).reduce((sum, num) => sum + num, 0);
  const product = sortedUniqueArray
    .slice(0,n)
    .reduce((product, num) => product * num, 1);

  if (sum > product) {
    return "sum";
  } else if (product > sum) {
    return "product";
  } else {
    return "same"
  }
}

console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3));
// output : "product"

console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
// output : "sum"