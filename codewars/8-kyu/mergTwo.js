
function mergeTwo(arr1,arr2){
    let newArr = [...arr1,...arr2].sort((a,b)=>a-b);
    let removDuplicates = newArr.filter((item,pos)=>newArr.indexOf(item)===pos)
return removDuplicates
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10]

console.log(mergeTwo(arr1,arr2))

let arr3 = [1, 2,3,2,3, 5, 7, 9]
let arr4 =  [10, 8, 6, 4, 2] 

console.log(mergeTwo(arr3,arr4))