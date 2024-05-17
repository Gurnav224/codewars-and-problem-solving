

function calculator(a,b,sign){
   if(typeof a === 'number' && typeof b==='number'){
      if(sign==='+'){
        return a+b
      }
      else if(sign==='-'){
        return a-b
      }
      else if(sign==='*'){
        return a*b
      }
      else if(sign==='/'){
        return a/b
      }
    
    }

   return "unknown value"
}

console.log(calculator(1,2,'+'))
console.log(calculator(1,4,'-'))
console.log(calculator(3,4,'*'))
console.log(calculator(5,4,'/'))
console.log(calculator('h',4,'/'))