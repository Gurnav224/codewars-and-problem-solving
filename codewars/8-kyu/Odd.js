
function odds(values){
    // arrow it
    let l =  values.filter( val =>  val%2!==0) ;
    return l || []
  }

  console.log(odds([1, 2, 3, 4, 5]))
  console.log(odds([2,4,6]))





