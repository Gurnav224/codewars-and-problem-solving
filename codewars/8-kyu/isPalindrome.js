

function isPalindrome(x){
let lowercase = x.toLowerCase();

return lowercase.split('').reverse().join("")===lowercase
}

console.log(isPalindrome('Bob'))
console.log(isPalindrome('abc'))