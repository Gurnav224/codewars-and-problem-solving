

function getRealFloor(n){
    if(n<=0) return n;
    
else   if(n>=13) return n-2;
else  return n-1;
}


console.log(getRealFloor(1))
console.log(getRealFloor(5))
console.log(getRealFloor(15))
console.log(getRealFloor(-2))

