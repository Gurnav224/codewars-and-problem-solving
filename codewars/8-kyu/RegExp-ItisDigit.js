

String.prototype.digit = function(){
   
    return /^\d/.test(this)
    
}

console.log("4".digit())