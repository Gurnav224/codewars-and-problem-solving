

function factorial_division(n,d){
    





if (n < d) {
    throw new Error("n must be greater than or equal to d");
}

let result = 1n;
for (let i = BigInt(d) + 1n; i <= BigInt(n); i++) {
    result *= i;
}

return result;
}

console.log(factorial_division(5,4))