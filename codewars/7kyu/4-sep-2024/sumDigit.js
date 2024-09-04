

function sumDigits(number) {
    let numArray = Math.abs(number).toString().split('');

  

    
return  numArray.reduce((sum , num)=> +sum + +num  ,0)
}


console.log(sumDigits(10))
console.log(sumDigits(99))
console.log(sumDigits(-32))