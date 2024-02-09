

function remove(string){
    let result = string.replace(/!/g,"");
    if(result.charAt(result.length-1)!=="!"){
        result += "!"
    }
return result
}

console.log(remove("Hi!!i!!"))