

function addLength(str){
 let words = str.split(" ");
let arr = [];
for(let i=0; i<words.length; i++){
    arr.push(words[i]+" "+words[i].length)
}
 return arr
}


console.log(addLength("apple ban"))
console.log(addLength("you will win"))