

function startsWith123(code){
    return /^[123]/.test(code)
}


console.log(startsWith123("12345")); // true
console.log(startsWith123("23456")); // true
console.log(startsWith123("34567")); // true
console.log(startsWith123("45678")); // false
console.log(startsWith123("56789")); // false
console.log(startsWith123("abc123")); // false
