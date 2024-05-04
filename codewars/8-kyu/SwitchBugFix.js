
function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': 
      result = value.a + value.b;
      break;
      case'-': 
      result = value.a - value.b;
      break;
      case'/': 
      result = value.a / value.b;
      break;
      case'*': 
      result = value.a * value.b;
      break;
      case'%': 
      result = value.a % value.b;
      break
      case'^': 
      result = Math.pow(value.a, value.b);
      break;
      default:
        result = 0
    }
    return result;
  }


  console.log(evalObject({a:3,b:3,operation:'+'}))