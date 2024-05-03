

function giveMeFive(Obj){
    let arr = []
 for(let key in Obj){
    if(key.length===5){
        arr.push(key)
    }
    
    if(Obj[key].length===5){
        arr.push(Obj[key])
    }
    
 }
 return arr;
}

console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}))
console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}))