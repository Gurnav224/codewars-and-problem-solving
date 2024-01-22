



function DecToBin(DecimalNum){


    if(isNaN(DecimalNum)|| DecimalNum%1!==0){
        return "Invalid decimal number"
    }

    if(DecimalNum===0){
        return "0"
    }


    let binaryDigit = ""
    let quotient  = DecimalNum
    while(quotient>0){
        binaryDigit = (quotient%2)+binaryDigit;
        quotient = Math.floor(quotient/2)
    }

    return binaryDigit
}


console.log(DecToBin(10))