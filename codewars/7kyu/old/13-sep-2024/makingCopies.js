


function copyArray(arr){
    if(!Array.isArray(arr)){
        throw new TypeError("Expected an array")
    }

    return arr.slice()
}


let t = [1,2,3,4,5];

let tcopy = copyArray(t)

t[1] += 5;

console.log('',t)
console.log('',tcopy)