

function replace(s) {
return s.replace(/[aeiouAEIOU]/g,'!')
}

console.log(replace("Hi!"))
console.log(replace('AEIOU!'))