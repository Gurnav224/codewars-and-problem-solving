

function sumOfDifferences(arr){
    if(arr.length===0){
        return 0
    }

  arr.sort((a,b)=>b-a);

 let sum = 0;

 for(let i=0; i<arr.length-1; i++){
    sum += arr[i]-arr[i+1]
 }
return sum
}


console.log(sumOfDifferences([2,1,10]))