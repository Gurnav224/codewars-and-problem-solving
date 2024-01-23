
function doubleChar(str){
 let chars = str.split("");
 let doubleChars = ""
 for(let i=0; i<chars.length; i++){
    doubleChars +=  chars[i].repeat(2)
 }
 return doubleChars
}

console.log(doubleChar("String"))