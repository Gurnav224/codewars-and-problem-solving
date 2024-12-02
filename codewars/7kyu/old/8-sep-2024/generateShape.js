

function generateShape(n){
    let str = "";
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            str = str + "+"
        }
        if(i<n-1){
            str += "\n"

        }
    }
    return str
}

console.log(generateShape(3))
console.log(generateShape(8))