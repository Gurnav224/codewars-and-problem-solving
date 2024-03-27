
function xor(a,b){
  
    if(a===b){
        return false
    }

    return a||b
}

console.log(xor(false,false))
console.log(xor(true,false))
console.log(xor(false,true))
console.log(xor(true,true))