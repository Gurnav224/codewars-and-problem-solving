


function main(){
    return [ rollDice(),
        move(),
        combat(),
        getCoins(),
        buyHealth(),
        printStatus()]
}


function rollDice(){
   return "roll Dice"
}

function move(){
    return "move"
}

function combat(){
    return "combat"
}

function getCoins(){
    return "getCoins"
}

function buyHealth(){
    return "buyHealth"
}

function printStatus(){
    return "printStatus"
}


for(let i=0; i<main().length; i++){
    console.log(main()[i])
}