
function squareSum(arr){
let sum = 0;
for(let i=0; i<arr.length; i++){
    sum = sum+arr[i]**2
}
return sum
}

console.log(squareSum([1,2,2]))

// refactor 

const squareSum2 = (arr)=>arr.reduce((sum,num)=>sum+(num*num),0)

console.log(squareSum2([1,2,2]))
console.log(squareSum2([1,2,2,4,5,]))
