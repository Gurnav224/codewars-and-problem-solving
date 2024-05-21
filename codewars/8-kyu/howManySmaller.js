
function howManySmaller(arr,n){
let fixed = arr.map((val)=>val.toFixed(2));

let count = 0;

for(let i=0; i<fixed.length; i++){
    if(fixed[i]<n){
        count = count+1
    }
}
return count
}


console.log(howManySmaller([1.234,1.235,1.228],1.24))