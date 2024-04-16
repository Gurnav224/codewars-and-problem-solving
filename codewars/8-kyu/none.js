

function none(arr,fun){
 for(let i=0; i<arr.length; i++){
    if(fun(arr[i])){
        return false
    }
 }
 return true
}


console.log(none([1,2,3,4,5],function(item){ return item > 5 }))
console.log(none([1,2,3,4,5],function(item){ return item > 4 }))