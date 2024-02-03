

function mergeArray(arr1,arr2){
 let newArr = [...arr1,...arr2].sort((a,b)=>a-b);
 let dupArr = newArr.filter((element,index)=>newArr.indexOf(element)===index)
 return dupArr
}


console.log(mergeArray([1,2,3],[2,4,5,6]));