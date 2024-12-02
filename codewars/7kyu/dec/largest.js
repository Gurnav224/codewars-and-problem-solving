


function findLargest(num,arr){
return arr.sort((a,b) => b-a).slice(0 ,num).sort((a,b) => a-b)
}


console.log(findLargest(2,[7,6,5,4,3,2,1]))
console.log(findLargest(3,[18,23,7,6,5,4,3,2,1]))
console.log(findLargest(2,[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))