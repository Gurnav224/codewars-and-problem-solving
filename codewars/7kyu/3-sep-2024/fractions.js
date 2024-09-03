

function gcd(a , b){
    return b===0 ? a : gcd(b , a%b)
}





function fractions(a, b){
    if(typeof a !== 'number' && typeof b !== 'number' ) return NaN;
    const divisor = gcd(a,b);

    return (a/divisor) + (b/divisor)
}


console.log(fractions(2,4))
console.log(fractions(48 , 18))