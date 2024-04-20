

function getAge(inputString){
let ageNumber = parseInt(inputString[0]);
if(typeof ageNumber === "number"){
    return ageNumber
}
}

console.log(getAge( "1 year old"))
console.log(getAge( "5 year old"))
