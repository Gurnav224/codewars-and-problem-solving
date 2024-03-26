

function multipleOfIndex(array){
    return array.filter((val, index) => index==0 || val%index===0);
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))

console.log(multipleOfIndex( [0,2,3,6,9]))