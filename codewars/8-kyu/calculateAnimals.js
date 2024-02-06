

function calculateAnimals(heads,legs){
    let c,k;

    k = (legs-2*heads)/2;
    c = heads-k;

    if(c>=0 && k>=0 && Number.isInteger(c) && Number.isInteger(k)){
        return [c,k]
    }
    else{
        return "No Solutions!"
    }
}


console.log(calculateAnimals(72,200))