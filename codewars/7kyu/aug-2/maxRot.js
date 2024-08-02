

function maxRot(number) {
   var str = number.toString();


   var arr = [str];

   for(let i=0; i<=str.length-1; i++){
    str = str.slice(0,i) + str.slice(i+1)  + str[i];
    
    arr.push(str)
    console.log(arr)
   }
   return Math.max.apply(null,arr)
}


console.log(maxRot(56789))
