

function include2(arr,item){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===item){
            return true
        }
      
    }
    return false
}



function include(arr,item){
return arr.includes(item)
}

console.log(include([1,2,3,4,5],3))
console.log(include([1,2,3,5],4))

console.log(include2([1,2,3,4,5],6))
console.log(include2([1,2,3,4,5],0))