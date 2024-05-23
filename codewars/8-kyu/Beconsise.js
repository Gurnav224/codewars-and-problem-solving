

function squaresOnly(array) {
return array.filter((num)=>Math.sqrt(num)%1===0)
}

console.log(squaresOnly([0,1,2,3,4,5,6,7,8,9,10]))