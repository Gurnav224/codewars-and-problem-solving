

function nextId(ids){
 let arr = [];

 let count = 0

 for(let i=0; i<=ids.length; i++){
    arr.push(count++)
 }



 let val = arr.find(val => !ids.includes(val))

 return val
}


console.log(nextId([0,1,2,3,5]))
console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]))

console.log(nextId([1,2,0,2,3,5]))