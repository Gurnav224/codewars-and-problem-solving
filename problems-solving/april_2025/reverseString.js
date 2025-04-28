function reverseString(str){
  let newStr = str.replace(/[^a-zA-Z]/g,'');
  return newStr.split('').reverse().join('')
}

console.log(reverseString('hello123'));
console.log(reverseString("ultr53o?n"))
console.log(reverseString("#rs1fb+hpy(b4"))
console.log(reverseString("w#c74]z9cp.lmf"))