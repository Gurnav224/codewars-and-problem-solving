

function divisibleBy(numbers,divisor){
//   let newArr = [];

//   for(let i=0; i<numbers.length; i++){
//     if(numbers[i]%divisor===0){
//         newArr.push(numbers[i])
//     }
//   }
//   return newArr
let filt =  numbers.filter((number)=>number%divisor===0)

return filt
}


console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2 ))