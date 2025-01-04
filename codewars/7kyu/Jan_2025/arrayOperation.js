


function arrayOperation(matrix){
  let prod = 1;
  for (let i = 0; i < matrix.length; i++){
  let sum = 0;
    for (let j = 0; j < matrix.length; j++){
      sum += matrix[i][j]
    }
    prod = prod*sum
  }
  return prod
}

const myMatrix = [
  [0, 4, 8, 5],
  [2, 4, 7, 1],
  [7, 5, 3, 2],
  [2, 9, 2, 6]
]

console.log(arrayOperation(myMatrix))