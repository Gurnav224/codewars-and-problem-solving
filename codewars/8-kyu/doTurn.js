
function doTurn(){
rollTheDice();
move();
combat();
getCoins();
buyHealth();
printStatus();
}

function rollTheDice(){
    console.log("Step 1: Roll the dice")
}

function move(){
    console.log("Step 2: Move")
}

function combat(){
    console.log("Step 3: Combat")
}

function getCoins(){
    console.log("Step 4: get coins")
}

function buyHealth(){
    console.log("Step 5: Buy more health")
}

function printStatus(){
    console.log("Step 6: Print Status")
}


doTurn()