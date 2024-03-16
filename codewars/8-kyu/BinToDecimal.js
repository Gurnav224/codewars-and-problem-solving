

function binToDecimal(bin){
    let deci = 0;
    for(let i=0; i<bin.length; i++){

        let power = bin.length-i-1;


        deci += parseInt(bin[i]*Math.pow(2,power))
    }
return deci
}




console.log(binToDecimal('1001001'))


function binToDecimal2(bin){
    return parseInt(bin,2)
}

console.log(binToDecimal2('100'))