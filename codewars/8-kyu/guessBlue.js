
function guessBlue(blueStart,redStart,bluePulled,redPulled){

    const blueRemaining = blueStart-bluePulled;
    const redRemaining = redStart-redPulled;
    const totalRemaining = blueRemaining+redRemaining

    return blueRemaining/totalRemaining
}

console.log(guessBlue(5,5,2,3))