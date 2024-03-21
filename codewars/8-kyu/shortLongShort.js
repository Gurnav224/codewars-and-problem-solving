

function solutions(a,b){
    if(b.length>a.length){

        return a+b+a
    }
    else{
        return b+a+b
    }
}

console.log(solutions('1','22'))
console.log(solutions('45','1'))