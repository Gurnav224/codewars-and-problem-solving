

function sumOfIntegersInString(s){
    const numbers  =  s.match(/\d+/g)

    return numbers ?  numbers.reduce((acc,curr)=> acc + ( +curr), 0) : 0
}

console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"))

