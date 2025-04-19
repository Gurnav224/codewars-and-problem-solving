
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].



function flatSortArr(matrix: number[][]): number[] {
  let arrNum: number[] = [];
  
  for (let i: number = 0; i < matrix.length; i++){
    for (let j: number = 0; j < matrix[i].length; j++){
      arrNum.push(matrix[i][j])
    }
  }
  return arrNum.sort((a,b) => a - b)
}


console.log(flatSortArr([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))
console.log(flatSortArr([[1, 3, 5], [100], [2, 4, 6]]))