
let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a =   v3            , //set number value to a
      b =  v1; //set number value to b
  return a - b;
}

function equal3(){
  let a =  v1, //set number value to a
      b = v5 ; //set number value to b
  return a * b;
}

function equal4(){
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
}

function equal5(){
  let a =  v6, //set number value to a
      b = v3 ; //set number value to b
  return a % b;
}


console.log(equal1())
console.log(equal2())
console.log(equal3())
console.log(equal4())
console.log(equal5())