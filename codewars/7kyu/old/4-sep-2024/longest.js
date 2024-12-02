


function longest(a,b){
 const string = a + b;
 const array =  string.split('');
 return array.filter((value,index , array)=> array.indexOf(value)===index).sort().join('')
}


const a = "xyaabbbccccdefww";
const b =  "xxxxyyyyabklmopq";

console.log(longest(a,b))

