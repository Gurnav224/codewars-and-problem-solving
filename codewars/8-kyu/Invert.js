

function invert(arr){
    console.log(arr)
 for(let i=0; i<arr.length; i++){
    console.log(arr[i])
    arr[i] = arr[i]*(-1)
 }
 return arr
}


console.log(invert([1,2,3,4,5]))