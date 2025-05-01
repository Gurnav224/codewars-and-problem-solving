

function add_binary(a, b){
  let sum = a+ b;
  let binary  = ''
  while(sum > 0 ){
    if(sum % 2 === 1){
      binary = "1" + binary;
    }
    else{
      binary = "0" + binary
    }
    sum = Math.floor(sum/2)
  }
  return binary
}


console.log(add_binary(3, 2))