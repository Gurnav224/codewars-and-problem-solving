
function excludingVatPrice(price){

    if(price===null) return -1;

    let vat = 0.15;



    return Number(( price/(1+vat)).toFixed(2))
}

console.log(excludingVatPrice(230))
console.log(excludingVatPrice(123))