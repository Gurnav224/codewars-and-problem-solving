
function minMax(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return [min, max]
}


console.log(minMax([1,2,3,4,5]))