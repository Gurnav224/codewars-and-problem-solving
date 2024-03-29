

function reverseWords(str){
 return str.split(" ").reverse().join(" ")
}


console.log(reverseWords("The greatest victory is that which requires no battle" ))


function reverseWords2(str){
    return str.split(" ").map(word=>word).reverse().join(" ")
}

console.log(reverseWords2("The greatest victory is that which requires no battle" ))