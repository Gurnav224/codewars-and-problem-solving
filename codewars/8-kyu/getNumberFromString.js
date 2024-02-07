


function getNumberFromString(s){
    let chars = s
    let digit = ''
    for(let i=0; i<chars.length; i++){
        if(/\d/.test(chars[i])){
            digit += chars[i]
          
        }
    }
    return Number(digit.trim())
}

console.log(getNumberFromString("hell5o wor6ld"))