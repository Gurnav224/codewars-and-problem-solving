


function parseF(s){
    const parsed = parseFloat(s);

    return !isNaN(s)? Number(parsed.toFixed(1)):null
}


console.log(parseF("1"))
console.log(parseF('h'))