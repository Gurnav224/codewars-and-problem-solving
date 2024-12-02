


function add(arr){

    let prefixSum = [];

    let sum  = 0;
    for(let i=0; i<arr.length; i++){
       sum += arr[i];
       prefixSum.push(sum)
    }

    return prefixSum
}


console.log(add([1,2,3,4,5]))