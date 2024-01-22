

function unionArr(arr1, arr2){
 let arr = [...arr1,...arr2];
 let uniqueArr = []
 
 arr.forEach(value=>{
    if(!uniqueArr.includes(value)){
        uniqueArr.push(value)
    }
 })
return uniqueArr
}

let arr1 = [1,2,3];
let arr2 = [100,2,1,10];

console.log(unionArr(arr1,arr2))