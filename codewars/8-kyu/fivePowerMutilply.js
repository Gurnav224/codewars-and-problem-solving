

function fivePowerMultiply(number){

    let str = Math.abs(number).toString()

    let power = str.length
    if(number<0){
        return number*Math.pow(5,power)
    }

    return number*Math.pow(5,power)
}

console.log(fivePowerMultiply(10))
console.log(fivePowerMultiply(-2))