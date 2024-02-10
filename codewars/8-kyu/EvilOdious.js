


function decimalToBinary(num){
    let binary = '';
    while(num!=0){
        let rem = num%2;
        binary = rem+binary;

        num = Math.floor(num/2)

    }
    if(binary===''){
        binary = "0"
    }
    return binary
}


function isEvilOrOdius(num){
 let binary =   decimalToBinary(num);
 let countOnes = 0;

 for(let i=0; i<binary.length; i++){
    if(binary[i]==='1'){
        countOnes++;
    }
 }
 if(countOnes%2===0){
    return "Evil"
 }
 else{
    return "Odd"
 }
}

console.log(isEvilOrOdius(3))


// refactor 
function evil(n){
let bin = n.toString(2);
let binLength = bin.split("1").length-1
  if(binLength%2===0){
    return "Evil"
  }
  else{
return "Odious"
  }
  
}

console.log(evil(1))
console.log(evil(2))
console.log(evil(3))