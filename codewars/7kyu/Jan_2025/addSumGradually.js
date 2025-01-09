function add() {
  //CODE
  if (arguments.length < 1) return 0;
  
  let sum = 0;
  
  for (let i = 0; i < arguments.length; i++){
    sum = sum + (arguments[i] * (i + 1));
  }
  
  return sum
}


console.log(add(100, 200, 300));