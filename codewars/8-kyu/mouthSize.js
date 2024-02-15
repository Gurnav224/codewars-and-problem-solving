

function mouthSize(animal){
if(animal.toLowerCase()==="alligator"){
    return "small"
}
else{
    return "wide"
}
}


function mouthSize2(animal){
    return animal.toLowerCase()==="alligator"?"small":"wide"
}


console.log(mouthSize("alligator"))
console.log(mouthSize2("touchan"))