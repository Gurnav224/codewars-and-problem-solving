

// solution 1 
function sumOfNoDulipcates(numList){

 let counts = {}

 for(let num of numList){
    counts[num] = (counts[num] || 0) +1
 }

 console.log(counts)
  
 let uniqueSum = 0;

 for(let num in counts){
    if(counts[num]===1){
        uniqueSum += Number(num)
    }
 }

 return uniqueSum
   
}


// console.log(sumOfNoDulipcates([1, 10, 3, 10, 10]))



// solution 2


function sumOfNoDulipcates2(numList){
 let arr = [];

 for(let i=0; i<numList.length; i++){


    if(numList.indexOf(numList[i])===numList.lastIndexOf(numList[i])){
        arr.push(numList[i])
    }
 }
 return arr.reduce((acc,curr)=>acc+curr,0)
}


// console.log(sumOfNoDulipcates2([1, 10, 3, 10, 10]))




