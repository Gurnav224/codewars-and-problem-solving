


function checkAlive(health){
    if(health>0){
        return true
    }
    else{
        return false
    }
}



console.log(checkAlive(5))
console.log(checkAlive(0))

// refactor 

const checkAlive2 = (health)=>health>0;
console.log(checkAlive2(5))
console.log(checkAlive2(0))