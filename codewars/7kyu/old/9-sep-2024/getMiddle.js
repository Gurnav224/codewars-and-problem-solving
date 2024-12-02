


function getMiddle(s){
    let middleIndex = Math.floor(s.length/2);



    return s.length % 2===0 ? s.slice(middleIndex-1 , middleIndex+1)  : s[middleIndex]
}


console.log(getMiddle('test'))
console.log(getMiddle('middle'))
console.log(getMiddle('testing'))