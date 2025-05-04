
function evenChars(string) {
  let even= [];
  if(string.length  < 2 || string.length >100) return 'invalid string';
  
  for(let i = 0; i < string.length; i++){
    if(i  % 2 !== 0){
      even.push(string[i])
    }
  }
  return even
}


console.log(evenChars("abcdefghijklm"))