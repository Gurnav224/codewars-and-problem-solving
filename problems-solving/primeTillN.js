

function primeTillN(n){
  let primes = [];
  let isPrime;

  for(let num=2; num<=n; num++){
     isPrime = true;

     for(let i=2; i<=Math.sqrt(num); i++){
           if(num%i===0){
            isPrime = false
            break;
           }
     }

     if(isPrime){
        primes.push(num)
     }
  }

  return primes
}

console.log(primeTillN(20))