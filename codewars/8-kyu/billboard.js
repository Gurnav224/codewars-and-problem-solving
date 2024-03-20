

function billBoard(name,price=30){
    let sum = 0;

    for(let i=0; i<name.length; i++){
        sum = sum+price;
    }
    return sum
}

console.log(billBoard("Jeong-Ho Aristotelis"))