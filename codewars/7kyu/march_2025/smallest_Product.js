function smallestProduct(arr) {
  let prodArr = [];

  for (let i = 0; i < arr.length; i++) {
    let result = 1;

    for (let j = 0; j < arr[i].length; j++) {
      result = result * arr[i][j];
    }
    prodArr.push(result);
  }

  return Math.min(...prodArr);
}

console.log(smallestProduct([[1, 5], [2], [-1, -3]]));
