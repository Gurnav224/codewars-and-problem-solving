

function stringy(size){
    let str = "";
    for(let i=0; i<size; i++){
        if(i%2===0){
            str += 0
        }
        else{
            str += 1
        }
    }
    
    return str
}

console.log(stringy(4))

// refactor 

function stringy2(size){
    let str = "";
    for(let i=1; i<=size; i++){
        str += i%2
    }
    return str
}

console.log(stringy2(10))