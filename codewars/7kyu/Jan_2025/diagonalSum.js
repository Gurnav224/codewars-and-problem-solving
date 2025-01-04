

function diagonalSum(arr){
  let mainSum = 0;
  let counterSum = 0;
  let len = arr.length;
  
  for (let i = 0; i < len; i++){
    for (let j = 0; j < len; j++){
      if(i === j){
        mainSum += arr[i][j]
      }
      if(i+j === len - 1){
        counterSum += arr[i][j]
      }
    }
  }
  
  return mainSum + counterSum;
  
}

const arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(diagonalSum(arr))


// optimized solution


function sum(matrix){
  let mainDiagonal = 0;
  let counterDiagonal = 0;
  let len = matrix.length;
  
  for (let i = 0; i < matrix.length; i++){
    mainDiagonal += arr[i][i],
    counterDiagonal += arr[i][len-1-i]
  }
  
  if(len % 2 !==0 ){
    counterDiagonal -= matrix[Math.floor(len/2)][Math.floor(len/2)]
  }
  
  return mainDiagonal + counterDiagonal
  
}


const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]


console.log(sum(matrix))