

function roundIt(n){
    let str = n.toString()
    let num = str.split('.');
    if(num[0].length < num[1].length){
        return Math.ceil(n)
    }
    else if(num[0].length > num[1].length ){
        return Math.floor(n)
    }
    else if(num[0].length === num[1].length){
        return Math.round(n)
    }
}

console.log(roundIt(3.45))
console.log(roundIt(34.5))
console.log(roundIt(34.54))