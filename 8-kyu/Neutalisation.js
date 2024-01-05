
function neutralise(s1,s2){
    let str = ''
    for(let i=0; i<s1.length; i++){
        if(s1[i]==="+" && s2[i]==="+"){
            str += "+"
           
        }
        else if(s1[i]==="-" && s2[i]==="-"){
         str += "-"
        }
        else{
         str += "0"
        }
    }
    return str
}

console.log(neutralise("+-+","+--"))
console.log(neutralise("--+","+--"))
console.log(neutralise("+++","+--"))