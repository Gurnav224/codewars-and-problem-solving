
function automorphic(n){
  const square =(n*n).toString();
  if(square.endsWith(n.toString())){
    return "Automorphic"
  }
  return "Not!!" // your code here
}


console.log(automorphic(25))
console.log(automorphic(100))