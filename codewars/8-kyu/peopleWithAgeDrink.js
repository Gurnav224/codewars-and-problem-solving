

function peopleWithAgeDrink(old){
    if(old<14){
        return 'drink toddy'
    }
    else if(old<18){
        return 'drink coke'
    }
    else if(old<21){
        return 'drink beer'
    }
    else if(old>=21){
        return 'drink whisky'
    }
}

console.log(peopleWithAgeDrink(12))