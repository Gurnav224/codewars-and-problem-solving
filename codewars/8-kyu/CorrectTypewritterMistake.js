function correct(str){
    let corrections = {"0":"O","5":"S","1":"I"}
 
   for(let i=0; i<str.length; i++){
    let char = str[i];
    if(char in corrections){
     str = str.replace(char,corrections[char])
    }
   }
   return str
 }
 
 
 console.log(correct('0h'))