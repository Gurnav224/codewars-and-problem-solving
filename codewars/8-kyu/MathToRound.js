

Math.roundTo = function(number,precision){
    const factor = Math.pow(10,precision);

    return Math.round(number*factor)/factor
}


console.log(Math.roundTo(3.1415926535, 4))