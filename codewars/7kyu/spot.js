

function spot(s1,s2){
if(s1.length!==s2.length){
    return []
}
let arr = [];

for(let i=0; i<s1.length; i++){
    if(s1[i]!==s2[i]){
        arr.push(i)
    }
}
return arr
}

console.log(spot("abcdefg","abcqetg"))

console.log(spot('Hello World!', 'hello world.'))

console.log(spot('FixedGrey', 'FixedGrey'))