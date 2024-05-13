

function arrayMadness(a,b){
  let squareSum = 0;
  let cubeSum  = 0;
  for(let i=0; i<a.length; i++){
   squareSum = squareSum+a[i]**2
  }
  for(let j=0; j<b.length; j++){
   cubeSum = cubeSum+b[j]**3
  }
  return squareSum > cubeSum
}



console.log(arrayMadness([4, 5, 6], [1, 2, 3]))

// with reduce 

function arrayMadness2(a,b){
    let squareSum = a.reduce((acc,curr)=>acc+curr**2,0);
    let cubeSum = b.reduce((acc,curr)=>acc+curr**3,0);
    return squareSum> cubeSum
}


console.log(arrayMadness2([4,5,6],[1,2,3]))