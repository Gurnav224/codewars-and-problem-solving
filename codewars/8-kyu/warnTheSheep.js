

function warnTheSheep(queue){
  
    if(queue[queue.length-1]==="wolf"){
        return "Pls go away and stop eating my sheep"

    }

    const wolfIndex = queue.indexOf("wolf");

    const sheepPosition = queue.length- wolfIndex-1;

    return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`


}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]))
console.log(warnTheSheep(["sheep", "sheep", "wolf"]))