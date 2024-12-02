


function firstReverseTry(arr){
    if (arr.length <= 1) return arr
        let first = arr[0];
        let last = arr[arr.length-1];

        return [last , ...arr.slice(1 , arr.length-1) ,first]
}

console.log(firstReverseTry([1,2,3,4,5]))