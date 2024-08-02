

function testIt(n){
    return n.toString(2).split('1').length-1
}

console.log(testIt(2))

console.log(testIt(203))