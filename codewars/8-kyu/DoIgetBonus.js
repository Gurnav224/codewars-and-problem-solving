

function bonusTime(salary,bonus){
    if(bonus){
        return "\u00A3"+salary*10
    }
    return "\u00A3"+salary
}


console.log(bonusTime(10000,true))