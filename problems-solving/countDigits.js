

function countDigits(number){
  let positiveNumber  = Math.abs(number);

  let digitCount = 0;

  while(positiveNumber>0){
    positiveNumber = Math.floor(positiveNumber/10);
    digitCount++;
  }
  return digitCount
}


console.log(countDigits(12345))