function halfLife(quantityInitial, quantityRemaining, time) {
  // your code here
  let half_life = time / (Math.log(quantityInitial / quantityRemaining) / Math.log(2));
  
  return half_life
}


console.log(halfLife(10, 5, 1))
console.log(halfLife(8, 4, 2))