

function cookie(x){
    if(typeof x==="string"){
return "Who ate the last cookie? It was Zach!"
    }
    else if(typeof x === "number"){
        return "Who ate the last cookie? It was Monica!"
    }
    else{
        return "Who ate the last cookie? It was the dog!"
    }
}


console.log(cookie("Ryan"));
console.log(cookie(26))
console.log(cookie(2.3))
console.log(cookie(true))