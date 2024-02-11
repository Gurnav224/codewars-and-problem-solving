
function ensureQuestion(s){

    if(s.endsWith("?")){
        return s
    }
    else{
        return s+"?"
    }
}


console.log(ensureQuestion("yes?"))
console.log(ensureQuestion("no"))