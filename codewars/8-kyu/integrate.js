


function integrate(cofficient,exponent){
 let newExponent = exponent+1;
 let newCofficient = cofficient/newExponent;
 return `${newCofficient}x^${newExponent}`
}


console.log(integrate(3,2))
console.log(integrate(9,5))
