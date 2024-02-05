
function fixPipes(numbers){
  let min = numbers[0];
  let max = numbers[numbers.length-1];
  let newArr = [];

  for(let i=min; i<=max; i++){
    newArr.push(i)
  }
  return newArr
}


console.log(
    fixPipes([1,2,3,5,6,8,9])
)