

function chromosomeCheck(sperm){
    if(sperm[1].includes('X')){
        return "Congratulations! You're going to have a daughter."
    }
    else{
        return "Congratulations! You're going to have a son.";
    }
}

console.log(chromosomeCheck('XY'))
console.log(chromosomeCheck('XX'))


// refactor 


const chromosomeCheck2 = (sperm)=>sperm==="XY"?"Congratulations! You're going to have a son.":"Congratulations! You're going to have a daughter."

console.log(chromosomeCheck2("XY"))
console.log(chromosomeCheck2("XX"))