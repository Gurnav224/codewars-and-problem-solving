

function twoHighest(arr){
// step -1 unique array;
let uniqueArr = arr.filter((value,index,arr)=>arr.indexOf(value)===index);
// step 2 : sort array in descending order 
let sortArr = uniqueArr.sort((a,b)=>b-a);

// step 3: return two higest values in array
let twoHighValues = sortArr.slice(0,2);

return twoHighValues
}


console.log(twoHighest([4, 10, 10, 9]))
console.log(twoHighest([1,1,1]))
console.log(twoHighest([]))

