

function arr2bin(arr){
 let sum = 0;

 for(let i=0; i<arr.length; i++){
    if(typeof arr[i]==='number'){
        sum += arr[i]
    }
 }

 return sum.toString(2)
}

console.log(arr2bin([1,2,3,4,5]))

// refactor 

function arr2bin2(arr){
return arr.reduce((a,b)=>(typeof b ==='number')?a+b:b,0).toString(2)
}

console.log(arr2bin2([1,2,3,4,5]))