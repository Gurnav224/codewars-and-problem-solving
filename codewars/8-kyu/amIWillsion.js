
function amIWillsion(p){
    p = BigInt(p);
    const fac = n => n ? n * fac(n-1n) : 1n;
    const d = (fac(p-1n) + 1n);
    return !(d % (p * p));
}


console.log(amIWillsion(13))


// refactor 

function amIWillsion2(n){
    return n===5 || n===13 || n===563;
}

console.log(amIWillsion2(5))