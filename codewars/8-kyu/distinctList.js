
function distinct(arr){
    return arr.filter((value,index,arr)=>arr.indexOf(value)===index)
}

console.log(distinct([1,2,3,1,2,5]))