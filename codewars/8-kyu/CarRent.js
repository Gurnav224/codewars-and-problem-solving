
function rentalCarCost(d) {
    // Your solution here
    
    if(d<3){
    return( d*40)
    }
    if(d<7){
        return (d*40)-20
    }
    if(d=>7){
        return (d*40)-50
    }
  }

  console.log(rentalCarCost(1))
  console.log(rentalCarCost(2))
  console.log(rentalCarCost(3))
  console.log(rentalCarCost(4))
  console.log(rentalCarCost(5))
  console.log(rentalCarCost(6))
  console.log(rentalCarCost(7))
  console.log(rentalCarCost(8))
  console.log(rentalCarCost(9))