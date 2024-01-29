
function arrayPlusArray(arr1,arr2){

    let sum = [...arr1,...arr2].reduce((acc,curr)=>acc+curr,0);
    return sum
}


console.log(arrayPlusArray([1,2,3],[4,5,6]))