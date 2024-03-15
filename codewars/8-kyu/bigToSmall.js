

function bigToSmall(arr){
 let result = [];
 for(let i=0; i<arr.length; i++){
    result = result.concat(arr[i])

 }
 result.sort((a,b)=>b-a)
 return result.join("<")
}

console.log(bigToSmall([[1,2],[3,4],[5,6]]));
console.log(bigToSmall([[1,3,5],[2,4,6]]));
console.log(bigToSmall([[1,1],[1],[1,1]]))

// refactor 

const bigToSmall2 = (arr)=> [].concat(...arr).sort((a,b)=>b-a).join(">")

console.log(bigToSmall2([[1,2],[3,4],[5,6]]));
console.log(bigToSmall2([[1,3,5],[2,4,6]]));
console.log(bigToSmall2([[1,1],[1],[1,1]]))