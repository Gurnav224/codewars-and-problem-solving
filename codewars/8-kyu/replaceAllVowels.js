

function replaceVowels(string){
  let chars = string.split("")
  for(let i=0; i<chars.length; i++){
    if (chars[i] === "a" || chars[i] === "e" || chars[i] === "i" || chars[i] === "o" || chars[i] === "u" ||
    chars[i] === "A" || chars[i] === "E" || chars[i] === "I" || chars[i] === "O" || chars[i] === "U") {
    chars[i] = "!"
   }
  }

  return chars.join("").trim()
}




console.log(replaceVowels("aeiou"))
console.log(replaceVowels("Hi!! hea"))

// refactor 
function replaceAll(str){
    return str.replace(/[aeiou]/gi,"!")
}

console.log(replaceAll("aeiou AEIOU"))