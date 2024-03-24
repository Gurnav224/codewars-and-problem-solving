
// solution 1
function findAverage(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum = sum+array[i]
    }
    let average = sum/array.length;

    return average
}

console.log(findAverage([1,1,1]))
console.log(findAverage([1,2,3]))
console.log(findAverage([1,2,3,4]))


// solution 2

const findAverage2 = (array)=>{
    if(array.length===0) return 0
    let sum = array.reduce((acc,curr)=>acc+curr,0);
    let average = sum/array.length;
    return average
}

console.log(findAverage2([1,1,1]))
console.log(findAverage2([1,2,3]))
console.log(findAverage2([1,2,3,4]))
