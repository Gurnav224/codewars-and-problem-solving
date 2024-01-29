

String.prototype.isUpperCase = function(){

    for(let char of this){
        if(char>='a' && char<='z'){
            return false
        }
    }
    return true
}

console.log("CTLJK".isUpperCase())