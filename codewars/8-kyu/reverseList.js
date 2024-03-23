
// solution 1 
function reverseList(arr){
   
     return arr.reverse()
}

console.log(reverseList([1, 2, 3, 4]))
console.log(reverseList([3,1,5,4]))

// solution 2

function reverseList2(list){
    let newArr = [];

    for(let i=list.length-1; i>=0; i--){
        newArr.push(list[i])
    }

    return newArr
}

console.log(reverseList2([1,2,3,4]))
console.log(reverseList2([3,1,5,4]))