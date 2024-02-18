

function whoIsPaying(name){
    if(name.length<=2){
        return [name]
    }
 let firstTwoLetter = name.slice(0,2);
 return [name,firstTwoLetter]
}


console.log(whoIsPaying("Mexico"))
console.log(whoIsPaying("m"))


// refactor 

function whoIsPaying2(name){
    return name.length<=2?[name]:[name,name.slice(0,2)]
}

console.log(whoIsPaying2("Mexico"))
console.log(whoIsPaying2("Me"))