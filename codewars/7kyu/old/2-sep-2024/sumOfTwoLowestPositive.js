

function sumOfTwoLowestPositive(arr){
const sortedArray = arr.sort((a,b)=>a-b)
return sortedArray[0]+sortedArray[1]
}


console.log(sumOfTwoLowestPositive([19, 5, 42, 2, 77]))
console.log(sumOfTwoLowestPositive([10, 343445353, 3453445, 3453545353453]))