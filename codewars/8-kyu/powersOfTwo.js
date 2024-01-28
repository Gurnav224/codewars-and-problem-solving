

function powersOfTwo(n){
//   let powerArr = [];

//   for(let i=0; i<=n; i++){
//     powerArr.push(2**i)
//   }
//   return powerArr

let powerArr = [...Array(n+1)].map((e,i)=>Math.pow(2,i))
return powerArr
}


console.log(powersOfTwo(4))