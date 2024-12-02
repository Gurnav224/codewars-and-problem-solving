


function digitize(n) {
    let str = n.toString().split('').map((val)=>parseInt(val))
    return str
}

console.log(digitize(123))
console.log(digitize(8675309))