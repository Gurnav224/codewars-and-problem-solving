

function isDigit(s){
 s = s.trim();

 const num = parseFloat(s);

 return !isNaN(num) && isFinite(num)
}

console.log(isDigit("3"))