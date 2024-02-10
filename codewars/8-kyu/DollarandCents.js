
function DollarAndCents(amount){
 let format = "$"+amount.toFixed(2);
 return format
}

console.log(DollarAndCents(39.99))