

function HexToDecimal(hexString){
return parseInt(hexString,16)
}


console.log(HexToDecimal("1A"))

// refactor

const HexToDecimal2 = (hexString)=>{
    // Define a dictionary to map hexadecimal characters to their decimal equivalents
    let hexDigits = "0123456789ABCDEF";

    console.log(hexDigits.length)

    // Convert the hexadecimal string to uppercase for consistency
    hexString= hexString.toUpperCase()

    let decimal = 0;

    for(let i=0; i<hexDigits.length; i++){
         // Find the decimal value of the current hexadecimal digit
         const digit = hexDigits.indexOf(hexString.charAt(i));


          // Multiply the digit by 16 raised to the power of its position

        let power = hexString.length-i-1;

          decimal += digit*Math.pow(16,power)
    }
return decimal
}

console.log(HexToDecimal2("1A"))
console.log(HexToDecimal2("05f"))