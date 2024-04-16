

function saleHotsDogs(n){
    return n<5?n*100:n>=5 && n<10?n*95:n*10
}

console.log(saleHotsDogs(1))
console.log(saleHotsDogs(4))
console.log(saleHotsDogs(5))