function createArrayOfTiers(num) {
  const digits = num.toString().split("");

  const result = digits.map((_, index, array) => {
    // console.log(index)

    return array.slice(0, index + 1).join("");
  });

  return result;
}

console.log(createArrayOfTiers(420));


function createArrayOfTiers2(num){
    let digits = num.toString().split('');
    let result = [];

    for(let i=0; i<digits.length; i++){
        result.push(digits.slice(0 , i+1).join(''))
    }
    return result
}

console.log(createArrayOfTiers2(2018))