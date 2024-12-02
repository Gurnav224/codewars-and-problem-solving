

function divCon(x){
//    let numSum = 0;
//    let stringSum = 0;

//    for(let i=0; i<x.length;  i++){
//     if(typeof x[i] === "number"){
//         numSum = numSum + x[i]
//     }
//     if(typeof x[i] === "string"){
//         stringSum = stringSum + parseInt(x[i])
//     }
//    }

//    return numSum - stringSum

let numberTotal = x.reduce((intergerSum , currentNumber) => typeof currentNumber === "number"  ? intergerSum + currentNumber :  intergerSum - parseInt(currentNumber), 0  )


return numberTotal
}


console.log(divCon([9, 3, '7', '3']))

console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))