

function sumOfTheString(a,b){
  if(a==="" && b===""){
    return "0"
  }
  let sum = Number(a)+Number(b)
  return sum.toString()
}

console.log(sumOfTheString("4","5"))
console.log(sumOfTheString("",""))

console.log(sumOfTheString("-5","3"))