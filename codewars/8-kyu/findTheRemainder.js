
function findTheRemainder(n,m){
     
  if(n>m){
    n%m
  }
  else{
    m%n
  }
    
}

console.log(findTheRemainder(17,5))

console.log(findTheRemainder(5,17))

console.log(findTheRemainder(5,0))


