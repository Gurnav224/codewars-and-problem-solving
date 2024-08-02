

function toNumberArray(stringarray){
    return stringarray.map((num)=>parseFloat(num))
}

console.log(toNumberArray(["1.1","2.2","3.3"]))
console.log(toNumberArray(['1','2','3']))