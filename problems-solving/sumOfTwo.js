
function sumOfTwo(arr1,arr2){
    let sumArr = [];

    if(arr1.length!==arr2.length){
        return "Array must be same length"
    }

    for(let i=0; i<arr1.length; i++){
        sumArr.push(arr1[i]+arr2[i])
    }
    return sumArr
}


let arr1 = [1,2,3,4,6];
let arr2 = [9,2,5,6,7];

console.log(sumOfTwo(arr1,arr2))