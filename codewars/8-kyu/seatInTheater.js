

function seatInTheater(nCols,nRows,col,row){
  let totalSeats = col*row;

  let newColNumber = nCols-col+1;
  let newRolNumber = nRows-row;

  let peopleBehind = newColNumber*newRolNumber;

  return peopleBehind
}

console.log(seatInTheater(16,11,5,3))