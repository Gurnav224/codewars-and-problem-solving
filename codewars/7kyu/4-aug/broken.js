
function broken(x){
    let arr = x.split('').map((num)=>num==='0' ? '1' : '0').join('')
return arr
}

console.log(broken('1'))
console.log(broken('1000000010110111111001100100010000000101101111110011001000'))