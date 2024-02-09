

function removeExl(string){
 if(string.endsWith("!")){
    string = string.substring(0,string.length-1)
 }
 return string
}


console.log(removeExl("!!Hu!"))