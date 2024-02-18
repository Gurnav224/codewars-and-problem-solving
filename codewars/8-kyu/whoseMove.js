

function whoseMove(lastPlayer, win){

    if(lastPlayer==="black" && win===false){
        return "white"
    }
    else if(lastPlayer==="white" && win === true){
        return "white"
    }
    else{
        return "black"
    }
}

console.log(whoseMove("black",false))
console.log(whoseMove("white",true))
console.log(whoseMove("white",false))