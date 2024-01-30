

function sumMix(x){
    let sum = 0;
    for(let i=0; i<x.length; i++){
       
            sum = sum+parseInt(x[i])
    }
return sum
}


console.log(sumMix([9, 3, '7', '3']))


// refactor

let arr = [9, 3, '7', '3']

let sum = arr.reduce((acc,curr)=>acc+parseInt(curr),0)

console.log(sum)