

function sumOfMinimum(arr){
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
        sum = sum + Math.min(...arr[i])
    }
return sum
}


let array = [ [ 1, 2, 3, 4, 5 ]        //  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        //  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  //  minimum value of row is 20
]

console.log(sumOfMinimum(array))