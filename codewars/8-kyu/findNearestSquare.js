
function findNearestSquare(n){
    let sqrtN = Math.sqrt(n)
    let roundSqrtN = Math.round(sqrtN)
    let roudedSqrt = roundSqrtN**2
  return roudedSqrt
}



console.log(findNearestSquare(10))