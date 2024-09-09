



function XO(str){
    let xCount = 0;
    let oCount = 0;

    for(let i=0; i<str.length; i++){
        if(str[i].toLowerCase() === 'x')  xCount++;
        if(str[i].toLowerCase() === 'o') oCount++
    }


    return xCount === oCount
}

console.log(XO('xo'))
console.log(XO('xxOo'))