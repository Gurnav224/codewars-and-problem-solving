

function isValid(formula){
    if(formula.includes(1) && formula.includes(2)){
        return false
    }
    else if(formula.includes(3) && formula.includes(4)){
        return false
    }
    else if(formula.includes(5) != formula.includes(6)){
        return false
    }
   else  if(formula.includes(7) || formula.includes(8)){
        return true
    }
    else{

        return false
    }

}

console.log(isValid([1,3,7]))
console.log(isValid([7,1,2,3]))
console.log(isValid( [1,3,5,7]))
console.log(isValid([1,5,6,7,3]))