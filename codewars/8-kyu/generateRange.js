

function generateRange(min,max,step){
    let arr = []
     for(let i=min; i<=max; i+=step){

            arr.push(i)
     }
return arr;
}


console.log(generateRange(1,10,1))
console.log(generateRange(2,10,2))
console.log(generateRange(-10,1,1))
console.log(generateRange(1,15,20))