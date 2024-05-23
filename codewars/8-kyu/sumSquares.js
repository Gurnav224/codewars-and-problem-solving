

function sumSquares(array){
let sum = array.reduce((acc,curr)=>acc+curr**2,0);
return sum
}

console.log(sumSquares([1,2,3,4,5]))