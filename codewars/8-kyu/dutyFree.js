

function dutyFree(normPrice,discount,hol){
    let noOfBottle = hol/(normPrice*discount/100)
return Math.floor(noOfBottle)
}

console.log(dutyFree(12,50,1000))