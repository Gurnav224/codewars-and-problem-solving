

function mango(qantity,price){
    const paidMangoes = Math.floor(qantity/3)*2;
    console.log(paidMangoes)
    const freeMangoes = qantity%3;

    console.log(freeMangoes)

    return (paidMangoes+freeMangoes)*price
}

console.log(mango(3,3))
console.log(mango(9,5))