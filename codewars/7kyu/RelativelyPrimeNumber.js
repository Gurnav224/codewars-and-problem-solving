


function relativelyPrime(n,l){
    //your code here
    return l.filter((num)=>gcd(n,num)===1)
  }

  function gcd(a,b){
    while(b!==0){
        [a,b]=[b,a%b]
    }
    return a
  }


  console.log(relativelyPrime(8,[1,2,3,4,5,6,7]))