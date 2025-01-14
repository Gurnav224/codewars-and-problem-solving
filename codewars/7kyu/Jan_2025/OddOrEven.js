


function oddOrEven(list){
  let sum = list.reduce((acc, curr) => acc + curr, 0);
  if(sum % 2 === 0) {
    return "even"
  }
  else{
    return "odd"
  }
}

console.log(oddOrEven( [0, 1, 4]))