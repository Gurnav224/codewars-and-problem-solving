

function whatNumberIsIt(n){
    //coding here
    switch(n){
        case Number.MAX_VALUE: return "Input number is Number.MAX_VALUE"
        case Number.MIN_VALUE: return "Input number is Number.MIN_VALUE"
        case Number.POSITIVE_INFINITY: return "Input number is Number.POSITIVE_INFINITY"
        case Number.NEGATIVE_INFINITY: return "Input number is Number.NEGATIVE_INFINITY"
        case Number(n): return "Input number is "+ n;
        default: return "Input number is Number.NaN";
    }
  }



  console.log(whatNumberIsIt(1/0))
  console.log(whatNumberIsIt(5))