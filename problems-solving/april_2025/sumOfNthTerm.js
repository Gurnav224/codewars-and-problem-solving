
function seriesSum(n){
  
  if(n===0) return "0.00"
  
  let sum = 0;
  let denmo = 1;
    
  for(let i = 0; i < n; i++){
    sum += 1/denmo
    denmo += 3
  }
  return sum.toFixed(2)
}


console.log(seriesSum(4))