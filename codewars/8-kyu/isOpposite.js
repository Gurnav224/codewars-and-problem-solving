

function isOpposite(s1,s2){
   if(s1.length===0 || s2.length===0) return false;
   if(s1.length!==s2.length) return false;

   let ops = "";

   for(let i=0; i<s1.length; i++){
    let letter = s2[i];
    if(letter===letter.toLowerCase()){
        ops += letter.toUpperCase()
    }
    if(letter===letter.toUpperCase()){
        ops += letter.toLowerCase()
    }
}
return s1===ops
}


console.log(isOpposite('ab','AB'))
console.log(isOpposite('AB','ab'))
console.log(isOpposite('aBcde','AbCD'))