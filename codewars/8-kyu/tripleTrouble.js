

function tripleTrouble(one,two,three){
   let str = ""
   let minLength = Math.min(one.length, two.length , three.length)
    for(let i=0; i<minLength; i++){
     
str += one[i]+two[i]+three[i]
    }
    return str
}

console.log(tripleTrouble("aaa","bbb","ccc"))